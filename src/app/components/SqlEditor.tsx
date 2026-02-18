import React, { useRef, useEffect, useCallback } from 'react';
import { EditorView, keymap, lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, highlightActiveLine, placeholder as cmPlaceholder } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { sql, PostgreSQL } from '@codemirror/lang-sql';
import { autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap, acceptCompletion } from '@codemirror/autocomplete';
import { defaultKeymap, indentWithTab, history, historyKeymap } from '@codemirror/commands';
import { bracketMatching, indentOnInput, syntaxHighlighting, HighlightStyle, foldGutter, foldKeymap } from '@codemirror/language';
import { tags } from '@lezer/highlight';

// Custom SQL theme matching the design
const sqlHighlightStyle = HighlightStyle.define([
  { tag: tags.keyword, color: '#1a6bcc', fontWeight: '700' },
  { tag: tags.operatorKeyword, color: '#1a6bcc', fontWeight: '700' },
  { tag: tags.string, color: '#22863a' },
  { tag: tags.number, color: '#d73a49' },
  { tag: tags.comment, color: '#8b949e', fontStyle: 'italic' },
  { tag: tags.typeName, color: '#6f42c1' },
  { tag: tags.variableName, color: '#24292e' },
  { tag: tags.propertyName, color: '#24292e' },
  { tag: tags.punctuation, color: '#6e7781' },
  { tag: tags.paren, color: '#6e7781' },
  { tag: tags.squareBracket, color: '#6e7781' },
  { tag: tags.separator, color: '#6e7781' },
  { tag: tags.special(tags.string), color: '#032f62' },
]);

// Editor theme
const editorTheme = EditorView.theme({
  '&': {
    fontSize: '11px',
    fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", "Cascadia Code", "Consolas", monospace',
    backgroundColor: '#f8f9fb',
    borderRadius: '10px',
    border: '1px solid #e5e7eb',
    overflow: 'hidden',
  },
  '&.cm-focused': {
    outline: 'none',
    boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.3)',
    borderColor: 'rgba(59, 130, 246, 0.3)',
  },
  '.cm-content': {
    padding: '8px 4px',
    minHeight: '80px',
    caretColor: '#1a6bcc',
    lineHeight: '1.6',
  },
  '.cm-line': {
    padding: '0 4px',
  },
  '.cm-gutters': {
    backgroundColor: '#f0f1f4',
    borderRight: '1px solid #e5e7eb',
    color: '#9ca3af',
    fontSize: '9px',
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    minWidth: '32px',
  },
  '.cm-gutter.cm-lineNumbers .cm-gutterElement': {
    padding: '0 6px 0 8px',
    minWidth: '24px',
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#e8eaef',
    color: '#4b5563',
  },
  '.cm-activeLine': {
    backgroundColor: 'rgba(59, 130, 246, 0.04)',
  },
  '.cm-selectionBackground': {
    backgroundColor: 'rgba(59, 130, 246, 0.15) !important',
  },
  '&.cm-focused .cm-selectionBackground': {
    backgroundColor: 'rgba(59, 130, 246, 0.2) !important',
  },
  '.cm-cursor': {
    borderLeftColor: '#1a6bcc',
    borderLeftWidth: '2px',
  },
  '.cm-matchingBracket': {
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    outline: '1px solid rgba(59, 130, 246, 0.3)',
  },
  '.cm-tooltip': {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    overflow: 'hidden',
    fontSize: '10px',
  },
  '.cm-tooltip-autocomplete': {
    '& > ul': {
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      fontSize: '11px',
      maxHeight: '180px',
    },
    '& > ul > li': {
      padding: '4px 10px',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    '& > ul > li[aria-selected]': {
      backgroundColor: 'rgba(59, 130, 246, 0.08)',
      color: '#1a6bcc',
    },
  },
  '.cm-completionLabel': {
    fontWeight: '600',
  },
  '.cm-completionDetail': {
    color: '#9ca3af',
    fontStyle: 'normal',
    fontSize: '9px',
    marginLeft: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  '.cm-placeholder': {
    color: '#9ca3af',
    fontStyle: 'italic',
  },
  '.cm-foldGutter': {
    width: '12px',
  },
  '.cm-foldGutter .cm-gutterElement': {
    fontSize: '10px',
    color: '#9ca3af',
    padding: '0 2px',
  },
});

interface SqlEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
  maxHeight?: string;
  readOnly?: boolean;
}

export const SqlEditor: React.FC<SqlEditorProps> = ({
  value,
  onChange,
  placeholder = 'SELECT * FROM ...',
  minHeight = '80px',
  maxHeight = '200px',
  readOnly = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const isExternalUpdate = useRef(false);

  const createState = useCallback((doc: string) => {
    return EditorState.create({
      doc,
      extensions: [
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightSpecialChars(),
        history(),
        foldGutter(),
        drawSelection(),
        indentOnInput(),
        bracketMatching(),
        closeBrackets(),
        autocompletion({
          defaultKeymap: true,
          activateOnTyping: true,
          maxRenderedOptions: 12,
          icons: false,
        }),
        sql({
          dialect: PostgreSQL,
          upperCaseKeywords: true,
        }),
        syntaxHighlighting(sqlHighlightStyle),
        highlightActiveLine(),
        editorTheme,
        cmPlaceholder(placeholder),
        EditorView.updateListener.of((update) => {
          if (update.docChanged && !isExternalUpdate.current) {
            onChangeRef.current(update.state.doc.toString());
          }
        }),
        keymap.of([
          ...closeBracketsKeymap,
          ...defaultKeymap,
          ...historyKeymap,
          ...foldKeymap,
          ...completionKeymap,
          indentWithTab,
          { key: 'Tab', run: acceptCompletion },
        ]),
        EditorView.editable.of(!readOnly),
        EditorState.readOnly.of(readOnly),
        EditorView.contentAttributes.of({
          'aria-label': 'SQL Query Editor',
          role: 'textbox',
        }),
      ],
    });
  }, [placeholder, readOnly]);

  // Initialize editor
  useEffect(() => {
    if (!containerRef.current) return;

    const view = new EditorView({
      state: createState(value),
      parent: containerRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, []); // Only initialize once

  // Sync external value changes
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    
    const currentValue = view.state.doc.toString();
    if (currentValue !== value) {
      isExternalUpdate.current = true;
      view.dispatch({
        changes: {
          from: 0,
          to: currentValue.length,
          insert: value,
        },
      });
      isExternalUpdate.current = false;
    }
  }, [value]);

  return (
    <div
      ref={containerRef}
      className="sql-editor-container"
      style={{
        minHeight,
        maxHeight,
        overflow: 'auto',
      }}
    />
  );
};

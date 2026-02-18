import { useEffect, useRef, useCallback } from 'react';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

interface UseFocusTrapOptions {
  isOpen: boolean;
  onClose: () => void;
  /** Restore focus to previously active element on close (default: true) */
  restoreFocus?: boolean;
}

/**
 * Custom hook for WCAG 2.2 AA-compliant focus trapping.
 * - Traps Tab / Shift+Tab within the container
 * - Closes on Escape key press
 * - Auto-focuses first focusable element on open
 * - Restores focus to trigger element on close
 */
export function useFocusTrap({ isOpen, onClose, restoreFocus = true }: UseFocusTrapOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveRef = useRef<HTMLElement | null>(null);

  // Store the previously focused element when opening
  useEffect(() => {
    if (isOpen) {
      previousActiveRef.current = document.activeElement as HTMLElement;
    }
  }, [isOpen]);

  // Focus the first focusable element inside the container
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const timer = setTimeout(() => {
      if (!containerRef.current) return;
      const firstFocusable = containerRef.current.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
      if (firstFocusable) {
        firstFocusable.focus();
      } else {
        // If no focusable element, focus the container itself
        containerRef.current.focus();
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Restore focus on close
  useEffect(() => {
    if (!isOpen && restoreFocus && previousActiveRef.current) {
      const el = previousActiveRef.current;
      // Small delay to let exit animations complete
      const timer = setTimeout(() => {
        if (el && typeof el.focus === 'function') {
          el.focus();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, restoreFocus]);

  // Keyboard handler: Escape to close + Tab trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || !containerRef.current) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift+Tab: if on first element, wrap to last
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          // Tab: if on last element, wrap to first
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    },
    [isOpen, onClose]
  );

  // Attach/detach keydown listener
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown, true);
      return () => document.removeEventListener('keydown', handleKeyDown, true);
    }
  }, [isOpen, handleKeyDown]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  return { containerRef };
}

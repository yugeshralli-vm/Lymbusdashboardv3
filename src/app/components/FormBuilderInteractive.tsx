import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { 
  Star, 
  Activity, 
  Layers, 
  CircleDot, 
  CheckSquare, 
  Type, 
  AlignLeft, 
  GripVertical, 
  Trash2, 
  Copy, 
  Image as ImageIcon,
  Paperclip,
  Upload,
  Calendar,
  Clock,
  ChevronDown,
  Layout,
  Settings,
  Eye,
  Plus,
  X,
  CheckCircle2,
  MousePointer2,
  LayoutGrid,
  Sparkles,
  Info,
  Smartphone,
  Tablet,
  Monitor,
  Share2,
  Link as LinkIcon,
  QrCode,
  Mail,
  Globe,
  Search,
  Filter,
  Database,
  FileText,
  FilterX
} from 'lucide-react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { cn } from '@/app/components/ui/utils';
import { toast } from 'sonner';

// --- Types ---

interface FormElement {
  id: string;
  type: string;
  label: string;
  icon: any;
  category: string;
}

interface CanvasElement extends FormElement {
  order: number;
  questionText: string;
  required: boolean;
  properties?: {
    range?: number;
    placeholder?: string;
    weightage?: number;
    [key: string]: any;
  };
}

const ELEMENT_TYPE = 'FORM_ELEMENT';

// --- Components ---

const DraggableSidebarItem = ({ type, label, icon: Icon, category }: FormElement) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ELEMENT_TYPE,
    item: { type, label, icon: Icon, category },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag as any}
      className={cn(
        "flex items-center gap-2 px-3 py-2.5 rounded-xl border border-brand-border bg-white cursor-grab active:cursor-grabbing transition-all hover:border-brand-blue hover:shadow-sm group",
        isDragging && "opacity-40 grayscale"
      )}
    >
      <div className="w-8 h-8 rounded-lg bg-brand-bg flex items-center justify-center text-brand-gray group-hover:text-brand-blue transition-colors shrink-0">
        <Icon size={16} />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray group-hover:text-brand-dark leading-none">
        {label}
      </span>
    </div>
  );
};

const CanvasItem = ({ 
  element, 
  isSelected,
  onSelect,
  onDelete, 
  onDuplicate,
  onUpdateText
}: { 
  element: CanvasElement; 
  isSelected: boolean;
  onSelect: () => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onUpdateText: (id: string, text: string) => void;
}) => {
  return (
    <Motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      className={cn(
        "group bg-white rounded-3xl border transition-all p-6 shadow-sm relative cursor-pointer",
        isSelected 
          ? "border-brand-blue ring-2 ring-brand-blue/5 shadow-xl scale-[1.01] z-10" 
          : "border-brand-border hover:border-brand-blue/30 hover:shadow-md"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 flex flex-col gap-1 text-brand-gray/20 group-hover:text-brand-gray/40 transition-colors">
          <GripVertical size={20} />
        </div>
        
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                isSelected ? "bg-brand-blue text-white" : "bg-brand-bg text-brand-blue"
              )}>
                {element.icon && typeof element.icon !== 'string' ? (
                  <element.icon size={16} />
                ) : (
                  <Sparkles size={16} />
                )}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray/60">{element.label}</span>
              {element.properties?.weightage !== undefined && (
                <span className="px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue text-[8px] font-bold uppercase tracking-widest border border-brand-blue/10">
                  W: {element.properties.weightage}
                </span>
              )}
              {element.required && (
                <span className="text-red-500 text-xs font-bold">*</span>
              )}
            </div>
            
            <div className={cn(
              "flex items-center gap-2 transition-opacity",
              isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}>
              <button 
                onClick={(e) => { e.stopPropagation(); onDuplicate(element.id); }}
                className="p-2 text-brand-gray hover:text-brand-blue transition-colors"
                title="Duplicate"
              >
                <Copy size={16} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onDelete(element.id); }}
                className="p-2 text-brand-gray hover:text-red-500 transition-colors"
                title="Delete"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            <input 
              type="text" 
              value={element.questionText}
              onChange={(e) => onUpdateText(element.id, e.target.value)}
              placeholder={`Enter ${element.label.toLowerCase()} question...`}
              className="w-full text-lg font-bold text-brand-dark bg-transparent border-b border-transparent focus:border-brand-blue/20 outline-none pb-1 transition-all"
            />
            
            <div className="space-y-2">
              {['radio', 'checkbox', 'dropdown'].includes(element.type) && element.properties?.options ? (
                <div className="grid grid-cols-1 gap-2">
                  {element.properties.options.map((opt: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-2 bg-brand-bg/30 border border-brand-border/50 rounded-xl">
                      <div className={cn(
                        "w-4 h-4 border border-brand-border",
                        element.type === 'radio' ? "rounded-full" : "rounded"
                      )} />
                      <span className="text-xs font-medium text-brand-gray/60">{opt}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-12 w-full bg-brand-bg/50 border border-dashed border-brand-border rounded-xl flex items-center px-4">
                  <span className="text-[10px] font-bold text-brand-gray/30 uppercase tracking-widest">
                    {element.type === 'text' && (element.properties?.placeholder || 'Short answer text...')}
                    {element.type === 'paragraph' && (element.properties?.placeholder || 'Long answer text...')}
                    {element.type === 'rating' && `Rating scale (1-${element.properties?.range || 5})...`}
                    {element.type === 'date' && 'Select date...'}
                    {element.type === 'upload' && 'Upload file...'}
                    {!['radio', 'checkbox', 'dropdown', 'text', 'paragraph', 'rating', 'date', 'upload'].includes(element.type) && 'Input field...'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

const FormBuilderInteractiveContent = () => {
  const [canvasElements, setCanvasElements] = useState<CanvasElement[]>([
    {
      id: 'default-text',
      type: 'text',
      label: 'Short Text',
      icon: Type,
      category: 'TEXT ELEMENTS',
      order: 0,
      questionText: 'How would you describe your overall experience?',
      required: true,
      properties: { placeholder: 'Type your answer here...', weightage: 1 }
    },
    {
      id: 'default-rating',
      type: 'rating',
      label: 'Rating',
      icon: Star,
      category: 'FEEDBACK ELEMENTS',
      order: 1,
      questionText: 'Please rate our facility cleanliness',
      required: true,
      properties: { range: 5, weightage: 1 }
    },
    {
      id: 'default-nps',
      type: 'nps',
      label: 'NPS',
      icon: Activity,
      category: 'FEEDBACK ELEMENTS',
      order: 2,
      questionText: 'How likely are you to recommend us to a friend or colleague?',
      required: true,
      properties: { weightage: 1 }
    }
  ]);
  const [activeTab, setActiveTab] = useState<'details' | 'configure' | 'preview'>('details');
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [draftElement, setDraftElement] = useState<CanvasElement | null>(null);
  const [previewDevice, setPreviewDevice] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [formName, setFormName] = useState('Untitled form');
  const [libraryTab, setLibraryTab] = useState<'files' | 'questions'>('questions');
  const [librarySearch, setLibrarySearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [categories, setCategories] = useState(['Clinical', 'Lifestyle', 'Operational', 'Data']);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [showCategoryInput, setShowCategoryInput] = useState(false);

  const handleAddCategory = () => {
    if (newCategoryName.trim() && !categories.includes(newCategoryName.trim())) {
      setCategories([...categories, newCategoryName.trim()]);
      if (draftElement) {
        setDraftElement({ ...draftElement, category: newCategoryName.trim().toUpperCase() });
      }
      setNewCategoryName('');
      setShowCategoryInput(false);
      toast.success('Category added');
    }
  };

  const mockFiles = [
    { name: 'Patient_Consent_v2.pdf', type: 'PDF', size: '1.2 MB', date: 'Feb 10, 2026' },
    { name: 'X-Ray_Reference_Guide.png', type: 'IMAGE', size: '4.5 MB', date: 'Jan 15, 2026' },
    { name: 'Privacy_Policy_2025.docx', type: 'DOC', size: '850 KB', date: 'Dec 20, 2025' },
    { name: 'Medical_History_Template.pdf', type: 'PDF', size: '2.1 MB', date: 'Feb 05, 2026' },
    { name: 'Logo_HighRes.png', type: 'IMAGE', size: '2.2 MB', date: 'Feb 11, 2026' },
  ];

  const mockQuestions = [
    { text: 'Have you experienced any chest pain in the last 24 hours?', type: 'Yes/No', category: 'Clinical' },
    { text: 'How many hours of sleep do you get on average?', type: 'Number', category: 'Lifestyle' },
    { text: 'Please upload your latest blood work results.', type: 'File Upload', category: 'Data' },
    { text: 'Are you currently taking any prescription medications?', type: 'Yes/No', category: 'Clinical' },
    { text: 'Rate your satisfaction with the check-in process.', type: 'Rating', category: 'Operational' },
  ];

  const filteredFiles = useMemo(() => 
    mockFiles.filter(f => 
      f.name.toLowerCase().includes(librarySearch.toLowerCase()) && 
      (!activeFilter || f.type === activeFilter)
    ),
  [librarySearch, activeFilter]);

  const filteredQuestions = useMemo(() => 
    mockQuestions.filter(q => 
      q.text.toLowerCase().includes(librarySearch.toLowerCase()) && 
      (!activeFilter || q.category === activeFilter)
    ),
  [librarySearch, activeFilter]);

  const selectedElement = useMemo(() => 
    canvasElements.find(el => el.id === selectedElementId),
  [canvasElements, selectedElementId]);

  useEffect(() => {
    if (selectedElement) {
      // Deep clone properties but preserve the icon component reference
      setDraftElement({
        ...selectedElement,
        properties: selectedElement.properties ? JSON.parse(JSON.stringify(selectedElement.properties)) : {}
      });
    } else {
      setDraftElement(null);
    }
  }, [selectedElementId, selectedElement]);

  const handleSaveProperties = () => {
    if (draftElement) {
      updateElement(draftElement.id, { ...draftElement });
      setSelectedElementId(null);
      toast.success('Properties updated');
    }
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ELEMENT_TYPE,
    drop: (item: FormElement) => {
      addElement(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const renderPreview = () => (
    <div className="flex-1 w-full flex flex-col items-center p-4 lg:p-8 overflow-hidden h-full">
      {/* Device Switcher */}
      <div className="flex items-center gap-1 bg-white border border-brand-border p-1 rounded-xl mb-6 shadow-sm shrink-0">
        {[
          { id: 'mobile', icon: Smartphone, label: 'Mobile' },
          { id: 'tablet', icon: Tablet, label: 'Tablet' },
          { id: 'desktop', icon: Monitor, label: 'Desktop' },
        ].map((device) => (
          <button
            key={device.id}
            onClick={() => setPreviewDevice(device.id as any)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg text-[10px] font-bold transition-all uppercase tracking-widest",
              previewDevice === device.id
                ? "bg-brand-blue text-white shadow-md"
                : "text-brand-gray hover:bg-brand-bg hover:text-brand-dark"
            )}
            title={device.label}
          >
            <device.icon size={16} />
            <span className="hidden sm:inline">{device.label}</span>
          </button>
        ))}
      </div>

      {/* Device Frame */}
      <div className={cn(
        "relative flex-1 bg-white shadow-2xl border border-brand-border/20 overflow-hidden flex flex-col transition-all duration-500 ease-in-out origin-top",
        previewDevice === 'mobile' ? "w-full max-w-[375px] rounded-[40px] mb-8" : 
        previewDevice === 'tablet' ? "w-full max-w-[768px] rounded-[24px] mb-8" : 
        "w-full h-full rounded-xl border-x"
      )}>
        {/* Notch (Mobile Only) */}
        {previewDevice === 'mobile' && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-dark/5 rounded-b-xl z-20 flex items-center justify-center backdrop-blur-md">
            <div className="w-8 h-1 bg-brand-dark/20 rounded-full" />
          </div>
        )}

        {/* Screen Content */}
        <div className={cn(
          "flex-1 overflow-y-auto no-scrollbar bg-white",
          previewDevice === 'mobile' ? "pt-12 pb-10 px-6" : "p-8 lg:p-12"
        )}>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-3 text-center sm:text-left">
              <h2 className={cn(
                "font-bold text-brand-dark leading-tight",
                previewDevice === 'mobile' ? "text-2xl" : "text-3xl lg:text-4xl"
              )}>{formName}</h2>
              <div className={cn(
                "h-1.5 bg-brand-blue rounded-full",
                previewDevice === 'mobile' ? "w-12 mx-auto sm:mx-0" : "w-16"
              )} />
            </div>

            <div className="space-y-8 lg:space-y-10">
              {canvasElements.map((el, i) => (
                <div 
                  key={el.id} 
                  className={cn(
                    "group relative p-4 rounded-2xl transition-all border border-transparent hover:bg-brand-bg/30 hover:border-brand-blue/10 cursor-pointer animate-in fade-in slide-in-from-bottom-4",
                    selectedElementId === el.id && "bg-brand-blue/5 border-brand-blue/20 ring-1 ring-brand-blue/20"
                  )}
                  style={{ animationDelay: `${i * 100}ms` }}
                  onClick={() => {
                    setSelectedElementId(el.id);
                    // Optional: Switch to configure tab if desired, or keep in preview for context
                    // setActiveTab('configure'); 
                  }}
                >
                  {/* Edit Hint */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-[9px] font-bold text-brand-blue uppercase bg-white px-2 py-1 rounded-full shadow-sm border border-brand-blue/10">Edit</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-brand-bg flex items-center justify-center text-[10px] font-bold text-brand-blue shrink-0 mt-0.5">{i + 1}</span>
                      <p className={cn(
                        "font-bold text-brand-dark leading-snug",
                        previewDevice === 'mobile' ? "text-base" : "text-lg"
                      )}>
                        {el.questionText || el.label}
                        {el.required && <span className="text-red-500 ml-1">*</span>}
                      </p>
                    </div>

                    <div className="pl-9">
                      {el.type === 'nps' && (
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-2">
                            {Array.from({ length: 11 }).map((_, n) => (
                              <button 
                                key={n} 
                                className={cn(
                                  "flex items-center justify-center rounded-xl border border-brand-border text-xs font-bold hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all active:scale-95",
                                  previewDevice === 'mobile' ? "w-9 h-9 flex-1 min-w-[36px]" : "w-10 h-10"
                                )}
                                aria-label={`Rate ${n}`}
                              >
                                {n}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-brand-gray/60">
                            <span>Not Likely</span>
                            <span>Very Likely</span>
                          </div>
                        </div>
                      )}

                      {(el.type === 'rating' || el.type === 'emoji') && (
                        <div className="flex items-center gap-2 flex-wrap">
                          {Array.from({ length: el.properties?.range || 5 }).map((_, n) => (
                            <button 
                              key={n} 
                              className={cn(
                                "rounded-2xl bg-brand-bg/50 border border-brand-border flex items-center justify-center text-brand-gray/30 hover:bg-brand-blue/5 hover:border-brand-blue/20 hover:text-brand-blue transition-all active:scale-95",
                                previewDevice === 'mobile' ? "w-12 h-12" : "w-14 h-14"
                              )}
                              aria-label={`Rate ${n + 1} stars`}
                            >
                              <Star size={previewDevice === 'mobile' ? 20 : 24} />
                            </button>
                          ))}
                        </div>
                      )}

                      {['text', 'paragraph', 'email', 'number'].includes(el.type) && (
                        <div className="relative">
                          {el.type === 'paragraph' ? (
                            <textarea 
                              placeholder={el.properties?.placeholder || "Detailed feedback..."}
                              className="w-full h-32 bg-white border-2 border-brand-bg rounded-2xl p-4 text-sm font-medium focus:outline-none focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/5 transition-all placeholder:text-brand-gray/30 resize-none shadow-sm"
                              readOnly
                            />
                          ) : (
                            <input 
                              type={el.type === 'email' ? 'email' : el.type === 'number' ? 'number' : 'text'}
                              placeholder={el.properties?.placeholder || "Short answer..."}
                              className="w-full bg-white border-2 border-brand-bg rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/5 transition-all placeholder:text-brand-gray/30 shadow-sm"
                              readOnly
                            />
                          )}
                        </div>
                      )}

                      {['radio', 'checkbox', 'yesno', 'dropdown'].includes(el.type) && (
                        <div className={cn(
                          "grid gap-3",
                          (previewDevice === 'desktop' && ['radio', 'checkbox'].includes(el.type)) ? "grid-cols-2" : "grid-cols-1"
                        )}>
                          {el.type === 'dropdown' ? (
                             <div className="w-full p-4 rounded-2xl bg-white border-2 border-brand-bg flex items-center justify-between text-brand-gray/50 shadow-sm">
                                <span className="text-sm font-bold">Select an option...</span>
                                <ChevronDown size={16} />
                             </div>
                          ) : (
                            (el.type === 'yesno' ? ['Yes', 'No'] : (el.properties?.options || ['Option 1', 'Option 2'])).map((opt: string, idx: number) => (
                              <button 
                                key={idx} 
                                className="w-full p-4 rounded-2xl bg-white border-2 border-brand-bg flex items-center justify-between group hover:border-brand-blue/30 hover:shadow-md transition-all text-left shadow-sm active:scale-[0.99]"
                              >
                                <span className="text-sm font-bold text-brand-dark">{opt}</span>
                                <div className={cn(
                                  "w-5 h-5 border-2 border-brand-border group-hover:border-brand-blue transition-colors",
                                  (el.type === 'radio' || el.type === 'yesno') ? "rounded-full" : "rounded-md"
                                )} />
                              </button>
                            ))
                          )}
                        </div>
                      )}
                      
                      {['date', 'time', 'upload', 'attachment', 'image'].includes(el.type) && (
                         <button className="h-14 w-full bg-brand-bg/30 border-2 border-dashed border-brand-border rounded-xl flex items-center justify-center gap-3 hover:bg-brand-blue/5 hover:border-brand-blue/30 transition-all group">
                           <div className="w-8 h-8 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-gray group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-colors">
                              {el.type.includes('date') || el.type.includes('time') ? <Calendar size={14} /> : <Upload size={14} />}
                           </div>
                           <span className="text-xs font-bold text-brand-gray group-hover:text-brand-blue uppercase tracking-wider transition-colors">
                             {el.type === 'date' && 'Select date'}
                             {el.type === 'time' && 'Select time'}
                             {['upload', 'attachment', 'image'].includes(el.type) && 'Click to upload file'}
                           </span>
                         </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 pb-12">
              <button className="w-full py-4 bg-brand-blue text-white rounded-[20px] font-bold text-sm uppercase tracking-widest shadow-xl shadow-brand-blue/20 hover:bg-brand-blue/90 hover:shadow-brand-blue/30 transition-all active:scale-[0.99]">
                Submit Feedback
              </button>

              <div className="flex flex-col items-center gap-2 mt-8 opacity-40">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-blue rounded-lg flex items-center justify-center text-white">
                    <span className="text-[10px] font-bold">L</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Powered by Lymbus AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Bar (Mobile Only) */}
        {previewDevice === 'mobile' && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-brand-dark/10 rounded-full" />
        )}
      </div>
    </div>
  );

  const addElement = useCallback((item: FormElement) => {
    const getInitialProperties = (type: string) => {
      const baseProperties = { weightage: 1 };
      switch (type) {
        case 'rating': return { ...baseProperties, range: 5 };
        case 'radio':
        case 'checkbox':
        case 'dropdown':
          return { ...baseProperties, options: ['Option 1', 'Option 2', 'Option 3'] };
        case 'text':
        case 'paragraph':
        case 'email':
        case 'number':
          return { ...baseProperties, placeholder: 'Type your answer here...' };
        default: return baseProperties;
      }
    };

    const newElement: CanvasElement = {
      ...item,
      id: Math.random().toString(36).substr(2, 9),
      order: canvasElements.length,
      questionText: '',
      required: false,
      properties: getInitialProperties(item.type)
    };
    setCanvasElements((prev) => [...prev, newElement]);
    setSelectedElementId(newElement.id);
    toast.success(`${item.label} added to form`);
  }, [canvasElements]);

  const deleteElement = (id: string) => {
    setCanvasElements(prev => prev.filter(el => el.id !== id));
    if (selectedElementId === id) setSelectedElementId(null);
  };

  const duplicateElement = (id: string) => {
    const el = canvasElements.find(e => e.id === id);
    if (el) {
      const newEl = { ...el, id: Math.random().toString(36).substr(2, 9), order: canvasElements.length };
      setCanvasElements(prev => [...prev, newEl]);
      setSelectedElementId(newEl.id);
    }
  };

  const updateElement = (id: string, updates: Partial<CanvasElement>) => {
    setCanvasElements(prev => prev.map(el => el.id === id ? { ...el, ...updates } : el));
  };

  const elements = [
    { category: 'TEXT ELEMENTS', items: [
      { type: 'text', label: 'Short Text', icon: Type },
      { type: 'paragraph', label: 'Paragraph', icon: AlignLeft },
      { type: 'number', label: 'Number', icon: Layers },
      { type: 'email', label: 'Email', icon: Type },
    ]},
    { category: 'FEEDBACK ELEMENTS', items: [
      { type: 'rating', label: 'Rating', icon: Star },
      { type: 'nps', label: 'NPS', icon: Activity },
      { type: 'emoji', label: 'Emoji', icon: Star },
    ]},
    { category: 'MULTI ELEMENTS', items: [
      { type: 'dropdown', label: 'Dropdown', icon: ChevronDown },
      { type: 'checkbox', label: 'Checkbox', icon: CheckSquare },
      { type: 'yesno', label: 'Yes/No', icon: CheckCircle2 },
      { type: 'radio', label: 'Radio', icon: CircleDot },
    ]},
      { category: 'MEDIA ELEMENTS', items: [
        { type: 'attachment', label: 'Attachment', icon: Paperclip },
        { type: 'image', label: 'Image', icon: ImageIcon },
        { type: 'upload', label: 'Upload', icon: Upload },
      ]},
    { category: 'DATE ELEMENTS', items: [
      { type: 'date', label: 'Date', icon: Calendar },
      { type: 'time', label: 'Time', icon: Clock },
    ]},
  ];

  return (
    <div className="absolute inset-0 flex overflow-hidden">
      {/* Left Sidebar - Elements */}
      <aside className="w-72 bg-white border-r border-brand-border flex flex-col shrink-0 overflow-hidden h-full">
        <div className="p-6 border-b border-brand-border bg-white/95 backdrop-blur-sm z-10 shrink-0">
          <h2 className="text-sm font-bold text-brand-dark uppercase tracking-widest flex items-center gap-2">
            <LayoutGrid size={16} className="text-brand-blue" />
            Elements
          </h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 pb-40 space-y-8">
          {elements.map((group) => (
            <div key={group.category} className="space-y-3">
              <h3 className="text-[9px] font-bold text-brand-gray/60 uppercase tracking-[0.2em]">{group.category}</h3>
              <div className="grid grid-cols-2 gap-2">
                {group.items.map((item) => (
                  <div 
                    key={item.label} 
                    className={cn(
                      "w-full",
                      item.label.length > 6 ? "col-span-2" : "col-span-1"
                    )}
                  >
                    <DraggableSidebarItem 
                      type={item.type} 
                      label={item.label} 
                      icon={item.icon} 
                      category={group.category} 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Canvas Area */}
      <main 
        className="flex-1 overflow-y-auto p-4 lg:p-8 flex flex-col items-center no-scrollbar bg-brand-bg/30"
        onClick={() => setSelectedElementId(null)}
      >
        <div className="w-full max-w-3xl flex flex-col items-center">
          {/* Tabs */}
          <div className="bg-white p-1 rounded-[20px] border border-brand-border flex gap-1 mb-10 shadow-sm shrink-0" onClick={e => e.stopPropagation()}>
            {[
              { id: 'details', label: 'Details', icon: Layout },
              { id: 'preview', label: 'Preview & Share', icon: Eye },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-[16px] text-[10px] font-bold transition-all uppercase tracking-widest",
                  activeTab === tab.id 
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20" 
                    : "text-brand-gray hover:bg-brand-bg hover:text-brand-dark"
                )}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'preview' ? (
            renderPreview()
          ) : (
            <div className="w-full space-y-6" onClick={e => e.stopPropagation()}>
              {/* Form Header Card */}
              <div className="bg-white rounded-[32px] border border-brand-border p-8 shadow-sm">
                 <input 
                   type="text" 
                   value={formName}
                   onChange={(e) => setFormName(e.target.value)}
                   placeholder="Untitled form"
                   className="w-full text-2xl font-bold text-brand-dark bg-transparent border-none outline-none placeholder:text-brand-gray/20"
                 />
                 <div className="w-12 h-1 bg-brand-blue rounded-full mt-4" />
              </div>

              {/* Drop Zone / Canvas Elements */}
              <div 
                ref={drop as any}
                className={cn(
                  "min-h-[400px] rounded-[40px] border-2 border-dashed transition-all flex flex-col gap-4 pb-20 px-1 pt-1",
                  isOver ? "border-brand-blue bg-brand-blue/5 scale-[1.01]" : "border-brand-border/40 bg-transparent",
                  canvasElements.length === 0 && "items-center justify-center"
                )}
              >
                {canvasElements.length === 0 ? (
                  <div className="flex flex-col items-center text-center p-12">
                    <div className="w-20 h-20 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-gray/20 mb-6 shadow-sm">
                      <MousePointer2 size={40} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark mb-2 uppercase tracking-tight">Drop elements here</h3>
                    <p className="text-xs text-brand-gray font-medium max-w-xs leading-relaxed">
                      Drag and drop any element from the left panel to start building your interactive medical form.
                    </p>
                  </div>
                ) : (
                  canvasElements.map((el) => (
                    <CanvasItem 
                      key={el.id} 
                      element={el} 
                      isSelected={selectedElementId === el.id}
                      onSelect={() => setSelectedElementId(el.id)}
                      onDelete={deleteElement} 
                      onDuplicate={duplicateElement}
                      onUpdateText={(id, text) => updateElement(id, { questionText: text })}
                    />
                  ))
                )}
                
                {canvasElements.length > 0 && isOver && (
                  <div className="h-24 rounded-3xl border-2 border-dashed border-brand-blue bg-brand-blue/5 animate-pulse mx-4" />
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Right Sidebar - Properties, Share or Library */}
      <AnimatePresence mode="wait">
        <Motion.aside 
          key={selectedElementId ? 'properties' : activeTab === 'preview' ? 'share' : 'library'}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 320, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="bg-white border-l border-brand-border flex flex-col shrink-0 hidden xl:flex overflow-hidden h-full"
        >
          {selectedElementId ? (
            /* Properties Panel */
            <>
              <div className="p-6 border-b border-brand-border shrink-0 bg-white/50">
                <h2 className="text-sm font-bold text-brand-dark uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={16} className="text-brand-blue" />
                  Properties
                </h2>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
                <AnimatePresence mode="wait">
                  {draftElement ? (
                    <Motion.div
                      key={draftElement.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-8 pb-10"
                    >
                      {/* Basic Info */}
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block opacity-60">Question Label</label>
                          <textarea 
                            value={draftElement.questionText}
                            onChange={(e) => setDraftElement(prev => prev ? ({ ...prev, questionText: e.target.value }) : null)}
                            placeholder={`Enter ${draftElement.label.toLowerCase()}...`}
                            className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm font-bold text-brand-dark focus:bg-white focus:ring-1 focus:ring-brand-blue/20 transition-all outline-none resize-none h-24"
                          />
                        </div>

                        {['text', 'paragraph', 'email', 'number'].includes(draftElement.type) && (
                          <div className="space-y-3">
                            <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block opacity-60">Placeholder Text</label>
                            <input 
                              type="text"
                              value={draftElement.properties?.placeholder || ''}
                              onChange={(e) => setDraftElement(prev => prev ? ({ 
                                ...prev, 
                                properties: { ...prev.properties, placeholder: e.target.value } 
                              }) : null)}
                              placeholder="e.g. Type your response..."
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm font-bold text-brand-dark focus:bg-white focus:ring-1 focus:ring-brand-blue/20 transition-all outline-none"
                            />
                          </div>
                        )}
                      </div>

                      {/* Validation & Weightage */}
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block opacity-60">Scoring & Validation</label>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-4 bg-brand-bg/50 rounded-xl border border-brand-border">
                            <span className="text-xs font-bold text-brand-dark">Mark as Required</span>
                            <button 
                              onClick={() => setDraftElement(prev => prev ? ({ ...prev, required: !prev.required }) : null)}
                              className={cn(
                                "w-9 h-5 rounded-full relative transition-all duration-300",
                                draftElement.required ? "bg-brand-blue shadow-sm shadow-brand-blue/30" : "bg-brand-border border border-brand-border"
                              )}
                            >
                              <div className={cn(
                                "absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 shadow-sm",
                                draftElement.required ? "right-1" : "left-1"
                              )} />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 bg-brand-bg/50 rounded-xl border border-brand-border">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-xs font-bold text-brand-dark">Question Weightage</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white rounded-lg border border-brand-border p-1">
                              <input 
                                type="number" 
                                min="0"
                                max="100"
                                value={draftElement.properties?.weightage || 1}
                                onChange={(e) => {
                                  const weightage = parseInt(e.target.value) || 0;
                                  setDraftElement(prev => prev ? ({ 
                                    ...prev, 
                                    properties: { ...prev.properties, weightage } 
                                  }) : null);
                                }}
                                className="w-12 text-center text-xs font-bold text-brand-blue outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Specific Configs */}
                      {draftElement.type === 'rating' && (
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block opacity-60">Rating Range</label>
                          <div className="grid grid-cols-5 gap-2">
                            {[3, 4, 5, 7, 10].map(n => (
                              <button 
                                key={n}
                                onClick={() => setDraftElement(prev => prev ? ({ 
                                  ...prev, 
                                  properties: { ...prev.properties, range: n } 
                                }) : null)}
                                className={cn(
                                  "h-10 rounded-lg border text-[10px] font-bold transition-all",
                                  draftElement.properties?.range === n 
                                    ? "bg-brand-blue text-white border-brand-blue" 
                                    : "bg-white text-brand-gray border-brand-border hover:border-brand-blue/30"
                                )}
                              >
                                {n}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {['radio', 'checkbox', 'dropdown'].includes(draftElement.type) && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block opacity-60">Options</label>
                            <button 
                              onClick={() => {
                                const options = [...(draftElement.properties?.options || [])];
                                options.push(`Option ${options.length + 1}`);
                                setDraftElement(prev => prev ? ({ 
                                  ...prev, 
                                  properties: { ...prev.properties, options } 
                                }) : null);
                              }}
                              className="text-[10px] font-bold text-brand-blue uppercase tracking-widest hover:underline"
                            >
                              + Add Option
                            </button>
                          </div>
                          <div className="space-y-2">
                            {(draftElement.properties?.options || []).map((opt: string, idx: number) => (
                              <div key={idx} className="flex items-center gap-2">
                                <input 
                                  type="text"
                                  value={opt}
                                  onChange={(e) => {
                                    const options = [...(draftElement.properties?.options || [])];
                                    options[idx] = e.target.value;
                                    setDraftElement(prev => prev ? ({ 
                                      ...prev, 
                                      properties: { ...prev.properties, options } 
                                    }) : null);
                                  }}
                                  className="flex-1 bg-brand-bg/50 border border-brand-border rounded-lg px-3 py-2 text-xs font-bold text-brand-dark focus:bg-white transition-all outline-none"
                                />
                                <button 
                                  onClick={() => {
                                    const options = (draftElement.properties?.options || []).filter((_: any, i: number) => i !== idx);
                                    setDraftElement(prev => prev ? ({ 
                                      ...prev, 
                                      properties: { ...prev.properties, options } 
                                    }) : null);
                                  }}
                                  className="p-2 text-brand-gray hover:text-red-500"
                                >
                                  <X size={14} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Global & Library Section */}
                      <div className="pt-8 border-t border-brand-border space-y-6">
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block opacity-60">Library & Classification</label>
                          
                          <div className="p-4 bg-brand-bg/50 rounded-xl border border-brand-border space-y-3">
                            <span className="text-xs font-bold text-brand-dark block">Question Category</span>
                            <div className="relative">
                              <select 
                                value={draftElement.category}
                                onChange={(e) => {
                                  if (e.target.value === 'ADD_NEW') {
                                    setShowCategoryInput(true);
                                  } else {
                                    setDraftElement(prev => prev ? ({ ...prev, category: e.target.value }) : null);
                                    setShowCategoryInput(false);
                                  }
                                }}
                                className="w-full bg-white border border-brand-border rounded-xl px-4 py-2.5 text-xs font-bold text-brand-dark focus:ring-1 focus:ring-brand-blue/20 outline-none appearance-none transition-all cursor-pointer"
                              >
                                {categories.map(cat => (
                                  <option key={cat} value={cat.toUpperCase()}>{cat}</option>
                                ))}
                                <option value="ADD_NEW" className="text-brand-blue font-bold">+ Add new category...</option>
                              </select>
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gray">
                                <ChevronDown size={14} />
                              </div>
                            </div>

                            <AnimatePresence>
                              {showCategoryInput && (
                                <Motion.div 
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden space-y-2"
                                >
                                  <input 
                                    autoFocus
                                    type="text"
                                    placeholder="Enter category name..."
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
                                    className="w-full bg-white border border-brand-blue/30 rounded-lg px-3 py-2 text-xs font-bold text-brand-dark outline-none"
                                  />
                                  <div className="flex gap-2">
                                    <button 
                                      onClick={handleAddCategory}
                                      className="flex-1 py-2 bg-brand-blue text-white rounded-lg text-[9px] font-bold uppercase tracking-widest"
                                    >
                                      Create
                                    </button>
                                    <button 
                                      onClick={() => {
                                        setShowCategoryInput(false);
                                        setNewCategoryName('');
                                      }}
                                      className="flex-1 py-2 bg-brand-bg text-brand-gray rounded-lg text-[9px] font-bold uppercase tracking-widest"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </Motion.div>
                              )}
                            </AnimatePresence>

                            <div className="pt-2 border-t border-brand-border/50">
                              <button 
                                onClick={() => {
                                  toast.success('Added to Question Bank');
                                }}
                                className="w-full py-3 bg-white border border-brand-blue/30 text-brand-blue rounded-xl text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-brand-blue/5 transition-all flex items-center justify-center gap-2 group"
                              >
                                <Database size={12} className="group-hover:scale-110 transition-transform" />
                                Add to Question Bank
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6">
                        <div className="bg-brand-bg/50 p-4 rounded-xl border border-brand-border flex gap-3">
                          <Info size={16} className="text-brand-gray shrink-0 mt-0.5" />
                          <p className="text-[10px] leading-relaxed text-brand-gray font-bold uppercase tracking-tight">
                            Review changes above. Click Save at the bottom to commit your updates.
                          </p>
                        </div>
                      </div>
                    </Motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center py-20">
                      <div className="w-20 h-20 bg-brand-bg rounded-full flex items-center justify-center text-brand-gray/20 mb-6 border border-brand-border/50 animate-pulse">
                        <Settings size={40} />
                      </div>
                      <h4 className="text-sm font-bold text-brand-dark mb-2 uppercase tracking-tight">Canvas Focus</h4>
                      <p className="text-xs text-brand-gray leading-relaxed font-medium">
                        Select an element on the canvas to configure its settings and logic.
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="p-6 border-t border-brand-border bg-white shrink-0">
                <button 
                  className="w-full py-4 bg-brand-blue text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleSaveProperties}
                  disabled={!draftElement}
                >
                  <CheckCircle2 size={14} />
                  Save
                </button>
              </div>
            </>
          ) : activeTab === 'preview' ? (
            /* Share Panel */
            <>
              <div className="p-6 border-b border-brand-border shrink-0 bg-white/50">
                <h2 className="text-sm font-bold text-brand-dark uppercase tracking-widest flex items-center gap-2">
                  <Share2 size={16} className="text-brand-blue" />
                  Share Form
                </h2>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block opacity-60">Public Link</label>
                  <div className="flex items-center gap-2 bg-brand-bg/50 border border-brand-border rounded-xl p-2 pl-4">
                    <span className="text-xs font-bold text-brand-gray truncate flex-1">lymbus.ai/f/e7r9...</span>
                    <button className="p-2 text-brand-blue hover:bg-white rounded-lg transition-all shadow-sm">
                      <Copy size={14} />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                   <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block opacity-60">Distribute Via</label>
                   <div className="grid grid-cols-2 gap-3">
                     <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-brand-border hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all group">
                       <div className="w-10 h-10 rounded-full bg-brand-bg group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center text-brand-gray transition-colors">
                         <Mail size={18} />
                       </div>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Email</span>
                     </button>
                     <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-brand-border hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all group">
                       <div className="w-10 h-10 rounded-full bg-brand-bg group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center text-brand-gray transition-colors">
                         <QrCode size={18} />
                       </div>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">QR Code</span>
                     </button>
                     <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-brand-border hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all group">
                       <div className="w-10 h-10 rounded-full bg-brand-bg group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center text-brand-gray transition-colors">
                         <LinkIcon size={18} />
                       </div>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Embed</span>
                     </button>
                     <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-brand-border hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all group">
                       <div className="w-10 h-10 rounded-full bg-brand-bg group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center text-brand-gray transition-colors">
                         <Globe size={18} />
                       </div>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Social</span>
                     </button>
                   </div>
                </div>

                <div className="p-4 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                  <div className="flex items-start gap-3">
                    <Info size={16} className="text-brand-blue mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-brand-blue mb-1">Status: Draft</h4>
                      <p className="text-[10px] leading-relaxed text-brand-blue/80 font-medium">
                        Publish your form to start collecting responses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-brand-border bg-white shrink-0">
                 <button 
                  className="w-full py-3 bg-brand-blue text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2"
                  onClick={() => toast.success('Form published successfully')}
                >
                  <Globe size={14} />
                  Publish Form
                </button>
              </div>
            </>
          ) : (
            /* Resource Library Panel */
            <>
              <div className="p-6 border-b border-brand-border shrink-0 bg-white/50">
                <h2 className="text-sm font-bold text-brand-dark uppercase tracking-widest flex items-center gap-2">
                  <Database size={16} className="text-brand-blue" />
                  Resource Library
                </h2>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-brand-border shrink-0">
                {[
                  { id: 'questions', label: 'Question Bank', icon: LayoutGrid },
                  { id: 'files', label: 'Files', icon: Paperclip },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setLibraryTab(tab.id as any);
                      setLibrarySearch('');
                      setActiveFilter(null);
                    }}
                    className={cn(
                      "flex-1 py-4 text-[10px] font-bold uppercase tracking-widest transition-all relative",
                      libraryTab === tab.id ? "text-brand-blue" : "text-brand-gray hover:text-brand-dark"
                    )}
                  >
                    {tab.label}
                    {libraryTab === tab.id && (
                      <Motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue" />
                    )}
                  </button>
                ))}
              </div>

              {/* Search & Filters */}
              <div className="p-4 space-y-3 shrink-0">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" />
                  <input 
                    type="text" 
                    placeholder={`Search ${libraryTab}...`}
                    value={librarySearch}
                    onChange={(e) => setLibrarySearch(e.target.value)}
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl pl-9 pr-4 py-2.5 text-xs font-medium focus:bg-white focus:ring-1 focus:ring-brand-blue/20 transition-all outline-none"
                  />
                </div>
                
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                  <button 
                    onClick={() => setActiveFilter(null)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[9px] font-bold uppercase tracking-widest whitespace-nowrap transition-all",
                      !activeFilter ? "bg-brand-blue text-white border-brand-blue" : "bg-white text-brand-gray border-brand-border hover:border-brand-blue/30"
                    )}
                  >
                    All
                  </button>
                  {(libraryTab === 'questions' ? categories : ['PDF', 'IMAGE', 'DOC']).map((filter) => (
                    <button 
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[9px] font-bold uppercase tracking-widest whitespace-nowrap transition-all",
                        activeFilter === filter ? "bg-brand-blue text-white border-brand-blue" : "bg-white text-brand-gray border-brand-border hover:border-brand-blue/30"
                      )}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* List Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-hide">
                <AnimatePresence mode="popLayout">
                  {libraryTab === 'questions' ? (
                    filteredQuestions.length > 0 ? (
                      filteredQuestions.map((q, idx) => (
                        <Motion.button
                          key={q.text}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ delay: idx * 0.05 }}
                          className="w-full p-4 rounded-2xl bg-white border border-brand-border hover:border-brand-blue/30 hover:shadow-md transition-all text-left group flex flex-col gap-3"
                          onClick={() => {
                            addElement({
                              type: q.type.toLowerCase().includes('yes/no') ? 'yesno' : q.type.toLowerCase().includes('rating') ? 'rating' : 'text',
                              label: q.type,
                              icon: q.type.toLowerCase().includes('yes/no') ? CheckCircle2 : q.type.toLowerCase().includes('rating') ? Star : Type,
                              category: q.category.toUpperCase()
                            } as any);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold text-brand-blue bg-brand-blue/5 px-2 py-0.5 rounded-full uppercase tracking-wider">{q.category}</span>
                            <div className="p-1.5 rounded-lg bg-brand-bg text-brand-gray group-hover:text-brand-blue transition-colors">
                              <Plus size={12} />
                            </div>
                          </div>
                          <p className="text-xs font-bold text-brand-dark leading-relaxed line-clamp-2">{q.text}</p>
                        </Motion.button>
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center py-10 opacity-40">
                        <FilterX size={32} />
                        <p className="text-[10px] font-bold uppercase tracking-widest mt-4">No questions found</p>
                      </div>
                    )
                  ) : (
                    filteredFiles.length > 0 ? (
                      filteredFiles.map((f, idx) => (
                        <Motion.button
                          key={f.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ delay: idx * 0.05 }}
                          className="w-full p-4 rounded-2xl bg-white border border-brand-border hover:border-brand-blue/30 hover:shadow-md transition-all text-left group flex items-center gap-3"
                        >
                          <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center text-brand-gray group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors shrink-0">
                            {f.type === 'IMAGE' ? <ImageIcon size={18} /> : <FileText size={18} />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-brand-dark truncate">{f.name}</p>
                            <p className="text-[9px] font-bold text-brand-gray uppercase tracking-wider mt-0.5">{f.size} • {f.date}</p>
                          </div>
                          <div className="p-1.5 rounded-lg bg-brand-bg text-brand-gray group-hover:text-brand-blue transition-colors opacity-0 group-hover:opacity-100">
                             <Plus size={12} />
                          </div>
                        </Motion.button>
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center py-10 opacity-40">
                        <FilterX size={32} />
                        <p className="text-[10px] font-bold uppercase tracking-widest mt-4">No files found</p>
                      </div>
                    )
                  )}
                </AnimatePresence>
              </div>


            </>
          )}
        </Motion.aside>
      </AnimatePresence>
    </div>
  );
};

export const FormBuilderInteractive = ({ onBack }: { onBack: () => void }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <FormBuilderInteractiveContent />
    </DndProvider>
  );
};

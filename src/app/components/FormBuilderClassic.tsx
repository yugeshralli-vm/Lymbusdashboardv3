import React, { useState, useMemo } from 'react';
import { 
  ChevronLeft, 
  Search, 
  Settings, 
  Eye, 
  Share2, 
  Plus, 
  MoreVertical, 
  Trash2, 
  Copy, 
  CheckCircle2, 
  HelpCircle,
  Star,
  Image as ImageIcon,
  ChevronDown,
  GripVertical,
  ArrowLeft,
  X,
  Layout,
  Zap,
  Check,
  ChevronRight,
  Monitor,
  Calendar,
  Layers,
  Sparkles,
  Smartphone,
  CircleDot,
  CheckSquare,
  Type,
  AlignLeft,
  Activity
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { cn } from '@/app/components/ui/utils';
import { toast } from 'sonner';

interface Question {
  id: string;
  type: 'rating' | 'nps' | 'likert' | 'radio' | 'text' | 'checkbox' | 'paragraph';
  title: string;
  required: boolean;
  options?: string[];
  properties?: {
    range?: number;
    [key: string]: any;
  };
}

const questionTypes = [
  { id: 'rating', label: 'Rating Scale', icon: Star, desc: 'Star rating 1-5 or 1-10' },
  { id: 'nps', label: 'NPS Scale', icon: Activity, desc: 'Net Promoter Score 0-10' },
  { id: 'likert', label: 'Likert Scale', icon: Layers, desc: 'Agreement scale' },
  { id: 'radio', label: 'Radio Button', icon: CircleDot, desc: 'Single choice' },
  { id: 'checkbox', label: 'Checkbox', icon: CheckSquare, desc: 'Multiple choice' },
  { id: 'text', label: 'Short Text', icon: Type, desc: 'Brief answer' },
  { id: 'paragraph', label: 'Paragraph', icon: AlignLeft, desc: 'Detailed response' },
] as const;

const QuickAddToolbar = ({ onAdd, isAlwaysVisible = false }: { onAdd: (type: Question['type']) => void, isAlwaysVisible?: boolean }) => {
  return (
    <div className={cn(
      "w-full group/toolbar relative transition-all duration-300",
      isAlwaysVisible ? "py-8" : "h-12 flex items-center justify-center opacity-0 hover:opacity-100 z-50 hover:h-20"
    )}>
      <div className={cn(
        "w-full h-px relative transition-colors",
        isAlwaysVisible ? "bg-brand-border border-t border-dashed" : "bg-brand-blue/10 group-hover/toolbar:bg-brand-blue/30"
      )}>
        <div className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white p-2 rounded-full border border-brand-border shadow-xl transition-all duration-300",
          !isAlwaysVisible && "scale-90 group-hover/toolbar:scale-100 border-brand-blue/20"
        )}>
           {questionTypes.map(type => (
             <button 
               key={type.id}
               onClick={(e) => {
                 e.stopPropagation();
                 onAdd(type.id);
               }}
               className="w-9 h-9 bg-brand-bg hover:bg-brand-blue hover:text-white rounded-full flex items-center justify-center text-brand-gray transition-all border border-brand-border group relative"
               title={type.label}
             >
               <type.icon size={16} />
               <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-[8px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[100]">
                  {type.label.toUpperCase()}
               </span>
             </button>
           ))}
        </div>
      </div>
    </div>
  );
};

export const FormBuilderClassic = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'configure' | 'preview'>('details');
  const [formName, setFormName] = useState('Patient Satisfaction Survey');
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      type: 'nps',
      title: 'How likely are you to recommend our hospital to a friend or family member?',
      required: true,
      properties: { range: 10 }
    },
    {
      id: '2',
      type: 'rating',
      title: 'How would you rate the cleanliness of your room?',
      required: true,
      properties: { range: 5 }
    },
    {
      id: '3',
      type: 'radio',
      title: 'Which department did you visit today?',
      required: true,
      options: ['Outpatient (OPD)', 'Inpatient (IPD)', 'Emergency (ER)', 'Radiology']
    }
  ]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>('1');

  const selectedQuestion = useMemo(() => 
    questions.find(q => q.id === selectedQuestionId),
  [questions, selectedQuestionId]);

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(prev => prev.map(q => q.id === id ? { ...q, ...updates } : q));
  };

  const addQuestion = (type: Question['type'] = 'text', index?: number) => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: type,
      title: 'Untitled question',
      required: false,
      options: type === 'radio' || type === 'checkbox' || type === 'likert' ? ['Option 1', 'Option 2'] : undefined,
      properties: type === 'nps' ? { range: 10 } : type === 'rating' ? { range: 5 } : type === 'likert' ? { range: 5 } : {}
    };
    
    setQuestions(prev => {
      if (typeof index === 'number') {
        const next = [...prev];
        next.splice(index, 0, newQuestion);
        return next;
      }
      return [...prev, newQuestion];
    });
    setSelectedQuestionId(newQuestion.id);
  };

  const deleteQuestion = (id: string) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
    if (selectedQuestionId === id) setSelectedQuestionId(null);
  };

  const renderPreview = () => (
    <div className="flex-1 w-full flex items-center justify-center p-4 lg:p-8 overflow-hidden animate-in zoom-in-95 duration-500">
      <div className="relative h-full max-h-[820px] w-full max-w-[380px] bg-brand-dark rounded-[60px] p-4 shadow-2xl border-[8px] border-brand-dark overflow-hidden flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-brand-dark rounded-b-[24px] z-20 flex items-center justify-center">
          <div className="w-12 h-1 bg-white/10 rounded-full" />
        </div>

        {/* Screen */}
        <div className="flex-1 bg-white rounded-[40px] overflow-y-auto no-scrollbar pt-10 pb-10 px-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-brand-dark leading-tight">{formName}</h2>
              <div className="w-12 h-1 bg-brand-blue rounded-full" />
            </div>

            <div className="space-y-10">
              {questions.map((q, i) => (
                <div key={q.id} className="space-y-4 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-brand-bg flex items-center justify-center text-[10px] font-bold text-brand-blue shrink-0 mt-1">{i + 1}</span>
                    <p className="text-base font-bold text-brand-dark leading-snug">{q.title}</p>
                  </div>

                  {q.type === 'nps' && (
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {Array.from({ length: (q.properties?.range || 10) + 1 }).map((_, n) => (
                          <button key={n} className="w-7 h-7 rounded-lg border border-brand-border flex items-center justify-center text-[10px] font-bold hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
                            {n}
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-between text-[8px] font-bold uppercase tracking-widest text-brand-gray px-1">
                        <span>Not Likely</span>
                        <span>Very Likely</span>
                      </div>
                    </div>
                  )}

                  {q.type === 'rating' && (
                    <div className="flex items-center justify-between px-2">
                      {Array.from({ length: q.properties?.range || 5 }).map((_, n) => (
                        <button key={n} className="w-10 h-10 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-gray/30 hover:bg-brand-blue/5 hover:border-brand-blue/20 transition-all">
                          <Star size={20} />
                        </button>
                      ))}
                    </div>
                  )}

                  {q.type === 'likert' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-1.5">
                        {Array.from({ length: q.properties?.range || 5 }).map((_, n) => (
                          <button 
                            key={n} 
                            className="flex-1 h-12 rounded-xl bg-brand-bg border border-brand-border flex flex-col items-center justify-center gap-1 hover:bg-brand-blue/5 hover:border-brand-blue transition-all group"
                          >
                            <span className="text-xs font-bold text-brand-dark group-hover:text-brand-blue">{n + 1}</span>
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-between px-1 gap-4">
                        <span className="text-[8px] font-bold text-brand-gray uppercase tracking-widest leading-tight text-left max-w-[60px]">Strongly Disagree</span>
                        <span className="text-[8px] font-bold text-brand-gray uppercase tracking-widest leading-tight text-right max-w-[60px]">Strongly Agree</span>
                      </div>
                    </div>
                  )}

                  {(q.type === 'text' || q.type === 'paragraph') && (
                    <div className="relative">
                      {q.type === 'text' ? (
                        <input 
                          type="text"
                          placeholder="Short answer..."
                          className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none placeholder:text-brand-gray/30"
                          readOnly
                        />
                      ) : (
                        <textarea 
                          placeholder="Detailed feedback..."
                          className="w-full h-32 bg-brand-bg/50 border border-brand-border rounded-2xl p-4 text-sm focus:outline-none placeholder:text-brand-gray/30 resize-none"
                          readOnly
                        />
                      )}
                    </div>
                  )}

                  {(q.type === 'radio' || q.type === 'checkbox') && (
                    <div className="space-y-2">
                      {(q.options || ['Option 1', 'Option 2']).map((opt, idx) => (
                        <button key={idx} className="w-full p-4 rounded-2xl bg-white border border-brand-border flex items-center justify-between group hover:border-brand-blue transition-all text-left">
                          <span className="text-sm font-bold text-brand-dark">{opt}</span>
                          <div className={cn(
                            "w-5 h-5 border-2 border-brand-border group-hover:border-brand-blue transition-colors",
                            q.type === 'radio' ? "rounded-full" : "rounded-md"
                          )} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-brand-blue text-white rounded-[20px] font-bold text-sm uppercase tracking-widest shadow-xl shadow-brand-blue/20 mt-12">
              Submit Feedback
            </button>

            <div className="flex flex-col items-center gap-2 py-8 opacity-40">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-brand-blue rounded-lg flex items-center justify-center text-white">
                  <span className="text-[10px] font-bold">L</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Powered by Lymbus AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Home Bar */}
        <div className="h-1.5 w-32 bg-white/20 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2" />
      </div>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-brand-bg/30">
      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 flex flex-col items-center no-scrollbar">
          {/* Tab Switcher */}
          <div className="bg-white p-1 rounded-[20px] border border-brand-border flex gap-1 mb-8 shadow-sm shrink-0 z-10">
            {[
              { id: 'details', label: 'Details', icon: Layout },
              { id: 'configure', label: 'Configure', icon: Settings },
              { id: 'preview', label: 'Preview & Share', icon: Eye },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-2 px-6 py-2 rounded-[16px] text-[10px] font-bold transition-all uppercase tracking-widest",
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
            <div className="w-full max-w-4xl space-y-4 pb-20">
              {/* Form Name Card */}
              <div className="bg-white rounded-[24px] border border-brand-border p-6 lg:p-8 shadow-sm group focus-within:ring-2 focus-within:ring-brand-blue/10 transition-all mb-4">
                <label className="text-[10px] font-bold text-brand-gray uppercase tracking-[0.2em] mb-3 block opacity-60">
                  Form Name
                </label>
                <input 
                  type="text" 
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Untitled form"
                  className="w-full text-xl font-bold text-brand-dark bg-brand-bg/30 border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-brand-blue/20 focus:bg-white transition-all placeholder:text-brand-gray/30"
                />
              </div>

              {/* Questions List */}
              <div className="flex flex-col">
                {questions.map((q, idx) => {
                  const isActive = selectedQuestionId === q.id;
                  const activeType = questionTypes.find(t => t.id === q.type) || questionTypes[0];
                  return (
                    <div key={q.id} className="flex flex-col">
                      {/* Hover inserter between questions */}
                      {idx > 0 && (
                        <QuickAddToolbar onAdd={(type) => addQuestion(type, idx)} />
                      )}
                      
                      <Motion.div 
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => setSelectedQuestionId(q.id)}
                        className={cn(
                          "group bg-white rounded-[24px] border transition-all relative",
                          isActive 
                            ? "border-brand-blue shadow-xl scale-[1.005] z-30" 
                            : "border-brand-border hover:border-brand-blue/30 cursor-pointer shadow-sm hover:shadow-md z-10 hover:z-20"
                        )}
                      >
                        <div className="p-6 lg:p-8">
                          <div className="flex items-start gap-4">
                            <div className="mt-4 hidden sm:flex flex-col gap-1 cursor-grab active:cursor-grabbing text-brand-gray/20 group-hover:text-brand-gray/40 transition-colors">
                              <GripVertical size={20} />
                            </div>
                            
                            <div className="flex-1 space-y-6">
                              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                <input 
                                  type="text"
                                  value={q.title}
                                  onChange={(e) => updateQuestion(q.id, { title: e.target.value })}
                                  className={cn(
                                    "flex-1 bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm font-bold text-brand-dark focus:outline-none focus:bg-white transition-all",
                                    isActive ? "bg-brand-bg/20" : ""
                                  )}
                                  placeholder="Untitled question"
                                />
                                
                                <div className="flex items-center gap-2 self-end lg:self-auto">
                                  <button className="p-2.5 bg-brand-bg rounded-xl text-brand-gray hover:bg-brand-blue/10 hover:text-brand-blue transition-colors border border-brand-border">
                                    <ImageIcon size={18} />
                                  </button>
                                  
                                  <div className="relative group/type-menu">
                                    <button className="flex items-center gap-2 px-4 py-2.5 bg-brand-bg border border-brand-border rounded-xl text-[10px] font-bold uppercase tracking-widest text-brand-gray hover:bg-white transition-all">
                                      <activeType.icon size={14} className="text-brand-blue" />
                                      {activeType.label}
                                      <ChevronDown size={14} />
                                    </button>
                                    
                                    {/* Type Selector Dropdown */}
                                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-brand-border z-[100] opacity-0 invisible group-hover/type-menu:opacity-100 group-hover/type-menu:visible transition-all duration-200">
                                      <div className="p-2 grid grid-cols-1 gap-1">
                                        {questionTypes.map((type) => (
                                          <button
                                            key={type.id}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              updateQuestion(q.id, { 
                                                type: type.id,
                                                options: type.id === 'radio' || type.id === 'checkbox' || type.id === 'likert' ? (q.options || ['Option 1', 'Option 2']) : undefined,
                                                properties: type.id === 'nps' ? { range: 10 } : type.id === 'rating' ? { range: 5 } : type.id === 'likert' ? { range: 5 } : {}
                                              });
                                            }}
                                            className={cn(
                                              "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-all",
                                              q.type === type.id 
                                                ? "bg-brand-blue/5 text-brand-blue" 
                                                : "hover:bg-brand-bg text-brand-gray hover:text-brand-dark"
                                            )}
                                          >
                                            <type.icon size={16} />
                                            <div className="flex flex-col">
                                              <span className="text-[10px] font-bold uppercase tracking-widest">{type.label}</span>
                                              <span className="text-[8px] font-bold opacity-50">{type.desc}</span>
                                            </div>
                                            {q.type === type.id && <Check size={14} className="ml-auto" />}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="py-2">
                                 {q.type === 'nps' && (
                                   <div className="space-y-3">
                                     <div className="flex gap-1">
                                       {Array.from({ length: (q.properties?.range || 10) + 1 }).map((_, i) => (
                                         <div key={i} className="flex-1 h-10 bg-brand-bg rounded-lg border border-brand-border flex items-center justify-center text-[10px] font-bold text-brand-gray/40">{i}</div>
                                       ))}
                                     </div>
                                     <div className="flex justify-between px-1">
                                        <span className="text-[8px] font-bold text-brand-gray/30 uppercase tracking-widest">Not Likely</span>
                                        <span className="text-[8px] font-bold text-brand-gray/30 uppercase tracking-widest">Very Likely</span>
                                     </div>
                                   </div>
                                 )}
                                 {q.type === 'rating' && (
                                   <div className="flex gap-2">
                                     {Array.from({ length: q.properties?.range || 5 }).map((_, i) => (
                                       <Star key={i} size={24} className="text-brand-gray/20" />
                                     ))}
                                   </div>
                                 )}
                                 {q.type === 'likert' && (
                                   <div className="space-y-3">
                                     <div className="flex gap-2">
                                       {Array.from({ length: q.properties?.range || 5 }).map((_, i) => (
                                         <div key={i} className="flex-1 h-12 bg-brand-bg rounded-xl border border-brand-border flex items-center justify-center text-[10px] font-bold text-brand-gray/40">{i + 1}</div>
                                       ))}
                                     </div>
                                     <div className="flex justify-between px-1">
                                        <span className="text-[8px] font-bold text-brand-gray/30 uppercase tracking-widest">Strongly Disagree</span>
                                        <span className="text-[8px] font-bold text-brand-gray/30 uppercase tracking-widest">Strongly Agree</span>
                                     </div>
                                   </div>
                                 )}
                                 {(q.type === 'radio' || q.type === 'checkbox') && (
                                   <div className="space-y-2">
                                     {(q.options || ['Option 1', 'Option 2']).map((opt, i) => (
                                       <div key={i} className="flex items-center gap-3 animate-in fade-in slide-in-from-left-2" style={{ animationDelay: `${i * 50}ms` }}>
                                         <div className={cn("w-4 h-4 border border-brand-border", q.type === 'radio' ? "rounded-full" : "rounded")} />
                                         <span className="text-sm font-medium text-brand-dark">{opt}</span>
                                       </div>
                                     ))}
                                   </div>
                                 )}
                                 {q.type === 'text' && (
                                   <div className="h-10 w-full bg-brand-bg/50 border border-dashed border-brand-border rounded-xl flex items-center px-4 text-[10px] font-bold text-brand-gray/30 uppercase tracking-widest">Short answer text...</div>
                                 )}
                                 {q.type === 'paragraph' && (
                                   <div className="h-20 w-full bg-brand-bg/50 border border-dashed border-brand-border rounded-xl flex items-center px-4 py-3 text-[10px] font-bold text-brand-gray/30 uppercase tracking-widest items-start">Long answer text...</div>
                                 )}
                              </div>

                              {isActive && (
                                <Motion.div 
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="pt-6 mt-4 border-t border-brand-border flex items-center justify-between overflow-hidden"
                                >
                                  <div className="flex items-center gap-4 lg:gap-6">
                                    <button className="flex items-center gap-2 text-[10px] font-bold text-brand-gray hover:text-brand-blue transition-colors uppercase tracking-widest">
                                      <Copy size={14} /> <span className="hidden sm:inline">Duplicate</span>
                                    </button>
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        deleteQuestion(q.id);
                                      }}
                                      className="flex items-center gap-2 text-[10px] font-bold text-red-500 hover:text-red-600 transition-colors uppercase tracking-widest"
                                    >
                                      <Trash2 size={14} /> <span className="hidden sm:inline">Delete</span>
                                    </button>
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Required</span>
                                    <button 
                                      onClick={() => updateQuestion(q.id, { required: !q.required })}
                                      className={cn(
                                        "w-9 h-5 rounded-full relative transition-all duration-300",
                                        q.required ? "bg-brand-blue shadow-sm shadow-brand-blue/30" : "bg-brand-bg border border-brand-border"
                                      )}
                                    >
                                      <div className={cn(
                                        "absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 shadow-sm",
                                        q.required ? "right-1" : "left-1"
                                      )} />
                                    </button>
                                  </div>
                                </Motion.div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Add Question Button - Bottom (Always Visible) */}
              <div className="pt-8 pb-12">
                <QuickAddToolbar onAdd={(type) => addQuestion(type)} isAlwaysVisible={true} />
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - Properties */}
        <aside className={cn(
          "w-80 bg-white border-l border-brand-border flex flex-col shrink-0 hidden xl:flex shadow-[-4px_0_24px_rgba(0,0,0,0.02)] transition-all",
          activeTab === 'preview' && "w-0 border-l-0 opacity-0 invisible overflow-hidden"
        )}>
          <div className="p-6 border-b border-brand-border bg-white/50">
            <h3 className="text-xs font-bold text-brand-dark uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={16} className="text-brand-blue" />
              {selectedQuestion ? `${selectedQuestion.type.toUpperCase()} Properties` : 'Context Properties'}
            </h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
            {selectedQuestion ? (
              <>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block opacity-60">Question Text</label>
                  <textarea 
                    value={selectedQuestion.title}
                    onChange={(e) => updateQuestion(selectedQuestion.id, { title: e.target.value })}
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm font-bold text-brand-dark focus:bg-white focus:ring-1 focus:ring-brand-blue/20 transition-all outline-none resize-none h-24"
                  />
                </div>

                {(selectedQuestion.type === 'rating' || selectedQuestion.type === 'nps' || selectedQuestion.type === 'likert') && (
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block opacity-60">Range Max</label>
                    <div className="relative">
                      <select 
                        value={selectedQuestion.properties?.range || (selectedQuestion.type === 'nps' ? 10 : 5)}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          updateQuestion(selectedQuestion.id, { 
                            properties: { ...selectedQuestion.properties, range: val } 
                          });
                        }}
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm font-bold text-brand-dark appearance-none outline-none focus:ring-1 focus:ring-brand-blue/30 transition-all cursor-pointer"
                      >
                        {[3, 4, 5, 7, 10].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none" />
                    </div>
                  </div>
                )}

                {(selectedQuestion.type === 'radio' || selectedQuestion.type === 'checkbox') && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block opacity-60">Choices</label>
                      <button 
                        onClick={() => {
                          const newOpts = [...(selectedQuestion.options || []), `Option ${(selectedQuestion.options?.length || 0) + 1}`];
                          updateQuestion(selectedQuestion.id, { options: newOpts });
                        }}
                        className="text-[10px] font-bold text-brand-blue uppercase tracking-widest hover:underline"
                      >
                        Add Choice
                      </button>
                    </div>
                    <div className="space-y-2">
                       {(selectedQuestion.options || []).map((opt, i) => (
                         <div key={i} className="flex items-center gap-2 group/choice animate-in slide-in-from-right-2" style={{ animationDelay: `${i * 50}ms` }}>
                           <input 
                             type="text"
                             value={opt}
                             onChange={(e) => {
                               const newOpts = [...(selectedQuestion.options || [])];
                               newOpts[i] = e.target.value;
                               updateQuestion(selectedQuestion.id, { options: newOpts });
                             }}
                             className="flex-1 bg-brand-bg/30 border border-brand-border rounded-lg px-3 py-2 text-xs font-bold text-brand-dark focus:bg-white transition-all outline-none"
                           />
                           <button 
                             onClick={() => {
                               const newOpts = (selectedQuestion.options || []).filter((_, idx) => idx !== i);
                               updateQuestion(selectedQuestion.id, { options: newOpts });
                             }}
                             className="p-2 text-brand-gray/30 hover:text-red-400 hover:bg-red-50 rounded-lg transition-all"
                           >
                             <Trash2 size={14} />
                           </button>
                         </div>
                       ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-20 px-8">
                <div className="w-20 h-20 bg-brand-bg rounded-full flex items-center justify-center text-brand-gray/20 mb-6 border border-brand-border/50 animate-pulse">
                  <HelpCircle size={40} />
                </div>
                <h4 className="text-sm font-bold text-brand-dark mb-2 uppercase tracking-tight">Focus Context</h4>
                <p className="text-xs text-brand-gray leading-relaxed font-medium">Select any element on the canvas to edit its properties, validation rules, and logic branching.</p>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-brand-border bg-white flex flex-col gap-3">
            <button 
              onClick={() => {
                toast.success('Opening Advanced Settings...');
              }}
              className="w-full py-3 border border-brand-border rounded-xl text-[10px] font-bold uppercase tracking-widest text-brand-gray hover:bg-brand-bg hover:text-brand-dark transition-all flex items-center justify-center gap-2"
            >
              <Settings size={14} />
              Advanced Config
            </button>
            <div className="flex gap-3">
              <button 
                onClick={onBack}
                className="flex-1 py-3 border border-brand-border rounded-xl text-[10px] font-bold uppercase tracking-widest text-brand-gray hover:bg-brand-bg transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  toast.success('Form saved successfully');
                  onBack();
                }}
                className="flex-1 py-3 bg-brand-blue text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-brand-blue/30 hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2"
              >
                <Check size={14} />
                Save Form
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

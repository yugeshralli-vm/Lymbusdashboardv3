import React, { useState, useRef } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Database, 
  Upload, 
  MousePointer2, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Zap, 
  Target,
  Plus,
  Trash2,
  Smartphone,
  Mail,
  ArrowLeft,
  Settings2,
  Eye,
  Layout,
  MessageSquare,
  AlertTriangle
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { cn } from '@/app/components/ui/utils';
import { toast } from 'sonner';
import { ConfirmationModal } from './ConfirmationModal';

interface CampaignBuilderProps {
  onBack: () => void;
}

const forms = [
  { id: 'form-1', name: 'Q1 Patient Satisfaction', questions: 5 },
  { id: 'form-2', name: 'Post-Visit Feedback', questions: 8 },
  { id: 'form-3', name: 'Telehealth Quality Survey', questions: 12 },
  { id: 'form-4', name: 'Annual Wellness Intake', questions: 15 },
  { id: 'form-5', name: 'Medication Adherence', questions: 6 },
];

type Step = 'audience' | 'content' | 'schedule' | 'review';

export const CampaignBuilder: React.FC<CampaignBuilderProps> = ({ onBack }) => {
  const [activeStep, setActiveStep] = useState<Step>('audience');
  const [activePreview, setActivePreview] = useState<'sms' | 'email'>('sms');
  const [formSearch, setFormSearch] = useState('');
  
  // Confirmation Modal State
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmLabel: string;
    onConfirm: () => void;
    variant: 'danger' | 'warning' | 'info';
  }>({
    isOpen: false,
    title: '',
    message: '',
    confirmLabel: '',
    onConfirm: () => {},
    variant: 'danger'
  });

  const openConfirm = (config: Partial<typeof confirmModal>) => {
    setConfirmModal(prev => ({
      ...prev,
      ...config,
      isOpen: true
    }));
  };
  
  const [data, setData] = useState({
    name: 'New Outreach Campaign',
    type: 'Clinical',
    channels: ['sms'] as string[],
    source: 'database',
    smsContent: 'Hi [Patient Name], please fill out this survey: [Form Link]',
    emailSubject: 'Your recent visit feedback',
    emailContent: 'Dear [Patient Name], thank you for choosing Lymbus Health. \n\nWe value your feedback. Please take a moment to complete our survey:\n\n[Form Link]',
    formId: 'form-1',
    scheduleType: 'now',
    interval: 'None',
    startDate: '2026-02-09',
    endDate: '2026-02-16'
  });

  const steps: { id: Step; label: string; icon: any }[] = [
    { id: 'audience', label: '1. Audience', icon: Target },
    { id: 'content', label: '2. Content', icon: Layout },
    { id: 'schedule', label: '3. Schedule', icon: Calendar },
    { id: 'review', label: '4. Review', icon: Eye },
  ];

  const handleNext = () => {
    const currentIndex = steps.findIndex(s => s.id === activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1].id);
    } else {
      openConfirm({
        title: 'Launch Campaign',
        message: 'Are you sure you want to launch this campaign? This will immediately start sending outreach to the selected audience.',
        confirmLabel: 'Launch Now',
        variant: 'info',
        onConfirm: () => {
          toast.success('Campaign launched successfully!');
          onBack();
        }
      });
    }
  };

  const handleDiscard = () => {
    openConfirm({
      title: 'Discard Campaign',
      message: 'Are you sure you want to discard this campaign? All progress will be permanently lost.',
      confirmLabel: 'Discard',
      variant: 'danger',
      onConfirm: onBack
    });
  };

  const handlePrev = () => {
    const currentIndex = steps.findIndex(s => s.id === activeStep);
    if (currentIndex > 0) {
      setActiveStep(steps[currentIndex - 1].id);
    }
  };

  const [dbConfig, setDbConfig] = useState({ host: 'db.lymbus-health.internal', port: '5432', name: 'patient_records_prod', username: '', password: '' });
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [dbConnected, setDbConnected] = useState(true);
  const [manualRecipients, setManualRecipients] = useState<{name: string, contact: string}[]>([]);
  const [newRecipient, setNewRecipient] = useState({ name: '', contact: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const renderAudienceStep = () => (
    <div className="space-y-4 max-w-2xl mx-auto">
      {/* Identity & Channels - Condensed Single Row */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-2xl border border-brand-border shadow-sm">
          <label className="text-[9px] font-bold uppercase tracking-widest text-brand-dark block mb-1.5 opacity-60">Campaign Name</label>
          <input 
            type="text" 
            className="w-full h-9 bg-brand-bg/40 border border-brand-border rounded-xl px-3 text-xs font-bold focus:ring-1 focus:ring-brand-blue/20 outline-none"
            value={data.name}
            onChange={e => setData({...data, name: e.target.value})}
          />
        </div>
        <div className="bg-white p-4 rounded-2xl border border-brand-border shadow-sm flex items-center justify-between">
          <label className="text-[9px] font-bold uppercase tracking-widest text-brand-dark block opacity-60">Outreach Channels</label>
          <div className="flex gap-2">
            {[
              { id: 'sms', icon: Smartphone, label: 'SMS' },
              { id: 'email', icon: Mail, label: 'Email' }
            ].map(ch => (
              <button 
                key={ch.id}
                onClick={() => {
                  const newChannels = data.channels.includes(ch.id) 
                    ? data.channels.filter(c => c !== ch.id)
                    : [...data.channels, ch.id];
                  if (newChannels.length > 0) setData({...data, channels: newChannels});
                }}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 transition-all",
                  data.channels.includes(ch.id) ? "bg-brand-blue/5 border-brand-blue text-brand-blue" : "bg-brand-bg/30 border-brand-border text-brand-gray"
                )}
              >
                <ch.icon size={12} />
                <span className="text-[9px] font-bold uppercase tracking-tight">{ch.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mini Data Source Selection */}
      <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-sm">
        <h3 className="text-[9px] font-bold uppercase tracking-widest text-brand-gray mb-3 text-center">Select Data Source</h3>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: 'database', label: 'EHR DB', icon: Database },
            { id: 'upload', label: 'Upload', icon: Upload },
            { id: 'manual', label: 'Manual', icon: Plus }
          ].map(source => (
            <button 
              key={source.id}
              onClick={() => setData({...data, source: source.id})}
              className={cn(
                "py-2 px-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2",
                data.source === source.id ? "bg-white border-brand-blue shadow-md shadow-brand-blue/5" : "bg-brand-bg/30 border-brand-border hover:border-brand-blue/20"
              )}
            >
              <source.icon size={14} className={data.source === source.id ? "text-brand-blue" : "text-brand-gray"} />
              <p className="text-[10px] font-bold text-brand-dark uppercase tracking-tight">{source.label}</p>
            </button>
          ))}
        </div>

        {/* Dynamic Compact Config */}
        <div className="mt-4 pt-4 border-t border-brand-border">
          {data.source === 'database' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-8">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-brand-dark block mb-1 opacity-60">Host <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="e.g., localhost or db.example.com" 
                    className="w-full h-9 bg-brand-bg/30 border border-brand-border rounded-lg px-3 text-[10px] font-bold outline-none focus:ring-1 focus:ring-brand-blue/30" 
                    value={dbConfig.host} 
                    onChange={e => setDbConfig({...dbConfig, host: e.target.value})} 
                  />
                </div>
                <div className="col-span-4">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-brand-dark block mb-1 opacity-60">Port</label>
                  <input 
                    type="text" 
                    placeholder="5432" 
                    className="w-full h-9 bg-brand-bg/30 border border-brand-border rounded-lg px-3 text-[10px] font-bold outline-none focus:ring-1 focus:ring-brand-blue/30" 
                    value={dbConfig.port} 
                    onChange={e => setDbConfig({...dbConfig, port: e.target.value})} 
                  />
                </div>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase tracking-widest text-brand-dark block mb-1 opacity-60">Database Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="Enter database name" 
                  className="w-full h-9 bg-brand-bg/30 border border-brand-border rounded-lg px-3 text-[10px] font-bold outline-none focus:ring-1 focus:ring-brand-blue/30" 
                  value={dbConfig.name} 
                  onChange={e => setDbConfig({...dbConfig, name: e.target.value})} 
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-brand-dark block mb-1 opacity-60">Username <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Database username" 
                    className="w-full h-9 bg-brand-bg/30 border border-brand-border rounded-lg px-3 text-[10px] font-bold outline-none focus:ring-1 focus:ring-brand-blue/30" 
                    value={dbConfig.username} 
                    onChange={e => setDbConfig({...dbConfig, username: e.target.value})} 
                  />
                </div>
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-brand-dark block mb-1 opacity-60">Password</label>
                  <input 
                    type="password" 
                    placeholder="Database password" 
                    className="w-full h-9 bg-brand-bg/30 border border-brand-border rounded-lg px-3 text-[10px] font-bold outline-none focus:ring-1 focus:ring-brand-blue/30" 
                    value={dbConfig.password} 
                    onChange={e => setDbConfig({...dbConfig, password: e.target.value})} 
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button 
                  onClick={() => { 
                    setIsTestingConnection(true); 
                    setTimeout(() => { 
                      setIsTestingConnection(false); 
                      setDbConnected(true); 
                      toast.success('Connection Successful'); 
                    }, 1200); 
                  }}
                  className="px-6 py-2 bg-brand-blue text-white rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-md shadow-brand-blue/10 active:scale-95 transition-all"
                  disabled={isTestingConnection}
                >
                  {isTestingConnection ? 'Testing...' : 'Test Connection'}
                </button>
                {dbConnected && (
                  <div className="flex items-center gap-1.5 animate-in fade-in slide-in-from-left-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-tight">5,590 Records Verified</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {data.source === 'upload' && (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-brand-border rounded-xl p-4 flex items-center justify-center gap-3 bg-brand-bg/20 cursor-pointer group"
            >
              <input type="file" ref={fileInputRef} className="hidden" />
              <Upload size={16} className="text-brand-gray group-hover:text-brand-blue" />
              <span className="text-[10px] font-bold text-brand-dark uppercase tracking-tight">Drop list here or browse</span>
            </div>
          )}

          {data.source === 'manual' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="PATIENT NAME" 
                  className="flex-1 h-10 bg-brand-bg/40 border border-brand-border rounded-xl px-4 text-[10px] font-bold focus:ring-1 focus:ring-brand-blue/30 outline-none" 
                  value={newRecipient.name} 
                  onChange={e => setNewRecipient({...newRecipient, name: e.target.value})} 
                />
                <input 
                  type="text" 
                  placeholder="CONTACT (SMS/EMAIL)" 
                  className="flex-1 h-10 bg-brand-bg/40 border border-brand-border rounded-xl px-4 text-[10px] font-bold focus:ring-1 focus:ring-brand-blue/30 outline-none" 
                  value={newRecipient.contact} 
                  onChange={e => setNewRecipient({...newRecipient, contact: e.target.value})} 
                />
                <button 
                  onClick={() => { if (newRecipient.name && newRecipient.contact) { setManualRecipients([...manualRecipients, newRecipient]); setNewRecipient({ name: '', contact: '' }); } }} 
                  className="px-6 bg-brand-blue text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-md shadow-brand-blue/10 active:scale-95 transition-all"
                >
                  Add
                </button>
              </div>
              {manualRecipients.length > 0 && (
                <div className="border border-brand-border rounded-2xl overflow-hidden bg-white max-h-[320px] overflow-y-auto custom-scrollbar shadow-inner">
                   {manualRecipients.map((r, i) => (
                     <div key={i} className="flex items-center justify-between px-4 py-2.5 border-b border-brand-border last:border-0 hover:bg-brand-bg/20 transition-colors group">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-bold text-brand-dark uppercase tracking-tight">{r.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[9px] font-bold text-brand-gray uppercase tracking-widest">{r.contact}</span>
                          <button 
                            onClick={() => {
                              openConfirm({
                                title: 'Remove Recipient',
                                message: `Are you sure you want to remove ${r.name} from the recipient list?`,
                                confirmLabel: 'Remove',
                                variant: 'danger',
                                onConfirm: () => setManualRecipients(manualRecipients.filter((_, idx) => idx !== i))
                              });
                            }} 
                            className="text-brand-gray/40 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                     </div>
                   ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderContentStep = () => (
    <div className="space-y-6">
      {/* Form Picker */}
      <div className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm">
        <div className="px-6 py-4 bg-brand-bg/20 border-b border-brand-border flex items-center justify-between">
           <div className="flex items-center gap-2">
              <FileText size={16} className="text-brand-blue" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Link Experience Form</span>
           </div>
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={12} />
              <input 
                type="text" 
                placeholder="SEARCH FORMS..." 
                className="pl-9 pr-3 h-8 bg-white border border-brand-border rounded-lg text-[10px] font-bold tracking-widest focus:outline-none focus:ring-1 focus:ring-brand-blue/30" 
                value={formSearch}
                onChange={e => setFormSearch(e.target.value)}
              />
           </div>
        </div>
        <div className="p-4">
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-h-[160px] overflow-y-auto custom-scrollbar pr-2">
              {forms.filter(f => f.name.toLowerCase().includes(formSearch.toLowerCase())).map(f => (
                <button 
                  key={f.id} 
                  onClick={() => setData({...data, formId: f.id})}
                  className={cn(
                    "p-3 rounded-xl border flex items-center gap-3 transition-all text-left",
                    data.formId === f.id ? "bg-brand-blue/5 border-brand-blue ring-1 ring-brand-blue/20" : "bg-white border-brand-border hover:border-brand-blue/30 shadow-sm"
                  )}
                >
                   <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center transition-colors", data.formId === f.id ? "bg-brand-blue text-white" : "bg-brand-bg text-brand-gray")}>
                      <FileText size={16} />
                   </div>
                   <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-brand-dark uppercase truncate">{f.name}</p>
                      <p className="text-[8px] text-brand-gray font-bold uppercase tracking-tight">{f.questions} Qs</p>
                   </div>
                   {data.formId === f.id && <CheckCircle2 size={14} className="text-brand-blue" />}
                </button>
              ))}
           </div>
        </div>
      </div>

      <div className="flex items-center gap-4 py-2">
         <div className="h-px flex-1 bg-brand-border" />
         <span className="text-[9px] font-bold text-brand-gray uppercase tracking-widest px-4 py-1 bg-brand-bg rounded-full border border-brand-border">2. Design Message Content</span>
         <div className="h-px flex-1 bg-brand-border" />
      </div>

      {data.channels.map(ch => (
        <div key={ch} className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm">
          <div className="px-6 py-4 bg-brand-bg/20 border-b border-brand-border flex items-center justify-between">
             <div className="flex items-center gap-2">
                {ch === 'sms' ? <Smartphone size={16} className="text-brand-blue" /> : <Mail size={16} className="text-brand-blue" />}
                <span className="text-[10px] font-bold uppercase tracking-widest">{ch.toUpperCase()} EDITOR</span>
             </div>
             <div className="flex items-center gap-2" />
          </div>
          <div className="p-6 space-y-4">
            {ch === 'email' && (
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-brand-gray uppercase tracking-widest">Subject Line</label>
                <input 
                  type="text" 
                  placeholder="Subject line..." 
                  className="w-full h-11 border border-brand-border rounded-xl px-4 text-sm font-bold bg-brand-bg/20 focus:bg-white focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all" 
                  value={data.emailSubject} 
                  onChange={e => setData({...data, emailSubject: e.target.value})} 
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-[9px] font-bold text-brand-gray uppercase tracking-widest">{ch === 'sms' ? 'Message' : 'Email Body'}</label>
              <textarea 
                className="w-full h-32 p-4 text-sm font-medium border border-brand-border rounded-xl resize-none bg-brand-bg/20 focus:bg-white focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all" 
                placeholder={`ENTER ${ch.toUpperCase()} CONTENT...`}
                value={ch === 'sms' ? data.smsContent : data.emailContent}
                onChange={e => setData({...data, [ch === 'sms' ? 'smsContent' : 'emailContent']: e.target.value})}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-[8px] font-bold text-brand-gray uppercase tracking-widest self-center mr-2">Personalize:</span>
              {['[Patient Name]', '[Form Link]', '[Facility Name]'].map(tag => (
                <button 
                  key={tag} 
                  onClick={() => {
                    const field = ch === 'sms' ? 'smsContent' : 'emailContent';
                    setData(prev => ({ ...prev, [field]: prev[field] + ' ' + tag }));
                  }}
                  className="text-[9px] font-bold uppercase tracking-tight bg-white border border-brand-border rounded-lg px-3 py-1.5 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition-all shadow-sm flex items-center gap-1.5"
                >
                  <Plus size={10} />
                  {tag.replace('[', '').replace(']', '')}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderScheduleStep = () => (
    <div className="bg-card p-6 lg:p-8 rounded-[24px] border border-brand-border space-y-8 max-w-2xl mx-auto shadow-sm">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold text-brand-dark">Schedule</h3>
        <p className="text-sm text-brand-gray">Choose how and when your outreach should be delivered to patients.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { id: 'now', label: 'Immediate', description: 'Send as soon as campaign is launched', icon: Zap },
          { id: 'schedule', label: 'Scheduled', description: 'Pick a specific date and time', icon: Calendar },
          { id: 'range', label: 'Date Range', description: 'Run between specific dates', icon: Clock }
        ].map(type => (
          <button 
            key={type.id} 
            onClick={() => setData({...data, scheduleType: type.id})} 
            className={cn(
              "p-6 rounded-2xl border-2 transition-all flex flex-col items-center text-center gap-4 group",
              data.scheduleType === type.id ? "bg-white border-brand-blue shadow-xl shadow-brand-blue/5" : "bg-white border-brand-border hover:border-brand-blue/20"
            )}
          >
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300",
              data.scheduleType === type.id ? "bg-brand-blue text-white rotate-6" : "bg-brand-bg text-brand-gray group-hover:scale-110"
            )}>
               <type.icon size={24} />
            </div>
            <div className="space-y-1">
              <p className={cn(
                "text-[10px] font-bold uppercase tracking-[0.2em]",
                data.scheduleType === type.id ? "text-brand-blue" : "text-brand-dark"
              )}>{type.label}</p>
              <p className="text-[8px] font-bold text-brand-gray uppercase tracking-widest leading-relaxed">
                {type.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {data.scheduleType !== 'now' && (
          <Motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-brand-bg/30 p-8 rounded-2xl border border-brand-border space-y-6"
          >
             <div className="grid grid-cols-2 gap-8">
               {data.scheduleType !== 'range' && (
                 <div className="space-y-2">
                   <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-gray block opacity-60">Recurrence</label>
                   <select 
                     className="w-full h-11 bg-white border border-brand-border rounded-xl px-4 text-xs font-bold focus:ring-1 focus:ring-brand-blue/30 outline-none"
                     value={data.interval}
                     onChange={e => setData({...data, interval: e.target.value})}
                   >
                      <option value="None">None (One-time)</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                   </select>
                 </div>
               )}
               <div className={cn("space-y-2", data.scheduleType === 'range' ? "col-span-1" : "")}>
                 <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-gray block opacity-60">
                   {data.scheduleType === 'range' ? 'Start Date' : 'Launch Date'}
                 </label>
                 <input 
                   type="date" 
                   className="w-full h-11 bg-white border border-brand-border rounded-xl px-4 text-xs font-bold focus:ring-1 focus:ring-brand-blue/30 outline-none" 
                   value={data.startDate} 
                   onChange={e => setData({...data, startDate: e.target.value})} 
                 />
               </div>
               {data.scheduleType === 'range' && (
                 <div className="space-y-2">
                   <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-gray block opacity-60">End Date</label>
                   <input 
                     type="date" 
                     className="w-full h-11 bg-white border border-brand-border rounded-xl px-4 text-xs font-bold focus:ring-1 focus:ring-brand-blue/30 outline-none" 
                     value={data.endDate} 
                     onChange={e => setData({...data, endDate: e.target.value})} 
                   />
                 </div>
               )}
             </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const renderReviewStep = () => (
    <div className="space-y-6">
       <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-xl space-y-8">
          <div className="flex items-center justify-between">
             <div className="space-y-1">
                <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Campaign Identity</p>
                <h2 className="text-2xl font-bold text-brand-dark tracking-tight">{data.name}</h2>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Ready to Launch</span>
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="space-y-2">
                <p className="text-[9px] font-bold text-brand-gray uppercase tracking-widest">Channels</p>
                <div className="flex gap-2">
                   {data.channels.map(ch => (
                     <span key={ch} className="px-3 py-1 bg-brand-bg border border-brand-border rounded-lg text-[10px] font-bold uppercase tracking-tight flex items-center gap-1.5">
                       {ch === 'sms' ? <Smartphone size={12} /> : <Mail size={12} />}
                       {ch}
                     </span>
                   ))}
                </div>
             </div>
             <div className="space-y-2">
                <p className="text-[9px] font-bold text-brand-gray uppercase tracking-widest">Experience Form</p>
                <p className="text-xs font-bold text-brand-dark flex items-center gap-2">
                  <FileText size={14} className="text-brand-blue" />
                  {forms.find(f => f.id === data.formId)?.name}
                </p>
             </div>
             <div className="space-y-2">
                <p className="text-[9px] font-bold text-brand-gray uppercase tracking-widest">Audience Reach</p>
                <p className="text-xs font-bold text-brand-dark flex items-center gap-2">
                   <Target size={14} className="text-brand-blue" />
                   5,590 Total Patients
                </p>
             </div>
             <div className="space-y-2">
                <p className="text-[9px] font-bold text-brand-gray uppercase tracking-widest">Schedule</p>
                <p className="text-xs font-bold text-brand-dark flex items-center gap-2">
                   <Clock size={14} className="text-brand-blue" />
                   {data.scheduleType === 'now' ? 'Instant Delivery' : 
                    data.scheduleType === 'range' ? `${data.startDate} to ${data.endDate}` :
                    `Starting ${data.startDate}`}
                </p>
             </div>
          </div>

          <div className="pt-8 border-t border-brand-border grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-5 bg-brand-bg rounded-2xl border border-brand-border space-y-4">
                <div className="flex items-center justify-between">
                   <p className="text-[9px] font-bold text-brand-gray uppercase tracking-widest">SMS Preview Content</p>
                   <MessageSquare size={14} className="text-brand-blue" />
                </div>
                <p className="text-sm font-medium text-brand-dark italic leading-relaxed">
                   "{data.smsContent.replace('[Patient Name]', 'Jane').replace('[Form Link]', 'lymbus.health/v2k8')}"
                </p>
             </div>
             <div className="p-5 bg-brand-bg rounded-2xl border border-brand-border space-y-4">
                <div className="flex items-center justify-between">
                   <p className="text-[9px] font-bold text-brand-gray uppercase tracking-widest">Compliance Status</p>
                   <CheckCircle2 size={14} className="text-emerald-500" />
                </div>
                <div className="space-y-2">
                   <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-emerald-500 flex items-center justify-center text-white"><CheckCircle2 size={10} /></div>
                      <span className="text-[9px] font-bold text-brand-dark uppercase">HIPAA Compliant Delivery</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-emerald-500 flex items-center justify-center text-white"><CheckCircle2 size={10} /></div>
                      <span className="text-[9px] font-bold text-brand-dark uppercase">TCPA Consent Verified</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-emerald-500 flex items-center justify-center text-white"><CheckCircle2 size={10} /></div>
                      <span className="text-[9px] font-bold text-brand-dark uppercase">Encrypted Data Transit</span>
                   </div>
                </div>
             </div>
          </div>
       </div>


    </div>
  );

  return (
    <div className="fixed inset-0 bg-brand-bg z-[1000] flex flex-col animate-in fade-in duration-300 overflow-hidden">
      {/* Header */}
      <header className="h-20 bg-white border-b border-brand-border px-8 flex items-center justify-between shrink-0 z-50">
        <div className="flex items-center gap-6">
          <button 
            onClick={handleDiscard}
            className="flex items-center gap-3 text-brand-gray hover:text-brand-dark transition-all font-bold text-[10px] uppercase tracking-widest group px-4 py-2 hover:bg-brand-bg rounded-xl border border-transparent hover:border-brand-border"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Cancel</span>
          </button>
          <div className="h-8 w-px bg-brand-border" />
          <div className="flex flex-col">
            <input 
               className="text-2xl font-bold text-brand-dark tracking-tighter bg-transparent border-none p-0 focus:ring-0 w-full"
               value={data.name}
               onChange={e => setData({...data, name: e.target.value})}
               placeholder="Untitled Campaign"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => toast.success("Draft saved successfully")}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border text-[10px] font-bold text-brand-gray uppercase tracking-widest hover:bg-brand-bg transition-all active:scale-95"
          >
             <FileText size={14} />
             Save Draft
          </button>
          <button 
            onClick={() => toast.success("Test campaign sent to your device")}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border text-[10px] font-bold text-brand-gray uppercase tracking-widest hover:bg-brand-bg transition-all active:scale-95"
          >
             <Smartphone size={14} />
             Send Test
          </button>
          <button 
            onClick={handleDiscard}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-red-50 text-[10px] font-bold text-red-500 uppercase tracking-widest hover:bg-red-50 transition-all active:scale-95"
          >
             <Trash2 size={14} />
             Discard
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 overflow-hidden flex bg-brand-bg">
        {/* Step Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
          <div className="flex-1 p-8 lg:p-12">
            <div className="max-w-6xl mx-auto flex gap-12 items-start">
              {/* Stepper (Desktop) - Inside Canvas Left Top */}
              <nav className="hidden xl:flex flex-col gap-6 w-48 shrink-0 sticky top-0">
                {steps.map((s, idx) => {
                  const isActive = activeStep === s.id;
                  const isPast = steps.findIndex(step => step.id === activeStep) > idx;
                  return (
                    <button 
                      key={s.id} 
                      onClick={() => setActiveStep(s.id)}
                      className="flex items-center gap-3 group relative text-left"
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 shrink-0",
                        isActive ? "bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/20" : 
                        isPast ? "bg-emerald-500 border-emerald-500 text-white" : "bg-white border-brand-border text-brand-gray group-hover:border-brand-blue/30"
                      )}>
                        {isPast ? <CheckCircle2 size={20} /> : <s.icon size={20} />}
                      </div>
                      <div className="flex-1 min-w-0">
                         <p className={cn(
                           "text-[10px] font-bold uppercase tracking-widest transition-colors leading-tight",
                           isActive ? "text-brand-blue" : "text-brand-gray"
                         )}>{s.label}</p>
                      </div>
                      {isActive && (
                        <Motion.div 
                          layoutId="active-step-indicator"
                          className="absolute -left-2 w-1 h-6 bg-brand-blue rounded-full"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              <div className="flex-1 max-w-4xl">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {activeStep === 'audience' && renderAudienceStep()}
                    {activeStep === 'content' && renderContentStep()}
                    {activeStep === 'schedule' && renderScheduleStep()}
                    {activeStep === 'review' && renderReviewStep()}
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Persistent Bottom Actions */}
          <div className="sticky bottom-0 bg-white/80 backdrop-blur-md border-t border-brand-border p-6 mt-auto">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
               <button 
                 onClick={handlePrev}
                 disabled={activeStep === 'audience'}
                 className={cn(
                   "flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all",
                   activeStep === 'audience' ? "opacity-0 pointer-events-none" : "text-brand-gray hover:text-brand-dark"
                 )}
               >
                 <ChevronLeft size={16} />
                 Previous Step
               </button>
               
               <div className="flex items-center gap-6">
                 <div className="hidden sm:flex flex-col items-end">
                    <p className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">
                      {activeStep === 'audience' ? 'Step 1: Audience' : 
                       activeStep === 'content' ? 'Step 2: Content' : 
                       activeStep === 'schedule' ? 'Step 3: Schedule' : 'Step 4: Review'}
                    </p>
                    <p className="text-[8px] font-bold text-brand-gray uppercase tracking-widest">Autosaved at 9:41 AM</p>
                 </div>
                 <button 
                    onClick={handleNext}
                    className="px-10 py-3 bg-brand-blue text-white rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-brand-blue/20 hover:bg-brand-blue/90 hover:-translate-y-0.5 transition-all flex items-center gap-3"
                  >
                    {activeStep === 'review' ? 'Launch Campaign' : (activeStep === 'schedule' ? 'Review' : 'Next Step')}
                    <ChevronRight size={16} />
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Live Preview (Conditional for Content step mostly, but helpful for others) */}
        <aside className="hidden lg:flex w-[400px] border-l border-brand-border bg-white flex-col">
          <div className="px-8 py-6 border-b border-brand-border flex items-center justify-between shrink-0">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">Live Preview</span>
             </div>
             <div className="bg-brand-bg p-1 rounded-lg flex gap-1">
                <button 
                  onClick={() => setActivePreview('sms')}
                  className={cn("p-2 rounded-md transition-all", activePreview === 'sms' ? "bg-white text-brand-blue shadow-sm" : "text-brand-gray hover:text-brand-dark")}
                >
                  <Smartphone size={16} />
                </button>
                <button 
                  onClick={() => setActivePreview('email')}
                  className={cn("p-2 rounded-md transition-all", activePreview === 'email' ? "bg-white text-brand-blue shadow-sm" : "text-brand-gray hover:text-brand-dark")}
                >
                  <Mail size={16} />
                </button>
             </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 flex flex-col items-center">
             <div className="w-full max-w-[320px] sticky top-0">
                <AnimatePresence mode="wait">
                  {activePreview === 'sms' ? (
                    <Motion.div 
                      key="sms-prev"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full aspect-[9/18.5] bg-black rounded-[44px] border-[8px] border-zinc-800 p-3 flex flex-col shadow-2xl overflow-hidden relative"
                    >
                       <div className="w-24 h-6 bg-black absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[20px] z-10" />
                       <div className="flex justify-between items-center pt-2 px-5 text-[9px] text-white font-bold">
                          <span>9:41</span>
                          <div className="flex gap-1.5">
                             <div className="w-4 h-2 bg-white/20 rounded-sm" />
                             <div className="w-4 h-2 bg-white/20 rounded-sm" />
                          </div>
                       </div>

                       <div className="flex-1 bg-zinc-100 mt-6 rounded-t-[24px] p-4 space-y-4 overflow-y-auto no-scrollbar pt-8">
                          <div className="text-center mb-6">
                             <p className="text-[8px] text-zinc-400 font-bold uppercase tracking-widest">Today 9:41 AM</p>
                          </div>
                          <div className="max-w-[85%] bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-zinc-200">
                             <p className="text-xs text-zinc-800 leading-relaxed font-medium break-words">
                                {data.smsContent
                                  .replace('[Patient Name]', 'Jane')
                                  .replace('[Form Link]', 'lymbus.health/v2k8')
                                  .replace('[Facility Name]', 'Main Hospital') || 'Start typing to see preview...'}
                             </p>
                          </div>
                          {data.formId && (
                             <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-3 flex items-center gap-3 shadow-sm">
                                <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white">
                                   <FileText size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                   <p className="text-[8px] font-bold text-brand-dark uppercase truncate">{forms.find(f => f.id === data.formId)?.name}</p>
                                   <p className="text-[7px] text-brand-gray font-bold uppercase">Dynamic Survey Attached</p>
                                </div>
                             </div>
                          )}
                       </div>
                       
                       <div className="h-12 bg-white border-t border-zinc-200 p-3 flex gap-3">
                          <div className="flex-1 bg-zinc-100 rounded-full" />
                          <div className="w-8 h-8 bg-brand-blue rounded-full" />
                       </div>
                    </Motion.div>
                  ) : (
                    <Motion.div 
                      key="email-prev"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full bg-white rounded-[24px] shadow-2xl border border-brand-border overflow-hidden flex flex-col h-[550px]"
                    >
                       <div className="bg-brand-bg/50 border-b border-brand-border p-5 space-y-1.5">
                          <p className="text-[8px] text-brand-gray font-bold uppercase tracking-widest">From: Lymbus Health System</p>
                          <p className="text-xs text-brand-dark font-bold truncate">Subject: {data.emailSubject || '(No Subject)'}</p>
                       </div>
                       <div className="p-6 flex-1 bg-white overflow-y-auto custom-scrollbar">
                          <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6 mx-auto">
                             <Target size={28} />
                          </div>
                          <div className="text-[11px] text-brand-dark leading-relaxed whitespace-pre-wrap font-medium">
                             {data.emailContent
                               .replace('[Patient Name]', 'Jane Smith')
                               .replace('[Form Link]', 'https://lymbus.health/survey/' + data.formId)
                               .replace('[Facility Name]', 'Main Hospital') || 'Compose your email content...'}
                          </div>
                          {data.formId && (
                             <div className="mt-8 p-5 bg-brand-bg border border-brand-border rounded-2xl flex flex-col items-center gap-4 text-center group hover:border-brand-blue transition-colors shadow-sm">
                                <div className="w-12 h-12 bg-white border border-brand-border rounded-xl flex items-center justify-center text-brand-blue shadow-sm">
                                   <FileText size={20} />
                                </div>
                                <div>
                                   <p className="text-[10px] font-bold text-brand-dark uppercase tracking-tight">{forms.find(f => f.id === data.formId)?.name}</p>
                                   <p className="text-[8px] text-brand-gray font-bold uppercase tracking-widest mt-1">Experience Assessment</p>
                                </div>
                                <button className="w-full py-2.5 bg-brand-blue text-white rounded-xl text-[9px] font-bold uppercase tracking-widest shadow-lg shadow-brand-blue/20">Open Survey</button>
                             </div>
                          )}
                          <div className="mt-8 pt-6 border-t border-brand-border">
                             <p className="text-[8px] text-brand-gray text-center font-bold uppercase tracking-widest leading-loose">
                                This is a secure clinical message from Lymbus Health.<br/>
                                <button className="text-brand-blue">Unsubscribe</button> from future alerts.
                             </p>
                          </div>
                       </div>
                    </Motion.div>
                  )}
                </AnimatePresence>
                
                <div className="mt-8 p-4 bg-brand-bg rounded-2xl border border-brand-border border-dashed">
                   <div className="flex gap-3">
                      <Zap size={16} className="text-brand-blue shrink-0" />
                      <p className="text-[9px] font-bold text-brand-gray leading-normal uppercase">
                         Preview reflects real-time changes including dynamic link shorteners and mobile responsive formatting.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </aside>
      </div>
      <ConfirmationModal 
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
        onConfirm={confirmModal.onConfirm}
        title={confirmModal.title}
        message={confirmModal.message}
        confirmLabel={confirmModal.confirmLabel}
        variant={confirmModal.variant}
      />
    </div>
  );
};

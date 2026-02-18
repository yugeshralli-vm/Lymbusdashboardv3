import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Building2, 
  Zap, 
  MapPin, 
  Save, 
  ChevronDown,
  ChevronLeft,
  Trash2,
  Mail,
  MessageSquare,
  Plus,
  Minus
} from 'lucide-react';
import { toast } from "sonner";
import { cn } from "@/app/components/ui/utils";
import { ConfirmationModal } from "./ConfirmationModal";
import { useFocusTrap } from './useFocusTrap';

interface FacilityOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  facility: any;
}

export const FacilityOverlay = ({ isOpen, onClose, facility }: FacilityOverlayProps) => {
  const [activeTab, setActiveTab] = useState<'details' | 'integrations'>('details');
  const [isConfirmArchiveOpen, setIsConfirmArchiveOpen] = useState(false);
  const [activeIntegrations, setActiveIntegrations] = useState<string[]>(['sms', 'email']);
  const [editingIntegrationId, setEditingIntegrationId] = useState<string | null>(null);
  const [smsParams, setSmsParams] = useState<{ id: number; key: string; value: string }[]>([
    { id: 1, key: 'to', value: '{{phone_number}}' },
    { id: 2, key: 'message', value: '{{message_body}}' },
  ]);
  const [nextParamId, setNextParamId] = useState(3);

  const { containerRef } = useFocusTrap({ isOpen, onClose });

  if (!isOpen || !facility) return null;

  const addParam = () => {
    setSmsParams(prev => [...prev, { id: nextParamId, key: '', value: '' }]);
    setNextParamId(prev => prev + 1);
  };

  const removeParam = (id: number) => {
    setSmsParams(prev => prev.filter(p => p.id !== id));
  };

  const updateParam = (id: number, field: 'key' | 'value', val: string) => {
    setSmsParams(prev => prev.map(p => p.id === id ? { ...p, [field]: val } : p));
  };

  const toggleIntegration = (id: string) => {
    setActiveIntegrations(prev => {
      const active = prev.includes(id);
      if (active) {
        toast.error(`${id.toUpperCase()} integration disabled`);
        return prev.filter(i => i !== id);
      } else {
        toast.success(`${id.toUpperCase()} integration enabled`);
        return [...prev, id];
      }
    });
  };

  const tabs = [
    { id: 'details', label: 'Details', icon: Building2 },
    { id: 'integrations', label: 'Integrations', icon: Zap },
  ];

  const integrationTypes = [
    { id: 'sms', icon: MessageSquare, label: 'SMS Messaging', desc: 'Patient notifications & alerts', color: 'blue' },
    { id: 'email', icon: Mail, label: 'Email Campaigns', desc: 'Newsletter & clinical updates', color: 'emerald' },
  ];

  return (
    <AnimatePresence>
      <Motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          aria-hidden="true"
        />
        
        <Motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-card w-full max-w-[800px] max-h-[90vh] rounded-[24px] border border-brand-border shadow-2xl overflow-hidden flex flex-col"
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${facility.name} settings`}
        >
          {/* Header */}
          <div className="p-6 border-b border-brand-border flex items-start justify-between shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-blue">
                <Building2 size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-brand-dark">{facility.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-brand-gray font-medium">{facility.id} • {facility.location}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-brand-bg rounded-full transition-colors text-brand-gray"
              aria-label="Close facility settings"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="px-6 py-2 border-b border-brand-border bg-brand-bg/30 shrink-0">
            <div className="flex gap-8 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "flex items-center gap-2 py-4 text-sm font-bold transition-all relative whitespace-nowrap",
                    activeTab === tab.id 
                      ? "text-brand-blue" 
                      : "text-brand-gray hover:text-brand-dark"
                  )}
                >
                  <tab.icon size={16} />
                  {tab.label}
                  {activeTab === tab.id && (
                    <Motion.div 
                      layoutId="activeFacilityTab" 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            <AnimatePresence mode="wait">
              {activeTab === 'details' && (
                <Motion.div
                  key="details"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Facility Name</label>
                      <input 
                        type="text" 
                        defaultValue={facility.name}
                        className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Facility ID</label>
                      <input 
                        type="text" 
                        defaultValue={facility.id}
                        className="w-full bg-brand-bg/50 rounded-xl px-4 py-3 text-sm font-bold text-brand-gray border border-brand-border outline-none cursor-not-allowed"
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Location / Campus</label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" />
                        <input 
                          type="text" 
                          defaultValue={facility.location}
                          className="w-full bg-brand-bg rounded-xl pl-11 pr-4 py-3 text-sm font-bold text-brand-dark border border-brand-border focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Facility Type</label>
                      <div className="relative">
                        <select 
                          defaultValue={facility.type}
                          className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all appearance-none"
                        >
                          <option>Hospital</option>
                          <option>Clinic</option>
                          <option>Research</option>
                          <option>Pharmacy</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-brand-border">
                    <h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-4">Contact Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Main Phone</label>
                        <input 
                          type="tel" 
                          defaultValue="+1 (555) 000-0000"
                          className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Admin Email</label>
                        <input 
                          type="email" 
                          defaultValue={`admin@${facility.name.toLowerCase().replace(/\s+/g, '')}.com`}
                          className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </Motion.div>
              )}

              {activeTab === 'integrations' && (
                <Motion.div
                  key="integrations"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                >
                  <AnimatePresence mode="wait">
                    {!editingIntegrationId ? (
                      <Motion.div
                        key="int-list"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-3"
                      >
                        {integrationTypes.map((int) => {
                          const isConnected = activeIntegrations.includes(int.id);
                          
                          return (
                            <div 
                              key={int.id} 
                              onClick={() => setEditingIntegrationId(int.id)}
                              className="bg-white border border-brand-border rounded-[12px] p-6 flex items-center justify-between group hover:border-brand-blue/30 transition-all shadow-sm cursor-pointer"
                            >
                              <div className="flex items-center gap-5">
                                <div className={cn(
                                  "w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0 transition-colors",
                                  isConnected 
                                    ? int.color === 'blue' ? "bg-blue-50 text-brand-blue" : "bg-emerald-50 text-emerald-600"
                                    : "bg-brand-bg text-brand-gray"
                                )}>
                                  <int.icon size={22} />
                                </div>
                                <div className="space-y-1">
                                  <h5 className="text-[15px] font-bold text-brand-dark leading-none">{int.label}</h5>
                                  <p className="text-xs text-brand-gray font-medium">{int.desc}</p>
                                  <div className="flex items-center gap-2 pt-1">
                                    {isConnected ? (
                                      <span className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider border border-emerald-100/50">
                                        Connected
                                      </span>
                                    ) : (
                                      <span className="px-2 py-1 rounded-md bg-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-wider border border-gray-100">
                                        Disconnected
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-4">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleIntegration(int.id);
                                  }}
                                  className={cn(
                                    "w-12 h-6 rounded-full p-1 transition-all relative flex items-center",
                                    isConnected ? "bg-brand-blue shadow-[0_0_10px_rgba(54,73,233,0.3)]" : "bg-gray-200"
                                  )}
                                  role="switch"
                                  aria-checked={isConnected}
                                  aria-label={`Toggle ${int.label} ${isConnected ? 'off' : 'on'}`}
                                >
                                  <div className={cn(
                                    "w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200",
                                    isConnected ? "translate-x-6" : "translate-x-0"
                                  )} />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </Motion.div>
                    ) : (
                      <Motion.div
                        key="int-edit"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <button 
                          onClick={() => setEditingIntegrationId(null)}
                          className="flex items-center gap-2 text-brand-gray hover:text-brand-dark transition-colors mb-2"
                        >
                          <ChevronLeft size={16} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Back to Integrations</span>
                        </button>

                        <div className="bg-white border border-brand-border rounded-[12px] p-6 shadow-sm">
                          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brand-border">
                            <div className={cn(
                              "w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0",
                              editingIntegrationId === 'sms' ? "bg-blue-50 text-brand-blue" : editingIntegrationId === 'email' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                              )}>
                              {React.createElement(integrationTypes.find(i => i.id === editingIntegrationId)?.icon || MessageSquare, { size: 24 })}
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-brand-dark">
                                {integrationTypes.find(i => i.id === editingIntegrationId)?.label} Settings
                              </h4>
                              <p className="text-xs text-brand-gray font-medium">
                                Configure credentials and default behavior for {integrationTypes.find(i => i.id === editingIntegrationId)?.label.toLowerCase()}.
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {editingIntegrationId === 'sms' && (
                              <>
                                <div className="md:col-span-2 space-y-2">
                                  <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">URL</label>
                                  <input type="url" defaultValue="https://api.example.com/sms/send" className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none" />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Connection Name</label>
                                  <input type="text" defaultValue="Primary SMS Gateway" className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none" />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Method</label>
                                  <select className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none">
                                    <option>POST</option>
                                    <option>GET</option>
                                    <option>PUT</option>
                                    <option>PATCH</option>
                                    <option>DELETE</option>
                                  </select>
                                </div>
                                <div className="md:col-span-2 space-y-3 mt-2 pt-6 border-t border-brand-border">
                                  <div className="flex items-center justify-between">
                                    <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Parameters</label>
                                    <button 
                                      onClick={addParam}
                                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-blue/10 text-brand-blue font-bold text-[10px] uppercase tracking-widest hover:bg-brand-blue/20 transition-all"
                                    >
                                      <Plus size={12} />
                                      Add
                                    </button>
                                  </div>
                                  {smsParams.length > 0 && (
                                    <div className="flex items-center gap-2 px-1">
                                      <span className="w-1/2 text-[9px] font-bold text-brand-gray/60 uppercase tracking-widest">Key</span>
                                      <span className="w-1/2 text-[9px] font-bold text-brand-gray/60 uppercase tracking-widest">Value</span>
                                      <span className="w-[40px]" />
                                    </div>
                                  )}
                                  <div className="space-y-2">
                                    {smsParams.map(param => (
                                      <div key={param.id} className="flex items-center gap-2">
                                        <input 
                                          type="text" 
                                          value={param.key} 
                                          placeholder="key"
                                          onChange={(e) => updateParam(param.id, 'key', e.target.value)}
                                          className="w-1/2 bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none"
                                        />
                                        <input 
                                          type="text" 
                                          value={param.value} 
                                          placeholder="value"
                                          onChange={(e) => updateParam(param.id, 'value', e.target.value)}
                                          className="w-1/2 bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none"
                                        />
                                        <button 
                                          onClick={() => removeParam(param.id)}
                                          className="p-2 rounded-lg hover:bg-red-50 text-brand-gray hover:text-red-500 transition-colors shrink-0"
                                          aria-label={`Remove parameter ${param.key}`}
                                        >
                                          <Minus size={16} />
                                        </button>
                                      </div>
                                    ))}
                                    {smsParams.length === 0 && (
                                      <p className="text-xs text-brand-gray/60 font-medium py-3 text-center bg-brand-bg/50 rounded-xl border border-dashed border-brand-border">
                                        No parameters added. Click "Add" to create one.
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </>
                            )}

                            {editingIntegrationId === 'email' && (
                              <>
                                <div className="space-y-2">
                                  <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Email Account</label>
                                  <input type="email" defaultValue={`admin@${facility.name.toLowerCase().replace(/\s+/g, '')}.com`} className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none" />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Password</label>
                                  <input type="password" defaultValue="••••••••••••" className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none" />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Mailbox Type</label>
                                  <select className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none">
                                    <option>IMAP</option>
                                    <option>POP3</option>
                                    <option>SMTP</option>
                                    <option>Exchange</option>
                                  </select>
                                </div>
                                <div className="space-y-2">
                                  <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Server IP</label>
                                  <input type="text" defaultValue="192.168.1.100" className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none" />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Port</label>
                                  <input type="text" defaultValue="993" className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none" />
                                </div>
                                <div className="space-y-2 flex items-end">
                                  <label className="flex items-center gap-3 cursor-pointer py-3">
                                    <input type="checkbox" defaultChecked={false} className="w-5 h-5 rounded-md border-2 border-brand-border text-brand-blue accent-brand-blue cursor-pointer" />
                                    <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Authentication</span>
                                  </label>
                                </div>
                              </>
                            )}
                          </div>

                          <div className="mt-8 pt-6 border-t border-brand-border flex justify-end">
                            <button 
                              onClick={() => {
                                if (!activeIntegrations.includes(editingIntegrationId!)) {
                                  setActiveIntegrations([...activeIntegrations, editingIntegrationId!]);
                                }
                                toast.success('Integration settings updated');
                                setEditingIntegrationId(null);
                              }}
                              className="px-6 py-2.5 rounded-xl bg-brand-blue text-white font-bold text-[10px] uppercase tracking-widest hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/10"
                            >
                              Save {integrationTypes.find(i => i.id === editingIntegrationId)?.label.split(' ')[0]} Settings
                            </button>
                          </div>
                        </div>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </Motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-brand-border flex items-center justify-between shrink-0 bg-white">
            <button 
              onClick={() => setIsConfirmArchiveOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-100 text-red-500 font-bold text-[10px] uppercase tracking-widest hover:bg-red-50 transition-all"
            >
              <Trash2 size={14} />
              Archive Facility
            </button>
            <div className="flex items-center gap-3">
              <button 
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl border border-brand-border text-brand-gray font-bold text-[10px] uppercase tracking-widest hover:bg-brand-bg transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  toast.success(`${facility.name} updated successfully`);
                  onClose();
                }}
                className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-brand-dark text-white font-bold text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95"
              >
                <Save size={14} />
                Save Changes
              </button>
            </div>
          </div>
        </Motion.div>

        <ConfirmationModal 
          isOpen={isConfirmArchiveOpen}
          onClose={() => setIsConfirmArchiveOpen(false)}
          onConfirm={() => {
            toast.error('Facility archived successfully');
            setIsConfirmArchiveOpen(false);
            onClose();
          }}
          title="Archive Facility"
          message={`Are you sure you want to archive ${facility.name}? This will disable all active data sources and communication channels.`}
          confirmLabel="Archive"
          variant="danger"
        />
      </Motion.div>
    </AnimatePresence>
  );
};
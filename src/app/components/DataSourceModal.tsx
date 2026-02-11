import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronDown, 
  Database, 
  Globe, 
  HardDrive, 
  FileText, 
  FileSpreadsheet, 
  Check,
  ChevronLeft,
  Plus
} from 'lucide-react';

interface DataSourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  facilityName?: string;
}

// Keeping this but we will hide it in the new view as per user request
export const AddDataSourceButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 rounded-xl bg-brand-blue text-white font-bold text-sm hover:shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2"
      >
        <Plus size={18} />
        Add Data Source
      </button>
      <DataSourceModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

type SourceType = 'emr' | 'database' | 'rest' | 'excel' | 'sheets';

export const DataSourceModal = ({ isOpen, onClose, facilityName }: DataSourceModalProps) => {
  const [step, setStep] = useState<'select' | 'configure'>('select');
  const [selectedSource, setSelectedSource] = useState<SourceType | null>(null);
  const [clinic, setClinic] = useState(facilityName || 'City General Hospital');
  
  // Update clinic when facilityName changes or modal opens
  useEffect(() => {
    if (facilityName) {
      setClinic(facilityName);
    }
  }, [facilityName, isOpen]);

  // Track if a source is configured (has data saved)
  const [configuredSources, setConfiguredSources] = useState<Record<string, boolean>>({
    emr: true,
    excel: true,
    database: false,
    rest: false,
    sheets: false
  });

  // Track if a source is enabled (connection toggle)
  const [enabledSources, setEnabledSources] = useState<Record<string, boolean>>({
    emr: true,
    excel: true,
    database: false,
    rest: false,
    sheets: false
  });

  const handleSourceSelect = (type: SourceType) => {
    setSelectedSource(type);
    setStep('configure');
  };

  const handleToggle = (type: SourceType, e: React.MouseEvent) => {
    e.stopPropagation();
    setEnabledSources(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const handleBack = () => {
    setStep('select');
    setSelectedSource(null);
  };

  const handleSave = () => {
    if (selectedSource) {
      setConfiguredSources(prev => ({ ...prev, [selectedSource]: true }));
      // Also enable it by default if it's newly configured
      setEnabledSources(prev => ({ ...prev, [selectedSource]: true }));
      setStep('select');
      setSelectedSource(null);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <Motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4"
          >
            <div 
              className="bg-card rounded-[24px] w-full max-w-[800px] max-h-[90vh] overflow-hidden shadow-2xl pointer-events-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex items-start justify-between shrink-0">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-brand-dark">Manage Data Sources</h2>
                  </div>
                  <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest ml-11">
                    Configure data integrations for {clinic}
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-brand-gray"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                {!facilityName && step === 'select' && (
                  <div className="mb-8">
                    <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-2 block">
                      Facility Selection
                    </label>
                    <div className="relative">
                      <button className="w-full bg-[#F5F7F7] rounded-xl px-4 py-3 text-left flex items-center justify-between text-sm font-medium text-brand-dark hover:bg-[#EDF0F0] transition-colors">
                        {clinic}
                        <ChevronDown size={16} className="text-brand-gray" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 'select' ? (
                  <div className="space-y-3">
                    <SourceCard 
                      icon={HardDrive}
                      title="EMR System"
                      desc="Electronic Medical Records"
                      isConfigured={configuredSources.emr}
                      isEnabled={enabledSources.emr}
                      onToggle={(e: React.MouseEvent) => handleToggle('emr', e)}
                      onClick={() => handleSourceSelect('emr')}
                    />
                    <SourceCard 
                      icon={Database}
                      title="Database"
                      desc="Direct database connection"
                      isConfigured={configuredSources.database}
                      isEnabled={enabledSources.database}
                      onToggle={(e: React.MouseEvent) => handleToggle('database', e)}
                      onClick={() => handleSourceSelect('database')}
                    />
                    <SourceCard 
                      icon={Globe}
                      title="Rest API"
                      desc="Connect via REST API endpoints"
                      isConfigured={configuredSources.rest}
                      isEnabled={enabledSources.rest}
                      onToggle={(e: React.MouseEvent) => handleToggle('rest', e)}
                      onClick={() => handleSourceSelect('rest')}
                    />
                    <SourceCard 
                      icon={FileSpreadsheet}
                      title="Excel File"
                      desc="Import data from spreadsheets"
                      isConfigured={configuredSources.excel}
                      isEnabled={enabledSources.excel}
                      onToggle={(e: React.MouseEvent) => handleToggle('excel', e)}
                      onClick={() => handleSourceSelect('excel')}
                    />
                    <SourceCard 
                      icon={FileText}
                      title="Google Sheets"
                      desc="Sync data from Google Sheets"
                      isConfigured={configuredSources.sheets}
                      isEnabled={enabledSources.sheets}
                      onToggle={(e: React.MouseEvent) => handleToggle('sheets', e)}
                      onClick={() => handleSourceSelect('sheets')}
                    />
                  </div>
                ) : (
                  <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                    {/* Selected Source Header */}
                    {selectedSource && (
                      <SourceCard 
                        icon={
                          selectedSource === 'emr' ? HardDrive :
                          selectedSource === 'database' ? Database :
                          selectedSource === 'rest' ? Globe :
                          selectedSource === 'excel' ? FileSpreadsheet :
                          FileText
                        }
                        title={
                          selectedSource === 'emr' ? 'EMR System' :
                          selectedSource === 'database' ? 'Database' :
                          selectedSource === 'rest' ? 'Rest API' :
                          selectedSource === 'excel' ? 'Excel File' :
                          'Google Sheets'
                        }
                        desc={
                          selectedSource === 'emr' ? 'Connect to Electronic Medical Records' :
                          selectedSource === 'database' ? 'Direct database connection' :
                          selectedSource === 'rest' ? 'Connect via REST API endpoints' :
                          selectedSource === 'excel' ? 'Import data from spreadsheets' :
                          'Sync data from Google Sheets'
                        }
                        isConfigured={configuredSources[selectedSource]}
                        isEnabled={enabledSources[selectedSource]}
                        onToggle={(e: React.MouseEvent) => handleToggle(selectedSource, e)}
                        isCompact
                      />
                    )}

                    {/* Dynamic Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <Input label="Data Source Name" placeholder="e.g., City General Hospital" defaultValue={clinic} />
                      </div>

                      {selectedSource === 'emr' && (
                        <>
                          <div className="md:col-span-2">
                            <Input label="API Endpoint" placeholder="https://..." defaultValue="https://sunrise.health/api" />
                          </div>
                          <Input label="FHIR Version" defaultValue="FHIR R4" icon={ChevronDown} />
                          <Input label="Client ID" defaultValue="SC_21324" />
                        </>
                      )}

                      {selectedSource === 'database' && (
                        <>
                          <div className="md:col-span-2">
                            <Input label="Host" placeholder="db.example.com" defaultValue="db.cgeneral.com" />
                          </div>
                          <Input label="Database Name" defaultValue="lymbus_data" />
                          <Input label="Port" defaultValue="5432" />
                          <div className="md:col-span-2">
                            <Input label="Database Type" defaultValue="PostgreSQL" icon={ChevronDown} />
                          </div>
                        </>
                      )}

                      {selectedSource === 'rest' && (
                        <>
                          <div className="md:col-span-2">
                            <Input label="Base URL" placeholder="https://api..." defaultValue="https://api.cgeneral.com/v1" />
                          </div>
                          <Input label="Auth Type" defaultValue="API Key" icon={ChevronDown} />
                          <Input label="Rate Limit (req/min)" defaultValue="60" />
                        </>
                      )}
                      
                      {selectedSource === 'excel' && (
                        <div className="md:col-span-2 h-32 border-2 border-dashed border-brand-border rounded-xl flex flex-col items-center justify-center text-brand-gray gap-2 cursor-pointer hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-colors">
                           <FileSpreadsheet size={24} className="opacity-50" />
                           <span className="text-xs font-bold">Click to upload or drag file</span>
                        </div>
                      )}

                      {selectedSource === 'sheets' && (
                        <div className="md:col-span-2">
                          <Input 
                            label="Google Sheet URL" 
                            placeholder="https://docs.google.com/spreadsheets/d/..." 
                          />
                          <p className="mt-2 text-[10px] text-brand-gray font-medium px-1">
                            Please ensure the sheet is shared with the Lymbus service account.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-card rounded-b-[24px]">
                {step === 'configure' && (
                  <button 
                    onClick={handleBack}
                    className="px-6 py-2.5 rounded-xl border border-gray-200 text-brand-gray font-bold text-sm hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                )}
                <button 
                  onClick={step === 'select' ? onClose : handleSave}
                  className={`px-6 py-2.5 rounded-xl bg-brand-blue text-white font-bold text-sm hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 flex items-center gap-2`}
                >
                  {step === 'select' ? 'Done' : 'Save Configuration'}
                </button>
              </div>
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Toggle = ({ isOn, onToggle }: { isOn: boolean; onToggle: (e: React.MouseEvent) => void }) => (
  <div 
    onClick={onToggle}
    className={`w-12 h-7 rounded-full p-1 cursor-pointer transition-colors relative shrink-0 ${isOn ? 'bg-brand-blue' : 'bg-brand-border'}`}
  >
    <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${isOn ? 'translate-x-5' : 'translate-x-0'}`} />
  </div>
);

const SourceCard = ({ icon: Icon, title, desc, onClick, isConfigured, isEnabled, onToggle, isCompact }: any) => (
  <div 
    onClick={onClick}
    className={`relative p-6 rounded-[12px] border border-brand-border bg-card hover:border-brand-blue/20 transition-all cursor-pointer group flex items-center justify-between gap-4 ${isCompact ? 'pointer-events-none' : ''}`}
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-[#F5F7F7] flex items-center justify-center text-brand-dark shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Icon size={20} />
      </div>
      
      <div>
        <h3 className="font-bold text-brand-dark text-sm mb-0.5">{title}</h3>
        <p className="text-xs text-brand-gray font-medium leading-relaxed mb-2">{desc}</p>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
            isConfigured 
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
              : 'bg-gray-50 text-gray-400 border border-gray-100'
          }`}>
            {isConfigured ? 'Configured' : 'Not Configured'}
          </span>
          {isConfigured && (
            <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
              isEnabled 
                ? 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20' 
                : 'bg-red-50 text-red-600 border border-red-100'
            }`}>
              {isEnabled ? 'Active' : 'Disabled'}
            </span>
          )}
        </div>
      </div>
    </div>

    <Toggle isOn={isEnabled} onToggle={onToggle} />
  </div>
);

const Input = ({ label, placeholder, defaultValue, icon: Icon }: any) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">
      {label}
    </label>
    <div className="relative">
      <input 
        type="text" 
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full bg-[#F5F7F7] rounded-xl px-4 py-3 text-sm font-medium text-brand-dark placeholder:text-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
        readOnly={!!Icon}
      />
      {Icon && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none">
          <Icon size={16} />
        </div>
      )}
    </div>
  </div>
);

import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import {
  X,
  HardDrive,
  Database,
  Globe,
  FileSpreadsheet,
  FileText,
  Building2,
  ChevronDown,
  CheckCircle2,
  Upload,
  ArrowRight,
  ArrowLeft,
  Plus,
  Save,
  Sparkles,
  AlertCircle,
  Server
} from 'lucide-react';
import { toast } from 'sonner';
import { useFocusTrap } from './useFocusTrap';

interface AddSourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (source: any) => void;
  facilities: { id: string; name: string; location: string }[];
}

const SOURCE_TYPES = [
  {
    type: 'emr',
    icon: HardDrive,
    label: 'EMR System',
    description: 'Connect to your Electronic Medical Record system via FHIR or HL7.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
    popular: true,
  },
  {
    type: 'database',
    icon: Database,
    label: 'Database',
    description: 'Connect directly to PostgreSQL, MySQL, or SQL Server instances.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    borderColor: 'border-violet-100',
    popular: false,
  },
  {
    type: 'rest',
    icon: Globe,
    label: 'REST API',
    description: 'Integrate with any RESTful API endpoint with authentication.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    borderColor: 'border-sky-100',
    popular: false,
  },
  {
    type: 'excel',
    icon: FileSpreadsheet,
    label: 'Excel File',
    description: 'Upload and sync data from Excel spreadsheets (.xlsx, .csv).',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    popular: false,
  },
  {
    type: 'sheets',
    icon: FileText,
    label: 'Google Sheets',
    description: 'Link a Google Sheets document for live data syncing.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    borderColor: 'border-teal-100',
    popular: true,
  },
];

export const AddSourceModal: React.FC<AddSourceModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  facilities,
}) => {
  const [step, setStep] = useState(1); // 1: select type, 2: configure
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFacility, setSelectedFacility] = useState('');
  const [isFacilityDropdownOpen, setIsFacilityDropdownOpen] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, string>>({
    name: '',
    endpoint: '',
    fhirVersion: 'FHIR R4',
    clientId: '',
    host: '',
    database: '',
    port: '5432',
    baseUrl: '',
    authType: 'API Key',
    rateLimit: '60',
    spreadsheetId: '',
    range: 'Sheet1!A1:Z1000',
  });

  const resetAndClose = () => {
    setStep(1);
    setSelectedType(null);
    setSelectedFacility('');
    setFormValues({
      name: '',
      endpoint: '',
      fhirVersion: 'FHIR R4',
      clientId: '',
      host: '',
      database: '',
      port: '5432',
      baseUrl: '',
      authType: 'API Key',
      rateLimit: '60',
      spreadsheetId: '',
      range: 'Sheet1!A1:Z1000',
    });
    setIsFacilityDropdownOpen(false);
    onClose();
  };

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setStep(2);
  };

  const handleSubmit = () => {
    if (!selectedType || !selectedFacility || !formValues.name) {
      toast.error('Please fill in all required fields');
      return;
    }

    const facility = facilities.find(f => f.id === selectedFacility);
    let endpoint = '';

    switch (selectedType) {
      case 'emr':
        endpoint = formValues.endpoint || 'https://example.com/api/FHIR/R4';
        break;
      case 'database':
        endpoint = `${formValues.host || 'localhost'}:${formValues.port}/${formValues.database || 'mydb'}`;
        break;
      case 'rest':
        endpoint = formValues.baseUrl || 'https://api.example.com/v1';
        break;
      case 'excel':
        endpoint = formValues.name + '.xlsx';
        break;
      case 'sheets':
        endpoint = `${formValues.spreadsheetId || 'spreadsheet_id'}  \u2022  ${formValues.range}`;
        break;
    }

    const newSource = {
      id: `DS-${String(Date.now()).slice(-3)}`,
      facilityId: selectedFacility,
      facilityName: facility?.name || '',
      facilityLocation: facility?.location || '',
      sourceType: selectedType,
      name: formValues.name,
      endpoint,
      status: 'active' as const,
      lastSync: 'Just now',
    };

    onAdd(newSource);
    toast.success(`"${formValues.name}" added successfully`, {
      description: `Connected to ${facility?.name}`,
    });
    resetAndClose();
  };

  const updateField = (key: string, value: string) => {
    setFormValues(prev => ({ ...prev, [key]: value }));
  };

  const selectedTypeMeta = SOURCE_TYPES.find(s => s.type === selectedType);
  const SelectedIcon = selectedTypeMeta?.icon || Database;

  const selectedFacilityData = facilities.find(f => f.id === selectedFacility);

  const { containerRef } = useFocusTrap({ isOpen, onClose: resetAndClose });

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4" ref={containerRef}>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
            aria-hidden="true"
          />
          <Motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-card w-full max-w-lg rounded-[24px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Add data source"
          >
            {/* Header */}
            <div className="p-6 pb-4 border-b border-brand-border shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {step === 2 && (
                    <button
                      onClick={() => { setStep(1); setSelectedType(null); }}
                      className="p-1.5 hover:bg-brand-bg rounded-lg transition-colors text-brand-gray"
                      aria-label="Go back to type selection"
                    >
                      <ArrowLeft size={18} />
                    </button>
                  )}
                  <div>
                    <h2 className="text-lg font-bold text-brand-dark">
                      {step === 1 ? 'Add Data Source' : `Configure ${selectedTypeMeta?.label}`}
                    </h2>
                    <p className="text-xs text-brand-gray font-medium mt-0.5">
                      {step === 1
                        ? 'Select the type of data source to connect'
                        : 'Provide connection details for this source'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={resetAndClose}
                  className="p-2 hover:bg-brand-bg rounded-xl transition-colors text-brand-gray"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Step indicators */}
              <div className="flex items-center gap-2 mt-4">
                <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 1 ? 'bg-brand-blue' : 'bg-brand-border'}`} />
                <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 2 ? 'bg-brand-blue' : 'bg-brand-border'}`} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <Motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    {SOURCE_TYPES.map((source) => {
                      const TypeIcon = source.icon;
                      return (
                        <button
                          key={source.type}
                          onClick={() => handleTypeSelect(source.type)}
                          className="w-full p-4 rounded-[16px] border border-brand-border hover:border-brand-blue/30 hover:shadow-md transition-all group text-left flex items-center gap-4 active:scale-[0.98]"
                        >
                          <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0 ${source.bg} ${source.color} group-hover:scale-110 transition-transform`}>
                            <TypeIcon size={22} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                                {source.label}
                              </h4>
                              {source.popular && (
                                <span className="text-[9px] font-bold text-brand-blue bg-brand-blue/10 px-1.5 py-0.5 rounded-md uppercase tracking-widest">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-brand-gray font-medium mt-0.5 leading-snug">
                              {source.description}
                            </p>
                          </div>
                          <ArrowRight size={16} className="text-brand-gray/30 group-hover:text-brand-blue transition-colors shrink-0" />
                        </button>
                      );
                    })}
                  </Motion.div>
                )}

                {step === 2 && selectedType && (
                  <Motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-5"
                  >
                    {/* Source Type badge */}
                    <div className="flex items-center gap-3 p-3 rounded-[12px] bg-brand-bg/50 border border-brand-border/50">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${selectedTypeMeta?.bg} ${selectedTypeMeta?.color}`}>
                        <SelectedIcon size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-dark">{selectedTypeMeta?.label}</p>
                        <p className="text-[10px] text-brand-gray font-medium">{selectedTypeMeta?.description}</p>
                      </div>
                    </div>

                    {/* Common fields */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest flex items-center gap-1">
                        Source Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formValues.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder={
                          selectedType === 'emr' ? 'e.g., Epic FHIR R4' :
                          selectedType === 'database' ? 'e.g., Patient Records DB' :
                          selectedType === 'rest' ? 'e.g., Pharmacy API' :
                          selectedType === 'excel' ? 'e.g., Monthly Census' :
                          'e.g., Patient Survey Responses'
                        }
                        className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                      />
                    </div>

                    {/* Facility selector */}
                    <div className="space-y-2 relative">
                      <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest flex items-center gap-1">
                        Facility <span className="text-red-500">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsFacilityDropdownOpen(!isFacilityDropdownOpen)}
                        className={`w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold border border-brand-border text-left flex items-center justify-between outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all ${
                          selectedFacility ? 'text-brand-dark' : 'text-brand-gray/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Building2 size={16} className={selectedFacility ? 'text-brand-blue' : 'text-brand-gray/40'} />
                          <span className={selectedFacility ? '' : 'font-medium'}>
                            {selectedFacilityData ? selectedFacilityData.name : 'Select a facility...'}
                          </span>
                        </div>
                        <ChevronDown size={14} className={`transition-transform text-brand-gray ${isFacilityDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isFacilityDropdownOpen && (
                        <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-xl border border-brand-border shadow-xl z-20 py-2 max-h-48 overflow-y-auto">
                          {facilities.map(facility => (
                            <button
                              key={facility.id}
                              onClick={() => {
                                setSelectedFacility(facility.id);
                                setIsFacilityDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center gap-3 ${
                                selectedFacility === facility.id
                                  ? 'bg-brand-blue/5 text-brand-blue font-bold'
                                  : 'text-brand-dark hover:bg-brand-bg'
                              }`}
                            >
                              <Building2 size={14} className="shrink-0" />
                              <div className="flex-1 min-w-0">
                                <span className="block truncate">{facility.name}</span>
                                <span className="text-[10px] text-brand-gray font-medium">{facility.location}</span>
                              </div>
                              {selectedFacility === facility.id && <CheckCircle2 size={14} className="ml-auto shrink-0" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Type-specific fields */}
                    {selectedType === 'emr' && (
                      <>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">API Endpoint</label>
                          <input
                            type="text"
                            value={formValues.endpoint}
                            onChange={(e) => updateField('endpoint', e.target.value)}
                            placeholder="https://your-ehr.com/api/FHIR/R4"
                            className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">FHIR Version</label>
                            <div className="relative">
                              <select
                                value={formValues.fhirVersion}
                                onChange={(e) => updateField('fhirVersion', e.target.value)}
                                className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none appearance-none focus:ring-2 focus:ring-brand-blue/20"
                              >
                                <option>FHIR R4</option>
                                <option>FHIR STU3</option>
                              </select>
                              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Client ID</label>
                            <input
                              type="text"
                              value={formValues.clientId}
                              onChange={(e) => updateField('clientId', e.target.value)}
                              placeholder="SC_XXXXX"
                              className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {selectedType === 'database' && (
                      <>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Host</label>
                          <input
                            type="text"
                            value={formValues.host}
                            onChange={(e) => updateField('host', e.target.value)}
                            placeholder="db.example.com"
                            className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Database Name</label>
                            <input
                              type="text"
                              value={formValues.database}
                              onChange={(e) => updateField('database', e.target.value)}
                              placeholder="patient_data"
                              className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Port</label>
                            <input
                              type="text"
                              value={formValues.port}
                              onChange={(e) => updateField('port', e.target.value)}
                              placeholder="5432"
                              className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {selectedType === 'rest' && (
                      <>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Base URL</label>
                          <input
                            type="text"
                            value={formValues.baseUrl}
                            onChange={(e) => updateField('baseUrl', e.target.value)}
                            placeholder="https://api.example.com/v1"
                            className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Auth Type</label>
                            <div className="relative">
                              <select
                                value={formValues.authType}
                                onChange={(e) => updateField('authType', e.target.value)}
                                className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none appearance-none focus:ring-2 focus:ring-brand-blue/20"
                              >
                                <option>API Key</option>
                                <option>OAuth 2.0</option>
                                <option>Bearer Token</option>
                              </select>
                              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Rate Limit (req/min)</label>
                            <input
                              type="text"
                              value={formValues.rateLimit}
                              onChange={(e) => updateField('rateLimit', e.target.value)}
                              placeholder="60"
                              className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {selectedType === 'excel' && (
                      <div className="space-y-4">
                        <div className="h-36 border-2 border-dashed border-brand-border rounded-xl flex flex-col items-center justify-center text-brand-gray gap-2 cursor-pointer hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-all group">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                            <Upload size={24} />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest">Click to upload or drag file</span>
                          <span className="text-[10px] text-brand-gray/60">.xlsx, .xls, or .csv files</span>
                        </div>
                      </div>
                    )}

                    {selectedType === 'sheets' && (
                      <>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Spreadsheet ID</label>
                          <input
                            type="text"
                            value={formValues.spreadsheetId}
                            onChange={(e) => updateField('spreadsheetId', e.target.value)}
                            placeholder="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms"
                            className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium font-mono"
                          />
                          <p className="text-[10px] text-brand-gray font-medium italic">
                            Found in the Google Sheets URL between <span className="font-mono text-brand-dark not-italic">/d/</span> and <span className="font-mono text-brand-dark not-italic">/edit</span>.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Range</label>
                          <input
                            type="text"
                            value={formValues.range}
                            onChange={(e) => updateField('range', e.target.value)}
                            placeholder="Sheet1!A1:Z1000"
                            className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                          />
                          <p className="text-[10px] text-brand-gray font-medium italic">
                            Use A1 notation, e.g. <span className="font-mono text-brand-dark not-italic">Sheet1!A1:D100</span> or a named range.
                          </p>
                        </div>
                      </>
                    )}

                    {/* Tip */}
                    <div className="p-3 rounded-[12px] bg-brand-blue/5 border border-brand-blue/10 flex items-start gap-3">
                      <Sparkles size={14} className="text-brand-blue shrink-0 mt-0.5" />
                      <p className="text-[11px] text-brand-dark font-medium leading-snug italic">
                        Lymbus AI will automatically validate the connection and begin an initial data sync upon activation.
                      </p>
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {step === 2 && (
              <div className="p-6 pt-4 border-t border-brand-border shrink-0">
                <div className="flex items-center gap-3">
                  <button
                    onClick={resetAndClose}
                    className="flex-1 px-6 py-3 rounded-xl border border-brand-border text-xs font-bold text-brand-gray uppercase tracking-widest hover:bg-brand-bg transition-all active:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!formValues.name || !selectedFacility}
                    className={`flex-1 px-6 py-3 rounded-xl text-white text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2 ${
                      formValues.name && selectedFacility
                        ? 'bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20'
                        : 'bg-brand-gray/30 cursor-not-allowed shadow-none'
                    }`}
                  >
                    <Plus size={14} />
                    Add Source
                  </button>
                </div>
              </div>
            )}
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};
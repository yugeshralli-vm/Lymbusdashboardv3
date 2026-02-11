import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { DataSourceModal } from './DataSourceModal';
import { ConfirmationModal } from './ConfirmationModal';
import { 
  BarChart3, 
  Users, 
  Database, 
  Save, 
  RotateCcw, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Server, 
  FileSpreadsheet, 
  Building2,
  ChevronDown,
  HardDrive,
  Globe,
  FileText,
  Search,
  Settings2,
  LayoutGrid
} from 'lucide-react';
import { toast } from 'sonner';

// --- Benchmarking Tab Components ---

const BenchmarkInput = ({ label, value, unit, description }: any) => (
  <div className="flex flex-col gap-1.5 group">
    <div className="flex items-center justify-between px-1">
      <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">
        {label}
      </label>
      {unit && (
        <span className="text-[10px] font-bold text-brand-blue/60 uppercase">{unit}</span>
      )}
    </div>
    <div className="bg-brand-bg/50 h-[40px] relative rounded-[12px] flex items-center px-4 border border-brand-border focus-within:border-brand-blue/30 focus-within:bg-white transition-all">
      <input 
        type="text" 
        defaultValue={value}
        className="bg-transparent w-full text-sm font-bold text-brand-dark focus:outline-none"
      />
    </div>
    <p className="text-[10px] text-brand-gray font-medium px-1 leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
      {description}
    </p>
  </div>
);

const BenchmarkingView = ({ onReset }: { onReset: () => void }) => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-brand-dark">Benchmark Targets</h3>
        <p className="text-brand-gray text-sm">Define your comparison baselines</p>
      </div>
    </div>

    <div className="bg-card p-6 md:p-8 rounded-[24px] border border-brand-border shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
        <BenchmarkInput 
          label="NPS Target" 
          value="60" 
          description="Loyalty comparison score" 
        />
        <BenchmarkInput 
          label="PREM Score" 
          value="85" 
          unit="%"
          description="Experience measure target" 
        />
        <BenchmarkInput 
          label="PROM Score" 
          value="80" 
          unit="%"
          description="Outcome measure target" 
        />
        <BenchmarkInput 
          label="Response Rate" 
          value="45" 
          unit="%"
          description="Survey completion target" 
        />
        <BenchmarkInput 
          label="Wait Time" 
          value="15" 
          unit="min"
          description="Max acceptable delay" 
        />
        <BenchmarkInput 
          label="Satisfaction" 
          value="90" 
          unit="%"
          description="Overall target rating" 
        />
        <BenchmarkInput 
          label="Readmission" 
          value="5" 
          unit="%"
          description="Max readmit rate" 
        />
        <BenchmarkInput 
          label="Staff Comms" 
          value="88" 
          unit="%"
          description="Communication target" 
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-8 mt-4 border-t border-brand-border/50">
        <button 
          onClick={onReset}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-brand-border text-brand-gray font-bold text-[10px] uppercase tracking-widest hover:bg-brand-bg transition-all"
        >
          <RotateCcw size={14} />
          Reset Defaults
        </button>
        <button 
          onClick={() => toast.success('Benchmarks saved successfully')}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-2.5 rounded-xl bg-brand-dark text-white font-bold text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95"
        >
          <Save size={14} />
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

// --- User Roles Tab Components ---

const RoleCard = ({ role, description, users, colorClass, badgeBg }: any) => (
  <div className="bg-card p-5 rounded-[16px] border border-brand-border flex items-center justify-between hover:shadow-md transition-all group">
    <div className="flex items-center gap-4">
      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${badgeBg} ${colorClass} border border-transparent group-hover:border-current/10`}>
        {role}
      </span>
      <span className="text-brand-gray text-xs font-bold group-hover:text-brand-dark transition-colors">
        {description}
      </span>
    </div>
    <span className="text-[10px] font-bold text-brand-dark bg-brand-bg px-2 py-1 rounded-md uppercase tracking-widest">
      {users} users
    </span>
  </div>
);

const UserRolesView = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-brand-dark">Permissions</h3>
        <p className="text-brand-gray text-sm">System access management</p>
      </div>
      <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-brand-border text-brand-gray font-bold text-[10px] uppercase tracking-widest hover:bg-brand-bg transition-all">
        <Users size={14} />
        Add User
      </button>
    </div>

    <div className="grid grid-cols-1 gap-3">
      <RoleCard 
        role="Admin" 
        description="Full platform administrative access" 
        users="3" 
        badgeBg="bg-red-50" 
        colorClass="text-red-600" 
      />
      <RoleCard 
        role="Manager" 
        description="Access to reports, AI, and departmental data" 
        users="8" 
        badgeBg="bg-blue-50" 
        colorClass="text-brand-blue" 
      />
      <RoleCard 
        role="Department" 
        description="Scoped access to specific clinical departments" 
        users="12" 
        badgeBg="bg-emerald-50" 
        colorClass="text-emerald-600" 
      />
      <RoleCard 
        role="Viewer" 
        description="Restricted read-only access to dashboards" 
        users="25" 
        badgeBg="bg-gray-50" 
        colorClass="text-brand-gray" 
      />
    </div>
  </div>
);

// --- Data Sources Tab Components ---

const FacilityDataSourceCard = ({ facility, onClick }: { facility: any, onClick: () => void }) => {
  const sources = [
    { type: 'emr', icon: HardDrive, label: 'EMR' },
    { type: 'database', icon: Database, label: 'DB' },
    { type: 'rest', icon: Globe, label: 'API' },
    { type: 'excel', icon: FileSpreadsheet, label: 'Excel' },
    { type: 'sheets', icon: FileText, label: 'Sheets' },
  ];

  return (
    <div 
      onClick={onClick}
      className="bg-card p-6 rounded-[24px] border border-brand-border hover:border-brand-blue/40 transition-all cursor-pointer group relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
            <Building2 size={24} />
          </div>
          <div>
            <h4 className="text-base font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
              {facility.name}
            </h4>
            <p className="text-xs text-brand-gray font-medium">
              {facility.location} • {facility.id}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${
            facility.configuredCount > 0 
              ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
              : 'bg-gray-50 text-gray-400 border-gray-100'
          }`}>
            {facility.configuredCount} Source{facility.configuredCount !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-border/50">
        {sources.map((source) => {
          const isConfigured = facility.configuredSources.includes(source.type);
          return (
            <div 
              key={source.type}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
                isConfigured 
                  ? 'bg-brand-blue/5 border-brand-blue/20 text-brand-blue' 
                  : 'bg-gray-50 border-gray-100 text-gray-400 opacity-60'
              }`}
            >
              <source.icon size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{source.label}</span>
              {isConfigured && <CheckCircle2 size={10} className="ml-0.5" />}
            </div>
          );
        })}
      </div>

      <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-brand-blue/20">
          <Plus size={18} />
        </div>
      </div>
    </div>
  );
};

const DataSourcesView = () => {
  const [selectedFacility, setSelectedFacility] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const facilities = [
    {
      id: 'FAC-001',
      name: 'City General Hospital',
      location: 'Main Campus',
      configuredCount: 2,
      configuredSources: ['emr', 'sheets']
    },
    {
      id: 'FAC-002',
      name: 'Sunrise Medical Center',
      location: 'East Wing',
      configuredCount: 1,
      configuredSources: ['emr']
    },
    {
      id: 'FAC-003',
      name: 'St. Jude Children\'s Research',
      location: 'Research Park',
      configuredCount: 3,
      configuredSources: ['emr', 'database', 'rest']
    },
    {
      id: 'FAC-004',
      name: 'Metropolitan Health',
      location: 'Downtown',
      configuredCount: 0,
      configuredSources: []
    },
    {
      id: 'FAC-005',
      name: 'Westside Clinic',
      location: 'West Campus',
      configuredCount: 1,
      configuredSources: ['excel']
    }
  ];

  const handleFacilityClick = (facility: any) => {
    setSelectedFacility(facility);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-brand-dark">Facility Data</h3>
          <p className="text-brand-gray text-sm">Managed integration endpoints</p>
        </div>

        <div className="relative group w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search facilities..." 
            className="w-full bg-card h-12 pl-12 pr-4 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-dark"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {facilities.map((facility) => (
          <FacilityDataSourceCard 
            key={facility.id} 
            facility={facility} 
            onClick={() => handleFacilityClick(facility)} 
          />
        ))}
      </div>

      <DataSourceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        facilityName={selectedFacility?.name}
      />
    </div>
  );
};

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('benchmarking'); // Back to benchmarking for user review
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const tabs = [
    { id: 'benchmarking', label: 'Benchmarks', icon: BarChart3 },
    { id: 'roles', label: 'Roles', icon: Users },
    { id: 'data', label: 'Sources', icon: Database },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-8 max-w-[1200px] mx-auto pb-20">
      
      {/* Tabs */}
      <div className="flex items-center">
        <div className="bg-white p-1.5 rounded-[12px] border border-[#eee] flex gap-1 overflow-x-auto no-scrollbar whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-[24px] text-sm font-bold transition-all duration-200 ${
                activeTab === tab.id 
                  ? 'bg-[#3649e9] text-white shadow-[0_10px_15px_rgba(54,73,233,0.2)]' 
                  : 'text-[#6a7282] hover:bg-brand-bg hover:text-brand-dark'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[600px]">
        <AnimatePresence mode="wait">
          {activeTab === 'benchmarking' && (
            <Motion.div key="benchmarking" exit={{ opacity: 0, y: -10 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <BenchmarkingView onReset={() => setIsConfirmOpen(true)} />
            </Motion.div>
          )}
          {activeTab === 'roles' && (
            <Motion.div key="roles" exit={{ opacity: 0, y: -10 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <UserRolesView />
            </Motion.div>
          )}
          {activeTab === 'data' && (
            <Motion.div key="data" exit={{ opacity: 0, y: -10 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <DataSourcesView />
            </Motion.div>
          )}
        </AnimatePresence>
      </div>

      <ConfirmationModal 
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={() => {
          toast.info('Reset to defaults');
          setIsConfirmOpen(false);
        }}
        title="Reset Benchmarks"
        message="Are you sure you want to reset all benchmarks to their default system values? This action cannot be undone."
        confirmLabel="Reset Defaults"
        variant="warning"
      />
    </div>
  );
};

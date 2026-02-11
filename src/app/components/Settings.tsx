import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { ConfirmationModal } from './ConfirmationModal';
import { FacilityOverlay } from './FacilityOverlay';
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
  ChevronLeft,
  HardDrive,
  Globe,
  FileText,
  Search,
  Settings2,
  LayoutGrid,
  Edit2,
  MapPin,
  Filter,
  XCircle,
  Clock,
  AlertCircle
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

// =============================================================================
// COMMENTED OUT: Previous facility-card-based Data Sources view
// =============================================================================
// const FacilityDataSourceCard = ({ facility, onClick }: { facility: any, onClick: () => void }) => {
//   const sources = [
//     { type: 'emr', icon: HardDrive, label: 'EMR' },
//     { type: 'database', icon: Database, label: 'DB' },
//     { type: 'rest', icon: Globe, label: 'API' },
//     { type: 'excel', icon: FileSpreadsheet, label: 'Excel' },
//     { type: 'sheets', icon: FileText, label: 'Sheets' },
//   ];
//
//   return (
//     <div
//       onClick={onClick}
//       className="bg-card p-6 rounded-[24px] border border-brand-border hover:border-brand-blue/40 transition-all cursor-pointer group relative overflow-hidden"
//     >
//       <div className="flex items-start justify-between mb-6">
//         <div className="flex items-center gap-4">
//           <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
//             <Building2 size={24} />
//           </div>
//           <div>
//             <h4 className="text-base font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
//               {facility.name}
//             </h4>
//             <p className="text-xs text-brand-gray font-medium">
//               {facility.location} • {facility.id}
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col items-end">
//           <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${
//             facility.configuredCount > 0
//               ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
//               : 'bg-gray-50 text-gray-400 border-gray-100'
//           }`}>
//             {facility.configuredCount} Source{facility.configuredCount !== 1 ? 's' : ''}
//           </span>
//         </div>
//       </div>
//
//       <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-border/50">
//         {sources.map((source) => {
//           const isConfigured = facility.configuredSources.includes(source.type);
//           return (
//             <div
//               key={source.type}
//               className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
//                 isConfigured
//                   ? 'bg-brand-blue/5 border-brand-blue/20 text-brand-blue'
//                   : 'bg-gray-50 border-gray-100 text-gray-400 opacity-60'
//               }`}
//             >
//               <source.icon size={14} />
//               <span className="text-[10px] font-bold uppercase tracking-wider">{source.label}</span>
//               {isConfigured && <CheckCircle2 size={10} className="ml-0.5" />}
//             </div>
//           );
//         })}
//       </div>
//
//       <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity">
//         <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-brand-blue/20">
//           <Plus size={18} />
//         </div>
//       </div>
//     </div>
//   );
// };
//
// const DataSourcesView = () => {
//   const [selectedFacility, setSelectedFacility] = useState<any>(null);
//   const [isOverlayOpen, setIsOverlayOpen] = useState(false);
//
//   const facilities = [
//     { id: 'FAC-001', name: 'City General Hospital', location: 'Main Campus', configuredCount: 2, configuredSources: ['emr', 'sheets'] },
//     { id: 'FAC-002', name: 'Sunrise Medical Center', location: 'East Wing', configuredCount: 1, configuredSources: ['emr'] },
//     { id: 'FAC-003', name: 'St. Jude Children\'s Research', location: 'Research Park', configuredCount: 3, configuredSources: ['emr', 'database', 'rest'] },
//     { id: 'FAC-004', name: 'Metropolitan Health', location: 'Downtown', configuredCount: 0, configuredSources: [] },
//     { id: 'FAC-005', name: 'Westside Clinic', location: 'West Campus', configuredCount: 1, configuredSources: ['excel'] },
//   ];
//
//   const handleFacilityClick = (facility: any) => {
//     setSelectedFacility(facility);
//     setIsOverlayOpen(true);
//   };
//
//   return (
//     <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//         <div className="space-y-1">
//           <h3 className="text-lg font-bold text-brand-dark">Facility Data</h3>
//           <p className="text-brand-gray text-sm">Managed integration endpoints</p>
//         </div>
//
//         <div className="relative group w-full md:w-80">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors" size={18} />
//           <input 
//             type="text" 
//             placeholder="Search facilities..." 
//             className="w-full bg-card h-12 pl-12 pr-4 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-dark"
//           />
//         </div>
//       </div>
//
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//         {facilities.map((facility) => (
//           <FacilityDataSourceCard 
//             key={facility.id} 
//             facility={facility} 
//             onClick={() => handleFacilityClick(facility)} 
//           />
//         ))}
//       </div>
//
//       <FacilityOverlay 
//         isOpen={isOverlayOpen} 
//         onClose={() => setIsOverlayOpen(false)} 
//         facility={selectedFacility}
//       />
//     </div>
//   );
// };
// =============================================================================
// END COMMENTED OUT
// =============================================================================

const SOURCE_TYPE_META: Record<string, { icon: any; label: string; color: string; bg: string; borderColor: string }> = {
  emr:      { icon: HardDrive,       label: 'EMR System',     color: 'text-indigo-600',  bg: 'bg-indigo-50',  borderColor: 'border-indigo-100' },
  database: { icon: Database,        label: 'Database',       color: 'text-violet-600',  bg: 'bg-violet-50',  borderColor: 'border-violet-100' },
  rest:     { icon: Globe,           label: 'REST API',       color: 'text-sky-600',     bg: 'bg-sky-50',     borderColor: 'border-sky-100' },
  excel:    { icon: FileSpreadsheet, label: 'Excel File',     color: 'text-emerald-600', bg: 'bg-emerald-50', borderColor: 'border-emerald-100' },
  sheets:   { icon: FileText,        label: 'Google Sheets',  color: 'text-teal-600',    bg: 'bg-teal-50',    borderColor: 'border-teal-100' },
};

interface DataSourceEntry {
  id: string;
  facilityId: string;
  facilityName: string;
  facilityLocation: string;
  sourceType: string;
  name: string;
  endpoint: string;
  status: 'active' | 'inactive' | 'error';
  lastSync: string;
}

const allDataSourceEntries: DataSourceEntry[] = [
  { id: 'DS-001', facilityId: 'FAC-001', facilityName: 'City General Hospital', facilityLocation: 'Main Campus', sourceType: 'emr', name: 'Epic FHIR R4', endpoint: 'https://citygeneral.epic.com/api/FHIR/R4', status: 'active', lastSync: '2 min ago' },
  { id: 'DS-002', facilityId: 'FAC-001', facilityName: 'City General Hospital', facilityLocation: 'Main Campus', sourceType: 'sheets', name: 'Patient Satisfaction Survey', endpoint: '1BxiMVs0XRA5n...  •  Sheet1!A1:Z1000', status: 'active', lastSync: '15 min ago' },
  { id: 'DS-003', facilityId: 'FAC-001', facilityName: 'City General Hospital', facilityLocation: 'Main Campus', sourceType: 'database', name: 'Lab Results DB', endpoint: 'db.citygeneral.com:5432/lab_results', status: 'active', lastSync: '8 min ago' },
  { id: 'DS-004', facilityId: 'FAC-002', facilityName: 'Sunrise Medical Center', facilityLocation: 'East Wing', sourceType: 'emr', name: 'Cerner Millennium', endpoint: 'https://sunrise.cerner.com/api', status: 'active', lastSync: '5 min ago' },
  { id: 'DS-005', facilityId: 'FAC-002', facilityName: 'Sunrise Medical Center', facilityLocation: 'East Wing', sourceType: 'rest', name: 'Pharmacy Inventory API', endpoint: 'https://api.sunrise.com/v2/pharmacy', status: 'error', lastSync: '3 hrs ago' },
  { id: 'DS-006', facilityId: 'FAC-003', facilityName: "St. Jude Children's Research", facilityLocation: 'Research Park', sourceType: 'emr', name: 'Meditech Expanse', endpoint: 'https://stjude.meditech.com/fhir', status: 'active', lastSync: '1 min ago' },
  { id: 'DS-007', facilityId: 'FAC-003', facilityName: "St. Jude Children's Research", facilityLocation: 'Research Park', sourceType: 'database', name: 'Clinical Trials DB', endpoint: 'trials-db.stjude.org:5432/trials_v3', status: 'active', lastSync: '12 min ago' },
  { id: 'DS-008', facilityId: 'FAC-003', facilityName: "St. Jude Children's Research", facilityLocation: 'Research Park', sourceType: 'rest', name: 'Genomics Pipeline', endpoint: 'https://genomics.stjude.org/api/v1', status: 'active', lastSync: '30 min ago' },
  { id: 'DS-009', facilityId: 'FAC-003', facilityName: "St. Jude Children's Research", facilityLocation: 'Research Park', sourceType: 'sheets', name: 'Research Consent Tracker', endpoint: 'kX9vMwQ3pLm2...  •  Consents!A1:F500', status: 'inactive', lastSync: '2 days ago' },
  { id: 'DS-010', facilityId: 'FAC-005', facilityName: 'Westside Clinic', facilityLocation: 'West Campus', sourceType: 'excel', name: 'Monthly Census Upload', endpoint: 'census_feb_2026.xlsx', status: 'active', lastSync: '1 day ago' },
  { id: 'DS-011', facilityId: 'FAC-005', facilityName: 'Westside Clinic', facilityLocation: 'West Campus', sourceType: 'sheets', name: 'Appointment Feedback', endpoint: 'rT4wNcB7xKj8...  •  Feedback!A1:M200', status: 'active', lastSync: '45 min ago' },
];

const StatusBadge = ({ status }: { status: DataSourceEntry['status'] }) => {
  const map = {
    active:   { label: 'Active',   cls: 'bg-emerald-50 text-emerald-600 border-emerald-100', icon: CheckCircle2 },
    inactive: { label: 'Inactive', cls: 'bg-gray-50 text-gray-400 border-gray-100',          icon: Clock },
    error:    { label: 'Error',    cls: 'bg-red-50 text-red-500 border-red-100',              icon: AlertCircle },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${s.cls}`}>
      <s.icon size={10} />
      {s.label}
    </span>
  );
};

const DataSourcesView = () => {
  const [selectedFacility, setSelectedFacility] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [entries, setEntries] = useState<DataSourceEntry[]>(allDataSourceEntries);
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);
  const [toggleConfirmId, setToggleConfirmId] = useState<string | null>(null);

  const toggleConfirmEntry = toggleConfirmId ? entries.find(e => e.id === toggleConfirmId) : null;
  const isDeactivating = toggleConfirmEntry?.status === 'active';

  const toggleEntryStatus = (id: string) => {
    setToggleConfirmId(id);
  };

  const confirmToggle = () => {
    if (!toggleConfirmId) return;
    setEntries(prev => prev.map(e => {
      if (e.id !== toggleConfirmId) return e;
      const wasActive = e.status === 'active';
      if (wasActive) {
        toast.error(`${e.name} deactivated`);
        return { ...e, status: 'inactive' as const };
      } else {
        toast.success(`${e.name} activated`);
        return { ...e, status: 'active' as const };
      }
    }));
    setToggleConfirmId(null);
  };

  const facilityNames = Array.from(new Set(entries.map(e => e.facilityName)));

  const filtered = entries.filter(entry => {
    const matchesFacility = selectedFacility === 'all' || entry.facilityName === selectedFacility;
    const matchesSearch = searchTerm === '' ||
      entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.endpoint.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.facilityName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFacility && matchesSearch;
  });

  const activeCount = filtered.filter(e => e.status === 'active').length;
  const errorCount  = filtered.filter(e => e.status === 'error').length;

  const editingEntry = editingEntryId ? entries.find(e => e.id === editingEntryId) : null;
  const editingMeta = editingEntry ? SOURCE_TYPE_META[editingEntry.sourceType] : null;
  const EditingIcon = editingMeta?.icon || Database;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <AnimatePresence mode="wait">
        {!editingEntryId ? (
          <Motion.div
            key="source-list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-brand-dark">Data Sources</h3>
                <p className="text-brand-gray text-sm">
                  {filtered.length} source{filtered.length !== 1 ? 's' : ''} across facilities
                  <span className="mx-1.5">&bull;</span>
                  <span className="text-emerald-600">{activeCount} active</span>
                  {errorCount > 0 && (
                    <>
                      <span className="mx-1.5">&bull;</span>
                      <span className="text-red-500">{errorCount} error{errorCount !== 1 ? 's' : ''}</span>
                    </>
                  )}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative group flex-1 md:w-72">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors" size={16} />
                  <input
                    type="text"
                    placeholder="Search sources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-card h-11 pl-11 pr-4 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm font-medium text-brand-dark"
                  />
                </div>

                {/* Facility filter dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className={`h-11 px-4 rounded-xl border flex items-center gap-2 text-sm font-bold transition-all shrink-0 ${
                      selectedFacility !== 'all'
                        ? 'border-brand-blue/30 bg-brand-blue/5 text-brand-blue'
                        : 'border-brand-border bg-card text-brand-gray hover:bg-brand-bg'
                    }`}
                  >
                    <Filter size={14} />
                    <span className="hidden sm:inline text-[10px] uppercase tracking-widest">
                      {selectedFacility === 'all' ? 'All Facilities' : selectedFacility.length > 18 ? selectedFacility.slice(0, 18) + '...' : selectedFacility}
                    </span>
                    <ChevronDown size={12} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isFilterOpen && (
                    <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl border border-brand-border shadow-xl z-20 py-2 max-h-64 overflow-y-auto custom-scrollbar">
                      <button
                        onClick={() => { setSelectedFacility('all'); setIsFilterOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center gap-3 ${
                          selectedFacility === 'all' ? 'bg-brand-blue/5 text-brand-blue font-bold' : 'text-brand-dark hover:bg-brand-bg'
                        }`}
                      >
                        <LayoutGrid size={14} />
                        All Facilities
                        {selectedFacility === 'all' && <CheckCircle2 size={12} className="ml-auto" />}
                      </button>
                      <div className="h-px bg-brand-border mx-3 my-1" />
                      {facilityNames.map(name => {
                        const count = entries.filter(e => e.facilityName === name).length;
                        return (
                          <button
                            key={name}
                            onClick={() => { setSelectedFacility(name); setIsFilterOpen(false); }}
                            className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center gap-3 ${
                              selectedFacility === name ? 'bg-brand-blue/5 text-brand-blue font-bold' : 'text-brand-dark hover:bg-brand-bg'
                            }`}
                          >
                            <Building2 size={14} className="shrink-0" />
                            <span className="flex-1 truncate">{name}</span>
                            <span className="text-[10px] font-bold text-brand-gray bg-brand-bg px-1.5 py-0.5 rounded-md shrink-0">{count}</span>
                            {selectedFacility === name && <CheckCircle2 size={12} className="ml-1 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Active filter chip */}
            {selectedFacility !== 'all' && (
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Filtering:</span>
                <button
                  onClick={() => setSelectedFacility('all')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-blue/5 border border-brand-blue/20 text-brand-blue text-xs font-bold hover:bg-brand-blue/10 transition-all"
                >
                  <Building2 size={12} />
                  {selectedFacility}
                  <XCircle size={12} className="ml-1 opacity-60 hover:opacity-100" />
                </button>
              </div>
            )}

            {/* Source list */}
            <div className="bg-card rounded-[24px] border border-brand-border shadow-sm overflow-hidden">
              {/* Table header */}
              <div className="hidden md:grid md:grid-cols-[1fr_130px_120px_80px_52px] gap-4 px-6 py-3 bg-brand-bg/50 border-b border-brand-border">
                <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Source</span>
                <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Type</span>
                <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Last Sync</span>
                <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Status</span>
                <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest text-right">On/Off</span>
              </div>

              {/* Rows */}
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-brand-gray gap-3">
                  <Database size={32} className="opacity-30" />
                  <p className="text-sm font-bold">No sources found</p>
                  <p className="text-xs">Try adjusting your search or filter.</p>
                </div>
              ) : (
                <div className="divide-y divide-brand-border/50">
                  {filtered.map((entry) => {
                    const meta = SOURCE_TYPE_META[entry.sourceType];
                    const Icon = meta?.icon || Database;
                    const isOn = entry.status === 'active';
                    return (
                      <div
                        key={entry.id}
                        onClick={() => setEditingEntryId(entry.id)}
                        className="px-6 py-4 hover:bg-brand-bg/30 transition-colors cursor-pointer group"
                      >
                        {/* Desktop layout */}
                        <div className="hidden md:grid md:grid-cols-[1fr_130px_120px_80px_52px] gap-4 items-center">
                          <div className="flex items-center gap-4 min-w-0">
                            <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 ${meta?.bg || 'bg-brand-bg'} ${meta?.color || 'text-brand-gray'}`}>
                              <Icon size={18} />
                            </div>
                            <div className="min-w-0">
                              <h5 className="text-sm font-bold text-brand-dark leading-tight truncate group-hover:text-brand-blue transition-colors">
                                {entry.name}
                              </h5>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <Building2 size={10} className="text-brand-gray shrink-0" />
                                <span className="text-[11px] text-brand-gray font-medium truncate">{entry.facilityName}</span>
                              </div>
                              <p className="text-[10px] text-brand-gray/60 font-mono truncate mt-0.5">{entry.endpoint}</p>
                            </div>
                          </div>

                          <div>
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${meta?.bg || 'bg-brand-bg'} ${meta?.color || 'text-brand-gray'} ${meta?.borderColor || 'border-brand-border'}`}>
                              <Icon size={10} />
                              {meta?.label || entry.sourceType}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <Clock size={12} className="text-brand-gray/50" />
                            <span className="text-xs text-brand-gray font-medium">{entry.lastSync}</span>
                          </div>

                          <div>
                            <StatusBadge status={entry.status} />
                          </div>

                          <div className="flex justify-end">
                            <button
                              onClick={(e) => { e.stopPropagation(); toggleEntryStatus(entry.id); }}
                              className={`w-11 h-6 rounded-full p-1 transition-all relative flex items-center ${
                                isOn ? 'bg-brand-blue shadow-[0_0_10px_rgba(54,73,233,0.3)]' : 'bg-gray-200'
                              }`}
                              aria-label={`Toggle ${entry.name} ${isOn ? 'off' : 'on'}`}
                            >
                              <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                                isOn ? 'translate-x-5' : 'translate-x-0'
                              }`} />
                            </button>
                          </div>
                        </div>

                        {/* Mobile layout */}
                        <div className="md:hidden space-y-3">
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 ${meta?.bg || 'bg-brand-bg'} ${meta?.color || 'text-brand-gray'}`}>
                              <Icon size={18} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="text-sm font-bold text-brand-dark leading-tight truncate">{entry.name}</h5>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <Building2 size={10} className="text-brand-gray shrink-0" />
                                <span className="text-[11px] text-brand-gray font-medium truncate">{entry.facilityName}</span>
                              </div>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); toggleEntryStatus(entry.id); }}
                              className={`w-11 h-6 rounded-full p-1 transition-all relative flex items-center shrink-0 ${
                                isOn ? 'bg-brand-blue shadow-[0_0_10px_rgba(54,73,233,0.3)]' : 'bg-gray-200'
                              }`}
                              aria-label={`Toggle ${entry.name} ${isOn ? 'off' : 'on'}`}
                            >
                              <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                                isOn ? 'translate-x-5' : 'translate-x-0'
                              }`} />
                            </button>
                          </div>
                          <div className="flex items-center justify-between pl-[52px]">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${meta?.bg} ${meta?.color} border ${meta?.borderColor}`}>
                              {meta?.label}
                            </span>
                            <div className="flex items-center gap-3">
                              <StatusBadge status={entry.status} />
                              <span className="text-[11px] text-brand-gray font-medium flex items-center gap-1">
                                <Clock size={10} />
                                {entry.lastSync}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </Motion.div>
        ) : (
          <Motion.div
            key="source-edit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Breadcrumb back */}
            <button
              onClick={() => setEditingEntryId(null)}
              className="flex items-center gap-2 text-brand-gray hover:text-brand-dark transition-colors"
            >
              <ChevronLeft size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Back to Sources</span>
            </button>

            {/* Edit card */}
            <div className="bg-card rounded-[24px] border border-brand-border shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="p-6 border-b border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0 ${editingMeta?.bg || 'bg-brand-bg'} ${editingMeta?.color || 'text-brand-gray'}`}>
                    <EditingIcon size={24} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-brand-dark">{editingEntry?.name}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Building2 size={11} className="text-brand-gray" />
                      <span className="text-xs text-brand-gray font-medium">{editingEntry?.facilityName} &bull; {editingEntry?.facilityLocation}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pl-16 sm:pl-0">
                  <StatusBadge status={editingEntry?.status || 'inactive'} />
                  <button
                    onClick={() => toggleEntryStatus(editingEntry!.id)}
                    className={`w-11 h-6 rounded-full p-1 transition-all relative flex items-center ${
                      editingEntry?.status === 'active' ? 'bg-brand-blue shadow-[0_0_10px_rgba(54,73,233,0.3)]' : 'bg-gray-200'
                    }`}
                    aria-label={`Toggle ${editingEntry?.name}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                      editingEntry?.status === 'active' ? 'translate-x-5' : 'translate-x-0'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Config fields */}
              <div className="p-6">
                <h5 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-5">Configuration</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Shared fields */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Source Name</label>
                    <input type="text" defaultValue={editingEntry?.name} className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Facility</label>
                    <input type="text" defaultValue={editingEntry?.facilityName} className="w-full bg-brand-bg/50 rounded-xl px-4 py-3 text-sm font-bold text-brand-gray border border-brand-border outline-none cursor-not-allowed" readOnly />
                  </div>

                  {/* EMR fields */}
                  {editingEntry?.sourceType === 'emr' && (
                    <>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">API Endpoint</label>
                        <input type="text" defaultValue={editingEntry.endpoint} className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">FHIR Version</label>
                        <div className="relative">
                          <select defaultValue="FHIR R4" className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none appearance-none focus:ring-2 focus:ring-brand-blue/20">
                            <option>FHIR R4</option>
                            <option>FHIR STU3</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Client ID</label>
                        <input type="text" defaultValue="SC_21324" className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20" />
                      </div>
                    </>
                  )}

                  {/* Database fields */}
                  {editingEntry?.sourceType === 'database' && (
                    <>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Host</label>
                        <input type="text" defaultValue={editingEntry.endpoint.split(':')[0]} className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Database Name</label>
                        <input type="text" defaultValue={editingEntry.endpoint.split('/').pop()} className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Port</label>
                        <input type="text" defaultValue="5432" className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20" />
                      </div>
                    </>
                  )}

                  {/* REST API fields */}
                  {editingEntry?.sourceType === 'rest' && (
                    <>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Base URL</label>
                        <input type="text" defaultValue={editingEntry.endpoint} className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Auth Type</label>
                        <div className="relative">
                          <select className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none appearance-none focus:ring-2 focus:ring-brand-blue/20">
                            <option>API Key</option>
                            <option>OAuth 2.0</option>
                            <option>Bearer Token</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Rate Limit (req/min)</label>
                        <input type="text" defaultValue="60" className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20" />
                      </div>
                    </>
                  )}

                  {/* Excel fields */}
                  {editingEntry?.sourceType === 'excel' && (
                    <div className="md:col-span-2 space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Current File</label>
                        <div className="flex items-center gap-3 bg-brand-bg rounded-xl px-4 py-3 border border-brand-border">
                          <FileSpreadsheet size={16} className="text-emerald-600 shrink-0" />
                          <span className="text-sm font-bold text-brand-dark">{editingEntry.endpoint}</span>
                        </div>
                      </div>
                      <div className="h-32 border-2 border-dashed border-brand-border rounded-xl flex flex-col items-center justify-center text-brand-gray gap-2 cursor-pointer hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-all">
                        <FileSpreadsheet size={24} className="opacity-50" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Click to upload or drag file</span>
                      </div>
                    </div>
                  )}

                  {/* Google Sheets fields */}
                  {editingEntry?.sourceType === 'sheets' && (
                    <>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Spreadsheet ID</label>
                        <input type="text" defaultValue={editingEntry.endpoint.split('...')[0].trim() + '...'} placeholder="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms" className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20" />
                        <p className="text-[10px] text-brand-gray font-medium italic">
                          Found in the Google Sheets URL between <span className="font-mono text-brand-dark not-italic">/d/</span> and <span className="font-mono text-brand-dark not-italic">/edit</span>.
                        </p>
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Range</label>
                        <input type="text" defaultValue={editingEntry.endpoint.includes('\u2022') ? editingEntry.endpoint.split('\u2022')[1].trim() : 'Sheet1!A1:Z1000'} className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20" />
                        <p className="text-[10px] text-brand-gray font-medium italic">
                          Use A1 notation, e.g. <span className="font-mono text-brand-dark not-italic">Sheet1!A1:D100</span> or a named range.
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Save / Cancel footer */}
                <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button
                    onClick={() => setEditingEntryId(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-brand-border text-brand-gray font-bold text-[10px] uppercase tracking-widest hover:bg-brand-bg transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      toast.success(`${editingEntry?.name} configuration saved`);
                      setEditingEntryId(null);
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-2.5 rounded-xl bg-brand-blue text-white font-bold text-[10px] uppercase tracking-widest hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/10"
                  >
                    <Save size={14} />
                    Save Configuration
                  </button>
                </div>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      <ConfirmationModal
        isOpen={!!toggleConfirmId}
        onClose={() => setToggleConfirmId(null)}
        onConfirm={confirmToggle}
        title={isDeactivating ? 'Deactivate Source' : 'Activate Source'}
        message={
          isDeactivating
            ? `Are you sure you want to deactivate "${toggleConfirmEntry?.name}"? This will stop syncing data from ${toggleConfirmEntry?.facilityName}.`
            : `Are you sure you want to activate "${toggleConfirmEntry?.name}"? This will resume syncing data from ${toggleConfirmEntry?.facilityName}.`
        }
        confirmLabel={isDeactivating ? 'Deactivate' : 'Activate'}
        variant={isDeactivating ? 'danger' : 'info'}
      />
    </div>
  );
};

// --- Facilities Tab Components ---

const FacilityCard = ({ facility, onEdit, onDelete, onClick }: any) => (
  <div 
    onClick={onClick}
    className="bg-card p-6 rounded-[24px] border border-brand-border hover:border-brand-blue/40 transition-all group relative overflow-hidden cursor-pointer"
  >
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
          <Building2 size={24} />
        </div>
        <div>
          <h4 className="text-base font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
            {facility.name}
          </h4>
          <div className="flex items-center gap-2 mt-1">
             <MapPin size={12} className="text-brand-gray" />
             <p className="text-xs text-brand-gray font-medium">
               {facility.location} • {facility.id}
             </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onEdit(facility);
          }}
          className="p-2 hover:bg-brand-bg rounded-lg text-brand-gray hover:text-brand-blue transition-colors"
        >
          <Edit2 size={16} />
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onDelete(facility);
          }}
          className="p-2 hover:bg-red-50 rounded-lg text-brand-gray hover:text-red-500 transition-colors"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
    <div className="mt-4 pt-4 border-t border-brand-border/50 flex items-center justify-between">
      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-brand-bg text-brand-gray border border-brand-border/50">
        {facility.type}
      </span>
      <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest flex items-center gap-1.5 cursor-pointer hover:underline">
        View Details <ChevronDown size={12} />
      </span>
    </div>
  </div>
);

const FacilitiesView = () => {
  const [facilities, setFacilities] = useState([
    { id: 'FAC-001', name: 'City General Hospital', location: 'Main Campus', type: 'Hospital', configuredSources: ['emr', 'sheets'] },
    { id: 'FAC-002', name: 'Sunrise Medical Center', location: 'East Wing', type: 'Clinic', configuredSources: ['emr'] },
    { id: 'FAC-003', name: 'St. Jude Children\'s Research', location: 'Research Park', type: 'Research', configuredSources: ['emr', 'database', 'rest'] },
    { id: 'FAC-004', name: 'Metropolitan Health', location: 'Downtown', type: 'Hospital', configuredSources: [] },
    { id: 'FAC-005', name: 'Westside Clinic', location: 'West Campus', type: 'Clinic', configuredSources: ['excel'] }
  ]);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<any>(null);
  const [facilityToDelete, setFacilityToDelete] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDeleteClick = (facility: any) => {
    setFacilityToDelete(facility);
    setIsConfirmOpen(true);
  };

  const handleFacilityClick = (facility: any) => {
    setSelectedFacility(facility);
    setIsOverlayOpen(true);
  };

  const confirmDelete = () => {
    setFacilities(facilities.filter(f => f.id !== facilityToDelete.id));
    toast.error(`Facility "${facilityToDelete.name}" removed`);
    setIsConfirmOpen(false);
  };

  const filteredFacilities = facilities.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-brand-dark">Facilities</h3>
          <p className="text-brand-gray text-sm">Manage healthcare locations and campus details</p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative group flex-1 md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search facilities..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-card h-12 pl-12 pr-4 rounded-xl border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-brand-dark"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredFacilities.map((facility) => (
          <FacilityCard 
            key={facility.id} 
            facility={facility} 
            onEdit={(f: any) => handleFacilityClick(f)}
            onDelete={handleDeleteClick} 
            onClick={() => handleFacilityClick(facility)}
          />
        ))}
      </div>

      <FacilityOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
        facility={selectedFacility} 
      />

      <ConfirmationModal 
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={confirmDelete}
        title="Remove Facility"
        message={`Are you sure you want to remove "${facilityToDelete?.name}"? This will disconnect all associated data sources and roles.`}
        confirmLabel="Delete Facility"
        variant="danger"
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
    { id: 'facility', label: 'Facility', icon: Building2 },
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
          {activeTab === 'facility' && (
            <Motion.div key="facility" exit={{ opacity: 0, y: -10 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <FacilitiesView />
            </Motion.div>
          )}
        </AnimatePresence>
      </div>

      {activeTab === 'data' && (
        <button 
          onClick={() => toast.info('Feature coming soon: Add Data Source')}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-brand-dark text-white hover:bg-black transition-all shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95"
          aria-label="Add Data Source"
        >
          <Plus size={24} />
        </button>
      )}

      {activeTab === 'facility' && (
        <button 
          onClick={() => toast.info('Feature coming soon: Add Facility Modal')}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-brand-dark text-white hover:bg-black transition-all shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95"
          aria-label="Add Facility"
        >
          <Plus size={24} />
        </button>
      )}

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
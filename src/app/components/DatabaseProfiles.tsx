import React, { useState, useMemo } from 'react';
import {
  Database,
  ChevronDown,
  Edit2,
  Trash2,
  X,
  Check,
  Plus,
  Eye,
  EyeOff,
  Server,
  Globe,
  Lock,
  User,
  HardDrive,
  Zap,
  Loader2,
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { cn } from '@/app/components/ui/utils';
import { ConfirmationModal } from './ConfirmationModal';

interface DbProfile {
  id: number;
  name: string;
  dbType: string;
  host: string;
  port: string;
  username: string;
  password: string;
  databaseName: string;
}

const initialProfiles: DbProfile[] = [
  {
    id: 1,
    name: 'Production — Patient Records',
    dbType: 'PostgreSQL',
    host: '192.168.10.45',
    port: '5432',
    username: 'admin_prod',
    password: 'pr0d$ecure2026!',
    databaseName: 'patient_records_db',
  },
  {
    id: 2,
    name: 'Staging — Analytics Warehouse',
    dbType: 'MySQL',
    host: 'staging-analytics.internal.local',
    port: '3306',
    username: 'analytics_user',
    password: 'St@g1ng_Ana!ytics',
    databaseName: 'analytics_warehouse',
  },
  {
    id: 3,
    name: 'Development — Lab Results',
    dbType: 'MongoDB',
    host: '10.0.3.120',
    port: '27017',
    username: 'dev_lab_admin',
    password: 'devL@b2026#',
    databaseName: 'lab_results_dev',
  },
  {
    id: 4,
    name: 'Reporting — Billing System',
    dbType: 'Microsoft SQL Server',
    host: 'billing-db.hospital.internal',
    port: '1433',
    username: 'billing_readonly',
    password: 'B!ll1ng_R3port',
    databaseName: 'billing_master',
  },
  {
    id: 5,
    name: 'Archive — Historical EMR',
    dbType: 'Oracle',
    host: '172.20.0.88',
    port: '1521',
    username: 'emr_archive',
    password: 'Arch1v3_EMR!',
    databaseName: 'emr_historical_2020',
  },
];

const dbTypeOptions = ['PostgreSQL', 'MySQL', 'MongoDB', 'Microsoft SQL Server', 'Oracle', 'MariaDB', 'Redis', 'SQLite'];

const emptyForm: Omit<DbProfile, 'id'> = {
  name: '',
  dbType: 'PostgreSQL',
  host: '',
  port: '5432',
  username: '',
  password: '',
  databaseName: '',
};

const defaultPorts: Record<string, string> = {
  PostgreSQL: '5432',
  MySQL: '3306',
  MongoDB: '27017',
  'Microsoft SQL Server': '1433',
  Oracle: '1521',
  MariaDB: '3306',
  Redis: '6379',
  SQLite: '',
};

interface DatabaseProfilesProps {
  search: string;
}

export const DatabaseProfiles: React.FC<DatabaseProfilesProps> = ({ search }) => {
  const [profiles, setProfiles] = useState<DbProfile[]>(initialProfiles);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Omit<DbProfile, 'id'>>(emptyForm);
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState<Omit<DbProfile, 'id'>>(emptyForm);
  const [showPasswords, setShowPasswords] = useState<Record<number | 'add', boolean>>({});
  const [addDbTypeOpen, setAddDbTypeOpen] = useState(false);
  const [editDbTypeOpen, setEditDbTypeOpen] = useState(false);
  const [testingConnection, setTestingConnection] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmLabel: string;
    onConfirm: () => void;
    variant: 'danger' | 'warning' | 'info';
  }>({ isOpen: false, title: '', message: '', confirmLabel: '', onConfirm: () => {}, variant: 'danger' });

  const filteredProfiles = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return profiles;
    return profiles.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.dbType.toLowerCase().includes(q) ||
        p.host.toLowerCase().includes(q) ||
        p.databaseName.toLowerCase().includes(q)
    );
  }, [profiles, search]);

  const toggleExpand = (id: number) => {
    if (editingId === id) return;
    setExpandedId((prev) => (prev === id ? null : id));
    setEditingId(null);
    setEditDbTypeOpen(false);
  };

  const startEdit = (profile: DbProfile) => {
    setEditingId(profile.id);
    setExpandedId(profile.id);
    setEditForm({
      name: profile.name,
      dbType: profile.dbType,
      host: profile.host,
      port: profile.port,
      username: profile.username,
      password: profile.password,
      databaseName: profile.databaseName,
    });
    setEditDbTypeOpen(false);
    setTestingConnection('idle');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditDbTypeOpen(false);
    setTestingConnection('idle');
  };

  const saveEdit = () => {
    if (!editForm.name.trim() || !editForm.host.trim() || !editForm.databaseName.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }
    setProfiles((prev) =>
      prev.map((p) => (p.id === editingId ? { ...p, ...editForm } : p))
    );
    toast.success(`"${editForm.name}" updated successfully`);
    setEditingId(null);
    setEditDbTypeOpen(false);
    setTestingConnection('idle');
  };

  const deleteProfile = (profile: DbProfile) => {
    setConfirmModal({
      isOpen: true,
      title: 'Delete Database Profile',
      message: `Are you sure you want to delete "${profile.name}"? This action cannot be undone.`,
      confirmLabel: 'Delete',
      variant: 'danger',
      onConfirm: () => {
        setProfiles((prev) => prev.filter((p) => p.id !== profile.id));
        if (expandedId === profile.id) setExpandedId(null);
        if (editingId === profile.id) setEditingId(null);
        toast.error(`"${profile.name}" deleted`);
      },
    });
  };

  const addProfile = () => {
    if (!addForm.name.trim() || !addForm.host.trim() || !addForm.databaseName.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }
    const newId = Math.max(0, ...profiles.map((p) => p.id)) + 1;
    const newProfile: DbProfile = { id: newId, ...addForm };
    setProfiles((prev) => [...prev, newProfile]);
    toast.success(`"${addForm.name}" added successfully`);
    setShowAdd(false);
    setAddForm(emptyForm);
    setAddDbTypeOpen(false);
    setShowPasswords((prev) => ({ ...prev, add: false }));
    setTestingConnection('idle');
  };

  const testConnection = (form: Omit<DbProfile, 'id'>) => {
    if (!form.host.trim() || !form.port.trim() || !form.databaseName.trim()) {
      toast.error('Please fill in host, port, and database name before testing');
      return;
    }
    setTestingConnection('testing');
    // Simulate connection test with random success/failure
    setTimeout(() => {
      const success = Math.random() > 0.3;
      if (success) {
        setTestingConnection('success');
        toast.success(`Connection to ${form.host}:${form.port}/${form.databaseName} successful`);
      } else {
        setTestingConnection('error');
        toast.error(`Connection to ${form.host}:${form.port} failed — check credentials and network`);
      }
      // Reset status after a delay
      setTimeout(() => setTestingConnection('idle'), 3000);
    }, 1800);
  };

  const togglePassword = (id: number | 'add') => {
    setShowPasswords((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const fieldConfig = [
    { key: 'dbType', label: 'Database Type', icon: Server, type: 'select' as const },
    { key: 'host', label: 'Host / IP Address', icon: Globe, type: 'text' as const, placeholder: 'e.g. 192.168.1.100 or db.host.local' },
    { key: 'port', label: 'Port', icon: HardDrive, type: 'text' as const, placeholder: 'e.g. 5432' },
    { key: 'username', label: 'User Name', icon: User, type: 'text' as const, placeholder: 'e.g. admin_user' },
    { key: 'password', label: 'Password', icon: Lock, type: 'password' as const, placeholder: '••••••••' },
    { key: 'databaseName', label: 'Database Name', icon: Database, type: 'text' as const, placeholder: 'e.g. patient_records_db' },
  ];

  const renderFields = (
    form: Omit<DbProfile, 'id'>,
    setForm: (updater: React.SetStateAction<Omit<DbProfile, 'id'>>) => void,
    isEditable: boolean,
    passwordId: number | 'add',
    dbTypeDropdownOpen: boolean,
    setDbTypeDropdownOpen: (val: React.SetStateAction<boolean>) => void
  ) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
      {fieldConfig.map((field) => {
        const value = form[field.key as keyof typeof form];
        const Icon = field.icon;
        const isPassword = field.type === 'password';
        const isSelect = field.type === 'select';
        const showPw = showPasswords[passwordId];

        return (
          <div key={field.key} className={cn("space-y-1.5", field.key === 'host' && 'md:col-span-1')}>
            <label className="text-[11px] font-bold text-brand-gray uppercase tracking-wider flex items-center gap-1.5">
              <Icon size={12} />
              {field.label}
            </label>
            {isSelect ? (
              <div className="relative">
                <button
                  type="button"
                  disabled={!isEditable}
                  onClick={() => isEditable && setDbTypeDropdownOpen(!dbTypeDropdownOpen)}
                  className={cn(
                    "w-full h-11 px-4 rounded-xl text-sm text-left flex items-center justify-between transition-all",
                    isEditable
                      ? "bg-white border-2 border-brand-border hover:border-brand-blue/40 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-brand-dark cursor-pointer"
                      : "bg-brand-bg/60 border border-brand-border/50 text-brand-dark cursor-default"
                  )}
                >
                  <span>{value}</span>
                  {isEditable && <ChevronDown size={14} className={cn("text-brand-gray transition-transform", dbTypeDropdownOpen && "rotate-180")} />}
                </button>
                <AnimatePresence>
                  {dbTypeDropdownOpen && isEditable && (
                    <>
                      <div className="fixed inset-0 z-[10]" onClick={() => setDbTypeDropdownOpen(false)} />
                      <Motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.97 }}
                        transition={{ duration: 0.12 }}
                        className="absolute left-0 top-full mt-1 w-full bg-white rounded-xl shadow-xl border border-brand-border z-[20] p-1 max-h-52 overflow-y-auto"
                      >
                        {dbTypeOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setForm((prev) => ({ ...prev, dbType: opt, port: defaultPorts[opt] || prev.port }));
                              setDbTypeDropdownOpen(false);
                            }}
                            className={cn(
                              "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-left transition-colors",
                              value === opt ? "bg-brand-bg text-brand-blue font-bold" : "hover:bg-brand-bg/50 text-brand-dark"
                            )}
                          >
                            {opt}
                            {value === opt && <Check size={14} className="ml-auto text-brand-blue" />}
                          </button>
                        ))}
                      </Motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="relative">
                <input
                  type={isPassword && !showPw ? 'password' : 'text'}
                  value={value}
                  readOnly={!isEditable}
                  onChange={(e) => isEditable && setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
                  placeholder={isEditable ? field.placeholder : ''}
                  className={cn(
                    "w-full h-11 px-4 rounded-xl text-sm transition-all",
                    isPassword && "pr-11 font-mono tracking-wider",
                    isEditable
                      ? "bg-white border-2 border-brand-border hover:border-brand-blue/40 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-brand-dark"
                      : "bg-brand-bg/60 border border-brand-border/50 text-brand-dark cursor-default"
                  )}
                />
                {isPassword && (
                  <button
                    type="button"
                    onClick={() => togglePassword(passwordId)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-brand-gray hover:text-brand-dark transition-colors"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                  >
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  const renderTestConnectionButton = (form: Omit<DbProfile, 'id'>) => (
    <button
      type="button"
      disabled={testingConnection === 'testing'}
      onClick={() => testConnection(form)}
      className={cn(
        "px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 border-2",
        testingConnection === 'testing'
          ? "border-brand-border bg-brand-bg text-brand-gray cursor-wait"
          : testingConnection === 'success'
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : testingConnection === 'error'
          ? "border-red-200 bg-red-50 text-red-600"
          : "border-brand-border bg-white text-brand-dark hover:border-brand-blue/40 hover:bg-brand-bg"
      )}
    >
      {testingConnection === 'testing' ? (
        <Loader2 size={16} className="animate-spin" />
      ) : testingConnection === 'success' ? (
        <Check size={16} />
      ) : testingConnection === 'error' ? (
        <X size={16} />
      ) : (
        <Zap size={16} />
      )}
      {testingConnection === 'testing'
        ? 'Testing...'
        : testingConnection === 'success'
        ? 'Connected'
        : testingConnection === 'error'
        ? 'Failed'
        : 'Test Connection'}
    </button>
  );

  return (
    <>
      <div className="space-y-4">
        {filteredProfiles.length === 0 ? (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 bg-white rounded-[24px] border border-brand-border text-brand-gray"
          >
            <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center mb-4">
              <Database size={28} className="text-brand-gray/50" />
            </div>
            <p className="text-sm font-medium italic">
              {search ? `No profiles found matching "${search}"` : 'No database profiles yet'}
            </p>
          </Motion.div>
        ) : (
          filteredProfiles.map((profile, index) => {
            const isExpanded = expandedId === profile.id;
            const isEditing = editingId === profile.id;

            return (
              <Motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className={cn(
                  "bg-white rounded-[20px] border transition-all duration-200",
                  isExpanded ? "border-brand-blue/30 shadow-lg shadow-brand-blue/5" : "border-brand-border hover:border-brand-blue/20 hover:shadow-md"
                )}
              >
                {/* Card Header */}
                <div
                  className={cn(
                    "flex items-center gap-4 px-6 py-5 cursor-pointer select-none transition-colors",
                    isExpanded ? "rounded-t-[20px]" : "rounded-[20px]"
                  )}
                  onClick={() => toggleExpand(profile.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleExpand(profile.id); }}}
                >
                  {/* DB Type Icon */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-brand-bg text-brand-gray">
                    <Database size={20} />
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[15px] font-bold text-brand-dark truncate">
                      {isEditing ? editForm.name : profile.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-brand-bg text-brand-gray">
                        {isEditing ? editForm.dbType : profile.dbType}
                      </span>
                      <span className="text-[11px] text-brand-gray font-medium">
                        {isEditing ? editForm.host : profile.host}:{isEditing ? editForm.port : profile.port}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {!isEditing && (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); startEdit(profile); }}
                          className="p-2.5 rounded-xl bg-brand-bg text-brand-gray hover:bg-brand-blue hover:text-white transition-colors"
                          aria-label={`Edit ${profile.name}`}
                        >
                          <Edit2 size={15} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); deleteProfile(profile); }}
                          className="p-2.5 rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                          aria-label={`Delete ${profile.name}`}
                        >
                          <Trash2 size={15} />
                        </button>
                      </>
                    )}
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                      isExpanded ? "bg-brand-blue text-white rotate-180" : "bg-brand-bg text-brand-gray"
                    )}>
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="border-t border-brand-border/60 pt-6">
                          {isEditing ? (
                            <>
                              {/* Editable Profile Name */}
                              <div className="mb-6">
                                <label className="text-[11px] font-bold text-brand-gray uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                                  <Server size={12} />
                                  Profile Name
                                </label>
                                <input
                                  type="text"
                                  value={editForm.name}
                                  onChange={(e) => setEditForm((prev) => ({ ...prev, name: e.target.value }))}
                                  className="w-full md:w-1/2 h-11 px-4 rounded-xl text-sm bg-white border-2 border-brand-border hover:border-brand-blue/40 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-brand-dark"
                                  placeholder="Profile name"
                                />
                              </div>
                              {renderFields(editForm, setEditForm, true, profile.id, editDbTypeOpen, setEditDbTypeOpen)}
                              {/* Test Connection / Save / Cancel */}
                              <div className="flex items-center justify-between mt-8 pt-5 border-t border-brand-border/60">
                                <div>
                                  {renderTestConnectionButton(editForm)}
                                </div>
                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={cancelEdit}
                                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-brand-gray hover:bg-brand-bg transition-colors"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={saveEdit}
                                    className="px-6 py-2.5 rounded-xl text-sm font-bold bg-brand-blue text-white hover:shadow-lg hover:shadow-brand-blue/20 transition-all flex items-center gap-2"
                                  >
                                    <Check size={16} />
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            renderFields(
                              { name: profile.name, dbType: profile.dbType, host: profile.host, port: profile.port, username: profile.username, password: profile.password, databaseName: profile.databaseName },
                              () => {},
                              false,
                              profile.id,
                              false,
                              () => {}
                            )
                          )}
                        </div>
                      </div>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </Motion.div>
            );
          })
        )}
      </div>

      {/* Add Profile Modal */}
      <AnimatePresence>
        {showAdd && (
          <>
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setShowAdd(false); setAddForm(emptyForm); setAddDbTypeOpen(false); setShowPasswords((p) => ({ ...p, add: false })); setTestingConnection('idle'); }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]"
            />
            <Motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[680px] md:max-h-[85vh] bg-white rounded-[24px] shadow-2xl z-[210] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-brand-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                    <Database size={20} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-brand-dark">Add Database Profile</h3>
                    <p className="text-[11px] text-brand-gray font-medium">Configure a new database connection</p>
                  </div>
                </div>
                <button
                  onClick={() => { setShowAdd(false); setAddForm(emptyForm); setAddDbTypeOpen(false); setShowPasswords((p) => ({ ...p, add: false })); setTestingConnection('idle'); }}
                  className="p-2 hover:bg-brand-bg rounded-xl transition-colors"
                >
                  <X size={18} className="text-brand-gray" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Profile Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-brand-gray uppercase tracking-wider flex items-center gap-1.5">
                    <Server size={12} />
                    Profile Name
                  </label>
                  <input
                    type="text"
                    value={addForm.name}
                    onChange={(e) => setAddForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Production — Patient Records"
                    className="w-full h-11 px-4 rounded-xl text-sm bg-white border-2 border-brand-border hover:border-brand-blue/40 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-brand-dark"
                  />
                </div>
                {renderFields(addForm, setAddForm, true, 'add', addDbTypeOpen, setAddDbTypeOpen)}
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-brand-border flex items-center justify-between">
                <div>
                  {renderTestConnectionButton(addForm)}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => { setShowAdd(false); setAddForm(emptyForm); setAddDbTypeOpen(false); setShowPasswords((p) => ({ ...p, add: false })); setTestingConnection('idle'); }}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-brand-gray hover:bg-brand-bg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addProfile}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold bg-brand-blue text-white hover:shadow-lg hover:shadow-brand-blue/20 transition-all flex items-center gap-2"
                  >
                    <Plus size={16} />
                    Add Profile
                  </button>
                </div>
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>

      {/* FAB */}
      <Motion.button
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setShowAdd(true);
          setAddForm(emptyForm);
          setAddDbTypeOpen(false);
          setShowPasswords((p) => ({ ...p, add: false }));
          setTestingConnection('idle');
        }}
        className="fixed bottom-8 right-8 z-[150] w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-white bg-brand-blue shadow-2xl shadow-brand-blue/30 transition-all duration-300"
      >
        <Plus size={32} className="lg:scale-125" />
      </Motion.button>

      <ConfirmationModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal((prev) => ({ ...prev, isOpen: false }))}
        onConfirm={confirmModal.onConfirm}
        title={confirmModal.title}
        message={confirmModal.message}
        confirmLabel={confirmModal.confirmLabel}
        variant={confirmModal.variant}
      />
    </>
  );
};

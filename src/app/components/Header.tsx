import React, { useState } from 'react';
import { Search, ChevronDown, Check, Bell, MessageSquare, AlertCircle, Calendar } from 'lucide-react';
import { motion as Motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';

interface HeaderProps {
  title: string;
  search: string;
  setSearch: (val: string) => void;
}

const notifications = [
  {
    id: 1,
    title: 'Critical Score Drop',
    desc: 'Patient satisfaction in Cardiology dropped by 12% this morning.',
    time: '2m ago',
    type: 'alert',
    unread: true,
    severity: 'high'
  },
  {
    id: 2,
    title: 'Unresolved Escalation',
    desc: 'Patient #8291 feedback regarding "Wait Times" remains unresolved after 24h.',
    time: '45m ago',
    type: 'alert',
    unread: true,
    severity: 'medium'
  },
  {
    id: 3,
    title: 'Anomalous Activity',
    desc: 'Unusual spike in negative sentiment detected in East Wing Discharge.',
    time: '3h ago',
    type: 'alert',
    unread: false,
    severity: 'medium'
  },
  {
    id: 4,
    title: 'Data Sync Error',
    desc: 'Connection to Epic EHR lost for North Center facility.',
    time: '1d ago',
    type: 'system',
    unread: false,
    severity: 'high'
  }
];

export const Header: React.FC<HeaderProps> = ({ title, search, setSearch }) => {
  const [isFacilityOpen, setIsFacilityOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState('Main Hospital');
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const facilities = [
    'All Facilities',
    'Main Hospital',
    'East Wing',
    'West Wing',
    'North Center'
  ];

  return (
    <Motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="h-16 bg-card border-b border-brand-border flex items-center justify-between px-4 lg:px-8 fixed top-0 lg:left-[280px] left-0 right-0 z-40"
    >
      <h2 className="text-xl font-bold text-brand-dark tracking-tight hidden sm:block">{title}</h2>
      
      <div className="flex items-center gap-4 flex-1 justify-end">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-[448px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" />
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..." 
            className="w-full h-9 bg-brand-bg rounded-xl pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue/50 transition-all border-none"
          />
        </div>

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all relative ${
              isNotificationsOpen 
                ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' 
                : 'bg-brand-bg text-brand-dark hover:bg-brand-bg/80'
            }`}
          >
            <Bell size={18} />
            <div className={`absolute top-2.5 right-2.5 w-2 h-2 rounded-full border-2 transition-colors ${
              isNotificationsOpen ? 'bg-white border-brand-blue' : 'bg-brand-blue border-card'
            }`} />
          </button>

          <AnimatePresence>
            {isNotificationsOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsNotificationsOpen(false)} />
                <Motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-card rounded-2xl shadow-2xl border border-brand-border z-20 overflow-hidden flex flex-col"
                >
                  <div className="p-4 border-b border-brand-bg flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-brand-dark">Active Alerts</h3>
                      <p className="text-[10px] text-brand-gray font-bold uppercase tracking-widest mt-0.5">2 Critical Issues</p>
                    </div>
                    <button className="text-[10px] font-bold text-brand-blue uppercase tracking-widest hover:underline">Clear All</button>
                  </div>

                  <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                    {notifications.map((notif) => (
                      <div 
                        key={notif.id}
                        className={`p-4 border-b border-brand-bg hover:bg-brand-bg/50 transition-colors cursor-pointer flex gap-4 ${notif.unread ? 'bg-brand-blue/5' : ''}`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          notif.severity === 'high' ? 'bg-red-50 text-red-600' :
                          notif.severity === 'medium' ? 'bg-amber-50 text-amber-600' :
                          'bg-blue-50 text-blue-600'
                        }`}>
                          {notif.type === 'alert' && <AlertCircle size={18} />}
                          {notif.type === 'system' && <Calendar size={18} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-0.5">
                            <h4 className="text-xs font-bold text-brand-dark truncate">{notif.title}</h4>
                            <span className="text-[10px] font-medium text-brand-gray whitespace-nowrap">{notif.time}</span>
                          </div>
                          <p className="text-xs text-brand-gray leading-normal line-clamp-2">{notif.desc}</p>
                        </div>
                        {notif.unread && (
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                        )}
                      </div>
                    ))}
                  </div>
                </Motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Hospital Selector */}
        <div className="relative">
          <button 
            onClick={() => setIsFacilityOpen(!isFacilityOpen)}
            className="flex items-center gap-2 bg-brand-bg px-4 py-2 rounded-xl hover:bg-brand-bg/80 transition-colors shrink-0"
          >
            <span className="text-xs font-bold text-brand-dark whitespace-nowrap text-[14px]">{selectedFacility}</span>
            <ChevronDown size={14} className={`text-brand-gray transition-transform duration-200 ${isFacilityOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isFacilityOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsFacilityOpen(false)}
                />
                <Motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 top-full mt-2 w-56 bg-card rounded-2xl shadow-2xl border border-brand-border z-20 py-2 overflow-hidden"
                >
                  <div className="px-4 py-2 mb-1 border-b border-brand-bg">
                    <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Select Facility</p>
                  </div>
                  {facilities.map((facility) => (
                    <button
                      key={facility}
                      onClick={() => {
                        setSelectedFacility(facility);
                        setIsFacilityOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-left flex items-center justify-between group hover:bg-brand-bg transition-colors"
                    >
                      <span className={`text-sm font-bold ${selectedFacility === facility ? 'text-brand-blue' : 'text-brand-dark'}`}>
                        {facility}
                      </span>
                      {selectedFacility === facility && (
                        <Check size={14} className="text-brand-blue" />
                      )}
                    </button>
                  ))}
                </Motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Motion.header>
  );
};

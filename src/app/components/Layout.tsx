import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Dashboard } from './Dashboard';
import { Engagement } from './Engagement';
import { LymbusModule } from './LymbusModule';
import { LymbusAssistant } from './LymbusAssistant';
import { DepartmentDetailView } from './DepartmentDetailView';
import { LocationDetailView } from './LocationDetailView';
import { HelpSupport } from './HelpSupport';
import { Settings } from './Settings';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { motion as Motion, useScroll, useMotionValueEvent } from 'motion/react';

import { Benchmarking } from './Benchmarking';

interface LayoutProps {
  onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [headersHidden, setHeadersHidden] = useState(false);
  const [selectedDept, setSelectedDept] = useState<any>(null);
  const [selectedLoc, setSelectedLoc] = useState<any>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedDept, selectedLoc, activeTab]);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHeadersHidden(true);
    } else {
      setHeadersHidden(false);
    }
  });

  const renderContent = () => {
    if (selectedDept) {
      return (
        <DepartmentDetailView 
          dept={selectedDept} 
          onClose={() => setSelectedDept(null)} 
        />
      );
    }

    if (selectedLoc) {
      return (
        <LocationDetailView 
          location={selectedLoc} 
          onClose={() => setSelectedLoc(null)} 
        />
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard search={search} onSelectDept={setSelectedDept} onSelectLoc={setSelectedLoc} />;
      case 'engagement':
        return <Engagement search={search} />;
      case 'benchmarking':
        return <Benchmarking />;
      case 'lymbus':
        return <LymbusModule />;
      case 'help':
        return <HelpSupport />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-brand-gray p-8 text-center">
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-widest">{activeTab} Page</h2>
            <p>This section is currently under development.</p>
          </div>
        );
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'engagement': return 'Engagement';
      case 'lymbus': return 'Lymbus AI';
      case 'root-cause': return 'Root Cause';
      case 'benchmarking': return 'Benchmarking';
      case 'escalation': return 'Escalation';
      case 'reports': return 'Reports';
      case 'settings': return 'Settings';
      case 'help': return 'Help & Support';
      default: return 'Lymbus AI';
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <Motion.div 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={headersHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="lg:hidden h-16 bg-card border-b border-brand-border flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-[60]"
      >
        <div className="flex items-center gap-2">
          {(selectedDept || selectedLoc) ? (
            <button 
              onClick={() => {
                setSelectedDept(null);
                setSelectedLoc(null);
              }}
              className="p-2 -ml-2 hover:bg-brand-bg rounded-lg text-brand-blue"
            >
              <ArrowLeft size={24} />
            </button>
          ) : (
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white">
              <span className="font-bold">L</span>
            </div>
          )}
          <h1 className="text-brand-dark text-lg font-bold">
            {selectedDept ? selectedDept.name : selectedLoc ? selectedLoc.name : 'Lymbus AI'}
          </h1>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-brand-dark hover:bg-brand-bg rounded-lg transition-colors"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Motion.div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-[56] w-[280px] transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsSidebarOpen(false);
          }} 
          onLogout={onLogout}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:pl-[280px] pt-16 lg:pt-0">
        {(!selectedDept && !selectedLoc) && (
          <>
            <div className="hidden lg:block">
              <Header title={getTitle()} search={search} setSearch={setSearch} />
            </div>
            
            {/* Mobile Title View */}
            <Motion.div 
              variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
              }}
              animate={headersHidden ? "hidden" : "visible"}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="hidden p-4 bg-card border-b border-brand-border flex items-center justify-between fixed top-16 left-0 right-0 z-50"
            >
              <h2 className="text-lg font-bold text-brand-dark">{getTitle()}</h2>
            </Motion.div>
          </>
        )}
        
        <div className={`min-h-[calc(100vh-64px)] overflow-x-hidden relative ${(!selectedDept && !selectedLoc) ? 'lg:pt-16 pt-8' : ''}`}>
          {renderContent()}
        </div>
      </main>

      {activeTab === 'dashboard' && !selectedDept && !selectedLoc && <LymbusAssistant />}
    </div>
  );
};
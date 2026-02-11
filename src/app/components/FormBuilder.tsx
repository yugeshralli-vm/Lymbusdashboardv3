import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Search, 
  ChevronDown, 
  Monitor, 
  Zap, 
  Layout,
  LayoutGrid,
  MousePointer2
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { cn } from '@/app/components/ui/utils';
import { toast } from 'sonner';
import { FormBuilderClassic } from '@/app/components/FormBuilderClassic';
import { FormBuilderInteractive } from '@/app/components/FormBuilderInteractive';

export const FormBuilder = ({ onBack }: { onBack: () => void }) => {
  const [version, setVersion] = useState<'classic' | 'interactive'>('classic');
  const [selectedFacility, setSelectedFacility] = useState('Main Hospital');
  const [isFacilityOpen, setIsFacilityOpen] = useState(false);

  return (
    <div className="fixed inset-0 bg-brand-bg z-[1000] flex flex-col animate-in fade-in duration-300 overflow-hidden">
      {/* Shared Header */}
      <header className="h-16 bg-white border-b border-brand-border px-4 lg:px-8 flex items-center justify-between shrink-0 z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-gray hover:text-brand-dark transition-all font-bold text-xs lg:text-sm group"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to forms</span>
          </button>
          <div className="h-6 w-px bg-brand-border mx-2" />
          <div className="flex flex-col">
            <h1 className="text-lg lg:text-xl font-bold text-brand-dark tracking-tight whitespace-nowrap leading-none">Form Builder</h1>
            <span className="text-[8px] font-bold text-brand-blue uppercase tracking-widest mt-1">
              {version === 'classic' ? 'Standard Editor' : 'Interactive Designer'}
            </span>
          </div>
        </div>

        {/* Version Toggle */}
        <div className="flex items-center bg-brand-bg p-1 rounded-xl border border-brand-border gap-1 mx-4 lg:mx-8">
          <button
            onClick={() => setVersion('classic')}
            className={cn(
              "flex items-center gap-2 px-4 py-1.5 rounded-lg text-[9px] font-bold transition-all uppercase tracking-widest whitespace-nowrap",
              version === 'classic' 
                ? "bg-white text-brand-blue shadow-sm" 
                : "text-brand-gray hover:text-brand-dark"
            )}
          >
            <Layout size={14} />
            <span className="hidden md:inline">Classic</span>
          </button>
          <button
            onClick={() => {
              setVersion('interactive');
              toast.info('Switched to Interactive Designer (Drag & Drop enabled)');
            }}
            className={cn(
              "flex items-center gap-2 px-4 py-1.5 rounded-lg text-[9px] font-bold transition-all uppercase tracking-widest whitespace-nowrap",
              version === 'interactive' 
                ? "bg-white text-brand-blue shadow-sm" 
                : "text-brand-gray hover:text-brand-dark"
            )}
          >
            <Zap size={14} />
            <span className="hidden md:inline">Interactive</span>
          </button>
        </div>

        <div className="flex items-center gap-3 lg:gap-6 flex-1 justify-end">
          <div className="relative w-48 lg:w-64 hidden xl:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" />
            <input 
              type="text" 
              placeholder="SEARCH..." 
              className="w-full h-9 bg-brand-bg border border-brand-border rounded-xl pl-10 pr-4 text-[10px] font-bold tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-brand-blue/30"
            />
          </div>
          
          <div className="relative hidden sm:block">
            <button 
              onClick={() => setIsFacilityOpen(!isFacilityOpen)}
              className="flex items-center gap-2 bg-brand-bg px-4 py-2 rounded-xl border border-brand-border hover:bg-white transition-all shrink-0"
            >
              <span className="text-[10px] lg:text-xs font-bold text-brand-gray uppercase tracking-widest">{selectedFacility}</span>
              <ChevronDown size={14} className={cn("text-brand-gray transition-transform", isFacilityOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {isFacilityOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsFacilityOpen(false)} />
                  <Motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-brand-border z-20 overflow-hidden"
                  >
                    {['Main Hospital', 'East Wing', 'West Wing'].map(f => (
                      <button 
                        key={f}
                        onClick={() => {
                          setSelectedFacility(f);
                          setIsFacilityOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-xs font-bold text-brand-dark hover:bg-brand-bg transition-colors"
                      >
                        {f}
                      </button>
                    ))}
                  </Motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => {
              toast.success('Form saved successfully');
              onBack();
            }}
            className="px-6 lg:px-8 py-2 bg-brand-blue text-white rounded-xl font-bold text-xs lg:text-sm shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all whitespace-nowrap"
          >
            Save
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {version === 'classic' ? (
            <Motion.div
              key="classic"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute inset-0"
            >
              <FormBuilderClassic onBack={onBack} />
            </Motion.div>
          ) : (
            <Motion.div
              key="interactive"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <FormBuilderInteractive onBack={onBack} />
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import {
  X,
  Building2,
  MapPin,
  Phone,
  Mail,
  Plus,
  Sparkles,
  Hospital,
} from 'lucide-react';
import { toast } from 'sonner';
import { useFocusTrap } from './useFocusTrap';

interface AddFacilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (facility: any) => void;
}

export const AddFacilityModal: React.FC<AddFacilityModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [formValues, setFormValues] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
  });

  const { containerRef } = useFocusTrap({ isOpen, onClose: resetAndClose });

  function resetAndClose() {
    setFormValues({ name: '', location: '', phone: '', email: '' });
    onClose();
  }

  const handleSubmit = () => {
    if (!formValues.name || !formValues.location) {
      toast.error('Please fill in all required fields');
      return;
    }

    const newFacility = {
      id: `FAC-${String(Date.now()).slice(-3)}`,
      name: formValues.name,
      location: formValues.location,
      type: 'Hospital',
      configuredSources: [],
    };

    onAdd(newFacility);
    toast.success(`"${formValues.name}" added successfully`, {
      description: `Hospital facility at ${formValues.location}`,
    });
    resetAndClose();
  };

  const updateField = (key: string, value: string) => {
    setFormValues(prev => ({ ...prev, [key]: value }));
  };

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
            aria-label="Add facility"
          >
            {/* Header */}
            <div className="p-6 pb-4 border-b border-brand-border shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] flex items-center justify-center bg-brand-blue/10 text-brand-blue">
                    <Hospital size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-brand-dark">
                      Add Hospital
                    </h2>
                    <p className="text-xs text-brand-gray font-medium mt-0.5">
                      Provide details for this facility
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
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-5">
                {/* Facility Name */}
                <div className="space-y-2">
                  <label htmlFor="facility-name" className="text-[10px] font-bold text-brand-gray uppercase tracking-widest flex items-center gap-1">
                    Facility Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="facility-name"
                    type="text"
                    value={formValues.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="e.g., Metro General Hospital"
                    className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                    autoFocus
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label htmlFor="facility-location" className="text-[10px] font-bold text-brand-gray uppercase tracking-widest flex items-center gap-1">
                    Location / Campus <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" />
                    <input
                      id="facility-location"
                      type="text"
                      value={formValues.location}
                      onChange={(e) => updateField('location', e.target.value)}
                      placeholder="e.g., North Campus, Building A"
                      className="w-full bg-brand-bg rounded-xl pl-11 pr-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                    />
                  </div>
                </div>

                {/* Contact section */}
                <div className="pt-2">
                  <h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-4">Contact Information</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="facility-phone" className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                        Main Phone
                      </label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" />
                        <input
                          id="facility-phone"
                          type="tel"
                          value={formValues.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-brand-bg rounded-xl pl-10 pr-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="facility-email" className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                        Admin Email
                      </label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" />
                        <input
                          id="facility-email"
                          type="email"
                          value={formValues.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="admin@facility.com"
                          className="w-full bg-brand-bg rounded-xl pl-10 pr-4 py-3 text-sm font-bold text-brand-dark border border-brand-border outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-brand-gray/40 placeholder:font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Tip */}
                <div className="p-3 rounded-[12px] bg-brand-blue/5 border border-brand-blue/10 flex items-start gap-3">
                  <Sparkles size={14} className="text-brand-blue shrink-0 mt-0.5" />
                  <p className="text-[11px] text-brand-dark font-medium leading-snug italic">
                    Lymbus AI will automatically set up default integrations and benchmarks for this hospital.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
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
                  disabled={!formValues.name || !formValues.location}
                  className={`flex-1 px-6 py-3 rounded-xl text-white text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2 ${
                    formValues.name && formValues.location
                      ? 'bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20'
                      : 'bg-brand-gray/30 cursor-not-allowed shadow-none'
                  }`}
                >
                  <Plus size={14} />
                  Add Hospital
                </button>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};
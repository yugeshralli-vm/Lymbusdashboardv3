import React from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, X } from 'lucide-react';
import { useFocusTrap } from './useFocusTrap';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'warning' | 'info';
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'danger'
}) => {
  const { containerRef } = useFocusTrap({ isOpen, onClose });

  const variantStyles = {
    danger: {
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      buttonBg: 'bg-red-600 hover:bg-red-700 shadow-red-200',
    },
    warning: {
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      buttonBg: 'bg-amber-600 hover:bg-amber-700 shadow-amber-200',
    },
    info: {
      iconBg: 'bg-brand-blue/10',
      iconColor: 'text-brand-blue',
      buttonBg: 'bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20',
    }
  };

  const style = variantStyles[variant];

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4" ref={containerRef} key="confirmation-modal-wrapper">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
            aria-hidden="true"
          />
          <Motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-card w-full max-w-md rounded-[24px] shadow-2xl overflow-hidden"
            role="alertdialog"
            aria-modal="true"
            aria-label={title}
            aria-describedby="confirm-modal-message"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl ${style.iconBg} ${style.iconColor} flex items-center justify-center shrink-0`}>
                  <AlertTriangle size={24} />
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-brand-bg rounded-full transition-colors text-brand-gray"
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-2 mb-8">
                <h3 className="text-xl font-bold text-brand-dark tracking-tight">{title}</h3>
                <p className="text-sm font-medium text-brand-gray leading-relaxed" id="confirm-modal-message">
                  {message}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 rounded-xl border border-brand-border text-xs font-bold text-brand-gray uppercase tracking-widest hover:bg-brand-bg transition-all active:scale-95"
                >
                  {cancelLabel}
                </button>
                <button
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className={`flex-1 px-6 py-3 rounded-xl ${style.buttonBg} text-white text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg`}
                >
                  {confirmLabel}
                </button>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};
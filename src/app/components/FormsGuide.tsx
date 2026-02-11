import React from 'react';
import { HelpCircle, ChevronRight, Lightbulb, X } from 'lucide-react';
import { motion as Motion } from 'motion/react';

interface FormsGuideProps {
  onClose: () => void;
}

export const FormsGuide = ({ onClose }: FormsGuideProps) => {
  const steps = [
    {
      id: 1,
      title: 'Click FAB (+)',
      description: 'Start by clicking the floating action button at the bottom right',
    },
    {
      id: 2,
      title: 'Choose Template',
      description: 'Select a pre-built template or start from scratch',
    },
    {
      id: 3,
      title: 'Add Questions',
      description: 'Customize questions from the Question Bank',
    },
    {
      id: 4,
      title: 'Configure & Publish',
      description: 'Set up triggers and activate to start collecting responses',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-[24px] border border-brand-border overflow-hidden mb-8 relative group"
    >
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-blue">
              <HelpCircle size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-dark">How to Create a Form</h3>
              <p className="text-brand-gray text-sm">Follow these steps to create effective patient feedback forms</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-brand-bg rounded-lg transition-colors text-brand-gray"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative">
          {steps.map((step, index) => (
            <Motion.div
              key={step.id}
              variants={itemVariants}
              className="flex items-start gap-4 relative group/step"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-brand-blue/20 group-hover/step:scale-110 transition-transform">
                {step.id}
              </div>
              <div className="flex-1 pr-4">
                <h4 className="font-bold text-brand-dark text-sm mb-1 group-hover/step:text-brand-blue transition-colors">
                  {step.title}
                </h4>
                <p className="text-brand-gray text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center absolute right-0 top-1 text-brand-border">
                  <ChevronRight size={20} />
                </div>
              )}
            </Motion.div>
          ))}
        </div>
      </div>

      <div className="bg-brand-bg/30 px-6 lg:px-8 py-4 border-t border-brand-border flex items-center gap-3">
        <div className="text-brand-blue">
          <Lightbulb size={18} fill="currentColor" fillOpacity={0.2} />
        </div>
        <p className="text-xs font-medium text-brand-gray italic">
          <span className="font-bold text-brand-dark not-italic mr-1">Pro tip:</span>
          Start with a template to save time. You can customize it to match your specific needs.
        </p>
      </div>
    </Motion.div>
  );
};

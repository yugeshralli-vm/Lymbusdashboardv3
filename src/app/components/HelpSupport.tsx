import React from 'react';
import { 
  Book, 
  Video, 
  FileText, 
  LayoutDashboard, 
  Sparkles, 
  FileEdit, 
  MessageSquare, 
  Search, 
  AlertTriangle, 
  ExternalLink,
  HelpCircle,
  PlayCircle,
  Mail,
  Lightbulb
} from 'lucide-react';
import { motion as Motion } from 'motion/react';

const GuideCard = ({ icon: Icon, title, description, meta, delay }: any) => (
  <Motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-card p-6 rounded-[24px] border border-brand-border hover:shadow-lg transition-all cursor-pointer group flex flex-col items-start h-full"
  >
    <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-brand-dark mb-2">{title}</h3>
    <p className="text-sm text-brand-gray mb-6 flex-1">{description}</p>
    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider group-hover:underline">
      {meta}
    </span>
  </Motion.div>
);

const FeatureItem = ({ badge, title, description, delay, icon: Icon }: any) => (
  <Motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-card p-4 md:p-6 rounded-[24px] border border-brand-border hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all cursor-pointer group flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
  >
    <div className="shrink-0">
      <span className="px-3 py-1.5 rounded-lg bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-wider">
        {badge}
      </span>
    </div>
    <div className="flex-1">
      <h4 className="text-base font-bold text-brand-dark mb-1 flex items-center gap-2">
        {title}
      </h4>
      <p className="text-sm text-brand-gray">{description}</p>
    </div>
    <div className="text-brand-gray/40 group-hover:text-brand-blue transition-colors self-end md:self-center">
      <ExternalLink size={20} />
    </div>
  </Motion.div>
);

export const HelpSupport = () => {
  return (
    <div className="p-4 lg:p-8 space-y-8 max-w-[1200px] mx-auto pb-20">
      
      {/* Header Section */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-brand-dark">Help & Support</h2>
        <p className="text-brand-gray">Find guides, documentation, and support resources.</p>
      </div>

      {/* Getting Started */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center text-brand-blue">
            <Lightbulb size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-brand-dark">Getting Started</h3>
            <p className="text-sm text-brand-gray">Quick tips to help you get the most out of the platform</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GuideCard 
            icon={Book}
            title="Platform Overview"
            description="Learn the basics of navigating and using key features"
            meta="5 min read"
            delay={0.1}
          />
          <GuideCard 
            icon={Video}
            title="Video Tutorials"
            description="Watch step-by-step guides for common workflows"
            meta="10 videos"
            delay={0.2}
          />
          <GuideCard 
            icon={FileText}
            title="Documentation"
            description="Detailed reference for all modules and settings"
            meta="Full docs"
            delay={0.3}
          />
        </div>
      </section>

      {/* Feature Guides */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center text-emerald-600">
            <Book size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-brand-dark">Feature Guides</h3>
            <p className="text-sm text-brand-gray">Learn how to use each module effectively</p>
          </div>
        </div>

        <div className="space-y-4">
          <FeatureItem 
            badge="Dashboard"
            title="Dashboard & Analytics"
            description="Understanding your NPS, PREM, and PROM metrics at a glance"
            delay={0.4}
            icon={LayoutDashboard}
          />
          <FeatureItem 
            badge="AI Copilot"
            title="Lymbus AI Assistant"
            description="Ask questions about patient feedback and get AI-powered insights"
            delay={0.5}
            icon={Sparkles}
          />
          <FeatureItem 
            badge="Forms"
            title="Form Builder"
            description="Create and customize patient experience surveys"
            delay={0.6}
            icon={FileEdit}
          />
          <FeatureItem 
            badge="Campaigns"
            title="Campaign Management"
            description="Schedule and track survey distribution campaigns"
            delay={0.7}
            icon={MessageSquare}
          />
          <FeatureItem 
            badge="Root Cause"
            title="Root Cause Analysis"
            description="Identify patterns and drivers behind patient feedback"
            delay={0.8}
            icon={Search}
          />
          <FeatureItem 
            badge="Escalation"
            title="Escalation Rules"
            description="Set up automated alerts for critical feedback"
            delay={0.9}
            icon={AlertTriangle}
          />
        </div>
      </section>

      {/* Need More Help Footer */}
      <Motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-[24px] border border-brand-border p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 mt-8 shadow-sm"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
            <HelpCircle size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-brand-dark mb-1">Need More Help?</h3>
            <p className="text-sm text-brand-gray">Contact our support team or browse FAQs</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-brand-border bg-white text-brand-dark font-bold text-sm hover:bg-brand-bg transition-colors flex items-center justify-center gap-2">
            <FileText size={16} />
            Browse FAQs
          </button>
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-brand-border bg-white text-brand-dark font-bold text-sm hover:bg-brand-bg transition-colors flex items-center justify-center gap-2">
            <PlayCircle size={16} />
            Watch Tutorials
          </button>
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-blue text-white font-bold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20">
            <Mail size={16} />
            Contact Support
          </button>
        </div>
      </Motion.div>

    </div>
  );
};

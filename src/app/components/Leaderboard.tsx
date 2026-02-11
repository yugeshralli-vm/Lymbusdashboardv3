import React from 'react';
import { 
  Trophy, 
  Info, 
  TrendingUp, 
  Clock, 
  Users,
  Award
} from 'lucide-react';
import { motion as Motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const resources = [
  { 
    rank: 1, 
    initials: 'EW', 
    name: 'Dr. Emily Watson', 
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc3MDAwNzMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Chief of Medicine', 
    location: 'Central Medical', 
    patients: '1,240', 
    score: 98, 
    color: 'bg-[#FFB800]',
    avatarColor: 'bg-brand-blue'
  },
  { 
    rank: 2, 
    initials: 'MC', 
    name: 'Dr. Michael Chen', 
    image: 'https://images.unsplash.com/photo-1746258537532-0fff0f0acc56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBoZWFkc2hvdCUyMG1hbiUyMGFzaWFufGVufDF8fHx8MTc3MDAwNzMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Senior Cardiologist', 
    location: 'Eastgate Clinic', 
    patients: '890', 
    score: 96, 
    color: 'bg-[#F20000]',
    avatarColor: 'bg-brand-blue'
  },
  { 
    rank: 3, 
    initials: 'SJ', 
    name: 'Dr. Sarah Johnson', 
    image: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFuJTIwbWVkaWNhbCUyMHN0YWZmfGVufDF8fHx8MTc3MDAwNzMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Head of Pediatrics', 
    location: 'Harbor View', 
    patients: '756', 
    score: 94, 
    color: 'bg-[#008D36]',
    avatarColor: 'bg-brand-blue'
  },
  { 
    rank: 4, 
    initials: 'JM', 
    name: 'Dr. James Miller', 
    image: 'https://images.unsplash.com/photo-1691935152212-7a1efe77c5d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBoZWFkc2hvdCUyMG1hbiUyMHdoaXRlfGVufDF8fHx8MTc3MDAwNzMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Orthopedic Surgeon', 
    location: 'Summit Health', 
    patients: '680', 
    score: 92, 
    color: 'bg-[#0078C1]',
    avatarColor: 'bg-brand-blue'
  },
  { 
    rank: 5, 
    initials: 'LT', 
    name: 'Dr. Lisa Thompson', 
    image: 'https://images.unsplash.com/photo-1674049406176-021807a2802e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBudXJzZSUyMHBvcnRyYWl0JTIwd29tYW4lMjBob3NwaXRhbHxlbnwxfHx8fDE3NzAwMDczMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'General Practitioner', 
    location: 'Northside Hospital', 
    patients: '520', 
    score: 90, 
    color: 'bg-brand-bg text-brand-gray border border-brand-border',
    avatarColor: 'bg-brand-blue'
  },
];

export const Leaderboard = () => {
  return (
    <section className="bg-card rounded-[24px] border border-brand-border p-8 space-y-8 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-brand-dark">Top Performing Doctors</h3>
            <div className="text-brand-gray/40 hover:text-brand-blue transition-colors cursor-help">
              <Info size={14} />
            </div>
          </div>
          <p className="text-sm text-brand-gray">Based on patient volume and quality score</p>
        </div>
        <div className="w-10 h-10 bg-brand-bg rounded-xl flex items-center justify-center text-brand-gray">
          <Trophy size={20} />
        </div>
      </div>

      <div className="space-y-2">
        {resources.map((resource, index) => (
          <Motion.div 
            key={resource.rank}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col xl:flex-row xl:items-center justify-between p-4 rounded-2xl hover:bg-brand-bg/40 transition-all group border border-transparent hover:border-brand-border gap-4"
          >
            <div className="flex items-center gap-3 lg:gap-6 flex-1">
              {/* Rank */}
              <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-[10px] lg:text-xs font-bold shrink-0 ${resource.color} ${resource.rank <= 4 ? 'text-white shadow-lg' : 'shadow-sm'}`}>
                {resource.rank}
              </div>

              {/* Avatar */}
              <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full ${resource.avatarColor} flex items-center justify-center text-white text-[10px] lg:text-xs font-bold shadow-md shrink-0 overflow-hidden relative`}>
                {resource.image ? (
                  <ImageWithFallback 
                    src={resource.image} 
                    alt={resource.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  resource.initials
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-sm lg:text-base font-bold text-brand-dark truncate">{resource.name}</h4>
                  {resource.rank === 1 && (
                    <span className="bg-brand-blue text-white text-[8px] lg:text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">TOP</span>
                  )}
                </div>
                <p className="text-[10px] lg:text-xs text-brand-gray font-medium truncate">
                  {resource.title} <span className="hidden sm:inline">•</span> <span className="sm:block xl:inline text-brand-blue/70">{resource.location}</span>
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-between xl:justify-end gap-4 sm:gap-6 lg:gap-12 xl:min-w-[250px]">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5 text-brand-dark font-bold text-xs lg:text-sm mb-1">
                  <Users size={12} className="text-brand-gray" />
                  {resource.patients}
                </div>
                <span className="text-[9px] lg:text-[10px] font-bold text-brand-gray uppercase tracking-widest">Patients</span>
              </div>

              <div className="flex flex-col items-end sm:items-start xl:items-end">
                <div className="text-xl lg:text-[24px] font-bold text-brand-dark leading-none">
                  {resource.score}
                </div>
                <span className="text-[9px] lg:text-[10px] font-bold text-brand-gray uppercase tracking-widest">Score</span>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

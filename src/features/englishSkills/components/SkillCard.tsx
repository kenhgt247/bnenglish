import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

export default function SkillCard({ title, description, icon: Icon, color, onClick }: SkillCardProps) {
  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-3xl border border-${color}-100 bg-${color}-50 hover:shadow-lg transition-all text-left w-full`}
    >
      <div className={`p-3 bg-white rounded-2xl shadow-sm text-${color}-500 w-fit mb-4`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </button>
  );
}

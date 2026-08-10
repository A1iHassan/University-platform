import React from 'react';
export type SecondaryTabItem = {
  id: string;
  label: string;
  description?: string;
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
};

export type PrimaryTabItem = {
  id: string;
  label: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  secondaryTabs: SecondaryTabItem[];
};
interface DashboardContentProps {
  activePrimaryTab: PrimaryTabItem | null;
  activeSecondaryTab: SecondaryTabItem | null;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({
  activePrimaryTab,
  activeSecondaryTab,
}) => {
  return (
    <main className="flex-1 flex flex-col h-full bg-slate-950 text-slate-100 overflow-y-auto">
      <div className="flex-1 p-8 flex flex-col items-start justify-start max-w-7xl mx-auto w-full space-y-4">
        {/* Main Tab Title */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-100 font-mono">
          {activePrimaryTab?.label || 'Tab 1'}
        </h1>

        {/* Sub-Tab Title */}
        {activeSecondaryTab && (
          <h2 className="text-2xl font-semibold text-slate-400 font-mono">
            {activeSecondaryTab.label}
          </h2>
        )}
      </div>
    </main>
  );
};

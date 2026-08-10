import React from 'react';
import { CommandLineIcon } from '@heroicons/react/24/outline';
export type SecondaryTabItem = {
  id: string;
  label: string;
  path: string;
  description?: string;
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
};

export type PrimaryTabItem = {
  id: string;
  label: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  secondaryTabs: SecondaryTabItem[];
};
interface PrimarySidebarProps {
  tabs: PrimaryTabItem[];
  activeTabId: string | null;
  onSelectTab: (tabId: string) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export const PrimarySidebar: React.FC<PrimarySidebarProps> = ({
  tabs,
  activeTabId,
  onSelectTab,
  isExpanded,
  onToggleExpand,
}) => {
  return (
    <aside
      className={`relative flex flex-col h-full bg-slate-950 text-slate-300 border-r border-slate-800 transition-all duration-300 ease-in-out select-none z-20 ${
        isExpanded ? 'w-56' : 'w-20'
      }`}
    >
      {/* Sidebar Header with Clickable Icon Trigger */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800/80 bg-slate-950/60">
        <button
          onClick={onToggleExpand}
          title={isExpanded ? 'Collapse Primary Sidebar' : 'Expand Primary Sidebar'}
          className="flex items-center justify-center w-full gap-2 overflow-hidden py-1 px-1.5 rounded-xl hover:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-700 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-center p-2 rounded-lg bg-slate-800 group-hover:bg-slate-700 text-slate-200 group-active:scale-95 transition-all">
            <CommandLineIcon className="w-5 h-5 shrink-0" />
          </div>
          {isExpanded && (
            <span className="font-bold tracking-wide text-slate-100 text-sm whitespace-nowrap truncate">
              Primary Nav
            </span>
          )}
        </button>
      </div>

      {/* Primary Tabs Navigation List */}
      <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTabId === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              title={tab.label}
              className={`w-full h-12 rounded-xl flex items-center justify-center transition-all duration-200 group relative ${
                isActive
                  ? 'bg-slate-800 text-slate-100 font-semibold shadow-inner border border-slate-700'
                  : 'bg-slate-900/60 text-slate-400 hover:bg-slate-900 hover:text-slate-200 border border-slate-900/50'
              }`}
            >
              {/* Active Indicator Strip on Left */}
              {isActive && (
                <div className="absolute left-1 top-2 bottom-2 w-1 bg-slate-300 rounded-full" />
              )}

              {/* Centered Tab Label & Icon */}
              <div className="flex items-center justify-center gap-2.5 px-2">
                <Icon className={`w-5 h-5 shrink-0 transition-colors ${isActive ? 'text-slate-100' : 'text-slate-400 group-hover:text-slate-200'}`} />
                {isExpanded ? (
                  <span className="text-sm tracking-wide text-center uppercase font-mono">
                    {tab.label}
                  </span>
                ) : (
                  <span className="text-xs text-center uppercase font-mono font-medium">
                    {tab.label.replace('Tab ', 'T')}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

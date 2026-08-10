import React from 'react';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router';
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
interface SecondarySidebarProps {
  primaryTabLabel: string;
  tabs: SecondaryTabItem[];
  activeSecondaryTabId: string | null;
  onSelectSecondaryTab: (tabId: string) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export const SecondarySidebar: React.FC<SecondarySidebarProps> = ({
  primaryTabLabel,
  tabs,
  activeSecondaryTabId,
  onSelectSecondaryTab,
  isExpanded,
  onToggleExpand,
}) => {
  return (
    <aside
      className={`relative flex flex-col h-full bg-slate-900 text-slate-300 border-r border-slate-800 transition-all duration-300 ease-in-out select-none z-10 ${
        isExpanded ? 'w-60' : 'w-20'
      }`}
    >
      {/* Secondary Sidebar Header with Clickable Icon Trigger */}
      <div className="flex items-center justify-between h-16 px-3 border-b border-slate-800 bg-slate-900/80">
        <button
          onClick={onToggleExpand}
          title={isExpanded ? 'Collapse Secondary Sidebar' : 'Expand Secondary Sidebar'}
          className="flex items-center justify-center w-full gap-2 overflow-hidden py-1 px-1 rounded-lg hover:bg-slate-800/80 focus:outline-none focus:ring-1 focus:ring-slate-700 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-center p-1.5 rounded-md bg-slate-800 group-hover:bg-slate-700 text-slate-300 group-active:scale-95 transition-all">
            <DocumentDuplicateIcon className="w-4 h-4 shrink-0" />
          </div>
          {isExpanded && (
            <span className="font-semibold text-xs uppercase tracking-wider text-slate-300 truncate">
              {primaryTabLabel} Subnav
            </span>
          )}
        </button>
      </div>

      {/* Secondary Tabs Navigation List */}
      <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSecondaryTabId === tab.id;

          return (
            <Link
	      to={{pathname: tab.path}}
              key={tab.id}
              onClick={() => onSelectSecondaryTab(tab.id)}
              title={tab.label}
              className={`w-full h-11 rounded-lg flex items-center justify-center transition-all duration-200 group relative ${
                isActive
                  ? 'bg-slate-800 text-slate-100 font-semibold border border-slate-700 shadow-sm'
                  : 'bg-slate-950/40 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 border border-slate-900/80'
              }`}
            >
              {/* Centered Tab Label & Icon */}
              <div className="flex items-center justify-center gap-2 px-2">
                {Icon && (
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-slate-100' : 'text-slate-400 group-hover:text-slate-200'}`} />
                )}
                {isExpanded ? (
                  <span className="text-xs tracking-wide text-center uppercase font-mono">
                    {tab.label}
                  </span>
                ) : (
                  <span className="text-xs text-center uppercase font-mono font-medium">
                    {tab.label.replace('Tab ', '')}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

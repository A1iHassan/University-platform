import {
  Squares2X2Icon,
  ChartBarIcon,
  FolderIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  InboxIcon,
  AdjustmentsHorizontalIcon,
  BellIcon,
  CircleStackIcon,
  Square3Stack3DIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { PrimarySidebar } from '../components/PrimarySidebar';
import { SecondarySidebar } from '../components/SecondarySidebar';
import React from 'react';
import { Outlet } from 'react-router';

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
const primaryTabsData: PrimaryTabItem[] = [
  {
    id: 'tab-1',
    label: 'إدارة المواد',
    icon: Squares2X2Icon,
    secondaryTabs: [
      { id: 'tab-1-1', path: "/dashboard/admins/curriculums", label: 'كل المواد', description: 'بحث و مراجعة المواد المسجلة في قاعدة البيانات', icon: Squares2X2Icon },
      { id: 'tab-1-2', path: "/dashboard/admins/curriculums-edit", label: 'تعديل المواد', description: 'إضافة ، حذف ، و تعديل المواد المسجلة في قاعدة البيانات و الجديدة', icon: ChartBarIcon },
      { id: 'tab-1-3', path: "", label: 'Tab 1.3', description: 'System notification feed and user updates', icon: BellIcon },
      { id: 'tab-1-4', path: "", label: 'Tab 1.4', description: 'Raw database records and storage details', icon: CircleStackIcon },
    ]
  },
  {
    id: 'tab-2',
    label: 'إدارة الطلاب',
    icon: FolderIcon,
    secondaryTabs: [
      { id: 'tab-2-1', path: "/dashboard/admins/students", label: 'الطلاب المسجلون', description: 'Active project repositories and media files', icon: FolderIcon },
      { id: 'tab-2-2', path: "/dashboard/admins/new-students", label: 'طلبات التسجيل', description: 'Document archives and exported reports', icon: DocumentTextIcon },
      { id: 'tab-2-3', path: "", label: 'Tab 2.3', description: 'Shared asset library and template files', icon: Square3Stack3DIcon },
    ]
  },
  {
    id: 'tab-3',
    label: 'إدارة النتائج',
    icon: UserGroupIcon,
    secondaryTabs: [
      { id: 'tab-3-1', path: "/dashboard/admins/results", label: 'النتائج', description: 'Team directory and active member accounts', icon: UserGroupIcon },
      { id: 'tab-3-2', path: "/dashboard/admins/results-entery", label: 'إدخال النتائج', description: 'Role permissions and security credentials', icon: ShieldCheckIcon },
      { id: 'tab-3-3', path: "", label: 'Tab 3.3', description: 'Team messaging and inbox communications', icon: InboxIcon },
    ]
  },
  {
    id: 'tab-4',
    label: 'Tab 4',
    icon: ChartBarIcon,
    secondaryTabs: [
      { id: 'tab-4-1', path: "", label: 'Tab 4.1', description: 'Revenue metrics and financial forecasting', icon: ChartBarIcon },
      { id: 'tab-4-2', path: "", label: 'Tab 4.2', description: 'Custom query builder and dataset exports', icon: CircleStackIcon },
    ]
  },
  {
    id: 'tab-5',
    label: 'Tab 5',
    icon: Cog6ToothIcon,
    secondaryTabs: [
      { id: 'tab-5-1', path: "", label: 'Tab 5.1', description: 'Global application preferences and defaults', icon: Cog6ToothIcon },
      { id: 'tab-5-2', path: "", label: 'Tab 5.2', description: 'Advanced UI configurations and layout toggles', icon: AdjustmentsHorizontalIcon },
    ]
  }
];
export function AdminDashboard() {
  // State for Primary Sidebar
  const [activePrimaryTabId, setActivePrimaryTabId] = useState<string>('tab-1');
  const [isPrimaryExpanded, setIsPrimaryExpanded] = useState<boolean>(false);

  // State for Secondary Sidebar
  const [activeSecondaryTabId, setActiveSecondaryTabId] = useState<string | null>('tab-1-1');
  const [isSecondaryOpen, setIsSecondaryOpen] = useState<boolean>(true);
  const [isSecondaryExpanded, setIsSecondaryExpanded] = useState<boolean>(false);

  // Find active primary tab data
  const currentPrimaryTab = primaryTabsData.find(tab => tab.id === activePrimaryTabId) || primaryTabsData[0];

  // Find active secondary tab data

  // Handle selecting a primary tab
  const handleSelectPrimaryTab = (tabId: string) => {
    setActivePrimaryTabId(tabId);
    
    // Automatically open secondary sidebar with the first sub-tab of selected primary tab
    const newPrimaryTab = primaryTabsData.find(t => t.id === tabId);
    if (newPrimaryTab && newPrimaryTab.secondaryTabs.length > 0) {
      setActiveSecondaryTabId(newPrimaryTab.secondaryTabs[0].id);
      setIsSecondaryOpen(true);
    } else {
      setActiveSecondaryTabId(null);
    }
  };

  // Handle selecting a secondary tab
  const handleSelectSecondaryTab = (tabId: string) => {
    setActiveSecondaryTabId(tabId);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-100 font-sans text-slate-100 antialiased select-none">
      {/* 1. Primary Left Navigation Bar (Toggles expand on icon click) */}
      <PrimarySidebar
        tabs={primaryTabsData}
        activeTabId={activePrimaryTabId}
        onSelectTab={handleSelectPrimaryTab}
        isExpanded={isPrimaryExpanded}
        onToggleExpand={() => setIsPrimaryExpanded(prev => !prev)}
      />

      {/* 2. Secondary Navigation Bar (Toggles expand on icon click) */}
      {isSecondaryOpen && currentPrimaryTab.secondaryTabs.length > 0 && (
        <SecondarySidebar
          primaryTabLabel={currentPrimaryTab.label}
          tabs={currentPrimaryTab.secondaryTabs}
          activeSecondaryTabId={activeSecondaryTabId}
          onSelectSecondaryTab={handleSelectSecondaryTab}
          isExpanded={isSecondaryExpanded}
          onToggleExpand={() => setIsSecondaryExpanded(prev => !prev)}
        />
      )}

      {/* 3. Main Dashboard Workspace Content */}
      <Outlet />
    </div>
  );
}

export default AdminDashboard;

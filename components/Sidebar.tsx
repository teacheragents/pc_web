import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Map, GitBranch, Library, ChevronRight, ArrowLeft } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    {
      title: 'Overview',
      path: '/pcd/overview',
      icon: LayoutDashboard,
    },
    {
      title: 'Architecture',
      path: '/pcd/architecture',
      icon: Map,
    },
    {
      title: 'Workflows',
      path: '/pcd/workflows',
      icon: GitBranch,
    },
    {
      title: 'Resources',
      path: '/pcd/resources',
      icon: Library,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-slate-50 border-r border-slate-200 flex flex-col z-50">
      <div className="p-6 border-b border-slate-100">
        <h1 className="text-lg font-bold text-slate-800 tracking-tight">
          Research Lab
        </h1>
        <p className="text-xs text-slate-500 mt-1">Advanced Tutoring Systems</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={18}
                  className={`transition-colors ${
                    isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                />
                <span>{item.title}</span>
              </div>
              {isActive && <ChevronRight size={14} className="text-blue-500" />}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <a
          href="#/"
          className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Landing</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
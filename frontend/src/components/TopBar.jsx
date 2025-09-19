import { FiBell, FiSearch, FiUser } from 'react-icons/fi';

export function TopBar() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <h1 className="text-2xl font-semibold text-primary-dark">Prime Tyres POS</h1>
          <p className="text-sm text-slate-500">Manage your inventory, sales, and purchases effortlessly.</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative hidden md:block">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search..."
              className="w-64 rounded-full border border-slate-200 bg-muted px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="relative rounded-full bg-muted p-2 text-slate-500 hover:text-primary">
            <FiBell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent"></span>
          </button>
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-muted px-3 py-2">
            <FiUser className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-slate-600">Admin</p>
              <p className="text-xs text-slate-400">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

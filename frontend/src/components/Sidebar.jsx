import { NavLink } from 'react-router-dom';
import { FiHome, FiBarChart2, FiShoppingCart, FiTrendingUp, FiUsers, FiArchive } from 'react-icons/fi';

const navigation = [
  {
    section: 'Main Navigation',
    items: [
      { to: '/', label: 'Dashboard', icon: FiHome },
      { to: '/summary', label: 'Summary', icon: FiBarChart2 },
      { to: '/sales', label: 'Sales', icon: FiTrendingUp },
      { to: '/sale-orders', label: 'Sale Orders', icon: FiShoppingCart },
      { to: '/sale-returns', label: 'Sale Returns', icon: FiArchive },
    ],
  },
  {
    section: 'Purchases',
    items: [
      { to: '/purchases', label: 'New Purchase', icon: FiShoppingCart },
      { to: '/purchase-returns', label: 'Purchase Returns', icon: FiArchive },
      { to: '/purchase-history', label: 'Purchases History', icon: FiTrendingUp },
    ],
  },
  {
    section: 'Products',
    items: [
      { to: '/products/new', label: 'New Product', icon: FiArchive },
      { to: '/products', label: 'Products', icon: FiArchive },
    ],
  },
  {
    section: 'Contacts',
    items: [
      { to: '/customers', label: 'Customers', icon: FiUsers },
      { to: '/suppliers', label: 'Suppliers', icon: FiUsers },
    ],
  },
];

const linkClasses = ({ isActive }) =>
  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
    isActive
      ? 'bg-primary text-white shadow-card'
      : 'text-slate-300 hover:bg-white/10 hover:text-white'
  }`;

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar text-white flex flex-col border-r border-slate-700/40">
      <div className="px-6 py-5 text-center border-b border-slate-700/40">
        <div className="text-lg font-semibold tracking-wide">BiznisHike ShopON</div>
        <p className="text-xs text-slate-300 mt-1">Prime Tyres POS Suite</p>
      </div>
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {navigation.map((section) => (
          <div key={section.section}>
            <p className="text-xs uppercase tracking-wide text-slate-400 mb-3 pl-3">
              {section.section}
            </p>
            <div className="space-y-1">
              {section.items.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClasses}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="px-4 py-4 border-t border-slate-700/40 text-xs text-slate-400">
        <p className="font-semibold text-white">Quick Links</p>
        <p className="mt-1">Free Hosting &bull; Tech Support &bull; Admin &bull; Logout</p>
      </div>
    </aside>
  );
}

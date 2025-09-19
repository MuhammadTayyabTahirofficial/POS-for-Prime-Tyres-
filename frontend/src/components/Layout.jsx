import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export function Layout({ children }) {
  return (
    <div className="flex bg-muted min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-y-auto px-8 py-6">{children}</main>
      </div>
    </div>
  );
}

export function StatCard({ title, value, cta, icon }) {
  return (
    <div className="rounded-xl bg-white shadow-card border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{title}</p>
        {icon}
      </div>
      <p className="text-3xl font-bold text-primary-dark">{value}</p>
      <p className="mt-3 text-sm font-medium text-accent">{cta}</p>
    </div>
  );
}

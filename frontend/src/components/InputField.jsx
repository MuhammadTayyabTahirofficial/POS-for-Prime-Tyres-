export function InputField({ label, type = 'text', placeholder, fullWidth = false }) {
  return (
    <label className={`flex flex-col gap-2 text-sm font-medium text-slate-600 ${fullWidth ? 'md:col-span-2' : ''}`}>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </label>
  );
}

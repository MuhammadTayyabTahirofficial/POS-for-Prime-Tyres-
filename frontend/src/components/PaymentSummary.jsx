export function PaymentSummary({ actionLabel = 'Pay' }) {
  const summaryFields = [
    { label: 'Order Total', value: '0.00' },
    { label: 'Discount', value: '0.00' },
    { label: 'Tax', value: '0.00' },
    { label: 'Paid', value: '0.00' },
    { label: 'Balance', value: '0.00' },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-primary-dark mb-4">Payment Summary</h3>
      <div className="space-y-3 text-sm text-slate-600">
        {summaryFields.map((field) => (
          <div key={field.label} className="flex items-center justify-between">
            <span>{field.label}</span>
            <span className="font-semibold text-slate-800">{field.value}</span>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full rounded-full bg-accent py-3 text-base font-semibold text-white hover:bg-primary">
        {actionLabel}
      </button>
    </div>
  );
}

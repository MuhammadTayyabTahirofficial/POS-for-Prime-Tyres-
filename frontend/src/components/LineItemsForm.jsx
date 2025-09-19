import { useState } from 'react';

const initialRow = { product: '', price: '', quantity: '', total: '' };

export function LineItemsForm({ title = 'Product Lines', accentLabel = 'Add Row' }) {
  const [rows, setRows] = useState([{ ...initialRow }]);

  const handleChange = (index, field, value) => {
    setRows((current) => {
      const updated = [...current];
      updated[index] = { ...updated[index], [field]: value };
      const price = parseFloat(updated[index].price) || 0;
      const quantity = parseFloat(updated[index].quantity) || 0;
      updated[index].total = price * quantity || '';
      return updated;
    });
  };

  const addRow = () => setRows((current) => [...current, { ...initialRow }]);

  const removeRow = (index) => {
    setRows((current) => current.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-primary-dark mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-muted text-slate-600 text-sm uppercase">
              <th className="px-3 py-2 text-left">Product Name</th>
              <th className="px-3 py-2 text-left">Sale Price</th>
              <th className="px-3 py-2 text-left">Quantity</th>
              <th className="px-3 py-2 text-left">Line Total</th>
              <th className="px-3 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-slate-100">
                <td className="px-3 py-2">
                  <input
                    value={row.product}
                    onChange={(event) => handleChange(index, 'product', event.target.value)}
                    placeholder="Select product"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    value={row.price}
                    onChange={(event) => handleChange(index, 'price', event.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    value={row.quantity}
                    onChange={(event) => handleChange(index, 'quantity', event.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="px-3 py-2 text-sm text-slate-600">
                  {row.total ? row.total.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    onClick={() => removeRow(index)}
                    className="rounded-lg border border-red-200 px-3 py-1 text-xs font-semibold text-red-500 hover:bg-red-50"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={addRow}
        className="mt-4 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-card hover:bg-primary-dark"
      >
        {accentLabel}
      </button>
    </div>
  );
}

import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { DataTable } from '../components/DataTable';
import { usePOSContext } from '../context/POSDataContext';

const columns = [
  { header: 'Product', accessor: 'product' },
  { header: 'Orders Qty', accessor: 'orders_qty' },
  { header: 'Orders', accessor: 'orders' },
  { header: 'Return Qty', accessor: 'returns_qty' },
  { header: 'Returns', accessor: 'returns' },
  { header: 'Profit', accessor: 'profit' },
];

export function Summary() {
  const { summary, loading } = usePOSContext();

  return (
    <Layout>
      <PageHeader
        title="Summary"
        subtitle={summary ? `From ${summary.period.from} to ${summary.period.to}` : 'Summary overview'}
        actions={
          <div className="flex items-center gap-3">
            <input
              type="date"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="date"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-card hover:bg-primary-dark">
              Go
            </button>
            <button className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white">
              Print
            </button>
          </div>
        }
      />
      {loading || !summary ? (
        <div className="rounded-xl border border-dashed border-primary p-12 text-center text-primary">
          Loading summary...
        </div>
      ) : (
        <DataTable columns={columns} data={summary.items} />
      )}
    </Layout>
  );
}

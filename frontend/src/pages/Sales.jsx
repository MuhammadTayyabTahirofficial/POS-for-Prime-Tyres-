import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { DataTable } from '../components/DataTable';
import { usePOSContext } from '../context/POSDataContext';

const columns = [
  { header: 'Date', accessor: 'date' },
  { header: 'Invoice', accessor: 'invoice' },
  { header: 'Customer', accessor: 'customer' },
  { header: 'Product', accessor: 'product' },
  { header: 'Qty', accessor: 'quantity' },
  { header: 'Price', accessor: 'price' },
  { header: 'Total', accessor: 'total' },
  { header: 'Status', accessor: 'status' },
];

export function Sales() {
  const { sales, loading } = usePOSContext();
  return (
    <Layout>
      <PageHeader
        title="Sales"
        subtitle="Monitor sales orders and outstanding balances"
        actions={
          <div className="flex items-center gap-3">
            <input
              type="search"
              placeholder="Search orders"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-card hover:bg-primary-dark">
              Export
            </button>
          </div>
        }
      />
      {loading ? (
        <div className="rounded-xl border border-dashed border-primary p-12 text-center text-primary">Loading sales...</div>
      ) : (
        <DataTable columns={columns} data={sales} />
      )}
    </Layout>
  );
}

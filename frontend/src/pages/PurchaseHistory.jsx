import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { DataTable } from '../components/DataTable';
import { usePOSContext } from '../context/POSDataContext';

const columns = [
  { header: 'Date', accessor: 'date' },
  { header: 'Invoice', accessor: 'invoice' },
  { header: 'Supplier', accessor: 'supplier' },
  { header: 'Product', accessor: 'product' },
  { header: 'Quantity', accessor: 'quantity' },
  { header: 'Cost', accessor: 'cost' },
  { header: 'Total', accessor: 'total' },
  { header: 'Status', accessor: 'status' },
];

export function PurchaseHistory() {
  const { purchases, loading } = usePOSContext();
  return (
    <Layout>
      <PageHeader
        title="Purchases History"
        subtitle="Track all supplier invoices and outstanding returns"
        actions={
          <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-card hover:bg-primary-dark">
            Export
          </button>
        }
      />
      {loading ? (
        <div className="rounded-xl border border-dashed border-primary p-12 text-center text-primary">Loading purchases...</div>
      ) : (
        <DataTable columns={columns} data={purchases} />
      )}
    </Layout>
  );
}

import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';

export function Placeholder({ title }) {
  return (
    <Layout>
      <PageHeader title={title} subtitle="This section is ready for future enhancements." />
      <div className="rounded-xl border border-dashed border-primary/40 bg-white/60 p-12 text-center text-slate-500">
        <p className="text-lg font-medium text-primary-dark">Design replica in progress</p>
        <p className="mt-2 text-sm text-slate-500">
          The layout mirrors the BiznisHike ShopON look and feel, ready to wire up to live data.
        </p>
      </div>
    </Layout>
  );
}

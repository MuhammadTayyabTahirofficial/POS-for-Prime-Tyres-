import { FiShoppingCart, FiTrendingUp, FiUsers, FiDollarSign, FiBox, FiTruck, FiPieChart } from 'react-icons/fi';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { StatCard } from '../components/StatCard';
import { usePOSContext } from '../context/POSDataContext';

const icons = [
  <FiShoppingCart className="h-6 w-6 text-primary" />, 
  <FiTrendingUp className="h-6 w-6 text-primary" />, 
  <FiDollarSign className="h-6 w-6 text-primary" />, 
  <FiPieChart className="h-6 w-6 text-primary" />, 
  <FiBox className="h-6 w-6 text-primary" />, 
  <FiTruck className="h-6 w-6 text-primary" />, 
  <FiUsers className="h-6 w-6 text-primary" />, 
  <FiUsers className="h-6 w-6 text-primary" />,
];

export function Dashboard() {
  const { dashboard, loading } = usePOSContext();

  return (
    <Layout>
      <PageHeader title="Dashboard" subtitle="Quick overview of what is happening today." />
      {loading ? (
        <div className="rounded-xl border border-dashed border-primary p-12 text-center text-primary">
          Loading dashboard...
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dashboard.map((card, index) => (
            <StatCard key={card.title} title={card.title} value={card.value} cta={card.cta} icon={icons[index]} />
          ))}
        </div>
      )}
    </Layout>
  );
}

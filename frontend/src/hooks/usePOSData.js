import { useEffect, useState } from 'react';
import client from '../api/client';

export function usePOSData() {
  const [dashboard, setDashboard] = useState([]);
  const [summary, setSummary] = useState(null);
  const [sales, setSales] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      try {
        setLoading(true);
        const [dashboardRes, summaryRes, salesRes, purchasesRes] = await Promise.all([
          client.get('/api/dashboard'),
          client.get('/api/summary'),
          client.get('/api/sales'),
          client.get('/api/purchases'),
        ]);
        if (!mounted) return;
        setDashboard(dashboardRes.data);
        setSummary(summaryRes.data);
        setSales(salesRes.data);
        setPurchases(purchasesRes.data);
      } catch (err) {
        if (!mounted) return;
        setError(err);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return { dashboard, summary, sales, purchases, loading, error };
}

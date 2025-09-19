import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { POSDataProvider } from './context/POSDataContext';
import { Dashboard } from './pages/Dashboard';
import { Summary } from './pages/Summary';
import { Sales } from './pages/Sales';
import { SaleOrder } from './pages/SaleOrder';
import { SaleReturn } from './pages/SaleReturn';
import { PurchaseOrder } from './pages/PurchaseOrder';
import { PurchaseReturn } from './pages/PurchaseReturn';
import { PurchaseHistory } from './pages/PurchaseHistory';
import { NewProduct } from './pages/NewProduct';
import { Placeholder } from './pages/Placeholder';

export default function App() {
  return (
    <BrowserRouter>
      <POSDataProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/sale-orders" element={<SaleOrder />} />
          <Route path="/sale-returns" element={<SaleReturn />} />
          <Route path="/purchases" element={<PurchaseOrder />} />
          <Route path="/purchase-returns" element={<PurchaseReturn />} />
          <Route path="/purchase-history" element={<PurchaseHistory />} />
          <Route path="/products/new" element={<NewProduct />} />
          <Route path="/products" element={<Placeholder title="Products" />} />
          <Route path="/customers" element={<Placeholder title="Customers" />} />
          <Route path="/suppliers" element={<Placeholder title="Suppliers" />} />
          <Route path="*" element={<Placeholder title="Coming Soon" />} />
        </Routes>
      </POSDataProvider>
    </BrowserRouter>
  );
}

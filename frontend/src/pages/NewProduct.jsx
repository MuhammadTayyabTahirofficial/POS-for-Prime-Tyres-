import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { FormSection } from '../components/FormSection';
import { InputField } from '../components/InputField';
import { TextAreaField } from '../components/TextAreaField';

export function NewProduct() {
  return (
    <Layout>
      <PageHeader title="Create New Product" subtitle="Register items that can be sold in the POS." />
      <FormSection title="Product Information">
        <InputField label="Category" placeholder="Select category" />
        <InputField label="Product Name" placeholder="Prime Tyre" />
        <InputField label="SKU" placeholder="TYR-001" />
        <InputField label="Barcode" placeholder="00000000" />
        <InputField label="Purchase Price" type="number" placeholder="0.00" />
        <InputField label="Sale Price" type="number" placeholder="0.00" />
        <InputField label="Stock" type="number" placeholder="0" />
        <InputField label="Reorder Level" type="number" placeholder="10" />
        <InputField label="Sellable" placeholder="Yes" />
        <TextAreaField label="Description" />
        <label className="flex items-center gap-2 text-sm font-medium text-slate-600 md:col-span-2">
          <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" />
          Allow sale when stock is negative
        </label>
        <button className="md:col-span-2 mt-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-card hover:bg-primary-dark">
          Create Product
        </button>
      </FormSection>
    </Layout>
  );
}

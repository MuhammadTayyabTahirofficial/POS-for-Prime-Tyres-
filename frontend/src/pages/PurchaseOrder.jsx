import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { FormSection } from '../components/FormSection';
import { InputField } from '../components/InputField';
import { TextAreaField } from '../components/TextAreaField';
import { LineItemsForm } from '../components/LineItemsForm';
import { PaymentSummary } from '../components/PaymentSummary';

export function PurchaseOrder() {
  return (
    <Layout>
      <PageHeader title="New Purchase" subtitle="Record goods received from suppliers." />
      <div className="grid gap-6 xl:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <FormSection title="Supplier Details" description="Identify the vendor providing goods">
            <InputField label="Supplier" placeholder="TyreCo" />
            <InputField label="Reference" placeholder="PO-001" />
            <InputField label="Invoice Number" placeholder="PUR-9001" />
            <InputField label="Purchase Date" type="date" />
            <TextAreaField label="Notes" />
          </FormSection>
          <LineItemsForm title="Purchase Items" accentLabel="Add Stock Item" />
          <FormSection title="Additional Costs" description="Record freight, insurance or other expenses">
            <InputField label="Freight" type="number" placeholder="0.00" />
            <InputField label="Insurance" type="number" placeholder="0.00" />
            <InputField label="Other" type="number" placeholder="0.00" />
            <TextAreaField label="Remarks" />
          </FormSection>
        </div>
        <PaymentSummary actionLabel="Save Purchase" />
      </div>
    </Layout>
  );
}

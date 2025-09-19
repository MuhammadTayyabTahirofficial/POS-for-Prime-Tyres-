import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { FormSection } from '../components/FormSection';
import { InputField } from '../components/InputField';
import { TextAreaField } from '../components/TextAreaField';
import { LineItemsForm } from '../components/LineItemsForm';
import { PaymentSummary } from '../components/PaymentSummary';

export function SaleReturn() {
  return (
    <Layout>
      <PageHeader title="Sale Return" subtitle="Register returned items and adjust balances." />
      <div className="grid gap-6 xl:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <FormSection title="Return Details" description="Locate the sale to return">
            <InputField label="Customer Name" placeholder="Walk-in Customer" />
            <InputField label="Invoice Number" placeholder="INV-1001" />
            <InputField label="Return Date" type="date" />
            <InputField label="Reference" placeholder="RET-001" />
            <TextAreaField label="Notes" />
          </FormSection>
          <LineItemsForm title="Return Items" accentLabel="Add Return Item" />
          <FormSection title="Refund Options" description="Select how the refund is issued">
            <InputField label="Cash" type="number" placeholder="0.00" />
            <InputField label="Credit" type="number" placeholder="0.00" />
            <InputField label="Voucher" type="number" placeholder="0.00" />
            <InputField label="Account" type="number" placeholder="0.00" />
          </FormSection>
        </div>
        <PaymentSummary actionLabel="Confirm Return" />
      </div>
    </Layout>
  );
}

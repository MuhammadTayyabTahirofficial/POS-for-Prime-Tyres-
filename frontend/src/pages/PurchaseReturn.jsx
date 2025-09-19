import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { FormSection } from '../components/FormSection';
import { InputField } from '../components/InputField';
import { TextAreaField } from '../components/TextAreaField';
import { LineItemsForm } from '../components/LineItemsForm';
import { PaymentSummary } from '../components/PaymentSummary';

export function PurchaseReturn() {
  return (
    <Layout>
      <PageHeader title="Purchase Return" subtitle="Send back items to the supplier." />
      <div className="grid gap-6 xl:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <FormSection title="Return Details" description="Select the purchase to return">
            <InputField label="Supplier" placeholder="TyreCo" />
            <InputField label="Purchase Invoice" placeholder="PUR-9001" />
            <InputField label="Return Date" type="date" />
            <InputField label="Reference" placeholder="PR-001" />
            <TextAreaField label="Reason" />
          </FormSection>
          <LineItemsForm title="Return Items" accentLabel="Add Return Item" />
          <FormSection title="Refund" description="How the supplier refunds the goods">
            <InputField label="Cash" type="number" placeholder="0.00" />
            <InputField label="Credit Note" type="number" placeholder="0.00" />
            <InputField label="Replacement" type="number" placeholder="0.00" />
            <InputField label="Other" type="number" placeholder="0.00" />
          </FormSection>
        </div>
        <PaymentSummary actionLabel="Confirm Return" />
      </div>
    </Layout>
  );
}

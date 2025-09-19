import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import { FormSection } from '../components/FormSection';
import { InputField } from '../components/InputField';
import { TextAreaField } from '../components/TextAreaField';
import { LineItemsForm } from '../components/LineItemsForm';
import { PaymentSummary } from '../components/PaymentSummary';

export function SaleOrder() {
  return (
    <Layout>
      <PageHeader title="Sale Order" subtitle="Capture a new sale order and accept payment." />
      <div className="grid gap-6 xl:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <FormSection title="Customer Details" description="Basic information about the customer">
            <InputField label="Customer Name" placeholder="Walk-in Customer" />
            <InputField label="Address" placeholder="Street name" />
            <InputField label="Phone" placeholder="(+0) 000-000" />
            <InputField label="Email" placeholder="customer@email.com" />
            <TextAreaField label="Notes" />
          </FormSection>
          <LineItemsForm title="Sale Items" accentLabel="Add Product" />
          <FormSection title="Payment Methods" description="Split payments across different channels">
            <InputField label="Cash" type="number" placeholder="0.00" />
            <InputField label="Card" type="number" placeholder="0.00" />
            <InputField label="Mobile" type="number" placeholder="0.00" />
            <InputField label="Credit" type="number" placeholder="0.00" />
            <TextAreaField label="Internal Notes" />
          </FormSection>
        </div>
        <PaymentSummary actionLabel="Pay" />
      </div>
    </Layout>
  );
}

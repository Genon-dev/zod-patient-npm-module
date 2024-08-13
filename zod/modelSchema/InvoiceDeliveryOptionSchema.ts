import { z } from "zod";
import { MailTypeSchema } from "../inputTypeSchemas/MailTypeSchema";
import type { DeliveryMethodInvoiceDeliveryOptionWithRelations } from "./DeliveryMethodInvoiceDeliveryOptionSchema";
import { DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema } from "./DeliveryMethodInvoiceDeliveryOptionSchema";

/////////////////////////////////////////
// INVOICE DELIVERY OPTION SCHEMA
/////////////////////////////////////////

export const InvoiceDeliveryOptionSchema = z.object({
  mailType: MailTypeSchema,
  id: z.number().int(),
  name: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
});

export type InvoiceDeliveryOption = z.infer<typeof InvoiceDeliveryOptionSchema>;

/////////////////////////////////////////
// INVOICE DELIVERY OPTION RELATION SCHEMA
/////////////////////////////////////////

export type InvoiceDeliveryOptionRelations = {
  deliveryMethodInvoiceDeliveryOptions: DeliveryMethodInvoiceDeliveryOptionWithRelations[];
};

export type InvoiceDeliveryOptionWithRelations = z.infer<
  typeof InvoiceDeliveryOptionSchema
> &
  InvoiceDeliveryOptionRelations;

export const InvoiceDeliveryOptionWithRelationsSchema: z.ZodType<InvoiceDeliveryOptionWithRelations> =
  InvoiceDeliveryOptionSchema.merge(
    z.object({
      deliveryMethodInvoiceDeliveryOptions: z
        .lazy(() => DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema)
        .array(),
    })
  );

export default InvoiceDeliveryOptionSchema;

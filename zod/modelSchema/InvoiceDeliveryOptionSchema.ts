import { z } from "zod";
import { MailTypeSchema } from "../inputTypeSchemas/MailTypeSchema";
import type { ReservationWithRelations } from "./ReservationSchema";
import type { DeliveryMethodInvoiceDeliveryOptionWithRelations } from "./DeliveryMethodInvoiceDeliveryOptionSchema";
import { ReservationWithRelationsSchema } from "./ReservationSchema";
import { DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema } from "./DeliveryMethodInvoiceDeliveryOptionSchema";

/////////////////////////////////////////
// INVOICE DELIVERY OPTION SCHEMA
/////////////////////////////////////////

export const InvoiceDeliveryOptionSchema = z.object({
  mailType: MailTypeSchema,
  id: z.number().int(),
  name: z.string(),
  deliveryFee: z.number().int(),
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
  reservations: ReservationWithRelations[];
  deliveryMethodInvoiceDeliveryOptions: DeliveryMethodInvoiceDeliveryOptionWithRelations[];
};

export type InvoiceDeliveryOptionWithRelations = z.infer<
  typeof InvoiceDeliveryOptionSchema
> &
  InvoiceDeliveryOptionRelations;

export const InvoiceDeliveryOptionWithRelationsSchema: z.ZodType<InvoiceDeliveryOptionWithRelations> =
  InvoiceDeliveryOptionSchema.merge(
    z.object({
      reservations: z.lazy(() => ReservationWithRelationsSchema).array(),
      deliveryMethodInvoiceDeliveryOptions: z
        .lazy(() => DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema)
        .array(),
    })
  );

export default InvoiceDeliveryOptionSchema;

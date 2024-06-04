import { z } from 'zod';
import type { ReservationWithRelations } from './ReservationSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'

/////////////////////////////////////////
// INVOICE DELIVERY OPTION SCHEMA
/////////////////////////////////////////

export const InvoiceDeliveryOptionSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  deliveryFee: z.number().int(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type InvoiceDeliveryOption = z.infer<typeof InvoiceDeliveryOptionSchema>

/////////////////////////////////////////
// INVOICE DELIVERY OPTION RELATION SCHEMA
/////////////////////////////////////////

export type InvoiceDeliveryOptionRelations = {
  reservations: ReservationWithRelations[];
};

export type InvoiceDeliveryOptionWithRelations = z.infer<typeof InvoiceDeliveryOptionSchema> & InvoiceDeliveryOptionRelations

export const InvoiceDeliveryOptionWithRelationsSchema: z.ZodType<InvoiceDeliveryOptionWithRelations> = InvoiceDeliveryOptionSchema.merge(z.object({
  reservations: z.lazy(() => ReservationWithRelationsSchema).array(),
}))

export default InvoiceDeliveryOptionSchema;

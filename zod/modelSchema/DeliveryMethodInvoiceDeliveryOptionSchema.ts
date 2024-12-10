import { z } from 'zod';
import type { InvoiceDeliveryOptionWithRelations } from './InvoiceDeliveryOptionSchema'
import type { ReservationDeliveryMethodWithRelations } from './ReservationDeliveryMethodSchema'
import type { UserProfileWithRelations } from './UserProfileSchema'
import type { ReservationWithRelations } from './ReservationSchema'
import { InvoiceDeliveryOptionWithRelationsSchema } from './InvoiceDeliveryOptionSchema'
import { ReservationDeliveryMethodWithRelationsSchema } from './ReservationDeliveryMethodSchema'
import { UserProfileWithRelationsSchema } from './UserProfileSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'

/////////////////////////////////////////
// DELIVERY METHOD INVOICE DELIVERY OPTION SCHEMA
/////////////////////////////////////////

export const DeliveryMethodInvoiceDeliveryOptionSchema = z.object({
  id: z.number().int(),
  deliveryMethodId: z.number().int(),
  invoiceDeliveryOptionId: z.number().int(),
  invoiceDeliveryOptionDeliveryFee: z.number().int(),
})

export type DeliveryMethodInvoiceDeliveryOption = z.infer<typeof DeliveryMethodInvoiceDeliveryOptionSchema>

/////////////////////////////////////////
// DELIVERY METHOD INVOICE DELIVERY OPTION RELATION SCHEMA
/////////////////////////////////////////

export type DeliveryMethodInvoiceDeliveryOptionRelations = {
  invoiceDeliveryOption: InvoiceDeliveryOptionWithRelations;
  deliveryMethod: ReservationDeliveryMethodWithRelations;
  userProfiles: UserProfileWithRelations[];
  reservations: ReservationWithRelations[];
};

export type DeliveryMethodInvoiceDeliveryOptionWithRelations = z.infer<typeof DeliveryMethodInvoiceDeliveryOptionSchema> & DeliveryMethodInvoiceDeliveryOptionRelations

export const DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema: z.ZodType<DeliveryMethodInvoiceDeliveryOptionWithRelations> = DeliveryMethodInvoiceDeliveryOptionSchema.merge(z.object({
  invoiceDeliveryOption: z.lazy(() => InvoiceDeliveryOptionWithRelationsSchema),
  deliveryMethod: z.lazy(() => ReservationDeliveryMethodWithRelationsSchema),
  userProfiles: z.lazy(() => UserProfileWithRelationsSchema).array(),
  reservations: z.lazy(() => ReservationWithRelationsSchema).array(),
}))

export default DeliveryMethodInvoiceDeliveryOptionSchema;

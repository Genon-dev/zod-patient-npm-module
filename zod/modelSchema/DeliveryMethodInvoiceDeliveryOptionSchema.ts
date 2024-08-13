import { z } from 'zod';
import type { UserProfileWithRelations } from './UserProfileSchema'
import type { InvoiceDeliveryOptionWithRelations } from './InvoiceDeliveryOptionSchema'
import type { ReservationDeliveryMethodWithRelations } from './ReservationDeliveryMethodSchema'
import { UserProfileWithRelationsSchema } from './UserProfileSchema'
import { InvoiceDeliveryOptionWithRelationsSchema } from './InvoiceDeliveryOptionSchema'
import { ReservationDeliveryMethodWithRelationsSchema } from './ReservationDeliveryMethodSchema'

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
  userProfiles: UserProfileWithRelations[];
  invoiceDeliveryOption: InvoiceDeliveryOptionWithRelations;
  deliveryMethod: ReservationDeliveryMethodWithRelations;
};

export type DeliveryMethodInvoiceDeliveryOptionWithRelations = z.infer<typeof DeliveryMethodInvoiceDeliveryOptionSchema> & DeliveryMethodInvoiceDeliveryOptionRelations

export const DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema: z.ZodType<DeliveryMethodInvoiceDeliveryOptionWithRelations> = DeliveryMethodInvoiceDeliveryOptionSchema.merge(z.object({
  userProfiles: z.lazy(() => UserProfileWithRelationsSchema).array(),
  invoiceDeliveryOption: z.lazy(() => InvoiceDeliveryOptionWithRelationsSchema),
  deliveryMethod: z.lazy(() => ReservationDeliveryMethodWithRelationsSchema),
}))

export default DeliveryMethodInvoiceDeliveryOptionSchema;

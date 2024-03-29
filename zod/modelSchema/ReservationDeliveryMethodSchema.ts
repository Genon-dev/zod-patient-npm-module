import { z } from 'zod';
import type { ReservationWithRelations } from './ReservationSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'

/////////////////////////////////////////
// RESERVATION DELIVERY METHOD SCHEMA
/////////////////////////////////////////

export const ReservationDeliveryMethodSchema = z.object({
  id: z.number().int(),
  keyword: z.string(),
  fee: z.number().int(),
  description: z.string(),
  isDeleted: z.boolean(),
})

export type ReservationDeliveryMethod = z.infer<typeof ReservationDeliveryMethodSchema>

/////////////////////////////////////////
// RESERVATION DELIVERY METHOD RELATION SCHEMA
/////////////////////////////////////////

export type ReservationDeliveryMethodRelations = {
  Reservation: ReservationWithRelations[];
};

export type ReservationDeliveryMethodWithRelations = z.infer<typeof ReservationDeliveryMethodSchema> & ReservationDeliveryMethodRelations

export const ReservationDeliveryMethodWithRelationsSchema: z.ZodType<ReservationDeliveryMethodWithRelations> = ReservationDeliveryMethodSchema.merge(z.object({
  Reservation: z.lazy(() => ReservationWithRelationsSchema).array(),
}))

export default ReservationDeliveryMethodSchema;

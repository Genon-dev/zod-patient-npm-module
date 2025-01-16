import { z } from 'zod';
import type { ReservationWithRelations } from './ReservationSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'

/////////////////////////////////////////
// FAILED PAYMENT FEE SCHEMA
/////////////////////////////////////////

export const FailedPaymentFeeSchema = z.object({
  id: z.number().int(),
  reservationId: z.number().int(),
  systemFee: z.number().int().nullable(),
  medicalFee: z.number().int().nullable(),
  deliveryFee: z.number().int().nullable(),
  medicineFee: z.number().int().nullable(),
  expiredHokenshouFee: z.number().int().nullable(),
  cancelFee: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type FailedPaymentFee = z.infer<typeof FailedPaymentFeeSchema>

/////////////////////////////////////////
// FAILED PAYMENT FEE RELATION SCHEMA
/////////////////////////////////////////

export type FailedPaymentFeeRelations = {
  reservation: ReservationWithRelations;
};

export type FailedPaymentFeeWithRelations = z.infer<typeof FailedPaymentFeeSchema> & FailedPaymentFeeRelations

export const FailedPaymentFeeWithRelationsSchema: z.ZodType<FailedPaymentFeeWithRelations> = FailedPaymentFeeSchema.merge(z.object({
  reservation: z.lazy(() => ReservationWithRelationsSchema),
}))

export default FailedPaymentFeeSchema;

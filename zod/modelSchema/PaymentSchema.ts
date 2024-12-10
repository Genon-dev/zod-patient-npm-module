import { z } from 'zod';
import { PaymentTypeSchema } from '../inputTypeSchemas/PaymentTypeSchema'
import type { ReservationWithRelations } from './ReservationSchema'
import type { PaymentHistoryWithRelations } from './PaymentHistorySchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'
import { PaymentHistoryWithRelationsSchema } from './PaymentHistorySchema'

/////////////////////////////////////////
// PAYMENT SCHEMA
/////////////////////////////////////////

export const PaymentSchema = z.object({
  type: PaymentTypeSchema,
  id: z.number().int(),
  totalFee: z.number().int(),
  reservationId: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Payment = z.infer<typeof PaymentSchema>

/////////////////////////////////////////
// PAYMENT RELATION SCHEMA
/////////////////////////////////////////

export type PaymentRelations = {
  reservation: ReservationWithRelations;
  paymentHistorys: PaymentHistoryWithRelations[];
};

export type PaymentWithRelations = z.infer<typeof PaymentSchema> & PaymentRelations

export const PaymentWithRelationsSchema: z.ZodType<PaymentWithRelations> = PaymentSchema.merge(z.object({
  reservation: z.lazy(() => ReservationWithRelationsSchema),
  paymentHistorys: z.lazy(() => PaymentHistoryWithRelationsSchema).array(),
}))

export default PaymentSchema;

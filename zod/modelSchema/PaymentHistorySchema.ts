import { z } from 'zod';
import type { PaymentWithRelations } from './PaymentSchema'
import type { ReservationWithRelations } from './ReservationSchema'
import type { AdminUserWithRelations } from './AdminUserSchema'
import { PaymentWithRelationsSchema } from './PaymentSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'
import { AdminUserWithRelationsSchema } from './AdminUserSchema'

/////////////////////////////////////////
// PAYMENT HISTORY SCHEMA
/////////////////////////////////////////

export const PaymentHistorySchema = z.object({
  id: z.number().int(),
  paymentId: z.number().int(),
  reservationId: z.number().int(),
  adminUserId: z.string(),
  createdAt: z.coerce.date(),
})

export type PaymentHistory = z.infer<typeof PaymentHistorySchema>

/////////////////////////////////////////
// PAYMENT HISTORY RELATION SCHEMA
/////////////////////////////////////////

export type PaymentHistoryRelations = {
  payment: PaymentWithRelations;
  reservation: ReservationWithRelations;
  adminUser: AdminUserWithRelations;
};

export type PaymentHistoryWithRelations = z.infer<typeof PaymentHistorySchema> & PaymentHistoryRelations

export const PaymentHistoryWithRelationsSchema: z.ZodType<PaymentHistoryWithRelations> = PaymentHistorySchema.merge(z.object({
  payment: z.lazy(() => PaymentWithRelationsSchema),
  reservation: z.lazy(() => ReservationWithRelationsSchema),
  adminUser: z.lazy(() => AdminUserWithRelationsSchema),
}))

export default PaymentHistorySchema;

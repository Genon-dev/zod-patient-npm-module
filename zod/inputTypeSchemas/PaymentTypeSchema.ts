import { z } from 'zod';

export const PaymentTypeSchema = z.enum(['ReservationPaymentCompleted','MedicinePaymentCompleted','ExpiredHokenshouPaymentCompleted','CancelFeePaymentCompleted','BeautyProductPaymentCompleted']);

export type PaymentTypeType = `${z.infer<typeof PaymentTypeSchema>}`

export default PaymentTypeSchema;

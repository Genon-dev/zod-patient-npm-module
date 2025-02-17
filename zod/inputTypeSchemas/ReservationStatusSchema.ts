import { z } from 'zod';

export const ReservationStatusSchema = z.enum(['BeforeConsultation','WaitingForPayment','WaitingForMedicinePayment','Canceled','FailedPayment','FailedMedicinePayment','FailedExpiredHokenshouPayment','FailedCancelFeePayment','FailedBeautyProductPayment','Completed']);

export type ReservationStatusType = `${z.infer<typeof ReservationStatusSchema>}`

export default ReservationStatusSchema;

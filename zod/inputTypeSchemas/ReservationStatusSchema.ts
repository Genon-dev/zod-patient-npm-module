import { z } from 'zod';

export const ReservationStatusSchema = z.enum(['BeforeConsultation','WaitingForPayment','Canceled','FailedPayment','Completed']);

export type ReservationStatusType = `${z.infer<typeof ReservationStatusSchema>}`

export default ReservationStatusSchema;

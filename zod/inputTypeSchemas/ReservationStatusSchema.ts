import { z } from 'zod';

export const ReservationStatusSchema = z.enum(['BeforeConsultation','WaitingForPayment','Canceled','Completed']);

export type ReservationStatusType = `${z.infer<typeof ReservationStatusSchema>}`

export default ReservationStatusSchema;

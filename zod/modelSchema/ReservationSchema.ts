import { z } from 'zod';
import { ReservationStatusSchema } from '../inputTypeSchemas/ReservationStatusSchema'
import type { DoctorWithRelations } from './DoctorSchema'
import type { UserWithRelations } from './UserSchema'
import type { ReservationDeliveryMethodWithRelations } from './ReservationDeliveryMethodSchema'
import type { InvoiceDeliveryOptionWithRelations } from './InvoiceDeliveryOptionSchema'
import type { PaymentWithRelations } from './PaymentSchema'
import type { MedicalReportWithRelations } from './MedicalReportSchema'
import { DoctorWithRelationsSchema } from './DoctorSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { ReservationDeliveryMethodWithRelationsSchema } from './ReservationDeliveryMethodSchema'
import { InvoiceDeliveryOptionWithRelationsSchema } from './InvoiceDeliveryOptionSchema'
import { PaymentWithRelationsSchema } from './PaymentSchema'
import { MedicalReportWithRelationsSchema } from './MedicalReportSchema'

/////////////////////////////////////////
// RESERVATION SCHEMA
/////////////////////////////////////////

export const ReservationSchema = z.object({
  status: ReservationStatusSchema,
  id: z.number().int(),
  reservaReservationId: z.string(),
  reservaUrl: z.string().nullable(),
  doctorId: z.number().int(),
  userId: z.string(),
  startAt: z.coerce.date(),
  endAt: z.coerce.date().nullable(),
  meetingPasscode: z.string().nullable(),
  meetingId: z.string().nullable(),
  meetingUrl: z.string().nullable(),
  deliveryMethodId: z.number().int().nullable(),
  invoiceDeliveryOptionId: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  canceledAt: z.coerce.date().nullable(),
  systemFee: z.number().int().nullable(),
  medicalFee: z.number().int().nullable(),
  deliveryFee: z.number().int().nullable(),
  medicineFee: z.number().int().nullable(),
  medicalReportId: z.number().int().nullable(),
})

export type Reservation = z.infer<typeof ReservationSchema>

/////////////////////////////////////////
// RESERVATION RELATION SCHEMA
/////////////////////////////////////////

export type ReservationRelations = {
  doctor: DoctorWithRelations;
  user: UserWithRelations;
  deliveryMethod?: ReservationDeliveryMethodWithRelations | null;
  invoiceDeliveryOption?: InvoiceDeliveryOptionWithRelations | null;
  payments: PaymentWithRelations[];
  medicalReport?: MedicalReportWithRelations | null;
};

export type ReservationWithRelations = z.infer<typeof ReservationSchema> & ReservationRelations

export const ReservationWithRelationsSchema: z.ZodType<ReservationWithRelations> = ReservationSchema.merge(z.object({
  doctor: z.lazy(() => DoctorWithRelationsSchema),
  user: z.lazy(() => UserWithRelationsSchema),
  deliveryMethod: z.lazy(() => ReservationDeliveryMethodWithRelationsSchema).nullable(),
  invoiceDeliveryOption: z.lazy(() => InvoiceDeliveryOptionWithRelationsSchema).nullable(),
  payments: z.lazy(() => PaymentWithRelationsSchema).array(),
  medicalReport: z.lazy(() => MedicalReportWithRelationsSchema).nullable(),
}))

export default ReservationSchema;

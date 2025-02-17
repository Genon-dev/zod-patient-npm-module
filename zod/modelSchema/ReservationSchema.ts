import { z } from 'zod';
import { ReservationStatusSchema } from '../inputTypeSchemas/ReservationStatusSchema'
import type { DoctorWithRelations } from './DoctorSchema'
import type { UserWithRelations } from './UserSchema'
import type { ReservationDeliveryMethodWithRelations } from './ReservationDeliveryMethodSchema'
import type { InvoiceDeliveryOptionWithRelations } from './InvoiceDeliveryOptionSchema'
import type { BeautyProductWithRelations } from './BeautyProductSchema'
import type { MedicalReportWithRelations } from './MedicalReportSchema'
import type { DeliveryMethodInvoiceDeliveryOptionWithRelations } from './DeliveryMethodInvoiceDeliveryOptionSchema'
import type { PaymentWithRelations } from './PaymentSchema'
import type { FailedPaymentFeeWithRelations } from './FailedPaymentFeeSchema'
import type { PaymentHistoryWithRelations } from './PaymentHistorySchema'
import type { ZoomStartNotificationHistoryWithRelations } from './ZoomStartNotificationHistorySchema'
import type { PatientFormWithRelations } from './PatientFormSchema'
import type { TreatmentWithRelations } from './TreatmentSchema'
import { DoctorWithRelationsSchema } from './DoctorSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { ReservationDeliveryMethodWithRelationsSchema } from './ReservationDeliveryMethodSchema'
import { InvoiceDeliveryOptionWithRelationsSchema } from './InvoiceDeliveryOptionSchema'
import { BeautyProductWithRelationsSchema } from './BeautyProductSchema'
import { MedicalReportWithRelationsSchema } from './MedicalReportSchema'
import { DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema } from './DeliveryMethodInvoiceDeliveryOptionSchema'
import { PaymentWithRelationsSchema } from './PaymentSchema'
import { FailedPaymentFeeWithRelationsSchema } from './FailedPaymentFeeSchema'
import { PaymentHistoryWithRelationsSchema } from './PaymentHistorySchema'
import { ZoomStartNotificationHistoryWithRelationsSchema } from './ZoomStartNotificationHistorySchema'
import { PatientFormWithRelationsSchema } from './PatientFormSchema'
import { TreatmentWithRelationsSchema } from './TreatmentSchema'

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
  zoomHost: z.string().nullable(),
  treatmentSkip: z.boolean(),
  deliveryMethodId: z.number().int().nullable(),
  invoiceDeliveryOptionId: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  canceledAt: z.coerce.date().nullable(),
  systemFee: z.number().int().nullable(),
  medicalFee: z.number().int().nullable(),
  deliveryFee: z.number().int().nullable(),
  medicineFee: z.number().int().nullable(),
  expiredHokenshouFee: z.number().int().nullable(),
  cancelFee: z.number().int().nullable(),
  beautyProductFee: z.number().int().nullable(),
  beautyProductDeliveryFee: z.number().int().nullable(),
  beautyProductBoughtId: z.string().nullable(),
  medicalReportId: z.number().int().nullable(),
  deliveryMethodInvoiceDeliveryOptionId: z.number().int().nullable(),
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
  beautyProductBought?: BeautyProductWithRelations | null;
  medicalReport?: MedicalReportWithRelations | null;
  deliveryMethodInvoiceDeliveryOption?: DeliveryMethodInvoiceDeliveryOptionWithRelations | null;
  payments: PaymentWithRelations[];
  failedPaymentFee?: FailedPaymentFeeWithRelations | null;
  paymentHistorys: PaymentHistoryWithRelations[];
  zoomStartNotificationHistorys: ZoomStartNotificationHistoryWithRelations[];
  patientForms: PatientFormWithRelations[];
  treatment?: TreatmentWithRelations | null;
};

export type ReservationWithRelations = z.infer<typeof ReservationSchema> & ReservationRelations

export const ReservationWithRelationsSchema: z.ZodType<ReservationWithRelations> = ReservationSchema.merge(z.object({
  doctor: z.lazy(() => DoctorWithRelationsSchema),
  user: z.lazy(() => UserWithRelationsSchema),
  deliveryMethod: z.lazy(() => ReservationDeliveryMethodWithRelationsSchema).nullable(),
  invoiceDeliveryOption: z.lazy(() => InvoiceDeliveryOptionWithRelationsSchema).nullable(),
  beautyProductBought: z.lazy(() => BeautyProductWithRelationsSchema).nullable(),
  medicalReport: z.lazy(() => MedicalReportWithRelationsSchema).nullable(),
  deliveryMethodInvoiceDeliveryOption: z.lazy(() => DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema).nullable(),
  payments: z.lazy(() => PaymentWithRelationsSchema).array(),
  failedPaymentFee: z.lazy(() => FailedPaymentFeeWithRelationsSchema).nullable(),
  paymentHistorys: z.lazy(() => PaymentHistoryWithRelationsSchema).array(),
  zoomStartNotificationHistorys: z.lazy(() => ZoomStartNotificationHistoryWithRelationsSchema).array(),
  patientForms: z.lazy(() => PatientFormWithRelationsSchema).array(),
  treatment: z.lazy(() => TreatmentWithRelationsSchema).nullable(),
}))

export default ReservationSchema;

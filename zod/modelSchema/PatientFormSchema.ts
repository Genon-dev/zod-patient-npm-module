import { z } from 'zod';
import { PatientFormTypeSchema } from '../inputTypeSchemas/PatientFormTypeSchema'
import type { UserWithRelations } from './UserSchema'
import type { ReservationWithRelations } from './ReservationSchema'
import type { BeautyProductWithRelations } from './BeautyProductSchema'
import type { PatientFormAnswerWithRelations } from './PatientFormAnswerSchema'
import type { PatientFormDlqiWithRelations } from './PatientFormDlqiSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'
import { BeautyProductWithRelationsSchema } from './BeautyProductSchema'
import { PatientFormAnswerWithRelationsSchema } from './PatientFormAnswerSchema'
import { PatientFormDlqiWithRelationsSchema } from './PatientFormDlqiSchema'

/////////////////////////////////////////
// PATIENT FORM SCHEMA
/////////////////////////////////////////

export const PatientFormSchema = z.object({
  type: PatientFormTypeSchema,
  id: z.string().cuid(),
  patientId: z.string(),
  reservationId: z.number().int().nullable(),
  beautyProductBuyScheduleId: z.string().nullable(),
  createdAt: z.coerce.date(),
})

export type PatientForm = z.infer<typeof PatientFormSchema>

/////////////////////////////////////////
// PATIENT FORM RELATION SCHEMA
/////////////////////////////////////////

export type PatientFormRelations = {
  patient: UserWithRelations;
  reservation?: ReservationWithRelations | null;
  beautyProductBuySchedule?: BeautyProductWithRelations | null;
  patientFormAnswers: PatientFormAnswerWithRelations[];
  patientFormDlqies: PatientFormDlqiWithRelations[];
};

export type PatientFormWithRelations = z.infer<typeof PatientFormSchema> & PatientFormRelations

export const PatientFormWithRelationsSchema: z.ZodType<PatientFormWithRelations> = PatientFormSchema.merge(z.object({
  patient: z.lazy(() => UserWithRelationsSchema),
  reservation: z.lazy(() => ReservationWithRelationsSchema).nullable(),
  beautyProductBuySchedule: z.lazy(() => BeautyProductWithRelationsSchema).nullable(),
  patientFormAnswers: z.lazy(() => PatientFormAnswerWithRelationsSchema).array(),
  patientFormDlqies: z.lazy(() => PatientFormDlqiWithRelationsSchema).array(),
}))

export default PatientFormSchema;

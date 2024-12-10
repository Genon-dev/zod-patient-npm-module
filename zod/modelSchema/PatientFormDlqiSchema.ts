import { z } from 'zod';
import type { PatientFormWithRelations } from './PatientFormSchema'
import type { DlqiWithRelations } from './DlqiSchema'
import { PatientFormWithRelationsSchema } from './PatientFormSchema'
import { DlqiWithRelationsSchema } from './DlqiSchema'

/////////////////////////////////////////
// PATIENT FORM DLQI SCHEMA
/////////////////////////////////////////

export const PatientFormDlqiSchema = z.object({
  id: z.string().cuid(),
  patientFormId: z.string(),
  dlqiId: z.string(),
  answer: z.string(),
  point: z.number().int(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
})

export type PatientFormDlqi = z.infer<typeof PatientFormDlqiSchema>

/////////////////////////////////////////
// PATIENT FORM DLQI RELATION SCHEMA
/////////////////////////////////////////

export type PatientFormDlqiRelations = {
  patientForm: PatientFormWithRelations;
  dlqi: DlqiWithRelations;
};

export type PatientFormDlqiWithRelations = z.infer<typeof PatientFormDlqiSchema> & PatientFormDlqiRelations

export const PatientFormDlqiWithRelationsSchema: z.ZodType<PatientFormDlqiWithRelations> = PatientFormDlqiSchema.merge(z.object({
  patientForm: z.lazy(() => PatientFormWithRelationsSchema),
  dlqi: z.lazy(() => DlqiWithRelationsSchema),
}))

export default PatientFormDlqiSchema;

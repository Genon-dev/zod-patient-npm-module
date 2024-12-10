import { z } from 'zod';
import type { PatientFormDlqiWithRelations } from './PatientFormDlqiSchema'
import { PatientFormDlqiWithRelationsSchema } from './PatientFormDlqiSchema'

/////////////////////////////////////////
// DLQI SCHEMA
/////////////////////////////////////////

export const DlqiSchema = z.object({
  id: z.string().cuid(),
  question: z.string(),
  choicesPoint: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
})

export type Dlqi = z.infer<typeof DlqiSchema>

/////////////////////////////////////////
// DLQI RELATION SCHEMA
/////////////////////////////////////////

export type DlqiRelations = {
  patientFormDlqies: PatientFormDlqiWithRelations[];
};

export type DlqiWithRelations = z.infer<typeof DlqiSchema> & DlqiRelations

export const DlqiWithRelationsSchema: z.ZodType<DlqiWithRelations> = DlqiSchema.merge(z.object({
  patientFormDlqies: z.lazy(() => PatientFormDlqiWithRelationsSchema).array(),
}))

export default DlqiSchema;

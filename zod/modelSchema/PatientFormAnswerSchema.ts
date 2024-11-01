import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { PatientFormAnswerInputTypeSchema } from '../inputTypeSchemas/PatientFormAnswerInputTypeSchema'
import type { PatientFormWithRelations } from './PatientFormSchema'
import { PatientFormWithRelationsSchema } from './PatientFormSchema'

/////////////////////////////////////////
// PATIENT FORM ANSWER SCHEMA
/////////////////////////////////////////

export const PatientFormAnswerSchema = z.object({
  inputType: PatientFormAnswerInputTypeSchema,
  id: z.string().cuid(),
  patientFormId: z.string(),
  question: z.string(),
  answer: z.string(),
  key: z.string(),
  choices: JsonValueSchema.nullable(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
})

export type PatientFormAnswer = z.infer<typeof PatientFormAnswerSchema>

/////////////////////////////////////////
// PATIENT FORM ANSWER RELATION SCHEMA
/////////////////////////////////////////

export type PatientFormAnswerRelations = {
  patientForm: PatientFormWithRelations;
};

export type PatientFormAnswerWithRelations = z.infer<typeof PatientFormAnswerSchema> & PatientFormAnswerRelations

export const PatientFormAnswerWithRelationsSchema: z.ZodType<PatientFormAnswerWithRelations> = PatientFormAnswerSchema.merge(z.object({
  patientForm: z.lazy(() => PatientFormWithRelationsSchema),
}))

export default PatientFormAnswerSchema;

import { z } from 'zod';
import { PatientOperationHistoryTypeSchema } from '../inputTypeSchemas/PatientOperationHistoryTypeSchema'
import type { UserWithRelations } from './UserSchema'
import { UserWithRelationsSchema } from './UserSchema'

/////////////////////////////////////////
// PATIENT OPERATION HISTORY SCHEMA
/////////////////////////////////////////

export const PatientOperationHistorySchema = z.object({
  type: PatientOperationHistoryTypeSchema,
  id: z.number().int(),
  patientId: z.string(),
  content: z.string(),
  extra: z.string(),
  createdAt: z.coerce.date(),
})

export type PatientOperationHistory = z.infer<typeof PatientOperationHistorySchema>

/////////////////////////////////////////
// PATIENT OPERATION HISTORY RELATION SCHEMA
/////////////////////////////////////////

export type PatientOperationHistoryRelations = {
  patient: UserWithRelations;
};

export type PatientOperationHistoryWithRelations = z.infer<typeof PatientOperationHistorySchema> & PatientOperationHistoryRelations

export const PatientOperationHistoryWithRelationsSchema: z.ZodType<PatientOperationHistoryWithRelations> = PatientOperationHistorySchema.merge(z.object({
  patient: z.lazy(() => UserWithRelationsSchema),
}))

export default PatientOperationHistorySchema;

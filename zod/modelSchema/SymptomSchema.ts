import { z } from 'zod';
import { SymptomCodeSchema } from '../inputTypeSchemas/SymptomCodeSchema'
import type { HealthRecordDailyImageSymptomWithRelations } from './HealthRecordDailyImageSymptomSchema'
import { HealthRecordDailyImageSymptomWithRelationsSchema } from './HealthRecordDailyImageSymptomSchema'

/////////////////////////////////////////
// SYMPTOM SCHEMA
/////////////////////////////////////////

export const SymptomSchema = z.object({
  code: SymptomCodeSchema,
  id: z.string().cuid(),
  name: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type Symptom = z.infer<typeof SymptomSchema>

/////////////////////////////////////////
// SYMPTOM RELATION SCHEMA
/////////////////////////////////////////

export type SymptomRelations = {
  healthRecordDailyImageSymptoms: HealthRecordDailyImageSymptomWithRelations[];
};

export type SymptomWithRelations = z.infer<typeof SymptomSchema> & SymptomRelations

export const SymptomWithRelationsSchema: z.ZodType<SymptomWithRelations> = SymptomSchema.merge(z.object({
  healthRecordDailyImageSymptoms: z.lazy(() => HealthRecordDailyImageSymptomWithRelationsSchema).array(),
}))

export default SymptomSchema;

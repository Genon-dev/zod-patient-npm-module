import { z } from 'zod';
import type { HealthRecordDailyImageWithRelations } from './HealthRecordDailyImageSchema'
import type { SymptomWithRelations } from './SymptomSchema'
import { HealthRecordDailyImageWithRelationsSchema } from './HealthRecordDailyImageSchema'
import { SymptomWithRelationsSchema } from './SymptomSchema'

/////////////////////////////////////////
// HEALTH RECORD DAILY IMAGE SYMPTOM SCHEMA
/////////////////////////////////////////

export const HealthRecordDailyImageSymptomSchema = z.object({
  id: z.string().cuid(),
  healthRecordImageId: z.string(),
  symptomId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type HealthRecordDailyImageSymptom = z.infer<typeof HealthRecordDailyImageSymptomSchema>

/////////////////////////////////////////
// HEALTH RECORD DAILY IMAGE SYMPTOM RELATION SCHEMA
/////////////////////////////////////////

export type HealthRecordDailyImageSymptomRelations = {
  healthRecordDailyImage: HealthRecordDailyImageWithRelations;
  symptom: SymptomWithRelations;
};

export type HealthRecordDailyImageSymptomWithRelations = z.infer<typeof HealthRecordDailyImageSymptomSchema> & HealthRecordDailyImageSymptomRelations

export const HealthRecordDailyImageSymptomWithRelationsSchema: z.ZodType<HealthRecordDailyImageSymptomWithRelations> = HealthRecordDailyImageSymptomSchema.merge(z.object({
  healthRecordDailyImage: z.lazy(() => HealthRecordDailyImageWithRelationsSchema),
  symptom: z.lazy(() => SymptomWithRelationsSchema),
}))

export default HealthRecordDailyImageSymptomSchema;

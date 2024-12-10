import { z } from 'zod';
import type { HealthRecordDailyWithRelations } from './HealthRecordDailySchema'
import type { AffectedAreaWithRelations } from './AffectedAreaSchema'
import type { HealthRecordDailyImageSymptomWithRelations } from './HealthRecordDailyImageSymptomSchema'
import { HealthRecordDailyWithRelationsSchema } from './HealthRecordDailySchema'
import { AffectedAreaWithRelationsSchema } from './AffectedAreaSchema'
import { HealthRecordDailyImageSymptomWithRelationsSchema } from './HealthRecordDailyImageSymptomSchema'

/////////////////////////////////////////
// HEALTH RECORD DAILY IMAGE SCHEMA
/////////////////////////////////////////

export const HealthRecordDailyImageSchema = z.object({
  id: z.string().cuid(),
  path: z.string(),
  healthRecordDailyId: z.string(),
  affectedAreaId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type HealthRecordDailyImage = z.infer<typeof HealthRecordDailyImageSchema>

/////////////////////////////////////////
// HEALTH RECORD DAILY IMAGE RELATION SCHEMA
/////////////////////////////////////////

export type HealthRecordDailyImageRelations = {
  healthRecordDaily: HealthRecordDailyWithRelations;
  affectedArea: AffectedAreaWithRelations;
  healthRecordDailyImageSymptoms: HealthRecordDailyImageSymptomWithRelations[];
};

export type HealthRecordDailyImageWithRelations = z.infer<typeof HealthRecordDailyImageSchema> & HealthRecordDailyImageRelations

export const HealthRecordDailyImageWithRelationsSchema: z.ZodType<HealthRecordDailyImageWithRelations> = HealthRecordDailyImageSchema.merge(z.object({
  healthRecordDaily: z.lazy(() => HealthRecordDailyWithRelationsSchema),
  affectedArea: z.lazy(() => AffectedAreaWithRelationsSchema),
  healthRecordDailyImageSymptoms: z.lazy(() => HealthRecordDailyImageSymptomWithRelationsSchema).array(),
}))

export default HealthRecordDailyImageSchema;

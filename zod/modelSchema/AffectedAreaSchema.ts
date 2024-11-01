import { z } from 'zod';
import { AffectedAreaCodeSchema } from '../inputTypeSchemas/AffectedAreaCodeSchema'
import type { HealthRecordDailyImageWithRelations } from './HealthRecordDailyImageSchema'
import { HealthRecordDailyImageWithRelationsSchema } from './HealthRecordDailyImageSchema'

/////////////////////////////////////////
// AFFECTED AREA SCHEMA
/////////////////////////////////////////

export const AffectedAreaSchema = z.object({
  code: AffectedAreaCodeSchema,
  id: z.string().cuid(),
  name: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type AffectedArea = z.infer<typeof AffectedAreaSchema>

/////////////////////////////////////////
// AFFECTED AREA RELATION SCHEMA
/////////////////////////////////////////

export type AffectedAreaRelations = {
  healthRecordDailyImages: HealthRecordDailyImageWithRelations[];
};

export type AffectedAreaWithRelations = z.infer<typeof AffectedAreaSchema> & AffectedAreaRelations

export const AffectedAreaWithRelationsSchema: z.ZodType<AffectedAreaWithRelations> = AffectedAreaSchema.merge(z.object({
  healthRecordDailyImages: z.lazy(() => HealthRecordDailyImageWithRelationsSchema).array(),
}))

export default AffectedAreaSchema;

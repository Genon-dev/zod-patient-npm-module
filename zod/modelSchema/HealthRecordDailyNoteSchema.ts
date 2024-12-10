import { z } from 'zod';
import type { HealthRecordDailyWithRelations } from './HealthRecordDailySchema'
import type { FactorWithRelations } from './FactorSchema'
import { HealthRecordDailyWithRelationsSchema } from './HealthRecordDailySchema'
import { FactorWithRelationsSchema } from './FactorSchema'

/////////////////////////////////////////
// HEALTH RECORD DAILY NOTE SCHEMA
/////////////////////////////////////////

export const HealthRecordDailyNoteSchema = z.object({
  id: z.string().cuid(),
  text: z.string(),
  healthRecordDailyId: z.string(),
  factorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type HealthRecordDailyNote = z.infer<typeof HealthRecordDailyNoteSchema>

/////////////////////////////////////////
// HEALTH RECORD DAILY NOTE RELATION SCHEMA
/////////////////////////////////////////

export type HealthRecordDailyNoteRelations = {
  healthRecordDaily: HealthRecordDailyWithRelations;
  factor: FactorWithRelations;
};

export type HealthRecordDailyNoteWithRelations = z.infer<typeof HealthRecordDailyNoteSchema> & HealthRecordDailyNoteRelations

export const HealthRecordDailyNoteWithRelationsSchema: z.ZodType<HealthRecordDailyNoteWithRelations> = HealthRecordDailyNoteSchema.merge(z.object({
  healthRecordDaily: z.lazy(() => HealthRecordDailyWithRelationsSchema),
  factor: z.lazy(() => FactorWithRelationsSchema),
}))

export default HealthRecordDailyNoteSchema;

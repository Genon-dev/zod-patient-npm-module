import { z } from 'zod';
import { FactorCodeSchema } from '../inputTypeSchemas/FactorCodeSchema'
import type { HealthRecordDailyNoteWithRelations } from './HealthRecordDailyNoteSchema'
import { HealthRecordDailyNoteWithRelationsSchema } from './HealthRecordDailyNoteSchema'

/////////////////////////////////////////
// FACTOR SCHEMA
/////////////////////////////////////////

export const FactorSchema = z.object({
  code: FactorCodeSchema,
  id: z.string().cuid(),
  name: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type Factor = z.infer<typeof FactorSchema>

/////////////////////////////////////////
// FACTOR RELATION SCHEMA
/////////////////////////////////////////

export type FactorRelations = {
  healthRecordDailyNotes: HealthRecordDailyNoteWithRelations[];
};

export type FactorWithRelations = z.infer<typeof FactorSchema> & FactorRelations

export const FactorWithRelationsSchema: z.ZodType<FactorWithRelations> = FactorSchema.merge(z.object({
  healthRecordDailyNotes: z.lazy(() => HealthRecordDailyNoteWithRelationsSchema).array(),
}))

export default FactorSchema;

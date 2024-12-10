import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import type { HealthRecordDailyImageWithRelations } from './HealthRecordDailyImageSchema'
import type { HealthRecordDailyNoteWithRelations } from './HealthRecordDailyNoteSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { HealthRecordDailyImageWithRelationsSchema } from './HealthRecordDailyImageSchema'
import { HealthRecordDailyNoteWithRelationsSchema } from './HealthRecordDailyNoteSchema'

/////////////////////////////////////////
// HEALTH RECORD DAILY SCHEMA
/////////////////////////////////////////

export const HealthRecordDailySchema = z.object({
  id: z.string().cuid(),
  date: z.coerce.date(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  skinPain: z.number().int().nullable(),
})

export type HealthRecordDaily = z.infer<typeof HealthRecordDailySchema>

/////////////////////////////////////////
// HEALTH RECORD DAILY RELATION SCHEMA
/////////////////////////////////////////

export type HealthRecordDailyRelations = {
  user: UserWithRelations;
  healthRecordDailyImages: HealthRecordDailyImageWithRelations[];
  healthRecordDailyNotes: HealthRecordDailyNoteWithRelations[];
};

export type HealthRecordDailyWithRelations = z.infer<typeof HealthRecordDailySchema> & HealthRecordDailyRelations

export const HealthRecordDailyWithRelationsSchema: z.ZodType<HealthRecordDailyWithRelations> = HealthRecordDailySchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  healthRecordDailyImages: z.lazy(() => HealthRecordDailyImageWithRelationsSchema).array(),
  healthRecordDailyNotes: z.lazy(() => HealthRecordDailyNoteWithRelationsSchema).array(),
}))

export default HealthRecordDailySchema;

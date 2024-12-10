import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import type { HealthRecordRangeUserMedicineWithRelations } from './HealthRecordRangeUserMedicineSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { HealthRecordRangeUserMedicineWithRelationsSchema } from './HealthRecordRangeUserMedicineSchema'

/////////////////////////////////////////
// HEALTH RECORD RANGE SCHEMA
/////////////////////////////////////////

export const HealthRecordRangeSchema = z.object({
  id: z.string().cuid(),
  startAt: z.coerce.date(),
  endAt: z.coerce.date(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type HealthRecordRange = z.infer<typeof HealthRecordRangeSchema>

/////////////////////////////////////////
// HEALTH RECORD RANGE RELATION SCHEMA
/////////////////////////////////////////

export type HealthRecordRangeRelations = {
  user: UserWithRelations;
  healthRecordRangeUserMedicines: HealthRecordRangeUserMedicineWithRelations[];
};

export type HealthRecordRangeWithRelations = z.infer<typeof HealthRecordRangeSchema> & HealthRecordRangeRelations

export const HealthRecordRangeWithRelationsSchema: z.ZodType<HealthRecordRangeWithRelations> = HealthRecordRangeSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  healthRecordRangeUserMedicines: z.lazy(() => HealthRecordRangeUserMedicineWithRelationsSchema).array(),
}))

export default HealthRecordRangeSchema;

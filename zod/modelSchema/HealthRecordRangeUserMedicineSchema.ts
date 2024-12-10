import { z } from 'zod';
import { HealthRecordRangeUserMedicineFrequencySchema } from '../inputTypeSchemas/HealthRecordRangeUserMedicineFrequencySchema'
import type { HealthRecordRangeWithRelations } from './HealthRecordRangeSchema'
import type { UserMedicineWithRelations } from './UserMedicineSchema'
import { HealthRecordRangeWithRelationsSchema } from './HealthRecordRangeSchema'
import { UserMedicineWithRelationsSchema } from './UserMedicineSchema'

/////////////////////////////////////////
// HEALTH RECORD RANGE USER MEDICINE SCHEMA
/////////////////////////////////////////

export const HealthRecordRangeUserMedicineSchema = z.object({
  frequency: HealthRecordRangeUserMedicineFrequencySchema,
  id: z.string().cuid(),
  healthRecordRangeId: z.string(),
  userMedicineId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type HealthRecordRangeUserMedicine = z.infer<typeof HealthRecordRangeUserMedicineSchema>

/////////////////////////////////////////
// HEALTH RECORD RANGE USER MEDICINE RELATION SCHEMA
/////////////////////////////////////////

export type HealthRecordRangeUserMedicineRelations = {
  healthRecordRange: HealthRecordRangeWithRelations;
  userMedicine: UserMedicineWithRelations;
};

export type HealthRecordRangeUserMedicineWithRelations = z.infer<typeof HealthRecordRangeUserMedicineSchema> & HealthRecordRangeUserMedicineRelations

export const HealthRecordRangeUserMedicineWithRelationsSchema: z.ZodType<HealthRecordRangeUserMedicineWithRelations> = HealthRecordRangeUserMedicineSchema.merge(z.object({
  healthRecordRange: z.lazy(() => HealthRecordRangeWithRelationsSchema),
  userMedicine: z.lazy(() => UserMedicineWithRelationsSchema),
}))

export default HealthRecordRangeUserMedicineSchema;

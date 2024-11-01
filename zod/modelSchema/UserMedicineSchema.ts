import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import type { MedicineCategoryWithRelations } from './MedicineCategorySchema'
import type { MedicineWithRelations } from './MedicineSchema'
import type { HealthRecordRangeUserMedicineWithRelations } from './HealthRecordRangeUserMedicineSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { MedicineCategoryWithRelationsSchema } from './MedicineCategorySchema'
import { MedicineWithRelationsSchema } from './MedicineSchema'
import { HealthRecordRangeUserMedicineWithRelationsSchema } from './HealthRecordRangeUserMedicineSchema'

/////////////////////////////////////////
// USER MEDICINE SCHEMA
/////////////////////////////////////////

export const UserMedicineSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  userId: z.string(),
  categoryId: z.string().nullable(),
  medicineId: z.string().nullable(),
  order: z.number().int(),
  isUsed: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type UserMedicine = z.infer<typeof UserMedicineSchema>

/////////////////////////////////////////
// USER MEDICINE RELATION SCHEMA
/////////////////////////////////////////

export type UserMedicineRelations = {
  user: UserWithRelations;
  category?: MedicineCategoryWithRelations | null;
  medicine?: MedicineWithRelations | null;
  healthRecordRangeUserMedicine: HealthRecordRangeUserMedicineWithRelations[];
};

export type UserMedicineWithRelations = z.infer<typeof UserMedicineSchema> & UserMedicineRelations

export const UserMedicineWithRelationsSchema: z.ZodType<UserMedicineWithRelations> = UserMedicineSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  category: z.lazy(() => MedicineCategoryWithRelationsSchema).nullable(),
  medicine: z.lazy(() => MedicineWithRelationsSchema).nullable(),
  healthRecordRangeUserMedicine: z.lazy(() => HealthRecordRangeUserMedicineWithRelationsSchema).array(),
}))

export default UserMedicineSchema;

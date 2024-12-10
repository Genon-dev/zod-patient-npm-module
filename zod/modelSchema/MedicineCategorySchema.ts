import { z } from 'zod';
import { MedicineCategoryCodeSchema } from '../inputTypeSchemas/MedicineCategoryCodeSchema'
import type { MedicineWithRelations } from './MedicineSchema'
import type { UserMedicineWithRelations } from './UserMedicineSchema'
import { MedicineWithRelationsSchema } from './MedicineSchema'
import { UserMedicineWithRelationsSchema } from './UserMedicineSchema'

/////////////////////////////////////////
// MEDICINE CATEGORY SCHEMA
/////////////////////////////////////////

export const MedicineCategorySchema = z.object({
  code: MedicineCategoryCodeSchema,
  id: z.string().cuid(),
  name: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type MedicineCategory = z.infer<typeof MedicineCategorySchema>

/////////////////////////////////////////
// MEDICINE CATEGORY RELATION SCHEMA
/////////////////////////////////////////

export type MedicineCategoryRelations = {
  medicines: MedicineWithRelations[];
  userMedicines: UserMedicineWithRelations[];
};

export type MedicineCategoryWithRelations = z.infer<typeof MedicineCategorySchema> & MedicineCategoryRelations

export const MedicineCategoryWithRelationsSchema: z.ZodType<MedicineCategoryWithRelations> = MedicineCategorySchema.merge(z.object({
  medicines: z.lazy(() => MedicineWithRelationsSchema).array(),
  userMedicines: z.lazy(() => UserMedicineWithRelationsSchema).array(),
}))

export default MedicineCategorySchema;

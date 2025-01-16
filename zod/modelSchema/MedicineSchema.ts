import { z } from 'zod';
import type { MedicineCategoryWithRelations } from './MedicineCategorySchema'
import type { UserMedicineWithRelations } from './UserMedicineSchema'
import type { TreatmentMedicineWithRelations } from './TreatmentMedicineSchema'
import { MedicineCategoryWithRelationsSchema } from './MedicineCategorySchema'
import { UserMedicineWithRelationsSchema } from './UserMedicineSchema'
import { TreatmentMedicineWithRelationsSchema } from './TreatmentMedicineSchema'

/////////////////////////////////////////
// MEDICINE SCHEMA
/////////////////////////////////////////

export const MedicineSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  medicineCategoryId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type Medicine = z.infer<typeof MedicineSchema>

/////////////////////////////////////////
// MEDICINE RELATION SCHEMA
/////////////////////////////////////////

export type MedicineRelations = {
  medicineCategory?: MedicineCategoryWithRelations | null;
  userMedicines: UserMedicineWithRelations[];
  treatmentMedicines: TreatmentMedicineWithRelations[];
};

export type MedicineWithRelations = z.infer<typeof MedicineSchema> & MedicineRelations

export const MedicineWithRelationsSchema: z.ZodType<MedicineWithRelations> = MedicineSchema.merge(z.object({
  medicineCategory: z.lazy(() => MedicineCategoryWithRelationsSchema).nullable(),
  userMedicines: z.lazy(() => UserMedicineWithRelationsSchema).array(),
  treatmentMedicines: z.lazy(() => TreatmentMedicineWithRelationsSchema).array(),
}))

export default MedicineSchema;

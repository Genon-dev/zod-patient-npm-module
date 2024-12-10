import { z } from 'zod';
import type { MedicineCategoryWithRelations } from './MedicineCategorySchema'
import type { UserMedicineWithRelations } from './UserMedicineSchema'
import type { TreatmentMecicineWithRelations } from './TreatmentMecicineSchema'
import { MedicineCategoryWithRelationsSchema } from './MedicineCategorySchema'
import { UserMedicineWithRelationsSchema } from './UserMedicineSchema'
import { TreatmentMecicineWithRelationsSchema } from './TreatmentMecicineSchema'

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
  treatmentMecicines: TreatmentMecicineWithRelations[];
};

export type MedicineWithRelations = z.infer<typeof MedicineSchema> & MedicineRelations

export const MedicineWithRelationsSchema: z.ZodType<MedicineWithRelations> = MedicineSchema.merge(z.object({
  medicineCategory: z.lazy(() => MedicineCategoryWithRelationsSchema).nullable(),
  userMedicines: z.lazy(() => UserMedicineWithRelationsSchema).array(),
  treatmentMecicines: z.lazy(() => TreatmentMecicineWithRelationsSchema).array(),
}))

export default MedicineSchema;

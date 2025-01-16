import { z } from 'zod';
import { TreatmentMedicineTypeSchema } from '../inputTypeSchemas/TreatmentMedicineTypeSchema'
import type { TreatmentMedicineCategoryWithRelations } from './TreatmentMedicineCategorySchema'
import type { MedicineWithRelations } from './MedicineSchema'
import { TreatmentMedicineCategoryWithRelationsSchema } from './TreatmentMedicineCategorySchema'
import { MedicineWithRelationsSchema } from './MedicineSchema'

/////////////////////////////////////////
// TREATMENT MEDICINE SCHEMA
/////////////////////////////////////////

export const TreatmentMedicineSchema = z.object({
  type: TreatmentMedicineTypeSchema,
  id: z.string().cuid(),
  treatmentMedicineCategoryId: z.string(),
  freeMedicineName: z.string().nullable(),
  medicineId: z.string().nullable(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TreatmentMedicine = z.infer<typeof TreatmentMedicineSchema>

/////////////////////////////////////////
// TREATMENT MEDICINE RELATION SCHEMA
/////////////////////////////////////////

export type TreatmentMedicineRelations = {
  treatmentMedicineCategory: TreatmentMedicineCategoryWithRelations;
  medicine?: MedicineWithRelations | null;
};

export type TreatmentMedicineWithRelations = z.infer<typeof TreatmentMedicineSchema> & TreatmentMedicineRelations

export const TreatmentMedicineWithRelationsSchema: z.ZodType<TreatmentMedicineWithRelations> = TreatmentMedicineSchema.merge(z.object({
  treatmentMedicineCategory: z.lazy(() => TreatmentMedicineCategoryWithRelationsSchema),
  medicine: z.lazy(() => MedicineWithRelationsSchema).nullable(),
}))

export default TreatmentMedicineSchema;

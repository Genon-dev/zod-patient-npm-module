import { z } from 'zod';
import type { TreatmentWithRelations } from './TreatmentSchema'
import type { TreatmentMedicineWithRelations } from './TreatmentMedicineSchema'
import type { AffectedAreaWithRelations } from './AffectedAreaSchema'
import type { MedicineFrequencyWithRelations } from './MedicineFrequencySchema'
import { TreatmentWithRelationsSchema } from './TreatmentSchema'
import { TreatmentMedicineWithRelationsSchema } from './TreatmentMedicineSchema'
import { AffectedAreaWithRelationsSchema } from './AffectedAreaSchema'
import { MedicineFrequencyWithRelationsSchema } from './MedicineFrequencySchema'

/////////////////////////////////////////
// TREATMENT MEDICINE CATEGORY SCHEMA
/////////////////////////////////////////

export const TreatmentMedicineCategorySchema = z.object({
  id: z.string().cuid(),
  treatmentId: z.string(),
  affectedAreaId: z.string(),
  frequencyId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TreatmentMedicineCategory = z.infer<typeof TreatmentMedicineCategorySchema>

/////////////////////////////////////////
// TREATMENT MEDICINE CATEGORY RELATION SCHEMA
/////////////////////////////////////////

export type TreatmentMedicineCategoryRelations = {
  treatment: TreatmentWithRelations;
  treatmentMedicines: TreatmentMedicineWithRelations[];
  affectedArea: AffectedAreaWithRelations;
  frequency: MedicineFrequencyWithRelations;
};

export type TreatmentMedicineCategoryWithRelations = z.infer<typeof TreatmentMedicineCategorySchema> & TreatmentMedicineCategoryRelations

export const TreatmentMedicineCategoryWithRelationsSchema: z.ZodType<TreatmentMedicineCategoryWithRelations> = TreatmentMedicineCategorySchema.merge(z.object({
  treatment: z.lazy(() => TreatmentWithRelationsSchema),
  treatmentMedicines: z.lazy(() => TreatmentMedicineWithRelationsSchema).array(),
  affectedArea: z.lazy(() => AffectedAreaWithRelationsSchema),
  frequency: z.lazy(() => MedicineFrequencyWithRelationsSchema),
}))

export default TreatmentMedicineCategorySchema;

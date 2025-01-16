import { z } from 'zod';
import { MedicineFrequencyCodeSchema } from '../inputTypeSchemas/MedicineFrequencyCodeSchema'
import type { TreatmentMedicineCategoryWithRelations } from './TreatmentMedicineCategorySchema'
import { TreatmentMedicineCategoryWithRelationsSchema } from './TreatmentMedicineCategorySchema'

/////////////////////////////////////////
// MEDICINE FREQUENCY SCHEMA
/////////////////////////////////////////

export const MedicineFrequencySchema = z.object({
  code: MedicineFrequencyCodeSchema,
  id: z.string().cuid(),
  name: z.string(),
  order: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
})

export type MedicineFrequency = z.infer<typeof MedicineFrequencySchema>

/////////////////////////////////////////
// MEDICINE FREQUENCY RELATION SCHEMA
/////////////////////////////////////////

export type MedicineFrequencyRelations = {
  treatmentMedicineCategories: TreatmentMedicineCategoryWithRelations[];
};

export type MedicineFrequencyWithRelations = z.infer<typeof MedicineFrequencySchema> & MedicineFrequencyRelations

export const MedicineFrequencyWithRelationsSchema: z.ZodType<MedicineFrequencyWithRelations> = MedicineFrequencySchema.merge(z.object({
  treatmentMedicineCategories: z.lazy(() => TreatmentMedicineCategoryWithRelationsSchema).array(),
}))

export default MedicineFrequencySchema;

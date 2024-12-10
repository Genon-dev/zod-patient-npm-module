import { z } from 'zod';
import { MedicineFrequencyCodeSchema } from '../inputTypeSchemas/MedicineFrequencyCodeSchema'
import type { TreatmentMecicineWithRelations } from './TreatmentMecicineSchema'
import { TreatmentMecicineWithRelationsSchema } from './TreatmentMecicineSchema'

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
  treatmentMecicines: TreatmentMecicineWithRelations[];
};

export type MedicineFrequencyWithRelations = z.infer<typeof MedicineFrequencySchema> & MedicineFrequencyRelations

export const MedicineFrequencyWithRelationsSchema: z.ZodType<MedicineFrequencyWithRelations> = MedicineFrequencySchema.merge(z.object({
  treatmentMecicines: z.lazy(() => TreatmentMecicineWithRelationsSchema).array(),
}))

export default MedicineFrequencySchema;

import { z } from 'zod';
import type { TreatmentWithRelations } from './TreatmentSchema'
import type { MedicineWithRelations } from './MedicineSchema'
import type { AffectedAreaWithRelations } from './AffectedAreaSchema'
import type { MedicineFrequencyWithRelations } from './MedicineFrequencySchema'
import { TreatmentWithRelationsSchema } from './TreatmentSchema'
import { MedicineWithRelationsSchema } from './MedicineSchema'
import { AffectedAreaWithRelationsSchema } from './AffectedAreaSchema'
import { MedicineFrequencyWithRelationsSchema } from './MedicineFrequencySchema'

/////////////////////////////////////////
// TREATMENT MECICINE SCHEMA
/////////////////////////////////////////

export const TreatmentMecicineSchema = z.object({
  id: z.string().cuid(),
  treatmentId: z.string(),
  freeMedicineName: z.string().nullable(),
  medicineId: z.string().nullable(),
  affectedAreaId: z.string(),
  frequencyId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TreatmentMecicine = z.infer<typeof TreatmentMecicineSchema>

/////////////////////////////////////////
// TREATMENT MECICINE RELATION SCHEMA
/////////////////////////////////////////

export type TreatmentMecicineRelations = {
  treatment: TreatmentWithRelations;
  medicine?: MedicineWithRelations | null;
  affectedArea: AffectedAreaWithRelations;
  frequency: MedicineFrequencyWithRelations;
};

export type TreatmentMecicineWithRelations = z.infer<typeof TreatmentMecicineSchema> & TreatmentMecicineRelations

export const TreatmentMecicineWithRelationsSchema: z.ZodType<TreatmentMecicineWithRelations> = TreatmentMecicineSchema.merge(z.object({
  treatment: z.lazy(() => TreatmentWithRelationsSchema),
  medicine: z.lazy(() => MedicineWithRelationsSchema).nullable(),
  affectedArea: z.lazy(() => AffectedAreaWithRelationsSchema),
  frequency: z.lazy(() => MedicineFrequencyWithRelationsSchema),
}))

export default TreatmentMecicineSchema;

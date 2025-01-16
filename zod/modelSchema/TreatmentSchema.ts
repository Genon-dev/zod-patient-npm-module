import { z } from 'zod';
import { NextRecommendedOptionSchema } from '../inputTypeSchemas/NextRecommendedOptionSchema'
import { ProactiveInflammationStageSchema } from '../inputTypeSchemas/ProactiveInflammationStageSchema'
import type { UserWithRelations } from './UserSchema'
import type { ReservationWithRelations } from './ReservationSchema'
import type { FollowUpRecordWithRelations } from './FollowUpRecordSchema'
import type { TreatmentMedicineCategoryWithRelations } from './TreatmentMedicineCategorySchema'
import { UserWithRelationsSchema } from './UserSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'
import { FollowUpRecordWithRelationsSchema } from './FollowUpRecordSchema'
import { TreatmentMedicineCategoryWithRelationsSchema } from './TreatmentMedicineCategorySchema'

/////////////////////////////////////////
// TREATMENT SCHEMA
/////////////////////////////////////////

export const TreatmentSchema = z.object({
  nextRecommendOption: NextRecommendedOptionSchema,
  proactiveInflammationStage: ProactiveInflammationStageSchema,
  id: z.string().cuid(),
  reservationId: z.number().int(),
  patientId: z.string(),
  nextRecommendAt: z.coerce.date(),
  previousTreatmentId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Treatment = z.infer<typeof TreatmentSchema>

/////////////////////////////////////////
// TREATMENT RELATION SCHEMA
/////////////////////////////////////////

export type TreatmentRelations = {
  patient: UserWithRelations;
  reservation: ReservationWithRelations;
  previousTreatment?: TreatmentWithRelations | null;
  subsequentTreatments: TreatmentWithRelations[];
  followUpRecords: FollowUpRecordWithRelations[];
  treatmentMedicineCategories: TreatmentMedicineCategoryWithRelations[];
};

export type TreatmentWithRelations = z.infer<typeof TreatmentSchema> & TreatmentRelations

export const TreatmentWithRelationsSchema: z.ZodType<TreatmentWithRelations> = TreatmentSchema.merge(z.object({
  patient: z.lazy(() => UserWithRelationsSchema),
  reservation: z.lazy(() => ReservationWithRelationsSchema),
  previousTreatment: z.lazy(() => TreatmentWithRelationsSchema).nullable(),
  subsequentTreatments: z.lazy(() => TreatmentWithRelationsSchema).array(),
  followUpRecords: z.lazy(() => FollowUpRecordWithRelationsSchema).array(),
  treatmentMedicineCategories: z.lazy(() => TreatmentMedicineCategoryWithRelationsSchema).array(),
}))

export default TreatmentSchema;

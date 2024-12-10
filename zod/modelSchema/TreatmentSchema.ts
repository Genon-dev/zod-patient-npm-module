import { z } from 'zod';
import { NextRecommendedOptionSchema } from '../inputTypeSchemas/NextRecommendedOptionSchema'
import { ProactiveInflammationStageSchema } from '../inputTypeSchemas/ProactiveInflammationStageSchema'
import type { ReservationWithRelations } from './ReservationSchema'
import type { FollowUpRecordWithRelations } from './FollowUpRecordSchema'
import type { TreatmentMecicineWithRelations } from './TreatmentMecicineSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'
import { FollowUpRecordWithRelationsSchema } from './FollowUpRecordSchema'
import { TreatmentMecicineWithRelationsSchema } from './TreatmentMecicineSchema'

/////////////////////////////////////////
// TREATMENT SCHEMA
/////////////////////////////////////////

export const TreatmentSchema = z.object({
  nextRecommendOption: NextRecommendedOptionSchema,
  proactiveInflammationStage: ProactiveInflammationStageSchema,
  id: z.string().cuid(),
  reservationId: z.number().int(),
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
  reservation: ReservationWithRelations;
  previousTreatment?: TreatmentWithRelations | null;
  subsequentTreatments: TreatmentWithRelations[];
  followUpRecords: FollowUpRecordWithRelations[];
  treatmentMecicines: TreatmentMecicineWithRelations[];
};

export type TreatmentWithRelations = z.infer<typeof TreatmentSchema> & TreatmentRelations

export const TreatmentWithRelationsSchema: z.ZodType<TreatmentWithRelations> = TreatmentSchema.merge(z.object({
  reservation: z.lazy(() => ReservationWithRelationsSchema),
  previousTreatment: z.lazy(() => TreatmentWithRelationsSchema).nullable(),
  subsequentTreatments: z.lazy(() => TreatmentWithRelationsSchema).array(),
  followUpRecords: z.lazy(() => FollowUpRecordWithRelationsSchema).array(),
  treatmentMecicines: z.lazy(() => TreatmentMecicineWithRelationsSchema).array(),
}))

export default TreatmentSchema;

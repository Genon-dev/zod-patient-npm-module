import { z } from 'zod';
import { FollowUpRecordConditionSchema } from '../inputTypeSchemas/FollowUpRecordConditionSchema'
import type { TreatmentWithRelations } from './TreatmentSchema'
import type { UserWithRelations } from './UserSchema'
import type { FollowUpKpiWithRelations } from './FollowUpKpiSchema'
import { TreatmentWithRelationsSchema } from './TreatmentSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { FollowUpKpiWithRelationsSchema } from './FollowUpKpiSchema'

/////////////////////////////////////////
// FOLLOW UP RECORD SCHEMA
/////////////////////////////////////////

export const FollowUpRecordSchema = z.object({
  condition: FollowUpRecordConditionSchema,
  id: z.string().cuid(),
  treatmentId: z.string(),
  patientId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type FollowUpRecord = z.infer<typeof FollowUpRecordSchema>

/////////////////////////////////////////
// FOLLOW UP RECORD RELATION SCHEMA
/////////////////////////////////////////

export type FollowUpRecordRelations = {
  treatment: TreatmentWithRelations;
  patient: UserWithRelations;
  followUpKpis: FollowUpKpiWithRelations[];
};

export type FollowUpRecordWithRelations = z.infer<typeof FollowUpRecordSchema> & FollowUpRecordRelations

export const FollowUpRecordWithRelationsSchema: z.ZodType<FollowUpRecordWithRelations> = FollowUpRecordSchema.merge(z.object({
  treatment: z.lazy(() => TreatmentWithRelationsSchema),
  patient: z.lazy(() => UserWithRelationsSchema),
  followUpKpis: z.lazy(() => FollowUpKpiWithRelationsSchema).array(),
}))

export default FollowUpRecordSchema;

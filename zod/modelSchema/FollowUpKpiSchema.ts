import { z } from 'zod';
import type { LineNotificationWithRelations } from './LineNotificationSchema'
import type { FollowUpRecordWithRelations } from './FollowUpRecordSchema'
import { LineNotificationWithRelationsSchema } from './LineNotificationSchema'
import { FollowUpRecordWithRelationsSchema } from './FollowUpRecordSchema'

/////////////////////////////////////////
// FOLLOW UP KPI SCHEMA
/////////////////////////////////////////

export const FollowUpKpiSchema = z.object({
  id: z.string().cuid(),
  modalCheckedAt: z.coerce.date(),
  lineNotificationId: z.string(),
  followUpRecordId: z.string().nullable(),
  createdAt: z.coerce.date(),
})

export type FollowUpKpi = z.infer<typeof FollowUpKpiSchema>

/////////////////////////////////////////
// FOLLOW UP KPI RELATION SCHEMA
/////////////////////////////////////////

export type FollowUpKpiRelations = {
  lineNotification: LineNotificationWithRelations;
  followUpRecord?: FollowUpRecordWithRelations | null;
};

export type FollowUpKpiWithRelations = z.infer<typeof FollowUpKpiSchema> & FollowUpKpiRelations

export const FollowUpKpiWithRelationsSchema: z.ZodType<FollowUpKpiWithRelations> = FollowUpKpiSchema.merge(z.object({
  lineNotification: z.lazy(() => LineNotificationWithRelationsSchema),
  followUpRecord: z.lazy(() => FollowUpRecordWithRelationsSchema).nullable(),
}))

export default FollowUpKpiSchema;

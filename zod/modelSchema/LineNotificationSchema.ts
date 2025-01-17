import { z } from 'zod';
import { LineNotificationTypeSchema } from '../inputTypeSchemas/LineNotificationTypeSchema'
import { LineNotificationStatusSchema } from '../inputTypeSchemas/LineNotificationStatusSchema'
import type { UserWithRelations } from './UserSchema'
import type { FollowUpKpiWithRelations } from './FollowUpKpiSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { FollowUpKpiWithRelationsSchema } from './FollowUpKpiSchema'

/////////////////////////////////////////
// LINE NOTIFICATION SCHEMA
/////////////////////////////////////////

export const LineNotificationSchema = z.object({
  type: LineNotificationTypeSchema,
  status: LineNotificationStatusSchema,
  id: z.string().cuid(),
  lineId: z.string(),
  message: z.string(),
  toId: z.string(),
  by: z.string(),
  sentAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  extra: z.string(),
})

export type LineNotification = z.infer<typeof LineNotificationSchema>

/////////////////////////////////////////
// LINE NOTIFICATION RELATION SCHEMA
/////////////////////////////////////////

export type LineNotificationRelations = {
  to?: UserWithRelations | null;
  followUpKpis: FollowUpKpiWithRelations[];
};

export type LineNotificationWithRelations = z.infer<typeof LineNotificationSchema> & LineNotificationRelations

export const LineNotificationWithRelationsSchema: z.ZodType<LineNotificationWithRelations> = LineNotificationSchema.merge(z.object({
  to: z.lazy(() => UserWithRelationsSchema).nullable(),
  followUpKpis: z.lazy(() => FollowUpKpiWithRelationsSchema).array(),
}))

export default LineNotificationSchema;

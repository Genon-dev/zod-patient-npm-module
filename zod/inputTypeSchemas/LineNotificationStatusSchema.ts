import { z } from 'zod';

export const LineNotificationStatusSchema = z.enum(['Pending','Successed','Failed']);

export type LineNotificationStatusType = `${z.infer<typeof LineNotificationStatusSchema>}`

export default LineNotificationStatusSchema;

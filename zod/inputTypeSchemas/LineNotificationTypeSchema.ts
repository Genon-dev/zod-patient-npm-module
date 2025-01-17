import { z } from 'zod';

export const LineNotificationTypeSchema = z.enum(['followUpCheck']);

export type LineNotificationTypeType = `${z.infer<typeof LineNotificationTypeSchema>}`

export default LineNotificationTypeSchema;

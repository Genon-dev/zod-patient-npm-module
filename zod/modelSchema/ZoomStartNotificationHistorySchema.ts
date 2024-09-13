import { z } from 'zod';
import type { ReservationWithRelations } from './ReservationSchema'
import type { AdminUserWithRelations } from './AdminUserSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'
import { AdminUserWithRelationsSchema } from './AdminUserSchema'

/////////////////////////////////////////
// ZOOM START NOTIFICATION HISTORY SCHEMA
/////////////////////////////////////////

export const ZoomStartNotificationHistorySchema = z.object({
  id: z.number().int(),
  reservationId: z.number().int(),
  adminUserId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ZoomStartNotificationHistory = z.infer<typeof ZoomStartNotificationHistorySchema>

/////////////////////////////////////////
// ZOOM START NOTIFICATION HISTORY RELATION SCHEMA
/////////////////////////////////////////

export type ZoomStartNotificationHistoryRelations = {
  reservation: ReservationWithRelations;
  adminUser: AdminUserWithRelations;
};

export type ZoomStartNotificationHistoryWithRelations = z.infer<typeof ZoomStartNotificationHistorySchema> & ZoomStartNotificationHistoryRelations

export const ZoomStartNotificationHistoryWithRelationsSchema: z.ZodType<ZoomStartNotificationHistoryWithRelations> = ZoomStartNotificationHistorySchema.merge(z.object({
  reservation: z.lazy(() => ReservationWithRelationsSchema),
  adminUser: z.lazy(() => AdminUserWithRelationsSchema),
}))

export default ZoomStartNotificationHistorySchema;

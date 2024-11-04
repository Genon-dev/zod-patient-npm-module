import { z } from 'zod';
import { UserRoleSchema } from '../inputTypeSchemas/UserRoleSchema'
import type { AdminUserUserPasswordResetWithRelations } from './AdminUserUserPasswordResetSchema'
import type { ZoomStartNotificationHistoryWithRelations } from './ZoomStartNotificationHistorySchema'
import { AdminUserUserPasswordResetWithRelationsSchema } from './AdminUserUserPasswordResetSchema'
import { ZoomStartNotificationHistoryWithRelationsSchema } from './ZoomStartNotificationHistorySchema'

/////////////////////////////////////////
// ADMIN USER SCHEMA
/////////////////////////////////////////

export const AdminUserSchema = z.object({
  role: UserRoleSchema.nullable(),
  id: z.string().cuid(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  hashedPassword: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type AdminUser = z.infer<typeof AdminUserSchema>

/////////////////////////////////////////
// ADMIN USER RELATION SCHEMA
/////////////////////////////////////////

export type AdminUserRelations = {
  UserPasswordReset: AdminUserUserPasswordResetWithRelations[];
  zoomStartNotificationHistorys: ZoomStartNotificationHistoryWithRelations[];
};

export type AdminUserWithRelations = z.infer<typeof AdminUserSchema> & AdminUserRelations

export const AdminUserWithRelationsSchema: z.ZodType<AdminUserWithRelations> = AdminUserSchema.merge(z.object({
  UserPasswordReset: z.lazy(() => AdminUserUserPasswordResetWithRelationsSchema).array(),
  zoomStartNotificationHistorys: z.lazy(() => ZoomStartNotificationHistoryWithRelationsSchema).array(),
}))

export default AdminUserSchema;

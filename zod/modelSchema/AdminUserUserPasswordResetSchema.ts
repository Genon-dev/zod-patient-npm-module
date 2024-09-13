import { z } from 'zod';
import type { AdminUserWithRelations } from './AdminUserSchema'
import { AdminUserWithRelationsSchema } from './AdminUserSchema'

/////////////////////////////////////////
// ADMIN USER USER PASSWORD RESET SCHEMA
/////////////////////////////////////////

export const AdminUserUserPasswordResetSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  token: z.string(),
  resetAt: z.coerce.date().nullable(),
  expiredAt: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type AdminUserUserPasswordReset = z.infer<typeof AdminUserUserPasswordResetSchema>

/////////////////////////////////////////
// ADMIN USER USER PASSWORD RESET RELATION SCHEMA
/////////////////////////////////////////

export type AdminUserUserPasswordResetRelations = {
  user: AdminUserWithRelations;
};

export type AdminUserUserPasswordResetWithRelations = z.infer<typeof AdminUserUserPasswordResetSchema> & AdminUserUserPasswordResetRelations

export const AdminUserUserPasswordResetWithRelationsSchema: z.ZodType<AdminUserUserPasswordResetWithRelations> = AdminUserUserPasswordResetSchema.merge(z.object({
  user: z.lazy(() => AdminUserWithRelationsSchema),
}))

export default AdminUserUserPasswordResetSchema;

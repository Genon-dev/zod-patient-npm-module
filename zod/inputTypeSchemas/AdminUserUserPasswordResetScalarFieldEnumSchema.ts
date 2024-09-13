import { z } from 'zod';

export const AdminUserUserPasswordResetScalarFieldEnumSchema = z.enum(['id','userId','token','resetAt','expiredAt','createdAt','updatedAt']);

export default AdminUserUserPasswordResetScalarFieldEnumSchema;

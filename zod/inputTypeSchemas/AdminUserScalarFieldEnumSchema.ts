import { z } from 'zod';

export const AdminUserScalarFieldEnumSchema = z.enum(['id','firstName','lastName','email','emailVerified','hashedPassword','createdAt','updatedAt','role']);

export default AdminUserScalarFieldEnumSchema;

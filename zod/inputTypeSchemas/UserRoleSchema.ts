import { z } from 'zod';

export const UserRoleSchema = z.enum(['admin','pharmacys']);

export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`

export default UserRoleSchema;

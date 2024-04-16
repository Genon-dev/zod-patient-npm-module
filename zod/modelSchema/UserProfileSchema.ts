import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import { UserWithRelationsSchema } from './UserSchema'

/////////////////////////////////////////
// USER PROFILE SCHEMA
/////////////////////////////////////////

export const UserProfileSchema = z.object({
  id: z.number().int(),
  userId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  firstNameKana: z.string(),
  lastNameKana: z.string(),
  year: z.string(),
  month: z.string(),
  day: z.string(),
  gender: z.string(),
  postcode: z.string(),
  prefecture: z.string(),
  city: z.string(),
  buildingName: z.string().nullable(),
  hokenshouRegisteredDate: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UserProfile = z.infer<typeof UserProfileSchema>

/////////////////////////////////////////
// USER PROFILE RELATION SCHEMA
/////////////////////////////////////////

export type UserProfileRelations = {
  user: UserWithRelations;
};

export type UserProfileWithRelations = z.infer<typeof UserProfileSchema> & UserProfileRelations

export const UserProfileWithRelationsSchema: z.ZodType<UserProfileWithRelations> = UserProfileSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
}))

export default UserProfileSchema;

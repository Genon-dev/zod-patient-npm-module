import { z } from 'zod';
import type { UserProfileWithRelations } from './UserProfileSchema'
import type { HokenshouWithRelations } from './HokenshouSchema'
import type { DocumentWithRelations } from './DocumentSchema'
import type { ReservationWithRelations } from './ReservationSchema'
import { UserProfileWithRelationsSchema } from './UserProfileSchema'
import { HokenshouWithRelationsSchema } from './HokenshouSchema'
import { DocumentWithRelationsSchema } from './DocumentSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  lineId: z.string().nullable(),
  reservaUid: z.string().nullable(),
  profileImage: z.string().nullable(),
  phoneNo: z.string(),
  isProfileCreated: z.boolean(),
  isHokenshouRegistered: z.boolean(),
  isMobileVerified: z.boolean(),
  hasPaymentMethod: z.boolean(),
  gmoPgMemberId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
  userProfile?: UserProfileWithRelations | null;
  hokenshous: HokenshouWithRelations[];
  documents: DocumentWithRelations[];
  reservations: ReservationWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  userProfile: z.lazy(() => UserProfileWithRelationsSchema).nullable(),
  hokenshous: z.lazy(() => HokenshouWithRelationsSchema).array(),
  documents: z.lazy(() => DocumentWithRelationsSchema).array(),
  reservations: z.lazy(() => ReservationWithRelationsSchema).array(),
}))

export default UserSchema;

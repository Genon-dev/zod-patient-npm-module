import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import type { DeliveryMethodInvoiceDeliveryOptionWithRelations } from './DeliveryMethodInvoiceDeliveryOptionSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema } from './DeliveryMethodInvoiceDeliveryOptionSchema'

/////////////////////////////////////////
// USER PROFILE SCHEMA
/////////////////////////////////////////

export const UserProfileSchema = z.object({
  id: z.number().int(),
  userId: z.string(),
  lineName: z.string(),
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
  isResistantToSteroid: z.string().nullable(),
  referrerName: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deliveryMethodInvoiceDeliveryOptionId: z.number().int().nullable(),
})

export type UserProfile = z.infer<typeof UserProfileSchema>

/////////////////////////////////////////
// USER PROFILE RELATION SCHEMA
/////////////////////////////////////////

export type UserProfileRelations = {
  user: UserWithRelations;
  deliveryMethodInvoiceDeliveryOption?: DeliveryMethodInvoiceDeliveryOptionWithRelations | null;
};

export type UserProfileWithRelations = z.infer<typeof UserProfileSchema> & UserProfileRelations

export const UserProfileWithRelationsSchema: z.ZodType<UserProfileWithRelations> = UserProfileSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  deliveryMethodInvoiceDeliveryOption: z.lazy(() => DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema).nullable(),
}))

export default UserProfileSchema;

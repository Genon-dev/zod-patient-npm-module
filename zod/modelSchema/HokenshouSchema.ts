import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import { UserWithRelationsSchema } from './UserSchema'

/////////////////////////////////////////
// HOKENSHOU SCHEMA
/////////////////////////////////////////

export const HokenshouSchema = z.object({
  id: z.number().int(),
  frontPath: z.string().nullable(),
  backPath: z.string().nullable(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Hokenshou = z.infer<typeof HokenshouSchema>

/////////////////////////////////////////
// HOKENSHOU RELATION SCHEMA
/////////////////////////////////////////

export type HokenshouRelations = {
  user: UserWithRelations;
};

export type HokenshouWithRelations = z.infer<typeof HokenshouSchema> & HokenshouRelations

export const HokenshouWithRelationsSchema: z.ZodType<HokenshouWithRelations> = HokenshouSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
}))

export default HokenshouSchema;

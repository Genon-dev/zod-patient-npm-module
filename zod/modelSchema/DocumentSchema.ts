import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import { UserWithRelationsSchema } from './UserSchema'

/////////////////////////////////////////
// DOCUMENT SCHEMA
/////////////////////////////////////////

export const DocumentSchema = z.object({
  id: z.number().int(),
  filePath: z.string().nullable(),
  userId: z.string(),
  title: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Document = z.infer<typeof DocumentSchema>

/////////////////////////////////////////
// DOCUMENT RELATION SCHEMA
/////////////////////////////////////////

export type DocumentRelations = {
  user: UserWithRelations;
};

export type DocumentWithRelations = z.infer<typeof DocumentSchema> & DocumentRelations

export const DocumentWithRelationsSchema: z.ZodType<DocumentWithRelations> = DocumentSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
}))

export default DocumentSchema;

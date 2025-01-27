import { z } from 'zod';
import { PhrRawDataLogStatusSchema } from '../inputTypeSchemas/PhrRawDataLogStatusSchema'
import type { UserWithRelations } from './UserSchema'
import type { AdminUserWithRelations } from './AdminUserSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { AdminUserWithRelationsSchema } from './AdminUserSchema'

/////////////////////////////////////////
// PHR RAW DATA LOG SCHEMA
/////////////////////////////////////////

export const PhrRawDataLogSchema = z.object({
  status: PhrRawDataLogStatusSchema,
  id: z.string().cuid(),
  patientId: z.string(),
  adminUserId: z.string(),
  outputFilePath: z.string(),
  outputFileSize: z.number().int().nullable(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  errorMessage: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type PhrRawDataLog = z.infer<typeof PhrRawDataLogSchema>

/////////////////////////////////////////
// PHR RAW DATA LOG RELATION SCHEMA
/////////////////////////////////////////

export type PhrRawDataLogRelations = {
  patient: UserWithRelations;
  adminUser: AdminUserWithRelations;
};

export type PhrRawDataLogWithRelations = z.infer<typeof PhrRawDataLogSchema> & PhrRawDataLogRelations

export const PhrRawDataLogWithRelationsSchema: z.ZodType<PhrRawDataLogWithRelations> = PhrRawDataLogSchema.merge(z.object({
  patient: z.lazy(() => UserWithRelationsSchema),
  adminUser: z.lazy(() => AdminUserWithRelationsSchema),
}))

export default PhrRawDataLogSchema;

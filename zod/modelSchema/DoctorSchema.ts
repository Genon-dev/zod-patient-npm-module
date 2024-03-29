import { z } from 'zod';
import type { ReservationWithRelations } from './ReservationSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'

/////////////////////////////////////////
// DOCTOR SCHEMA
/////////////////////////////////////////

export const DoctorSchema = z.object({
  id: z.number().int(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  hashedPassword: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Doctor = z.infer<typeof DoctorSchema>

/////////////////////////////////////////
// DOCTOR RELATION SCHEMA
/////////////////////////////////////////

export type DoctorRelations = {
  reservations: ReservationWithRelations[];
};

export type DoctorWithRelations = z.infer<typeof DoctorSchema> & DoctorRelations

export const DoctorWithRelationsSchema: z.ZodType<DoctorWithRelations> = DoctorSchema.merge(z.object({
  reservations: z.lazy(() => ReservationWithRelationsSchema).array(),
}))

export default DoctorSchema;

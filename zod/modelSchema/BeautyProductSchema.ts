import { z } from 'zod';
import type { PatientFormWithRelations } from './PatientFormSchema'
import type { ReservationWithRelations } from './ReservationSchema'
import { PatientFormWithRelationsSchema } from './PatientFormSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'

/////////////////////////////////////////
// BEAUTY PRODUCT SCHEMA
/////////////////////////////////////////

export const BeautyProductSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  price: z.number().int(),
  thumbnailPath: z.string(),
  isActive: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BeautyProduct = z.infer<typeof BeautyProductSchema>

/////////////////////////////////////////
// BEAUTY PRODUCT RELATION SCHEMA
/////////////////////////////////////////

export type BeautyProductRelations = {
  patientForms: PatientFormWithRelations[];
  Reservation: ReservationWithRelations[];
};

export type BeautyProductWithRelations = z.infer<typeof BeautyProductSchema> & BeautyProductRelations

export const BeautyProductWithRelationsSchema: z.ZodType<BeautyProductWithRelations> = BeautyProductSchema.merge(z.object({
  patientForms: z.lazy(() => PatientFormWithRelationsSchema).array(),
  Reservation: z.lazy(() => ReservationWithRelationsSchema).array(),
}))

export default BeautyProductSchema;

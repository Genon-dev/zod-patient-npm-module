import { z } from 'zod';
import type { ReservationWithRelations } from './ReservationSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'

/////////////////////////////////////////
// MEDICAL REPORT SCHEMA
/////////////////////////////////////////

export const MedicalReportSchema = z.object({
  id: z.number().int(),
  fileUrl: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  reservationId: z.number().int(),
})

export type MedicalReport = z.infer<typeof MedicalReportSchema>

/////////////////////////////////////////
// MEDICAL REPORT RELATION SCHEMA
/////////////////////////////////////////

export type MedicalReportRelations = {
  reservation: ReservationWithRelations;
};

export type MedicalReportWithRelations = z.infer<typeof MedicalReportSchema> & MedicalReportRelations

export const MedicalReportWithRelationsSchema: z.ZodType<MedicalReportWithRelations> = MedicalReportSchema.merge(z.object({
  reservation: z.lazy(() => ReservationWithRelationsSchema),
}))

export default MedicalReportSchema;

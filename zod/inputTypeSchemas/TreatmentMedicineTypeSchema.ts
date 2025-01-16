import { z } from 'zod';

export const TreatmentMedicineTypeSchema = z.enum(['Medicine','Moisturizer']);

export type TreatmentMedicineTypeType = `${z.infer<typeof TreatmentMedicineTypeSchema>}`

export default TreatmentMedicineTypeSchema;

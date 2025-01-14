import { z } from 'zod';

export const TreatmentMedicineScalarFieldEnumSchema = z.enum(['id','treatmentMedicineCategoryId','freeMedicineName','type','medicineId','order','createdAt','updatedAt']);

export default TreatmentMedicineScalarFieldEnumSchema;

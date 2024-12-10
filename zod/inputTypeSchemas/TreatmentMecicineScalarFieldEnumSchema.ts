import { z } from 'zod';

export const TreatmentMecicineScalarFieldEnumSchema = z.enum(['id','treatmentId','freeMedicineName','medicineId','affectedAreaId','frequencyId','createdAt','updatedAt']);

export default TreatmentMecicineScalarFieldEnumSchema;

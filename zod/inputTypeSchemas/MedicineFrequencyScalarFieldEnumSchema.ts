import { z } from 'zod';

export const MedicineFrequencyScalarFieldEnumSchema = z.enum(['id','name','code','order','createdAt','updatedAt','deletedAt']);

export default MedicineFrequencyScalarFieldEnumSchema;

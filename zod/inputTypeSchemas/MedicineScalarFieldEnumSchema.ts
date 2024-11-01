import { z } from 'zod';

export const MedicineScalarFieldEnumSchema = z.enum(['id','name','medicineCategoryId','createdAt','updatedAt','deletedAt']);

export default MedicineScalarFieldEnumSchema;

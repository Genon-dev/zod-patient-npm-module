import { z } from 'zod';

export const UserMedicineScalarFieldEnumSchema = z.enum(['id','name','userId','categoryId','medicineId','order','isUsed','createdAt','updatedAt','deletedAt']);

export default UserMedicineScalarFieldEnumSchema;

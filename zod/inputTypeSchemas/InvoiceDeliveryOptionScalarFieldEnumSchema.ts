import { z } from 'zod';

export const InvoiceDeliveryOptionScalarFieldEnumSchema = z.enum(['id','name','mailType','order','createdAt','updatedAt','deletedAt']);

export default InvoiceDeliveryOptionScalarFieldEnumSchema;

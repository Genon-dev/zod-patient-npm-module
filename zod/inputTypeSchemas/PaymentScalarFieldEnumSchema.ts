import { z } from 'zod';

export const PaymentScalarFieldEnumSchema = z.enum(['id','totalFee','reservationId','type','createdAt','updatedAt']);

export default PaymentScalarFieldEnumSchema;

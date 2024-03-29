import { z } from 'zod';

export const PaymentScalarFieldEnumSchema = z.enum(['id','totalFee','reservationId','createdAt','updatedAt']);

export default PaymentScalarFieldEnumSchema;

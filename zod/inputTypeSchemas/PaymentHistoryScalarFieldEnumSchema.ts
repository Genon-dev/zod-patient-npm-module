import { z } from 'zod';

export const PaymentHistoryScalarFieldEnumSchema = z.enum(['id','paymentId','reservationId','adminUserId','createdAt']);

export default PaymentHistoryScalarFieldEnumSchema;

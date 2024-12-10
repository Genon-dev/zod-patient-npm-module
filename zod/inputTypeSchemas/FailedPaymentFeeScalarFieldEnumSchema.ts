import { z } from 'zod';

export const FailedPaymentFeeScalarFieldEnumSchema = z.enum(['id','reservationId','systemFee','medicalFee','deliveryFee','medicineFee','expiredHokenshouFee','cancelFee','createdAt','updatedAt']);

export default FailedPaymentFeeScalarFieldEnumSchema;

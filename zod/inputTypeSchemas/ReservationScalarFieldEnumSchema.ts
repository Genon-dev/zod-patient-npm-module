import { z } from 'zod';

export const ReservationScalarFieldEnumSchema = z.enum(['id','reservaReservationId','reservaUrl','doctorId','userId','startAt','endAt','meetingPasscode','meetingId','meetingUrl','status','deliveryMethodId','invoiceDeliveryOptionId','createdAt','updatedAt','canceledAt','systemFee','medicalFee','deliveryFee','medicineFee','medicalReportId']);

export default ReservationScalarFieldEnumSchema;

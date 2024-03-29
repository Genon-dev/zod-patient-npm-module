import { z } from 'zod';

export const ReservationScalarFieldEnumSchema = z.enum(['id','reservaReservationId','doctorId','userId','startAt','meetingPasscode','meetingId','meetingUrl','status','deliveryMethodId','createdAt','updatedAt','systemFee','medicalFee','deliveryFee','medicalReportId']);

export default ReservationScalarFieldEnumSchema;

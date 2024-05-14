import { z } from 'zod';

export const ReservationScalarFieldEnumSchema = z.enum(['id','reservaReservationId','doctorId','userId','startAt','endAt','meetingPasscode','meetingId','meetingUrl','status','deliveryMethodId','createdAt','updatedAt','canceledAt','systemFee','medicalFee','deliveryFee','medicalReportId']);

export default ReservationScalarFieldEnumSchema;

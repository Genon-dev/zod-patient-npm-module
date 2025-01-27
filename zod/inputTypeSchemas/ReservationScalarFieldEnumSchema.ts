import { z } from 'zod';

export const ReservationScalarFieldEnumSchema = z.enum(['id','reservaReservationId','reservaUrl','doctorId','userId','startAt','endAt','meetingPasscode','meetingId','meetingUrl','zoomHost','status','treatmentSkip','deliveryMethodId','invoiceDeliveryOptionId','createdAt','updatedAt','canceledAt','systemFee','medicalFee','deliveryFee','medicineFee','expiredHokenshouFee','cancelFee','beautyProductFee','beautyProductDeliveryFee','beautyProductBoughtId','medicalReportId','deliveryMethodInvoiceDeliveryOptionId']);

export default ReservationScalarFieldEnumSchema;

import { z } from 'zod';

export const ReservationDeliveryMethodScalarFieldEnumSchema = z.enum(['id','keyword','fee','description','order','isDeleted']);

export default ReservationDeliveryMethodScalarFieldEnumSchema;

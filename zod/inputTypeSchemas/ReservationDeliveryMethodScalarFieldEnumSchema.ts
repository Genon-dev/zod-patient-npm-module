import { z } from 'zod';

export const ReservationDeliveryMethodScalarFieldEnumSchema = z.enum(['id','keyword','fee','description','isDeleted']);

export default ReservationDeliveryMethodScalarFieldEnumSchema;

import { z } from "zod";
import type { ReservationWithRelations } from "./ReservationSchema";
import type { DeliveryMethodInvoiceDeliveryOptionWithRelations } from "./DeliveryMethodInvoiceDeliveryOptionSchema";
import { ReservationWithRelationsSchema } from "./ReservationSchema";
import { DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema } from "./DeliveryMethodInvoiceDeliveryOptionSchema";

/////////////////////////////////////////
// RESERVATION DELIVERY METHOD SCHEMA
/////////////////////////////////////////

export const ReservationDeliveryMethodSchema = z.object({
  id: z.number().int(),
  keyword: z.string(),
  fee: z.number().int(),
  description: z.string(),
  isDeleted: z.boolean(),
});

export type ReservationDeliveryMethod = z.infer<
  typeof ReservationDeliveryMethodSchema
>;

/////////////////////////////////////////
// RESERVATION DELIVERY METHOD RELATION SCHEMA
/////////////////////////////////////////

export type ReservationDeliveryMethodRelations = {
  reservations: ReservationWithRelations[];
  deliveryMethodInvoiceDeliveryOptions: DeliveryMethodInvoiceDeliveryOptionWithRelations[];
};

export type ReservationDeliveryMethodWithRelations = z.infer<
  typeof ReservationDeliveryMethodSchema
> &
  ReservationDeliveryMethodRelations;

export const ReservationDeliveryMethodWithRelationsSchema: z.ZodType<ReservationDeliveryMethodWithRelations> =
  ReservationDeliveryMethodSchema.merge(
    z.object({
      reservations: z.lazy(() => ReservationWithRelationsSchema).array(),
      deliveryMethodInvoiceDeliveryOptions: z
        .lazy(() => DeliveryMethodInvoiceDeliveryOptionWithRelationsSchema)
        .array(),
    })
  );

export default ReservationDeliveryMethodSchema;

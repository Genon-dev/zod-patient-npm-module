import { z } from "zod";

export const InvoiceDeliveryOptionScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "mailType",
  "deliveryFee",
  "order",
  "createdAt",
  "updatedAt",
  "deletedAt",
]);

export default InvoiceDeliveryOptionScalarFieldEnumSchema;

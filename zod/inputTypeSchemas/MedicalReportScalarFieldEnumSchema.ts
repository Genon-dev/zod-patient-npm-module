import { z } from "zod";

export const MedicalReportScalarFieldEnumSchema = z.enum([
  "id",
  "fileUrl",
  "fileName",
  "createdAt",
  "updatedAt",
  "reservationId",
]);

export default MedicalReportScalarFieldEnumSchema;

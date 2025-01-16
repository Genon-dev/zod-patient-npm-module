import { z } from 'zod';

export const UserProfileScalarFieldEnumSchema = z.enum(['id','userId','lineName','firstName','lastName','firstNameKana','lastNameKana','year','month','day','gender','postcode','prefecture','city','buildingName','isResistantToSteroid','referrerName','createdAt','updatedAt','deliveryMethodInvoiceDeliveryOptionId']);

export default UserProfileScalarFieldEnumSchema;

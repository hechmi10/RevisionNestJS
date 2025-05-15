/* eslint-disable prettier/prettier */
export class Order {
    id: number;
    userId: string;
    productId: string;
    quantity: number;
    status: string; // e.g., 'pending', 'shipped', 'delivered'
}

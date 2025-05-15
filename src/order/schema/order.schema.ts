/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
    @Prop({ required: true })
    productId: string;
    @Prop({ required: true })
    userId: string;
    @Prop({ required: true })
    quantity: number;
    @Prop({ required: true })
    status: string; // e.g., 'pending', 'shipped', 'delivered'
}
export const OrderSchema = SchemaFactory.createForClass(Order);
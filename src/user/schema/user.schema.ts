/* eslint-disable prettier/prettier */
import { Schema } from "@nestjs/mongoose";

import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
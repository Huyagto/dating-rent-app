import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
@ObjectType()
export class User extends Document {
  @Field(() => ID)
   declare _id: string;

  @Field() @Prop({ required: true }) name: string;
  @Field() @Prop({ required: true, unique: true }) email: string;
  @Prop({ required: true }) password: string;
  @Field({ nullable: true }) @Prop() avatar?: string;
  @Field(() => Int, { nullable: true }) @Prop() age?: number;
  @Field({ nullable: true }) @Prop({ enum: ['Nam','Nữ','Khác'] }) gender?: string;
  @Field({ nullable: true }) @Prop() bio?: string;
  @Field(() => [String], { nullable: true }) @Prop([String]) interests?: string[];

  @Prop({ type: { type: String, default: 'Point' }, coordinates: [Number] })
   geoLocation?: { type: string; coordinates: number[] };;

  @Prop({ type: [String], default: [] }) likedUsers: string[];
  @Prop({ type: [String], default: [] }) dislikedUsers: string[];
  @Prop({ type: [String], default: [] }) matches: string[];
  @Prop({ type: [String], default: [] }) superLikes: string[];
  @Prop({ type: [String], default: [] }) blockedUsers: string[];

  @Field() @Prop({ default: false }) online: boolean;
  @Field({ nullable: true }) @Prop() lastActiveAt?: Date;
  @Field() @Prop({ default: false }) isVerified: boolean;

  @Field(() => [String], { nullable: true }) @Prop([String]) photos?: string[];
  @Field({ nullable: true }) @Prop() job?: string;
  @Field({ nullable: true }) @Prop() school?: string;
  @Field(() => Int, { nullable: true }) @Prop() height?: number;

  @Field(() => Int, { nullable: true }) @Prop() distancePreference?: number;
  @Field(() => Int, { nullable: true }) @Prop() ageMinPreference?: number;
  @Field(() => Int, { nullable: true }) @Prop() ageMaxPreference?: number;
  @Field({ nullable: true }) @Prop({ enum: ['Nam','Nữ','Khác'] }) genderPreference?: string;

  @Prop({ type: [String], default: [] }) conversations?: string[];
  @Field(() => Int, { defaultValue: 0 }) @Prop({ default: 0 }) unreadMessages?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ geoLocation: '2dsphere' });

// src/users/dto/create-user.input.ts
import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field() name: string;
  @Field() email: string;
  @Field() password: string;
  @Field(() => Int, { nullable: true }) age?: number;
  @Field({ nullable: true }) gender?: string;
  @Field({ nullable: true }) bio?: string;
  @Field(() => [String], { nullable: true }) interests?: string[];
  @Field(() => [String], { nullable: true }) photos?: string[];
  @Field({ nullable: true }) job?: string;
  @Field({ nullable: true }) school?: string;
  @Field(() => Int, { nullable: true }) height?: number;
  @Field(() => Int, { nullable: true }) distancePreference?: number;
  @Field(() => Int, { nullable: true }) ageMinPreference?: number;
  @Field(() => Int, { nullable: true }) ageMaxPreference?: number;
  @Field({ nullable: true }) genderPreference?: string;
  @Field(() => Float, { nullable: true }) lng?: number;
  @Field(() => Float, { nullable: true }) lat?: number;
}

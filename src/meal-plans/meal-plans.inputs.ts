import { Schema as MongooseSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMealPlanInput {
  @Field(() => String)
  name: string;
  @Field(() => Number)
  weekNumber: number;
  @Field(() => String)
  userId: MongooseSchema.Types.ObjectId;
  @Field(() => [String])
  recipesSelected: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class ListMealPlanInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Number, { nullable: true })
  weekNumber?: number;
  @Field(() => String, { nullable: true })
  userId?: MongooseSchema.Types.ObjectId;
  @Field(() => [String], { nullable: true })
  recipesSelected?: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class UpdateMealPlanInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Number, { nullable: true })
  weekNumber?: number;
  @Field(() => String, { nullable: true })
  userId?: MongooseSchema.Types.ObjectId;
  @Field(() => [String], { nullable: true })
  recipesSelected?: MongooseSchema.Types.ObjectId[];
}

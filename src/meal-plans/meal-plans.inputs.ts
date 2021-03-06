import { Schema as MongooseSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';
import { EntreeObjectInput } from './meal-plans.model';

@InputType()
export class CreateMealPlanInput {
  @Field(() => String)
  name: string;
  @Field(() => Number)
  weekNumber: number;
  @Field(() => String)
  userId: MongooseSchema.Types.ObjectId;
  @Field(() => [EntreeObjectInput])
  entrees: MongooseSchema.Types.ObjectId;
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
  @Field(() => [EntreeObjectInput], { nullable: true })
  entrees?: EntreeObjectInput[];
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
  @Field(() => [EntreeObjectInput], { nullable: true })
  entrees?: EntreeObjectInput[];
}

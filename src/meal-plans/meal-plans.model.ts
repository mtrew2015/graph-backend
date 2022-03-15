import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/user.model';
import { Recipe } from 'src/recipe/recipe.model';

@ObjectType()
@Schema()
export class MealPlan {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Number)
  @Prop()
  weekNumber: number;

  @Field(() => String)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: MongooseSchema.Types.ObjectId;

  @Field(() => [Recipe])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Recipe.name })
  recipesSelected: MongooseSchema.Types.ObjectId[];
}

export type MealPlanDocument = MealPlan & Document;

export const MealPlanSchema = SchemaFactory.createForClass(MealPlan);

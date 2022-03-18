import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
@InputType('IngredientInput')
@ObjectType()
export class IngredientObject {
  @Field(() => String)
  @Prop()
  name: string;
  @Field(() => Number)
  @Prop()
  price: number;
  @Field(() => Number)
  @Prop()
  serves: number;
}

@ObjectType()
@Schema()
@InputType('RecipeInput')
export class Recipe {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  linkToRecipe: string;

  @Field(() => Number)
  @Prop()
  serves: number;

  @Field(() => [IngredientObject])
  @Prop()
  ingredients: [IngredientObject];
}

export type RecipeDocument = Recipe & Document;

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

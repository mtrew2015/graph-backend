import { Schema as MongooseSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';
import { IngredientObject } from './recipe.model';

@InputType()
export class CreateRecipeInput {
  @Field(() => String)
  name: string;
  @Field(() => Number)
  price: number;
  @Field(() => Number)
  serves: number;
  @Field(() => String)
  linkToRecipe: string;
  @Field(() => [IngredientObject])
  ingredients: [IngredientObject];
}

@InputType()
export class ListRecipeInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Number, { nullable: true })
  price?: number;
  @Field(() => Number, { nullable: true })
  serves?: number;
  @Field(() => String, { nullable: true })
  linkToRecipe?: string;
  @Field(() => [IngredientObject], { nullable: true })
  ingredients?: [IngredientObject];
}

@InputType()
export class UpdateRecipeInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Number, { nullable: true })
  price?: number;
  @Field(() => Number, { nullable: true })
  serves?: number;
  @Field(() => String, { nullable: true })
  linkToRecipe?: string;
  @Field(() => [IngredientObject], { nullable: true })
  ingredients?: [IngredientObject];
}
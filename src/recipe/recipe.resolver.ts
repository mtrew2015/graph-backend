import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import {
  CreateRecipeInput,
  ListRecipeInput,
  UpdateRecipeInput,
} from './recipe.inputs';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query(() => Recipe)
  async recipe(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.recipeService.getById(_id);
  }

  @Query(() => [Recipe])
  async recipes(
    @Args('filters', { nullable: true }) filters?: ListRecipeInput,
  ) {
    return this.recipeService.list(filters);
  }

  @Mutation(() => Recipe)
  async createRecipe(@Args('payload') payload: CreateRecipeInput) {
    return this.recipeService.create(payload);
  }

  @Mutation(() => Recipe)
  async updateRecipe(@Args('payload') payload: UpdateRecipeInput) {
    return this.recipeService.update(payload);
  }

  @Mutation(() => Recipe)
  async deleteRecipe(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.recipeService.delete(_id);
  }
}

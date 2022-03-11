import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { MealPlan } from './meal-plans.model';
import { MealPlanService } from './meal-plans.service';
import {
  CreateMealPlanInput,
  ListMealPlanInput,
  UpdateMealPlanInput,
} from './meal-plans.inputs';

@Resolver(() => MealPlan)
export class MealPlansResolver {
  constructor(private mealPlanService: MealPlanService) {}

  @Query(() => MealPlan)
  async mealPlan(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.mealPlanService.getById(_id);
  }

  @Query(() => [MealPlan])
  async mealPlans(
    @Args('filters', { nullable: true }) filters?: ListMealPlanInput,
  ) {
    return this.mealPlanService.list(filters);
  }

  @Mutation(() => MealPlan)
  async createMealPlan(@Args('payload') payload: CreateMealPlanInput) {
    return this.mealPlanService.create(payload);
  }

  @Mutation(() => MealPlan)
  async updateMealPlan(@Args('payload') payload: UpdateMealPlanInput) {
    return this.mealPlanService.update(payload);
  }

  @Mutation(() => MealPlan)
  async deleteMealPlan(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.mealPlanService.delete(_id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { MealPlan, MealPlanDocument } from './meal-plans.model';
import {
  CreateMealPlanInput,
  ListMealPlanInput,
  UpdateMealPlanInput,
} from './meal-plans.inputs';

@Injectable()
export class MealPlanService {
  constructor(
    @InjectModel(MealPlan.name) private mealPlanModel: Model<MealPlanDocument>,
  ) {}

  create(payload: CreateMealPlanInput) {
    const createdMealPlan = new this.mealPlanModel(payload);
    return createdMealPlan.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.mealPlanModel.findById(_id).populate('recipesSelected').exec();
  }

  list(filters: ListMealPlanInput) {
    return this.mealPlanModel
      .find({ ...filters })
      .populate('recipesSelected')
      .exec();
  }

  update(payload: UpdateMealPlanInput) {
    return this.mealPlanModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.mealPlanModel.findByIdAndDelete(_id).exec();
  }
}

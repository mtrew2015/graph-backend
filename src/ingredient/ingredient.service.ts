import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { Ingredient, IngredientDocument } from './ingredient.model';
import {
  CreateIngredientInput,
  ListIngredientInput,
  UpdateIngredientInput,
} from './ingredient.inputs';

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel(Ingredient.name) private ingredientModel: Model<IngredientDocument>,
  ) {}

  create(payload: CreateIngredientInput) {
    const createdIngredient = new this.ingredientModel(payload);
    return createdIngredient.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.ingredientModel.findById(_id).exec();
  }

  list(filters: ListIngredientInput) {
    return this.ingredientModel.find({ ...filters }).exec();
  }

  update(payload: UpdateIngredientInput) {
    return this.ingredientModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.ingredientModel.findByIdAndDelete(_id).exec();
  }
}

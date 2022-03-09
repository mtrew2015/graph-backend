import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Ingredient, IngredientSchema } from './Ingredient.model';
import { IngredientService } from './ingredient.service';
import { IngredientResolver } from './ingredient.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ingredient.name, schema: IngredientSchema },
    ]),
  ],
  providers: [IngredientService, IngredientResolver],
})
export class IngredientModule {}

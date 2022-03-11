import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MealPlan, MealPlanSchema } from './meal-plans.model';
import { MealPlansResolver } from './meal-plans.resolver';
import { MealPlanService } from './meal-plans.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MealPlan.name, schema: MealPlanSchema },
    ]),
  ],
  providers: [MealPlansResolver, MealPlanService],
})
export class MealPlansModule {}

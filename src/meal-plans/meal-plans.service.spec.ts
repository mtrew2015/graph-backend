import { Test, TestingModule } from '@nestjs/testing';
import { MealPlanService } from './meal-plans.service';

describe('MealPlansService', () => {
  let service: MealPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealPlanService],
    }).compile();

    service = module.get<MealPlanService>(MealPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

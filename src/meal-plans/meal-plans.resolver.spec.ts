import { Test, TestingModule } from '@nestjs/testing';
import { MealPlansResolver } from './meal-plans.resolver';

describe('MealPlansResolver', () => {
  let resolver: MealPlansResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealPlansResolver],
    }).compile();

    resolver = module.get<MealPlansResolver>(MealPlansResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

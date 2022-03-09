import { Schema as MongooseSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class CreateIngredientInput {
  @Field(() => String)
  name: string;
  @Field(() => Number)
  price: number;
  @Field(() => Number)
  qty: number;
}

@InputType()
export class ListIngredientInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Number, { nullable: true })
  price?: number;
  @Field(() => Number, { nullable: true })
  qty?: number;
}

@InputType()
export class UpdateIngredientInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Number, { nullable: true })
  price?: number;
  @Field(() => Number, { nullable: true })
  qty?: number;
}

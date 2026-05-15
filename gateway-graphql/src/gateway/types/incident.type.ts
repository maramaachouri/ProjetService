import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class IncidentType {
  @Field(() => Int)
  id!: number;

  @Field()
  type!: string;

  @Field()
  description!: string;

  @Field()
  location!: string;

  @Field()
  status!: string;
}
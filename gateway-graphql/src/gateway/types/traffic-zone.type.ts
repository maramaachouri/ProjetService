import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TrafficZoneType {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;

  @Field()
  density!: number;

  @Field()
  level!: string;
}
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VehicleType {
  @Field(() => Int)
  id!: number;

  @Field()
  matricule!: string;

  @Field()
  type!: string;

  @Field()
  status!: string;
}
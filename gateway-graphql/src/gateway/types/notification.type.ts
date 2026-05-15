import {
  Field,
  Int,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class NotificationType {
  @Field(() => Int)
  id!: number;

  @Field()
  message!: string;

  @Field()
  isRead!: boolean;

  @Field()
  createdAt!: string;
}
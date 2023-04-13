import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Employee } from './employee.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Location {
  @Field(() => ID)
  @Directive('@external')
  id: string;

  @Field(() => [Employee])
  employees: Employee[];
}

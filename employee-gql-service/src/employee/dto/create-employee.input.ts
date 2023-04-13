import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class EmployeeCreateDTO {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  designation: string;

  @Field({ nullable: true })
  city: string;

  @Field(() => ID)
  projectId: string;

  @Field(() => ID)
  locationId: string;
}

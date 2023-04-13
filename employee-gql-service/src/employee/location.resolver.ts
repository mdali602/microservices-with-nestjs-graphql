import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { Location } from './entities/location.entity';

@Resolver(() => Location)
export class LocationResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @ResolveField(() => [Employee])
  employees(@Parent() location: Location) {
    return this.employeeService.forLocation(location.id);
  }
}

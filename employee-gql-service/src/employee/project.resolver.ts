import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Project } from './entities/project.entity';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @ResolveField(() => [Employee])
  employees(@Parent() project: Project): Promise<Employee[]> {
    return this.employeeService.forProject(project.id);
  }
}

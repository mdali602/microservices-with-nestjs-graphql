import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
// import { Project } from 'src/project/entities/project.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from './project.entity';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class Employee {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  designation: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;

  @Field(() => Project)
  project: Project;

  /* @ManyToOne(() => Project, (project) => project.employees)
  @Field(() => Project)
  project: Project; */

  @Field()
  @Column()
  projectId: string;
}

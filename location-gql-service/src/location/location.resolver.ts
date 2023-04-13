import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location-input';

@Resolver(() => Location)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query(() => [Location], { name: 'locations' })
  findAll() {
    return this.locationService.findAll();
  }

  @Query(() => Location, { name: 'location' })
  findOne(@Args('id') id: string) {
    return this.locationService.findOne(id);
  }

  @Mutation(() => Location)
  createLocation(@Args('location') location: CreateLocationInput) {
    return this.locationService.create(location);
  }

  @ResolveReference()
  resolveReference(ref: { __typename: string; id: string }): Promise<Location> {
    return this.locationService.findOne(ref.id);
  }
}

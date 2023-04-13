import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location-input';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async create(location: CreateLocationInput): Promise<Location> {
    const loc = this.locationRepository.create(location);
    return this.locationRepository.save(loc);
  }

  async findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  findOne(id: string): Promise<Location> {
    return this.locationRepository.findOne({ where: { id } });
  }
}

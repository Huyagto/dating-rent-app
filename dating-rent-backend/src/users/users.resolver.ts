// src/users/users.resolver.ts
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.model';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async users() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async user(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Query(() => [User])
  async nearbyUsers(
    @Args('lng', { type: () => Float }) lng: number,
    @Args('lat', { type: () => Float }) lat: number,
    @Args('maxDistance', { type: () => Float, nullable: true }) maxDistance?: number,
  ) {
    return this.usersService.findNearby(lng, lat, maxDistance);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.usersService.create(input);
  }
}

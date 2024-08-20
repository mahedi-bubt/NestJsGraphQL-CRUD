/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user-input';

@Resolver((_of: any) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  getUserById(@Args('id', {type: ()=> Int}) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Query(() => [User])
  users(): Promise<User[]>{
    return this.usersService.findAll();
  }

  @Mutation(returns => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User>{
    return this.usersService.createUser(createUserInput);
  }
}

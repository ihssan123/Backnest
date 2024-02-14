import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private entityRepository: Repository<User>
) {}
  
async create(createUserDto: CreateUserDto): Promise<User> {
  const user = new User();
  user.email = createUserDto.email;
  user.name = createUserDto.name;
  // Set other properties from createUserDto as needed

   await this.entityRepository.save(user);
   return user;
}

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return updateUserDto;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto):Promise<User> {
    return new this.userModel(createUserDto).save();
  }

  findAll() {
    return this.userModel.find()
  }

  findOne(id: number) {
    return this.userModel.findOne({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({id},{$set:{...updateUserDto}});
  }

  remove(id: number) {
    return this.userModel.deleteOne({id});
  }
}

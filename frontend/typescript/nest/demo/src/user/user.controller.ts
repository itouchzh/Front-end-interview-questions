import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
  Headers
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // post 的参数在body里面
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return {
      code: 200,
    };
    // return this.userService.create(createUserDto);
  }

  // get的参数在query里面,headers读取请求头里面的信息
  @Get()
  findAll(@Query() body, @Headers() headers) {
    console.log(body,headers);
    return {
      code: 200,
    };
    // return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

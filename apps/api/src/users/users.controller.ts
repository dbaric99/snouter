import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { AddressEntity } from 'src/addresses/entities/address.entity';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { ProfileOwnerGuard } from 'src/auth/guards/profile-owner.guard';

@Controller('users')
@ApiTags('User')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  async create(@Body() createUserDto: CreateUserDto) {
    return new UserEntity(await this.usersService.create(createUserDto));
  }

  @Get()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: [UserEntity] })
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(JwtAuthGuard, RoleGuard || ProfileOwnerGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = new UserEntity(await this.usersService.findOne(id));
    if (!user || !Object.keys(user).length) {
      throw new NotFoundException(`User with ${id} does not exist.`);
    }
    return user;
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(JwtAuthGuard, RoleGuard || ProfileOwnerGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return new UserEntity(await this.usersService.update(id, updateUserDto));
  }

  @Post(':id/address')
  @UseGuards(JwtAuthGuard, ProfileOwnerGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: AddressEntity })
  async addAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() createAddressDto: CreateAddressDto,
  ) {
    const address = await this.usersService.addAddress(id, createAddressDto);
    return this.usersService.bindAddressToUser(id, address.id);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new UserEntity(await this.usersService.remove(id));
  }
}

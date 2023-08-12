import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { encodePassword } from 'src/utils/bcrypt';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    const { hash, salt } = encodePassword(createUserDto.password);
    return this.prisma.user.create({
      data: { ...createUserDto, password: hash, salt },
    });
  }

  findAll() {
    return this.prisma.user.findMany({ orderBy: { id: 'asc' } });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  addAddress(id: number, createAddressDto: CreateAddressDto) {
    return this.prisma.address.create({
      data: createAddressDto,
    });
  }

  bindAddressToUser(id: number, addressId: number) {
    return this.prisma.user.update({
      where: { id },
      data: { ...{ addressId: addressId } },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const { hash, salt } = encodePassword(updateUserDto.password);
      updateUserDto.password = hash;
      updateUserDto.salt = salt;
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}

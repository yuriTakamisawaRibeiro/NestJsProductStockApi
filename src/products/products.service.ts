import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from '../errors';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prismaService.product.create({
      data: {
        ...createProductDto,
        quantity: 0,
      },
    });
  }

  async findAll() {
    return this.prismaService.product.findMany();
  }

  async findOne(id: number) {
    try {
      const product = await this.prismaService.product.findUniqueOrThrow({
        where: { id },
      });

      return product;
    } catch (error) {
      throw new NotFoundError(`Product with ID ${id} not found`);
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.product.delete({
      where: { id },
    });
  }
}

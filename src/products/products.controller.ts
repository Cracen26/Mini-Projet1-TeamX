import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('product')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('products')
  findAll() {
    return this.productsService.findAll();
  }

  @Get('product/:id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Patch('product/:id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete('product/:id')
  remove(@Param('id') id: number) {
    return this.productsService.remove(id);
  }
}

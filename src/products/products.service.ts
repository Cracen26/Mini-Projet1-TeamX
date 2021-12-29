import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>){}

  async create(createProductDto: CreateProductDto):Promise<Product> {
    return new this.productModel(createProductDto).save();
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: number) {
    return this.productModel.findOne({id});
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productModel.updateOne({id},{$set:{...updateProductDto}});
  }

  remove(id: number) {
    return this.productModel.deleteOne({id});
  }
}

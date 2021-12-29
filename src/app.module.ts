import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, ProductsModule,MongooseModule.forRoot('mongodb+srv://falilou:yHuBbo3uy35TIf0I@clusterball.lgpkg.mongodb.net/teamx-app?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

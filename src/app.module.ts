/* eslint-disable prettier/prettier */
import { /*MiddlewareConsumer*/ Module, /*NestModule*/ } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
//import { ErrorHandlingMiddleware } from './error-handling/error-handling.middleware';
//import { UserController } from './user/user.controller';

@Module({
  imports: [UserModule, ProductModule, OrderModule, AuthModule,MongooseModule.forRoot('mongodb://localhost:27017/ecommerce-sim')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  /*configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ErrorHandlingMiddleware)
      .forRoutes(UserController);
  }*/
}

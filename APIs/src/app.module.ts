import { MiddlewareConsumer, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthMiddleware } from "./middlewares/auth.middleware";
import { RequestContextModule } from "nestjs-request-context";
import { ContextInterceptor } from "./context/ContextInterceptor";
import { mongoConfig, mongoUri } from "./configs/database";

// modules import injection

const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: ContextInterceptor,
  },
];

@Module({
  imports: [
    RequestContextModule,
    MongooseModule.forRoot(mongoUri, {
      autoIndex: mongoConfig.autoIndex,
    }),

    // modules injection
  ],
  controllers: [],
  providers: [...interceptors],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes("*");
  }
}

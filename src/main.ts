import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const url = 'localhost:5000';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url,
        package: 'user',
        protoPath: join(__dirname, 'proto/user.proto'),
      },
    },
  );
  await app.listen();
  console.log(`User Service has been startted, listening on ${url}`);
}
bootstrap();

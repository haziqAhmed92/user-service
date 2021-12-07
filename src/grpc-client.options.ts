import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'user', // ['user', 'user2']
    protoPath: join(__dirname, './proto/user.proto'), // ['./proto/user.proto', './proto/user2.proto']
  },
};

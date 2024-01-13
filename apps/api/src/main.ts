import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { add } from '@foundation/sample-lib'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  console.log('Using the library function: ', add(4, 7))
  await app.listen(3000)
}
bootstrap()

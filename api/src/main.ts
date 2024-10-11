import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import AppModule from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { bufferLogs: true });
	app.useGlobalPipes(new ValidationPipe());
	//	app.useGlobalInterceptors(new ResponseInterceptor());

	await app.listen(3000);
	console.log(`http://localhost:3000/graphql`);
}
bootstrap();

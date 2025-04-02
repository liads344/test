"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const data_asset_module_1 = require("./data-asset.module");
const test_service_1 = require("./test.service");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(data_asset_module_1.DataAssetsModule);
    const testService = app.get(test_service_1.TestService);
    await testService.createTest();
    await app.close();
}
bootstrap();

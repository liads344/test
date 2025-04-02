"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAssetsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const data_asset_schema_1 = require("./data-asset.schema");
const context_label_schema_1 = require("./context-label.schema");
const test_service_1 = require("./test.service");
let DataAssetsModule = class DataAssetsModule {
};
exports.DataAssetsModule = DataAssetsModule;
exports.DataAssetsModule = DataAssetsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(`mongodb://sentra:sentra@localhost:27017/?directConnection=true&tls=false&authMechanism=DEFAULT`),
            mongoose_1.MongooseModule.forFeature([
                { name: data_asset_schema_1.DataAssetEntity.name, schema: data_asset_schema_1.DataAssetMongoSchema },
                { name: context_label_schema_1.ContextLabel.name, schema: context_label_schema_1.ContextLabelSchema },
            ]),
        ],
        providers: [test_service_1.TestService],
    })
], DataAssetsModule);

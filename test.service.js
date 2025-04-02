"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestService = void 0;
let TestService = class TestService {
    constructor(dataAssetModel) {
        this.dataAssetModel = dataAssetModel;
    }
    async createTest() {
        const doc = await this.dataAssetModel.create({
            canonical_id: 'abc123',
            context_labels: [{ label: 'test label' }],
        });
        console.log(doc.toJSON());
    }
};
exports.TestService = TestService;
exports.TestService = TestService = __decorate([
    Injectable(),
    __param(0, InjectModel(DataAssetEntity.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof Model !== "undefined" && Model) === "function" ? _a : Object])
], TestService);

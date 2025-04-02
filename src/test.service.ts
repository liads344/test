import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DataAssetDocument, DataAssetEntity } from "./data-asset.schema";
import { Model } from 'mongoose'; 

@Injectable()
export class TestService {
  constructor(
    @InjectModel(DataAssetEntity.name)
    private dataAssetModel: Model<DataAssetDocument>
  ) {}


  async createTest1() {
    const doc = await this.dataAssetModel.create({
      canonical_id: 'abc123',
      context_labels: [{ }],
    });

    console.log(doc.toJSON());
  }
  async createTest2() {
    const doc = await this.dataAssetModel.create({
      canonical_id: 'abc123',
      context_labels: [{ label: 'test label' }],
    });

    console.log(doc.toJSON());
  }
}

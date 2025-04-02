import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataAssetEntity, DataAssetMongoSchema } from './data-asset.schema';
import { ContextLabel, ContextLabelSchema } from './context-label.schema';
import { TestService } from './test.service';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://sentra:sentra@localhost:27017/?directConnection=true&tls=false&authMechanism=DEFAULT`),
    MongooseModule.forFeature([
      { name: DataAssetEntity.name, schema: DataAssetMongoSchema },
      { name: ContextLabel.name, schema: ContextLabelSchema },
    ]),
  ],
  providers: [TestService],
})
export class DataAssetsModule {}

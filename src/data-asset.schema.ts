import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ContextLabel, ContextLabelSchema } from './context-label.schema';

@Schema()
export class DataAssetEntity {
  @Prop({ type: [ContextLabelSchema] })
  context_labels: ContextLabel[];
}

export const DataAssetMongoSchema = SchemaFactory.createForClass(DataAssetEntity);
export type DataAssetDocument = DataAssetEntity & Document;
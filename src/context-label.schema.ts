import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ContextLabel {
  @Prop({type: String, required: true})
  label: string;
}

export const ContextLabelSchema = SchemaFactory.createForClass(ContextLabel);

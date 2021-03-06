import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true
    },
    status: {
      default: 'active',
      enum: ['active', 'complete', 'pastdue'],
      required: true,
      type: String
    },
    notes: String,
    due: Date,
    createdBy: {
      ref: 'user',
      required: true,
      type: mongoose.SchemaTypes.ObjectId
    },
    list: {
      ref: 'list',
      required: true,
      type: mongoose.SchemaTypes.ObjectId
    }
  },
  { timestamps: true }
)
itemSchema.index({ list: 1, name: 1 }, { unique: true })
export const Item = mongoose.model('item', itemSchema)

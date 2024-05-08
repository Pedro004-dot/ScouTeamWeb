import mongoose from 'mongoose';

export default mongoose.model(
    'Category',
    mongoose.Schema(
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            status: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        {
            collection: 'Category',
            timestamps: true,
            paranoid: true
        }
    )
);
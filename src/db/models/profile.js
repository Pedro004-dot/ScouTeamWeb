import mongoose from 'mongoose';

export default mongoose.model(
    'Profile',
    mongoose.Schema(
        {
            name: {
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
            collection: 'Profile',
            timestamps: true,
            paranoid: true
        }
    )
);
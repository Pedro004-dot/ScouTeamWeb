import mongoose from 'mongoose';

export default mongoose.model(
    'CompetitionType',
    mongoose.Schema(
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        },
        {
            collection: 'CompetitionType',
            timestamps: true,
            paranoid: true
        }
    )
);
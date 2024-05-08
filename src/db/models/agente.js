
import mongoose from 'mongoose';

export default mongoose.model(
    'Agent',
    mongoose.Schema(
        {
            idUser: {
                type: mongoose.SchemaTypes.ObjectId,
                required: true,
                index: true,
                unique: true,
                ref: 'User'
            },

            nationality: {
                type: String,
                required: false
            },            
            
            site: {
                type: String,
                required: false
            },
            
            status: {
                type: Boolean,
                required: false,
                default: true
            },        
            idCategory: {
                type: mongoose.SchemaTypes.ObjectId,
                required: true,
                index: true,
                unique: true,
                ref: 'Category'
            }
        },
        {
            collection: 'Agent',
            timestamps: true,
            paranoid: true
        }
    )
);
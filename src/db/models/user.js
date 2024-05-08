import mongoose from 'mongoose';

const user =  mongoose.model(
    'User',
    mongoose.Schema(
        {
            idUser: {
                type:String,
                index: true,
                //unique: true,
            },
             idProfile: {
                type: String,
                required: true,
            }, 
            email: {
                type: String,
                required: true,
                index: true,
                unique: true
            },
            password: {
                type: String,
                required: true,
            },        
            username: { 
                type: String,
                required: true,
            },
            dateBirthOrFundation: {
                type: Date,
                required: false                
            }, 
            address: {
                city: { 
                    type: String 
                },
               state:{
                     type:String
               }
            }, 
             
            // genre: {
            //     type: mongoose.SchemaTypes.ObjectId,
            //     required: true,
            //     index: true,
            //     ref: 'Genre._id'
            // },        
              
            // contacts: [
            //     {
            //       phone: { 
            //            type: String 
            //         },
            //     }
            // ],
            
                      
            // photo: {
            //     type: String
            // },
            // status: {
            //     type: Boolean,
            //     default: true
            // },
            // validity: {
            //     type: Boolean,
            //     default: false
            // },
                  
        },
        {
            collection: 'User',
            timestamps: true,
            paranoid: true
        }
    )
);

export default user
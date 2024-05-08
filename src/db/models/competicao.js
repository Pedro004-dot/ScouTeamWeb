import mongoose from 'mongoose';

export default mongoose.model(
    'Competitions',
    mongoose.Schema(
        {
            idCategory: {
                type: mongoose.SchemaTypes.ObjectId,
                required: true,
                index: true,
                ref: 'Category'
            },

            name: {
                type: String,
                required: true
            },

            status: {
                type: Boolean,
                required: false,
                default: true
            },

            idUserResponse: {
                type: mongoose.SchemaTypes.ObjectId,
                required: true,
                index: true,
                ref: 'User'
            },

            startDate: {
                type: Date,
                required: true
            },

            finishDate:{
                type: Date,
                required: true
            },
            
            competitionType:{
                type: mongoose.SchemaTypes.ObjectId,
                required: true,
                index: true,
                ref: 'CompetitionType'
            },

            // editions: [
            //     {
            //         number: {
            //             type: Number,
            //             required: false
            //         },
            //         season: {
            //             type: Date,
            //             required: false
            //         },
            //         //precisa colocar o formato que vai receber?
            //         current: {
            //             type: Boolean,
            //             required: false
            //         },
            //         games: [
            //         {
            //            idGame:{
            //                   type: mongoose.SchemaTypes.ObjectId,
            //                   required: false,
            //                   index: true,
            //                   ref: 'Games._id'
            //                   },
            //             competitionStage:{
            //                 type: mongoose.SchemaTypes.ObjectId,
            //                 required: false,
            //                 index: true,
            //                 ref: 'CompetitionStage._id'
            //                 }
  
            //         }
            //        ]
            //     }
            // ],
              idTeam: {
                type: mongoose.SchemaTypes.ObjectId,
                    required: true,
                    index: true,
                    ref: 'User' 
             },

            goals: {
                type: Number,
                required: false
            },
            amount_yellon: {
                type: Number,
                required: false
            },

            amount_red: {
                type: Number,
                required: false
            },


            //  idClassification: {
            //     type: mongoose.SchemaTypes.ObjectId,
            //     required: true,
            //     index: true,
            //     ref: 'Classification._id'
            // },

           
           
            // sumarryMidia : [
            //     {
            //         name: {
            //             type: String,
            //             required: false
            //         },
            //         url: {
            //             type: String,
            //             required: false
            //         },
            //         description: {
            //             type: String,
            //             required: false
            //         }                   
            //     }
            // ],
        },
        {
            collection: 'Competitions',
            timestamps: true,
            paranoid: true
        }
    )
);
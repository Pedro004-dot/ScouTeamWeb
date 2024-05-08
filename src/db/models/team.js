
import mongoose from 'mongoose';


export default mongoose.model(
    'Team',
    mongoose.Schema(
        {
            category: [
                {
                    idCategory: { 
                        type: mongoose.SchemaTypes.ObjectId,
                        ref: 'Category'
                    },
                }
            ],

            colors: [String],

            status: {
                type: Boolean,
                required: false,
                default: true
            },

            

            directorship: {
                president: {
                    name: {
                        type: String,
                        required: false
                    },
                    contact: {
                        type: String,
                        required: false
                    } 
                },
                vicePresident: {
                    name: {
                        type: String,
                        required: false
                    },
                    contact: {
                        type: String,
                        required: false
                    } 
                },
                others: [
                    {
                        name: {
                            type: String,
                            required: false
                        },
                        contact: {
                            type: String,
                            required: false
                        },
                        occupation: {
                            type: String,
                            required: false
                        }                         
                    }
                ]
            },

            division: {
                type: Number,
                required: false
            },

            idUser: {
                type: mongoose.SchemaTypes.ObjectId,
                required: true,
                index: true,
                unique: true,
                ref: 'User'
            },

            professional: {
                type: Boolean,
                required: false
            },

            stadium: {
                type: String,
                required: false
            },
            
            // statute: [
            //     {
            //         name: {
            //             type: String,
            //             required: false
            //         },
            //         url: {
            //             type: String,
            //             required: false
            //         }                        
            //     }
            // ],

            // flag: {
            //     description: {
            //         type: String,
            //         required: false
            //     },
            //     flags: [
            //         {
            //             name: {
            //                 type: String,
            //                 required: false
            //             },
            //             url: {
            //                 type: String,
            //                 required: false
            //             }                        
            //         }
            //     ],
            // },

            // shield: {
            //     description: {
            //         type: String,
            //         required: false
            //     },
            //     shields: [
            //         {
            //             name: {
            //                 type: String,
            //                 required: false
            //             },
            //             url: {
            //                 type: String,
            //                 required: false
            //             }                        
            //         }
            //     ],
            // },

            // uniform: [
            //     {
            //         name: {
            //             type: String,
            //             required: false
            //         },
            //         url: {
            //             type: String,
            //             required: false
            //         }                        
            //     }
            // ],

            // technicalCommittee: [
            //     {
            //         contact: {
            //             type: String,
            //             required: false
            //         },
            //         name: {
            //             type: String,
            //             required: false
            //         },
            //         occupation: { 
            //             type: mongoose.SchemaTypes.ObjectId,
            //             ref: 'Technical_Committee._id',
            //             required: false
            //         },
            //         idCategory: { 
            //             type: mongoose.SchemaTypes.ObjectId,
            //             ref: 'Category._id',
            //             required: false
            //         }                        
            //     }
            // ]
        },
        {
            collection: 'Team',
            timestamps: true,
            paranoid: true
        }
    )
);
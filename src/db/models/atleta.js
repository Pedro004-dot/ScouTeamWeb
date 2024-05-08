
import mongoose from 'mongoose';

const Athlete = mongoose.model(
    'Athlete',
    mongoose.Schema(
        {
            idUser: {
                type: String,
                index: true,
            }, 
            idProfile: {
                type: String,
                required: true,
            }, 
            position: [{
                type: String,
                required: true
            }],
            caracteristicas: [{
                type: String,
                required: true
            }],                       
            // nationality: {
            //                 type: String,
            //                 required: false
            // },
            // teamHistory: [
            //     {
            //         actualTeam: {
            //             type: Boolean,
            //             required: false
            //         },
            //         nameOfTime: {
            //             type: String,
            //             required: false
            //         },
            //         state: {
            //             type: String,
            //             required: false
            //         },
            //         firstPeriod: {
            //             type: String,
            //             required: false
            //         },
            //         lastPeriod: {
            //             type: String,
            //             required: false
            //         },
            //         technicalTeamHistory: [
            //             {
            //                 nameOfTechnical: {
            //                     type: String,
            //                     required: false
            //                 },
            //                 contactOfTechnical: {
            //                     type: String,
            //                     required: false
            //                 }
            //             }
            //         ]
            //     }
            // ],

            // competitions: [
            //     {
            //         name: {
            //             type: String,
            //             required: false
            //         },
            //         team: {
            //             type: String,
            //             required: false
            //         },
            //         firstPeriod: {
            //             type: String,
            //             required: false
            //         },
            //         lastPeriod: {
            //             type: String,
            //             required: false
            //         },
            //         placing: {
            //             type: Number,
            //             required: false
            //         },
            //         redCard: {
            //             type: Number,
            //             required: false
            //         },
            //         yellowCard: {
            //             type: Number,
            //             required: false
            //         },
            //         concededGoals: {
            //             type: Number,
            //             required: false
            //         },
            //         goalsScored: {
            //             type: Number,
            //             required: false
            //         },
            //         assistance: {
            //             type: Number,
            //             required: false
            //         }
            //     }
            // ],

            // status: {
            //     type: Boolean,
            //     required: false,
            //     default: false
            // },

            // professional: {
            //     type: String,
            //     required: false
            // },
            // bid: {
            //     type: String,
            //     required: false
            // },
            // height: {
            //     type: String,
            //     required: true
            // },
            // weight: {
            //     type: String,
            //     required: true
            // },

            // imc: {
            //     type: String,
            //     required: true
            // },

           
            // passport: {
            //     type: String,
            //     required: false
            // },

            // idEducationLevel: {
            //     type: mongoose.SchemaTypes.ObjectId,
            //     required: true,
            //     index: true,
            //     ref: 'Education_Level._id'
            // },
            // graduationYear: {
            //     type: Number
            // },
            // currentYear: {
            //     type: Number
            // },
            // schoolName: {
            //     type: String
            // },

            // idSport: {
            //     type: mongoose.SchemaTypes.ObjectId,
            //     required: true,
            //     index: true,
            //     ref: 'Sport._id'
            // },

            // idPosition: {
            //     type: mongoose.SchemaTypes.ObjectId,
            //     required: true,
            //     index: true,
            //     ref: 'Position._id'
            // },

            // exams: [
            //     {
            //         name: {
            //             type: String,
            //             required: false
            //         },
            //         url: {
            //             type: String,
            //             required: false
            //         },
            //         idType: {
            //             type: String,
            //             required: false
            //         },
            //         nameType: {
            //             type: String,
            //             required: false
            //         }
            //     }
            // ],

            // tests: [
            //     {
            //         result: {
            //             type: Boolean,
            //             required: false
            //         },
            //         date: {
            //             type: String,
            //             required: false
            //         },
            //         team: {
            //             type: String,
            //             required: false
            //         }
            //     }
            // ],


        },
        {
            collection: 'Athlete',
            timestamps: true,
            paranoid: true
        }
    )
);
export default Athlete
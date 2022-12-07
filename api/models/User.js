const db = require("../util/db");
const {DataTypes} = require("sequelize")
const UserSchema = db.define("User", {
id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey:true,
    autoIncrement:true

    },
username: {
    type: DataTypes.STRING,
    // primaryKey: true,
    // required: true,
    // unique: true,
},
email: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("Please provide the valid email address")
        //     }
        // }
},
password: {
    type: DataTypes.STRING,
        required: true,
        // trim: true,
        // minlength: 8
    
        // unique: true,
}, 
profilePic: {
    type: DataTypes.STRING,
        defaultValue: ""
},
isAdmin : {
    type: DataTypes.BOOLEAN,
        defaultValue: false
},
// role:{
//     type: DataTypes.STRING,
//     enum: ["user","admin"]
// }
},
{
    timestamps: false,
    freezeTableName: true
}
);
module.exports = UserSchema;
const db = require("../util/db");
const { DataTypes} = require("sequelize");

    const MovieSchema = db.define("Movie", {
title: {
    type: DataTypes.STRING,
    required: true,
    unique: true
},
desc: {
    type: DataTypes.STRING,
    required: true,  
},

img: {
    type: DataTypes.STRING,
},
imgTitle: {
    type: DataTypes.STRING,
},
imgSm:{
    type: DataTypes.STRING,
},
trailer:{
    type: DataTypes.STRING,
},
video:{
    type: DataTypes.STRING,
},
year: {
    type: DataTypes.STRING,
},
limit: {
    type: DataTypes.NUMBER,
},
genre:{
    type: DataTypes.STRING,
},
isSeries: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
}
},{
    timestamps: true,
    freezeTableName: true
});
module.exports = MovieSchema;
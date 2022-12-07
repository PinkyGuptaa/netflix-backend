const db = require("../util/db");
const {DataTypes} = require("sequelize")

const ListSchema = db.define("List", {
title: {
    type:DataTypes.STRING, 
    required: true, 
    unique: true },
type:{
    type: DataTypes.STRING},
genre:{
    type:DataTypes.STRING},
content: {
    type: DataTypes.STRING}
    },
    {
        timestamps: true, 
        freezeTableName: true
    });
    module.exports = ListSchema;

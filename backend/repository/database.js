const mongoose = require('mongoose');
const customerModel = require('../model/customer')
const employeeModel = require('../model/employee')
const credModel = require('../model/credential')
class DatabaseMongoose {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect("mongodb://127.0.0.1:27017/Life-Insurance")
            .then(() => {
                console.log()
            })
            .catch(err => {
                console.error(err)
            })
    }
    async insertOneCustomer(user) {
        try {
            let newRecord = await customerModel.create(user)
            return newRecord
        }
        catch (e) {
            console.log(e.message)
        }
    }
    async insertOneCred(cred) {
        try {
            let newRecord = await credModel.create(cred)
            return newRecord
        }
        catch (e) {
            console.log(e.message)
        }
    }
    async insertOneEmployee(employee) {
        try {
            let newRecord = await employeeModel.create(employee)
            return newRecord
        }
        catch (e) {
            console.log(e.message)
        }
    }


    async findOneCustomer(user){
        try {
            let newRecord = await customerModel.findOne(user);
            return newRecord;
        }
        catch (e) {
            console.log(e.message);
        }
    }
    async findOneCred(cred){
        try {
            let newRecord = await credModel.findOne(cred);
            return newRecord;
        }
        catch (e) {
            console.log(e.message);
        }
    }
    async findOneEmployee(employee){
        try {
            let newRecord = await employeeModel.findOne(employee);
            return newRecord;
        }
        catch (e) {
            console.log(e.message);
        }
    }


    async updateOneCustomer(user,update){
        try {
            let newRecord = await customerModel.updateOne(user,update)
            return newRecord
        }
        catch (e) {
            console.log(e.message)
        }
    }
    async updateOneCred(cred,update){
        try {
            let newRecord = await credModel.updateOne(cred,update)
            return newRecord
        }
        catch (e) {
            console.log(e.message)
        }
    }
    async updateOneEmployee(employee,update){
        try {
            let newRecord = await employeeModel.updateOne(employee,update)
            return newRecord
        }
        catch (e) {
            console.log(e.message)
        }
    }


    /**async DeletOneUser(user){
        try {
            let newRecord = await userModel.deleteOne(user)
            return newRecord
        }
        catch (e) {
            console.log(e.message)
        }
    }**/
    async getAllCustomers() {
        try{
            let record = await customerModel.find().populate("credential");
            return record;
        }
        catch (e) {
            console.log(e.message)
        }
        
    }
    async getAllEmployees() {
        try{
            let record = await employeeModel.find().populate("credential");
            return record;
        }
        catch (e) {
            console.log(e.message)
        }
        
    }
}







module.exports = {  DatabaseMongoose }

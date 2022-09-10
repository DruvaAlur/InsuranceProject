const Credentials = require('./credential');
const {DatabaseMongoose} = require('../repository/database')
class Customer
{
    constructor(firstName,lastName,credential,dob,address,email,role,state,city,pincode,nominee,nomineeRelation)
    {
        this.firstName         =    firstName;
        this.lastName          =    lastName;
        this.credential        =    credential;
        this.dob               =    dob;
        this.address           =    address;
        this.email             =    email;
        this.role              =    role;
        this.state             =    state;
        this.city              =    city;
        this.pincode           =    pincode;
        this.nominee           =    nominee;
        this.policies          =    [];
        this.nomineeRelation   =    nomineeRelation; 
        this.isActive          =    true;
    }

    static async createNewCustomer(firstName,lastName,userName,password,dob,address,email,state,city,pincode,nominee,nomineeRelation)
    {

        const [flag,message,newCredential] = await Credentials.createCredential(userName,password);
        if(flag === false)
        {
            return [false,"CustomerName already Exists"]
        }
        const role = "customer";
        const db = new DatabaseMongoose();
        let dCredential = await db.insertOneCred(newCredential);
        await db.insertOneCustomer(new Customer(firstName,lastName,dCredential,dob,address,email,role,state,city,pincode,nominee,nomineeRelation));
        return [true,"New Customer created"];
    }

    static async findCustomer(userName)
    {
        const db = new DatabaseMongoose();
        const findCred = db.findOneCred({"userName":userName});
        if(!findCred)
        {
            return [null,false];
        }
        const findCustomer = db.findOneCustomer({"credential":findCred._id});
        if(findCustomer && findCustomer.isActive)
        {
            return [findCustomer,true];
        }
        return [null, false];
    }

    static async findCustomerId(CustomerId)
    {
        const db = new DatabaseMongoose();
        const findCustomer = await db.findOneCustomer({"_id":CustomerId})
        if(findCustomer && findCustomer.isActive == true)
        {
            return [findCustomer,true];
        }
        return [null,false];
    }

    static async getAllCustomers()
    {
        const db = new DatabaseMongoose();
        const allCustomers = await db.getAllCustomers();
        return allCustomers;
    }

    static async updateCustomerActive(isactive,customerId)
    {
        const db = new DatabaseMongoose();
        await db.updateOneCustomer({_id:customerId},{$set:{isActive:isactive}})
        return ;
    }

    static async updateCustomer(userName, propertyToUpdate, value)
    {
        let [dUser,isUserExist] = await Customer.findCustomer(userName);
        if(!isUserExist)
        {
            return [false,"User Not Exist"];
        }
        const db = new DatabaseMongoose();
        switch (propertyToUpdate) 
        {
            case "FirstName": 
                await db.updateOneCustomer({_id:dUser._id},{$set:{firstName:value}})
                return [true,"Updated"];

            case "LastName": 
                await db.updateOneCustomer({_id:dUser._id},{$set:{lastName:value}}) 
                return [true,"Updated"];
            
            case "UserName":
                await db.updateOneCred({_id:dUser.credential},{$set:{userName:value}}) 
                return [true,"Updated"];
            
            case "dob":
                await db.updateOneCustomer({_id:dUser._id},{$set:{dob:value}})
                return [true,"Updated"];

            case "address":
                await db.updateOneCUstomer({_id:dUser._id},{$set:{address:value}})
                return [true,"Updated"];
                
            case "email":
                await db.updateOneCUstomer({_id:dUser._id},{$set:{email:value}})
                return [true,"Updated"];

            case "state":
                await db.updateOneCUstomer({_id:dUser._id},{$set:{state:value}})
                return [true,"Updated"];

            case "city":
                await db.updateOneCUstomer({_id:dUser._id},{$set:{city:value}})
                return [true,"Updated"];

            case "pincode":
                await db.updateOneCUstomer({_id:dUser._id},{$set:{pincode:value}})
                return [true,"Updated"];

            default: return [false,"Not Updated"];
        }
    }
}

module.exports = Customer;

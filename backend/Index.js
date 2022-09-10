const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const cookieParser = require('cookie-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())


const {login} = require('./Controllers/Login/controller');
const logout = require('./Controllers/Logout/controller.js');
const {createCustomer,getAllCustomer,noOfCustomer,updateCustomer,deleteCustomer} = require('./Controllers/Customer/controller.js');
const {createEmployee,getAllEmployee,noOfEmployee,updateEmployee,deleteEmployee} = require('./Controllers/Employee/controller.js');


app.post ("/api/v1/login", async (req,resp)=> login(req,resp));

//Employee
app.post ("/api/v1/createEmployee",          async(req,resp)  =>  createEmployee  (req,resp));
app.post ("/api/v1/getAllEmployee",          async(req,resp)  =>  getAllEmployee  (req,resp));
app.get  ("/api/v1/numberOfEmployee",        async(req,resp)  =>  noOfEmployee    (req,resp));
app.put  ("/api/v1/updateEmployee",          async(req,resp)  =>  updateEmployee  (req,resp));
app.put  ("/api/v1/deleteeEmployee",         async(req,resp)  =>  deleteEmployee  (req,resp));
 
//Customer
app.post ("/api/v1/createCustomer",          async(req,resp)  =>  createCustomer  (req,resp));
app.post ("/api/v1/getAllCustomer",          async(req,resp)  =>  getAllCustomer  (req,resp));
app.get  ("/api/v1/numberOfCustomer",        async(req,resp)  =>  noOfCustomer    (req,resp));
app.put  ("/api/v1/updateCustomer",          async(req,resp)  =>  updateCustomer  (req,resp));
app.put  ("/api/v1/deleteeCustomer",         async(req,resp)  =>  deleteCustomer  (req,resp));


app.post("/api/v1/logout",(req,resp)=>logout(req,resp));

app.listen(8082,async ()=>{
    await createAdmin();
    console.log("app is started at port 8082");
})
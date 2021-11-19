const express = require('express')
const faker = require('faker')


const app = express()
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

class User {
    constructor() {
        this._id = new Date().getTime();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = new Date().getTime();
        this.name = faker.company.companyName();
        // this.street = faker.address.streetAddress();
        // this.city = faker.address.city();
        // this.state = faker.address.state();
        // this.zipCode = faker.address.zipCode();
        // this.country = faker.address.country();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}

// index get Route to Show a new User
app.get('/api/user/new',(req,res)=>{
    res.json(new User())
})
// index for company
app.get('/api/companies/new',(req,res)=>{
    res.json(new Company())
})

app.get('/api/user/company',(req,res)=>{
    res.json({company : new Company(), user : new User()})
})

app.listen(port)
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
expect = chai.expect;




chai.should();


chai.use(chaiHttp);
let authToken;


describe('Tasks API', () => {
    // Post APIs    
    describe("Signin API: ",() => {
        it("IT SHOULD RETURN THE JOB", (done) =>{
            chai.request('http://localhost:8000')
                .post('/api/v1/users/create-session')
                .send({
                    email: 'shyamalgandhi47.sg@gmail.com',
                    password: '123'
                })
                .end((err,response) =>{
                    response.body.should.be.a('object');

                    expect(response).to.have.status(200);
                    authToken = response.body.data.token;

                done();
                })
        })
    });


    describe("Inventory items creation API:" , () => {

        // before((done) => {
        //     chai.request('http://localhost:8000')
        //         .post("/api/v1/users/create-session")
        //         .send({
        //             email:'shyamalgandhi47.sg@gmail.com',
        //             password:'123'
        //         })
        //         .end((err,response) =>{
        //             console.log('-------',response.body.success);
        //             authToken = response.body.data.token;
        //             console.log(authToken);

        //         done();
        //         });
        // });
    
        it("IT SHOULD RETURN THE JOB", (done) => {
    
            chai.request('http://localhost:8000')
                .post("/api/v1/users/createjob")
                .set('Authorization',`Bearer ${authToken}`)
                .send({itemname: "Lettuce",
                quantity:8,
                costperitem:18,
                datebought: "2023-10-07",
                dateexpired:"2023-10-12"})
                .end((err,response) => {
                    response.body.should.be.a('object');

                    if(response.body.success == false){
                        expect(response).to.have.status(401);
                    }
                    else{
                        expect(response).to.have.status(200);
                    }
                    
    
                done();
                });
    
        })
    
    })

    describe("Menu items creation API:" , () => {
    
        it("IT SHOULD RETURN THE JOB" , (done) => {

            body = {
                menuname: "Soup",
                costmenu: 10,
                ingredients: [
                    {
                        inventory_id: "652568b61e4e683b861116b6",
                        quantity: 2
                    },
                    {
                        inventory_id: "652566981e4e683b861116b3",
                        quantity: 1
                    }
                ]
            };
    
            chai.request('http://localhost:8000')
                .post("/api/v1/users/createmenu")
                .set('Authorization',`Bearer ${authToken}`)
                .send(body)
                .end((err,response) => {
                    response.body.should.be.a('object');
                    if(response.body.success == true){
                        expect(response).to.have.status(200);
                    }else{
                        expect(response).to.have.status(401);
                    }
                    
    
                done();
                });
    
        })
    
    });

    describe("Place Order API:" , () => {
    
        it("IT SHOULD RETURN THE JOB" , (done) => {

            body = {

                    items: [
                        {
                            id: "65256b464f8ecfb4d030f686",
                            quantity: 1
                        }
                    ]
            
            };
    
            chai.request('http://localhost:8000')
                .post("/api/v1/users/order")
                .set('Authorization',`Bearer ${authToken}`)
                .send(body)
                .end((err,response) => {
                    response.body.should.be.a('object');
                    console.log('------',response.body)
                    
                    expect(response).to.not.have.status(500);
                    // if(response.body.success == true){
                    //     expect(response).to.have.status(200);
                    // }else{
                    //     expect(response).to.have.status(401);
                    // }
                    
    
                done();
                });
    
        })
    
    });

    // Get APIs
    describe("Get Inventory items:" , () => {
    
        it("IT SHOULD RETURN THE JOB" , (done) => {
    
            chai.request('http://localhost:8000')
                .get("/api/v1/users/")
                .set('Authorization',`Bearer ${authToken}`)
                .end((err,response) => {
                    response.body.should.be.a('object');
                    expect(response).to.have.status(200);
                    
    
                done();
                });
    
        })
    
    });

    describe("Get Menu items:" , () => {
    
        it("IT SHOULD RETURN THE JOB" , (done) => {
    
            chai.request('http://localhost:8000')
                .get("/api/v1/users/fetchmenus")
                .set('Authorization',`Bearer ${authToken}`)
                .end((err,response) => {
                    response.body.should.be.a('object');
                    expect(response).to.have.status(200);
                    
    
                done();
                });
    
        })
    
    });

    describe("Get Orders:" , () => {
    
        it("IT SHOULD RETURN THE JOB" , (done) => {
    
            chai.request('http://localhost:8000')
                .get("/api/v1/users/orders")
                .set('Authorization',`Bearer ${authToken}`)
                .end((err,response) => {
                    response.body.should.be.a('object');
                    expect(response).to.have.status(200);
                    
    
                done();
                });
    
        })
    
    });

    describe("Get Analytics:" , () => {
    
        it("IT SHOULD RETURN THE JOB" , (done) => {
    
            chai.request('http://localhost:8000')
                .get("/api/v1/users/analytics")
                .set('Authorization',`Bearer ${authToken}`)
                .end((err,response) => {
                    response.body.should.be.a('object');
                    expect(response).to.have.status(200);
                    
    
                done();
                });
    
        })
    
    });



})
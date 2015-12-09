var chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../server.js'),
    expect = chai.expect;
    should = chai.should();

chai.use(chaiHttp);

describe('Cinemas', function() {
    it('should list ALL Uganda\'s cinemas on /cinemas GET',function(done){
        chai.request(server)
            .get("/cinemas")
            .end(function(err,res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('array');
                res.body[0].should.have.property("id");
                res.body[0].should.have.property("name");
                done();
            })
    });
});
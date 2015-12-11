var chai = require('chai'),
    chaiHttp = require('chai-http'),
    crawler = require('../core/crawler.js'),
    should = chai.should();


describe('Crawler', function() {
    describe('Cinemas',function(){
        it("Should return an empty list when given a non-existing cinema");
        it("Should list movies now showing and coming soon to a cinema with their showtimes",function(done){
           crawler.getMovies({"cinema":"cinemax"}).then(function(movies){
               movies.should.be.an('array');
               movies[0].should.have.property("title");
               movies[0].should.have.property("showtimes");
               movies[0].should.have.property("status");
               done();
           })
        })
    })
});
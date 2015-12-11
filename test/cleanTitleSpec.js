/**
 * Created by Bishaka on 11/12/2015.
 */
var
    chai = require('chai'),
    ct = require('../core/crawler/cleanTitle'),
    should = chai.should()
;


describe('CleanTitle', function() {
    this.timeout(0);
    describe('CleanTitle',function(){
         var tests = [
             {input:"",expected:""},
             {input:"THE HUNGER GAMES MOCKING JAY 2 - IN",expected:"The Hunger Games: Mockingjay - Part 2"},
             {input:"HOTEL TRANSYLVANIA 2 IN",expected:"Hotel Transylvania 2"}
         ];

        tests.forEach(function(test){
            it("<"+test.input+"> should return <"+test.expected+">",function(done){
                ct.cleanTitle({title:test.input}).then(function(res){
                    res["title"].should.equal(test.expected);
                    done();
                })
            });
        })
    })
});
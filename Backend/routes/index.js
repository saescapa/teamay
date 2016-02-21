
/*
 * GET home page.
*/
var https=require('https');
var request = require('request');
var xml2js = require('xml2js');
var parseString = xml2js.parseString;	

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.readxml = function(req, res){
	var xml = '<entry_list version="1.0">	<entry id="hello">	<term>	<hw>hello</hw>	</term>	<fl>noun</fl>	<sens>	<mc>an expression of goodwill upon meeting</mc><vi>	we said our	<it>hellos</it>	and got right down to business	</vi>	<syn>greeting, salutation, salute, welcome</syn>	<rel>	ave, hail; amenities, civilities, pleasantries; regards, respects, wishes	</rel>	<ant>...</ant>	</sens>	</entry>	</entry_list>';
		var parseString = require('xml2js').parseString;	
		parseString(xml, function (err, result) {
	    console.dir(result.entry_list.entry[0].sens[0].syn);
	});
};

exports.gsearch = function(req,res){
	var searchQuery = req.query.searchQuery;
	var APIUrl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyD_8nfyh_FqLTFnAYZZL5AILxK3VsZLAoE&cx=017576662512468239146:omuauf_lfve&q="+searchQuery+"";
	
	request(APIUrl, function (error, response, body) {
		console.log(response.statusCode);
		  if (!error && response.statusCode == 200) {
			    res.send(body);
		  }
	});
};

exports.synonyms = function(req, res){
	var searchKeyword = req.query.searchKeyword;
	var APIUrl = "http://www.dictionaryapi.com/api/v1/references/thesaurus/xml/"+searchKeyword+"?key=752471d4-26f9-48e0-8bbd-2a684acd9cb8";
	request(APIUrl, function (error, response, body) {
		console.log(response.statusCode);
		  if (!error && response.statusCode == 200) {			  
			  parseString(body, function (err, result) {
			    res.send(result.entry_list.entry[0].sens[0].syn[0]);
			  });		  
		  }
	});
};

exports.antonyms = function(req, res){
	var searchKeyword = req.query.searchKeyword;
	var APIUrl = "http://www.dictionaryapi.com/api/v1/references/thesaurus/xml/"+searchKeyword+"?key=752471d4-26f9-48e0-8bbd-2a684acd9cb8";
	request(APIUrl, function (error, response, body) {
		console.log(response.statusCode);
		  if (!error && response.statusCode == 200) {			  
			  parseString(body, function (err, result) {
			    res.send(result.entry_list.entry[0].sens[0].ant[0]._);
			  });		  
		  }
	});
};
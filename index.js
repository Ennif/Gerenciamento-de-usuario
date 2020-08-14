var nome = document.querySelector("#exampleInputName");

var gender = document.querySelectorAll("form-user-create [name=gender]:checked")

var birth = document.querySelector("#exampleInputBirth")
var country = document.querySelector("#exampleInputCountry")
var email = document.querySelector("#exampleInputEmail")
var pass = document.querySelector("#exampleInputPassword")
var photo = document.querySelector("#exampleInputFile")
var adm = document.querySelector("#exampleInputAdmin")


var fields = document.querySelectorAll("#form-user-create [name]")

fields.forEach(function(field,index){

    if(field.name == "gender") {

    }

    console.log(field.checked)



});
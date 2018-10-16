function showName(firstName, lastName){
    var nameIntro = "Your name is ";
    
    function makeFullName(){ //This is an enclosure
        return nameIntro + firstName + " " + lastName;
    }

    return makeFullName();
}

console.log(showName("King", "Adrian"));


function celebrityName(firstName){
    var nameIntro  = "This celebrity is ";

    function lastName(theLastName){
        console.log(nameIntro + firstName + " " + theLastName);
    }
    return lastName;
}

var myName = celebrityName("Adrian");
myName("werimo");

function theLocation(){
    var city = "Nairobi";

    return{
        get: function() {console.log(city);},
        set: function(newCity) {city = newCity; }
    }
}

var myPlace = theLocation();
myPlace.get();
myPlace.set("Mombasa");
myPlace.get();
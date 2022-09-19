module.exports = function Greetings(list) {

    var localStorageNames = {}
    let nameWithoutChar = /^[A-z]+$/.test();
    

    function greet(personName, language) {

       // localStorageNames.push(personName);

        if (language === "eng") {
            return "Hello, " + personName
        } else if (language === "ger") {
            return "Guten Tag, " + personName
        } else if (language === "esp") {
            return "Hola, " + personName
        }
    }

    // function errorMessage(name) {
    //     if (localStorageNames.includes(name)) {
    //         return true
    //     }
    //     return false

        
    // }
        


    function storingNames(name){
        if (localStorageNames[name] == undefined){
            localStorageNames[name] = 1
        }
        else {
            localStorageNames[name]++
        }
    }
    

    // function setNames(personName) {
    //     if (errorMessage(personName) === false) {
    //         localStorageNames.push(personName)
    //         return true
    //     }
    //     else {
    //         return false;
    //     }

    // }


    function error(name, language){
        let errorMsg = ''

        if (name == '' && language == null) {
            errorMsg = "Enter name and select a language"
        
          } else if (name == '') {
            errorMsg = "Enter you name"
        
          } else if (language == null) {
            errorMsg = "Select a Language";
          }
          return errorMsg
    }

    function personsCount(name){
        
    return localStorageNames[name]       
    }



    function getNames() {
        return localStorageNames
    }

    function nameCount() {
       let nameProperty = Object.keys(localStorageNames)
        return nameProperty.length
    }

    function reset(){
    
        
    }

    return {
        greet,
       // setNames,
        getNames,
        nameCount,
       // errorMessage,
        nameWithoutChar,
        storingNames,
        error,
        personsCount,
        reset
    }
}
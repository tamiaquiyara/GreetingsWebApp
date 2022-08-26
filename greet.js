function Greetings(list) {

    var localStorageNames = list || []
    let nameWithoutChar = /^[A-z]+$/.test();
    

    function greet(personName, language) {

        if (language === "eng") {
            return "Hello, " + personName
        } else if (language === "ger") {
            return "Guten Tag, " + personName
        } else if (language === "esp") {
            return "Hola, " + personName
        }
    }

    function errorMessage(name) {
        if (localStorageNames.includes(name)) {
            return true
        }
        return false

        
    }
        

    

    function setNames(personName) {
        if (errorMessage(personName) === false) {
            localStorageNames.push(personName)
            return true
        }
        else {
            return false;
        }

    }

    function getNames() {
        return localStorageNames
    }

    function nameCount() {
        return localStorageNames.length
    }

    return {
        greet,
        setNames,
        getNames,
        nameCount,
        errorMessage,
        nameWithoutChar
    }
}
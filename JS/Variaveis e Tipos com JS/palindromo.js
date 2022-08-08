function verificaPalindromo(string) {
    
    //Verifica se existe a variavel
    if(!string) return "String inexistente";
    
    return  string === string.split("").reverse().join("");


}

function verificaPalindromo1(string) {
    
    //Verifica se existe a variavel
    if(!string) return "String inexistente";

    for(let i=0; i<string.length/2;i++){
        
        if(string[i] !==string[string.length -1 -i]){
            return false;
        }
    }
    return true;

}


console.log(verificaPalindromo1("ada"));
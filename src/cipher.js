window.cipher = ({
    
    encode: (string,offset) => {
       
        abc = "abcdefghijklmnopqrstuvwxyz";
        ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        r1 = "";
        r2 = "";
        for (i = 0; i < string.length; i++) {
            letra = string.charAt(i);
            posicion = ABC.indexOf(letra); 
            if (posicion >= 0) {
                r1 += ABC.charAt((posicion + parseInt(offset)) % 26);
            } else {
                r1 += letra;
            };
        };


        for (i = 0; i < r1.length; i++) {
            letra = r1.charAt(i);
            posicion = abc.indexOf(letra);
            if (posicion >= 0) {
                r2 += abc.charAt((posicion + parseInt(offset)) % 26);
            } else {
                r2 += letra;
               
            }
        };
         return r2;
    },

    decode: (string,offset) => {
        return cipher.encode(string,(26-(offset%26)));
    }
});

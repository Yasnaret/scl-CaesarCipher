document.getElementById("buttonEncode").addEventListener("click",()=> {
     const string = document.getElementById("encriptar").value;
     const offset=document.querySelector('#key').value;
    document.getElementById("cajaTxt").innerHTML=cipher.encode(string,offset);
});

document.getElementById("buttonDecode").addEventListener("click",()=> {
    const string = document.getElementById("desencriptar").value;
    const offset=document.querySelector('#key').value;
    document.getElementById("cajaTxt").value=cipher.decode(string,offset);
});
 
document.getElementById("buttonClear").addEventListener("click",()=> {
    document.getElementById("cajaTxt").value = "";
    document.getElementById("encriptar").value = "";
    document.getElementById("desencriptar").value = "";
});
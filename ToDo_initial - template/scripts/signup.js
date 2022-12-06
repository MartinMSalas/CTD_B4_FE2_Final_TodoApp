import {validarTexto,validarEmail,validarPassword,compararPassword} from './utils.js'
window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  const form = document.forms[0];
  const nombre = document.querySelector("#inputNombre");
  const apellido = document.querySelector("#inputApellido");
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");
  const passwordRepetida = document.querySelector("#inputPasswordRepetida");
  
  const url = "http://todo-api.ctd.academy:3000/v1";
  // Cargar el objeto errores y recorrerlos para crear los div q los contengan estos estaran ocultos
  /*function cargarMensajesErrorOcultos() {

    let errores = {
      inputNombre : "Por favor chequear el nombre",
      inputApellido : "Por favor chequear el apellido",
      inputEmail : "Por favor chequear mail ingresad",
      inputPassword : "Por favor chequear los pass ingresados",
      inputPasswordRepetida : "Las pass son diferentes",
    }
    Object.keys(errores).forEach(key =>{
      console.log("CARgando mensaje error")  
        let element = document.querySelector(`#${key}`);
        let padre = document.querySelector("form");
        const newNode = document.createElement("div");
        newNode.innerHTML = `<p id="error${key}" style="color: red; display : none">${errores[key]}</p> `;
        padre.insertBefore(newNode,element);
    })
  }*/
  //cargarMensajesErrorOcultos();
  /* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  
  
  
  form.addEventListener("submit", function (event) {
    // prevenimos el envio por defecto del formulario
    event.preventDefault();

    // creamos el cuerpo de la request
    
    const payload = {
      "firstName": nombre.value,
      "lastName": apellido.value,
      "email": email.value,
      "password": password.value
    };
    

    
    // Validacion formulario
    

    //aca lo valido!!
    /*
    
    inputNombre : "Por favor chequear el nombre",
      inputApellido : "Por favor chequear el apellido",
      inputEmail : "Por favor chequear mail ingresad",
      inputPassword : "Por favor chequear los pass ingresados",
      inputPasswordRepetida : "Las pass son diferentes",
    error${key}
    */
    function validacion(){
      let resultado = false;
      if (!validarTexto(nombre.value)){
        resultado=false;
        document.querySelector("#errorInputNombre").style.display ="flex";
      }else{
        document.querySelector("#errorInputNombre").style.display ="none";
      }
      if (!validarTexto(apellido.value)){
        resultado=false;
        document.querySelector("#errorInputApellido").style.display ="flex";
        document.querySelector("#inputApellidoCheck").classList.remove("checkVisible", "fa-beat");
        document.querySelector("#inputApellidoCheck").classList.add("checkInvisible", "fa-fade");
      }else{
        document.querySelector("#errorInputApellido").style.display ="none";
        document.querySelector("#inputApellidoCheck").classList.remove("checkInvisible" ,"fa-fade");
        document.querySelector("#inputApellidoCheck").classList.add("checkVisible" ,"fa-beat");
        
        
      }
      if(!validarEmail(email.value)){
        resultado=false;
        document.querySelector("#errorInputEmail").style.display ="flex";
      }else{
        document.querySelector("#errorInputEmail").style.display ="none";
      }
      if(!validarPassword(password.value)){
        resultado=false;
        document.querySelector("#errorInputPassword").style.display ="flex";
      }else{
        document.querySelector("#errorInputPassword").style.display ="none";
      }
      if(!compararPassword(password.value,passwordRepetida.value)){
        resultado=false;
        document.querySelector("#errorInputPasswordRepetida").style.display ="flex";
      }else{
        document.querySelector("#errorInputPasswordRepetida").style.display ="none";
      }
      return resultado;
    }
    
    
    // con el formulario validado
  

    // creamos las configuraciones de la request para el fetch
    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // lanzamos la request a la API
    if(validacion()){
      console.log("la validacion fue verdadera");
      console.log(password.value);
      console.log(passwordRepetida.value);
      realizarRegister(settings);
    }
    
    
  });
  
  
  
  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarRegister(settings) {
    

    console.log("Lanzamos la registracion a la API...");
    // hacemos el fetch, le pasamos los dos parametros que necesita
    
    /* de aca hacia modificar */
    
    fetch(`${url}/users/login`, settings)
      .then((response) => {
        // captamos la respuesta "cruda" de la API (promesa)
        console.log(response);
        // chequeamos si salio todo mal
        if (response.ok != true) {
          alert("Algo malió sal.");
        }
        return response.json(); // transformamos de JSON a objeto JS
      })

      /*
      data = {
        jwt : "ajsadjadsjdasjksd"
      }
      */
      .then((data) => {
        // obtenemos el resultado del .then anterior, la rta "procesada", podemos manipular los datos
        console.log("Promesa cumplida");
        console.log(data);
        if (data.jwt) {
          // guardamos el token en el local storage
          localStorage.setItem("jwt", JSON.stringify(data.jwt));
          location.replace("./mis-tareas.html");
        }
      });
  }
});

window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  const form = document.forms[0];
  const nombre = document.querySelector("#inputNombre");
  const apellido = document.querySelector("#inputApellido");
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");
  const passwordRepetida = document.querySelector("#inputPasswordRepetida");

  const url = "http://todo-api.ctd.academy:3000/v1";
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
    
    
   
    function validarNombre(){
      
      let nameCheck = /^[a-z]{3,20}\D*$/i;
      //||^[a-z][a-z]\D*$/i; // Change this line
      return nameCheck.test(nombre.value);

      
      
    }
    function validarApellido(){
      let nameCheck = /^[a-z]{3,20}\D*$/i;
      //||^[a-z][a-z]\D*$/i; // Change this line
      return nameCheck.test(apellido.value);
 
    }
    function validarEmail() {
      let resultado = false;
    
      // // EJEMPLO VALIDACIÓN A MANO 👇
      // if (email.includes('@') && email.includes('.') && !email.includes(' ') && email.length > 5) {
      //     resultado = true;
      // }
    
      // EJEMPLO CON EXPRESION REGULAR 👇
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    
      if (regex.test(email)) {
        resultado = true;
      }
    
      return resultado;
    }
    
    function validarPassword() {
      let resultado = false;
    
      // si pasa las pruebas lo damos por válido 👇
      if (password.value.length > 5 && !password.value.includes(" ") && password.value === passwordRepetida.value) {
        resultado = true;
      }
      
      return resultado;
    }
    

    //aca lo valido!!
    function validacion(){
      console.log("soy la validacion")
      console.log(validarEmail());
      console.log(validarNombre());
      console.log(validarPassword());
      let errores = ["","","",""]
      if (!validarNombre())
        errores[0] = "Por favor chequear el nombre";      
      if (!validarApellido())
        errores[1] = "Por favor chequear el apellido";      
      if (!validarEmail())
        errores[2] = "Por favor chequear mail ingresado";
      if (!validarPassword())
        errores[3] = "Por favor chequear los pass ingresados";
      console.log(errores);
      errores.map (error => {
        
        if (error.length){

          console.log(error);
        }
      })
      if (validarNombre() && validarEmail() && validarPassword()){
        return true;
      }

      return false
      
    }
     /*
     tengo q crear un objeto tipo key son los id y value los errores y recorrerlo con un for each key value 
     */
    
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

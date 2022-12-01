/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {}

function normalizarTexto(texto) {}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {}

function normalizarEmail(email) {}

/* -------------------------------- password -------------------------------- */
function validarPassword(contrasenia) {}

/* -------------------------------- password -------------------------------- */
function compararPassword(contrasenia_1, contrasenia_2) {}

export {validarTexto, validarEmail,validarPassword, compararPassword}
/*

let resultado = false;
let validacionObjeto = {
  inputNombre : ()=>{
    return (/^[a-z]{3,20}\D*$/i.test(nombre.value.trim()));
  },
  inputApellido :  ()=>{
    return /^[a-z]{3,20}\D*$/i.test(apellido.value.trim());
  },
  inputEmail : ()=>{
    return  /^[a-z0-9]+@[a-z]+.[a-z]{2,3}/.test(email.value.trim());
  },
  inputPassword : ()=>{
    return password.value.trim().length >= 6 && !password.value.trim().includes(" ");
  },
  inputPasswordRepetida : ()=>{
    return password.value.trim() === passwordRepetida.value.trim();
  },
};

*/
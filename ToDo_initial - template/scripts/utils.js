/* ---------------------------------- texto --------------------------------- */
export function validarTexto(texto) {
  return (/^[a-z]{3,20}\D*$/i.test(texto.trim()));
}

function normalizarTexto(texto) {}

/* ---------------------------------- email --------------------------------- */
export function validarEmail(email) {
  return /^[a-z0-9]+@[a-z]+.[a-z]{2,3}/.test(email.trim());
}

function normalizarEmail(email) {}

/* -------------------------------- password -------------------------------- */
export function validarPassword(password){
  return password.trim().length >= 6 && !password.trim().includes(" ");

}

/* -------------------------------- password -------------------------------- */
export function compararPassword(password, password2) {
  return password.trim() === password2.trim();
}


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
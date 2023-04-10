const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });



function loguear() {
  let usuario = document.getElementById("usuario").value;
  let contrasena = document.getElementById("contrasena").value;

  if (onlyLettersAndSpaces(usuario) && onlyLettersAndSpaces(contrasena)) {
    if (usuario == "" || contrasena == "") {
          $('#msg_err').html("Llene todos los campos");
    }
    else {
      if (login(usuario,contrasena)) {
          console.log("Redireccionando");
      }
      else {
          $('#msg_err').html("Usuario o cotraseña incorrectos");
      }
    }
  }
  else{
    $('#msg_err').html("Ingreso caracteres invalidos");
  }
  
}

function registrarse() {
	let nombre = document.getElementById("signNombre").value;
	let apellido = document.getElementById("signApellido").value;
	let username = document.getElementById("signUsername").value;
	let passw = document.getElementById("signPassw").value;
	let passw2 = document.getElementById("signPassw2").value;

  if (onlyLettersAndSpaces(nombre) && onlyLettersAndSpaces(apellido) && onlyLettersAndSpaces(username) && onlyLettersAndSpaces(passw) && onlyLettersAndSpaces(passw2)) {
    if(passw2 == passw) {
      if(registro(nombre,apellido,username,passw,passw2)) {
      console.log("Exitoso");
      }
      else {
        console.log("MAL");
      }
    }
    else {
      console.log("las contrasenas no coinciden");
    }
    console.log(nombre + " " + apellido + " " + username + " " + passw + " " + passw2);
  }
  else {
    alert("Ingreso caracteres invalidos");
  }
  	
}


function irInicio() {
	window.location.href = "index.html";
}

function onlyLettersAndSpaces(str) {
  return /^[A-Za-z0-9\s]+$/g.test(str);
}

//Recargar
function recargar() {
  window.location.reload();
}

function test() {
  var algos = prompt("Escribe algo: ");
  localStorage.setItem("nombre_variable", algos);
  window.location.href = "testeo.php";
}

console.log("Carga el controlador del login");


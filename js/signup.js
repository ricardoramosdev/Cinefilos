const userRegisterForm = document.getElementById("userRegisterForm")
let users = JSON.parse(localStorage.getItem("users")) || [];

function register(evt) {
    evt.preventDefault();
    console.log(evt)
    console.log(users)
    let userRegister = {
        name: userRegisterForm.elements["name"].value,
        email: userRegisterForm.elements["email"].value,
        password: userRegisterForm.elements["password"].value,
        isAdmin: userRegisterForm.elements["isAdmin"].checked,
    }
    let usuarioExistente = users.find(us => {
        if (us.email == userRegisterForm.elements["email"].value) {
            document.getElementById("errorMessage").innerHTML = "Email en uso";
            console.log("email en uso")
            return true
        } else {
            console.log("email disponible")
            return false}

            
            // users.find(us => {
            //     if (us.email == userRegisterForm.elements["email"].value) {
            //         document.getElementById("errorMessage").innerHTML = "Email en uso";
            //         return;
            //     }
    })
    console.log(usuarioExistente)
    if(!usuarioExistente){

        users.push(userRegister);
                localStorage.setItem("users", JSON.stringify(users))
                console.log("usuario creado")
                userCreated();
    }
}

// login
// tomar los datos del formulario
let userLogin = {
    email: userLoginForm.elements["email"].value,
    password: userLoginForm.elements["password"].value,
}
// recorrer el array de ususarios registrados 
// encontrar un usuario existente 
// ver si el password coincide 
// redirigir dependiendo del output anterior  
function userCreated(){Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Usuario creado correctamente',
    showConfirmButton: false,
    timer: 2000
  })}
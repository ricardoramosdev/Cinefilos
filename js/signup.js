const userRegisterForm = document.getElementById("userRegisterForm")
let users = JSON.parse(localStorage.getItem("users")) || [{name:"cinefilo",
email:"cine@filos.com",
password:"cinefilos",
isAdmin:true}]; //Harcode para test

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
            return false
        }


    })
    console.log(usuarioExistente)
    if (!usuarioExistente) {

        users.push(userRegister);
        localStorage.setItem("users", JSON.stringify(users))
        console.log("usuario creado")
        userCreated();
    }
}

function userCreated() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario creado correctamente',
        showConfirmButton: false,
        timer: 2000
    })
}

// login
// tomar los datos del formulario
function userLogin(evt) {
    evt.preventDefault();
    let userLogin = {
        email: userLoginForm.elements["email"].value,
        password: userLoginForm.elements["password"].value,
    }

    console.log(userLogin);
    // recorrer el array de ususarios registrados 
    users.map(user => {

        // encontrar un usuario existente 
        if (user.email == userLogin.email) {
            console.log("usuario encontrado")
            // ver si el password coincide 
            // redirigir dependiendo del output anterior  
            if (userLogin.password == user.password) {
                let currentUser = user;

                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                window.location.href = "/pages/admin.html";
                console.log("puede ingresar");
            } else {
                document.getElementById("loginError").innerHTML = "Alguno de los datos no es correcto";
            }
        }else {
            document.getElementById("loginError").innerHTML = "Alguno de los datos no es correcto";}
    });


}

function userLogout(){
    localStorage.removeItem("currentUser")
   window.location.href="/index.html"//Ver si este paso no es redundante con login validation
    
}
const userRegisterForm = document.getElementById("userRegisterForm")
let users = JSON.parse(localStorage.getItem("users")) || [{name:"cinefilo",
email:"cine@filos.com",
password:"cinefilos",
isAdmin:true}]; //Harcode para test

class User {
    constructor(name,email,password,isAdmin){
this.name=name;
this.email=email;
this.password=password;
this.isAdmin=isAdmin;

    }
}
function register(evt){
    evt.preventDefault();
    const {name,email,password,isAdmin} = userRegisterForm.elements;
    const user = new User(name.value,email.value,password.value,isAdmin.checked);

    let usuarioExistente = users.find(us => {
        if (us.email == email.value) {
            document.getElementById("errorMessage").innerHTML = "Email en uso";
            return true
        } else {
            return false
        }
    })
    
    if (!usuarioExistente) {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users))
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
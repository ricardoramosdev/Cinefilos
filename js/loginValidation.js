const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(currentUser){
    document.getElementById("logout").classList.toggle( "d-none" );
    document.getElementById("login").classList.toggle( "d-none" );

if(!currentUser.isAdmin){
 window.location.href = "/index.html";

}else{
    document.getElementById("isAdmin").classList.toggle( "d-none" );
}}

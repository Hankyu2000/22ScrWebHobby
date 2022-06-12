window.addEventListener("DOMContentLoaded", function (){
    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (e){
        e.preventDefault();
        var formName = document.getElementById("formName");
        if(formName.value == "AccessVault"){
            location.href = "vault/authentication.html";
        }
    });
});

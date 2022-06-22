var reamingTime = 30;
window.addEventListener("DOMContentLoaded", function (){
    var elimination = setInterval(count,1000)
    var authForm = document.getElementById("authForm");
    document.getElementById("threatID").textContent = Math.floor(Math.random() * 10000000)
    authForm.addEventListener("submit", function (e){
        e.preventDefault();
        var userID = document.getElementById("userID");
        var password = document.getElementById("password");
        if(userID.value == "Entrenched"){
            if(password.value == "theAnotherPassword"){
                document.getElementById("authButton").classList.add("is-loading");
                document.getElementById("decryptButton").style.visibility = "visible";
                document.getElementById("decryptButton").classList.add("Disabled");
                document.getElementById("decryptButton").textContent = "暗号化を解除中…";
                setTimeout(function (){
                    clearInterval(elimination);
                    document.getElementById("warnBox").style.display = "none";
                    document.getElementById("successBox").style.display = "block";
                    document.getElementById("decryptButton").classList.remove("Disabled");
                    document.getElementById("authButton").classList.remove("is-loading");
                    document.getElementById("decryptButton").textContent = "Vaultへアクセス";
                    document.getElementById("authButton").textContent = "認証完了。暗号化は解除済み";
                    document.getElementById("authButton").classList.add("Disabled");
                    var unlockElem = document.getElementsByClassName("navbar-item");
                    var unlockElemArray = Array.from(unlockElem)
                    unlockElemArray.forEach(element => element.classList.remove("Disabled"));
                }, 5000);
            }else{
                location.replace("connectionLost.html")
            }
        }else{
            location.replace("connectionLost.html")
        }
    });
    window.addEventListener("beforeunload", function (){
        location.replace('connectionLost.html')
    });
});

function count(){
    reamingTime--
    document.getElementById("count").textContent = reamingTime;
    if(reamingTime <= 0){
        location.replace("connectionLost.html")
    }
}

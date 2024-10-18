window.onload = function(){
    
    var btn_users = document.querySelector("#btn-users");

    var div_users = document.querySelector("#div-users");
    
    var xhttp = new XMLHttpRequest();
    //console.log(xhttp);

    btn_users.onclick = function(){

        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                
                var users = JSON.parse(this.responseText);
                
                var table = `<table class='table'>`;

                table += `<thead><tr><td>tbody>`;
                table += `<tbody>`;
                table += `<tbody>`;
                table += `<tbody>`;
                table += `<tbody>`;

                
                console.log(users);
            }
        }

        xhttp.open('GET','ajax/user.php',true);
        xhttp.send();
    }

    
}
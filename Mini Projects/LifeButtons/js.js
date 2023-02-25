function chkLove(){
    if(document.getElementById("chkMoney").checked === true){
        document.getElementById("chkFriends").checked = false;
    }
}

function chkFriends(){
    if(document.getElementById("chkLove").checked === true){
        document.getElementById("chkMoney").checked = false;
    }
}

function chkMoney(){
    if(document.getElementById("chkFriends").checked === true){

        document.getElementById("chkLove").checked = false;
    }
}
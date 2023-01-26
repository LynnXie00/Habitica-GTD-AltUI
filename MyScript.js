// todos:
// display tasks according to dates and tags
//- make task draggable among columns: https://www.w3schools.com/howto/howto_js_draggable.asp





var AllTasks;


function submitAPI(){//complete
    var apiKey=document.getElementById("apiText").value;
    var userID=document.getElementById("userID").value;
    setCookie("APIKey", apiKey, "30");
    setCookie("UserID",userID,"30")
    AllTasks=getTasks(userID,apiKey);
    displayTasks(AllTasks);
    
}

function displayTasksByDate(tasksObject){


}

function createTasks(){
    
}

function getTasks(user, api){
    const getTasksAPI = 'https://habitica.com/api/v3/tasks/user';
    const Http = new XMLHttpRequest();
    http.onload = function() {
        var Tasks = JSON.parse( this.responseText);
      }
    Http.open("GET", getTasksAPI);
    Http.setRequestHeader("x-api-user", user);
    Http.setRequestHeader("x-api-key", api);
    Http.send();
    return Tasks;
}



function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}




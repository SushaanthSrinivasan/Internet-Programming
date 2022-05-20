window.onload = function() {
    checkDeadline();
}

function checkDeadline(){
    var deadline = '2028-02-22';
    var today = new Date();
    deadline = new Date(deadline);

    if(today > deadline){
        document.getElementById("reg-form").style.display = "none";
        document.getElementById("sorry").style.display = "block";
    }
}

function nameInvalid(){
    window.alert("Name must only contain Alphabets!");
}

function clgnameInvalid(){
    window.alert("College Name must only contain Alphabets!");
}

function clgaddrInvalid(){
    window.alert("College Address must only contain Alphanumeric characters!");
}

function pinInvalid(){
    window.alert("PIN must only contain numbers!");
}

function ageInvalid(){
    window.alert("Name must only contain Alphabets!");
}

function ageInvalid(){
    window.alert("Age must only contain numbers!");
}

function telInvalid(){
    window.alert("Telephone number must only contain numbers, Duh!");
}

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();
  
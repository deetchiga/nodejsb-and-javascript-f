console.log("i am inside create table")


var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
var s=request.open('GET', '/users', true)
console.log(s)
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("root").innerHTML =
      this.responseText;
    }
  };

//request.onload = function() {
  // Begin accessing JSON data here
//var data = JSON.parse(this.response)

  //if (request.status >= 200 && request.status < 400) {
    //data.forEach(actor => {
      //console.log(actor.actor_id)
    //})
//}

// Send request
request.send()


 var col = [];
        for (var i = 0; i < s.length; i++) {
            for (var key in s[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

      
        var table = document.createElement("table");

       
        var tr = table.insertRow(-1);                 

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        
        for (var i = 0; i < s.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = s[i][col[j]];
            }
        }

        
        var divContainer = document.getElementById("root");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
  

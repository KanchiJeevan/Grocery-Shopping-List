function list(){
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){

    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        console.log(response);
        var Jgrocery = response.grocery;
        console.log(Jgrocery); 
        var output ="";
        
        for(var i=0;i<Jgrocery.length;i++){
            output += "<tr>";
            output += "<td>"+ Jgrocery[i].serialNo +"</td>";
            output += "<td>"+ Jgrocery[i].name +"</td>";
            output += "<td>"+ Jgrocery[i].quantity +"</td>";
            output += "<td>"+ Jgrocery[i].unit +"</td>";
            output += "<td>"+ Jgrocery[i].department +"</td>";
            output += "<td>"+ Jgrocery[i].notes +"</td>";
            output += "</tr>";
        }
    }
    document.getElementById("grocery_table").innerHTML=output;
}
xhttp.open("GET","list.json",true);
xhttp.send();
}

var myDetails=document.getElementById("myCustDetails");
var clickBTN=document.getElementById("clickBTN");

/*clickBTN.addEventListener("click",function(){*/
var ourRequest=new XMLHttpRequest();
ourRequest.open('GET','https://jsonplaceholder.typicode.com/posts');
ourRequest.onload=function(){
	var clientData=JSON.parse(ourRequest.responseText);
	renderHTML(clientData);
};
ourRequest.send();	
/*});*/


function renderHTML(data){
	var htmlString= "";
	for(i=0;i<data.length;i++){
		htmlString += "<tr>"+"<td>" + data[i].id + "</td>"+ "<td>" + data[i].title + "</td>" + "<td>" + data[i].body + "</td>" +"</tr>"
	}
	myDetails.insertAdjacentHTML('beforeend',htmlString);
}
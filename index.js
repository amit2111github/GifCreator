 function getgif(){

 	console.log("Amit kumar");
 	fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&api_key=dc6zaTOxFJmzC")
 	.then((res) => res.json())
 	.then((val) =>{
 		var output = ""
 		for(var i = 0 ; i<3; i++){
 			var  number  = parseInt(Math.random()*50)
 			output += `
 				<img src ="${val.data[number].images.original.url} width= "300px" height= "200px">
 			`
 		}
 		document.querySelector(".insert").innerHTML = output	
 	})

}

document.querySelector(".btn").addEventListener("click",getgif)
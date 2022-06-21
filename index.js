var btn= document.querySelector("button")
var input= document.getElementById("input")
var ul= document.querySelector("ul")

function addItem() {
	var li= document.createElement("li");
	li.textContent= input.value; // or li.append(document.createTextNode(input.value))
	ul.append(li)
	input.value= ""

	li.addEventListener("click", ()=> {
		var done= li.classList.toggle("done");
		var delbtn= document.createElement("button");
		delbtn.textContent= "delete";
		delbtn.classList.add("del")

		var editbtn = document.createElement("button");
	    editbtn.appendChild(document.createTextNode("edit"));
	    editbtn.classList.add("edit")

		if(done) {
			li.append(delbtn);	
			li.append(editbtn);		
		} else {
			li.getElementsByClassName("del")[0].remove();
			li.getElementsByClassName("edit")[0].remove();		
		}

		delbtn.addEventListener("click", ()=> {
			li.remove()
		})
		
		  editbtn.onclick = function () {
	      var p = prompt("Edit your entry");
	      var entry=  li.getElementsByClassName("edit")[0].parentElement;
      	  entry.textContent = p;
  		}
		
	})
}


btn.addEventListener('click', ()=> {
	if(input.value.length > 0) {
	addItem();
	} 

})


input.addEventListener('keypress', (e)=> {
	if(input.value.length > 0 && e.which===13){
		addItem();
	} 	
})



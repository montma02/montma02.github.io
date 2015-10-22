addTask = function() {
 ul = document.querySelector("#tdlist")
 newli = document.createElement("li");
 check = document.createElement("input");
 check.type = "checkbox";
 check.name = "done";
 check.onclick = checkItem;
 
 entry = document.querySelector("#word").value;
 litext = document.createTextNode(entry)
 priority = document.querySelector("#priority").value;
 newli.className = priority;
 newli.appendChild(check);
 newli.appendChild(litext);
 ul.appendChild(newli);
 localSave("tdlist");
}

checkItem = function() {
 if (this.checked){
  this.parentNode.classList.add("done");
 } else{
  this.parentNode.classList.remove("done");
 }
 localSave("tdlist");
}

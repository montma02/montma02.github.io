
addTask = function() {
 ul = document.querySelector("#tdlist")
 newli = document.createElement("li");
 check = document.createElement("input");
 check.type = "checkbox";
 check.name = "done";
 
 entry = document.querySelector("#word").value;
 litext = document.createTextNode(entry)
 priority = document.querySelector("#priority").value;
 newli.className = priority;
 newli.appendChild(check);
 newli.appendChild(litext);
 ul.appendChild(newli);
}
boxChecked = function() {
    if (this.checked) {
   this.parentNode.classList.add("done")
   } else {
    this.parentNode.classList.remove("done")
   }
}

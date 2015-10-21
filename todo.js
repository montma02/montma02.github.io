
addTask = function() {
 ul = document.querySelector("#tdlist")
 newli = document.createElement("li");
 check = document.createElement("input");
 check.type = "checkbox";
 check.name = "done";
 checkbox.onclick = boxChecked;
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
   // local Save(id of your ul as a string)
   // resoreList(id of your UL as a string, boxChecked)
   // <sript type="text/javascript"> window.onload = function() { restoreLi("taskList", boxChecked)</script>
}

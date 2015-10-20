
addTask = function() {
 ul = document.querySelector("#tdlist")
 newli = document.createElement("li");
 check = document.createElement("input");
 check.type = "checkbox";
 check.name = "done";
 entry = document.querySelector("#word").value;
 litxt = document.createTextNode(entry)
 priority = document.querySelector("#priority").value;
 newli.className = priority;
 newli.appendChild(check);
 newli.appendChild(litxt);
 ul.appendChild(newli);
}

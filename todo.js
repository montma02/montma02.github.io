
  addTask = function() {
   document.querySelector("#tasklist")
   newIn = document.createElement("input")
   newIn.type = "checkbox"
   li.appendChild("newIn")
   inputid = document.querySelector("#inputid")
   ul = document.querySelector("ul")
   li = document.createElement("li")
   task = document.createTextNode(inputid.value)
   li.appendChild(task)
   ul.appendChild(li)
    
  }


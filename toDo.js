
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const liContainer = document.getElementById("liContainer");
if (localStorage.length > 0){
    for(let i = 0; i < localStorage.length; i++){
        let text = localStorage.getItem(i +1)
        const div = document.createElement("div");
        const li = document.createElement("li");
        const node = document.createTextNode(localStorage[i + 1]);
        const xButton = document.createElement("button");
        li.style.display = "flex";
        li.style.width = "400px";
        li.style.marginBottom = "30px";
        li.style.justifyContent = "space-between";

    
        div.appendChild(node);
        li.appendChild(div);

    
        xButton.innerText = "x";
        xButton.className = "closeBtn";
        xButton.addEventListener("click", deleteList);
        li.appendChild(xButton);
        function deleteList(){
            liContainer.removeChild(li);
            document.getElementById("listAmount").innerText = document.querySelectorAll("li").length;
            liItems = document.querySelectorAll("li");
            localStorage.clear();
            let boom = 1;
            for(let y = 0; y < document.querySelectorAll("li").length; y++){
                let newMes = liItems[y].innerText
                newMes = newMes.replace("x","")
                localStorage.setItem(y + 1, newMes);
            }
            }
    
        liContainer.appendChild(li);
        document.getElementById("listAmount").innerText = document.querySelectorAll("li").length;
        }
    }
document.addEventListener("keydown",(key)=>{
    if(key.keyCode == "13"){
        addItem()
    }
})

function addItem(){
    const div = document.createElement("div");
    const li = document.createElement("li");
    const node = document.createTextNode(input.value);
    const xButton = document.createElement("button");
    li.style.display = "flex";
    li.style.width = "400px";
    li.style.marginBottom = "30px";
    li.style.justifyContent = "space-between";


    div.appendChild(node);
    li.appendChild(div);

    
    xButton.innerText = "x";
    xButton.className = "closeBtn";
    xButton.addEventListener("click", removeList);
    li.appendChild(xButton);
    
    
    liContainer.appendChild(li);
    document.getElementById("listAmount").innerText = document.querySelectorAll("li").length;
    localStorage.setItem(document.querySelectorAll("li").length, input.value)
    function removeList(){
        liContainer.removeChild(li);
        document.getElementById("listAmount").innerText = document.querySelectorAll("li").length;
        liItems = document.querySelectorAll("li");
        localStorage.clear();
        for(let y = 0; y < document.querySelectorAll("li").length; y++){
                localStorage.setItem(y + 1, liItems[y].innerText);
                let newMes = liItems[y].innerText;
                newMes = newMes.replace("x","");
                localStorage.setItem(y + 1, newMes);
            }
        document.getElementById("listAmount").innerText = document.querySelectorAll("li").length;
        }
}
function search(){
    alert("feature hasn't been added yet. (aka i couldnt figure out how to do it)")
}
const container = document.querySelector(".container");
const usertask = document.querySelector("input");
const add = document.querySelector(".addbtn");
const taskList = document.querySelector("#task_list");
// let edit_inp;
// let change = document.createElement("span");
// let cross = document.createElement("span");
// cross.innerHTML = "&#10005;";
// change.innerHTML = "&#9998;";
// let ele;

//to check input and add it to task list
const addToTaskList = () => {
    if (usertask.value === '') {
        alert("please write a task");
    }
    else {
        const task = usertask.value;
        const newTask = document.createElement("li")
        const divTask = document.createElement("div");
        divTask.innerText = task;
        newTask.appendChild(divTask);
        console.log(newTask);
        taskList.appendChild(newTask);
        let change = document.createElement("span");
        change.innerHTML = "&#9998;";
        change.classList.add("edit_pen");
        newTask.appendChild(change);
        let cross = document.createElement("span");
        cross.innerHTML = "&#10005;";
        newTask.appendChild(cross);
    }
    usertask.value = '';
    saveData();
}
add.addEventListener("click", addToTaskList);

//to check,edit and remove tasks
taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.className === "edit_pen") {
        // console.log("edit");
        const editpg = document.createElement("div");
        editpg.classList.add("edit");
        const edit_inp = document.createElement("input");
        const edit_btn = document.createElement("button");
        edit_btn.innerText = "Edit Done";
        editpg.appendChild(edit_inp);
        editpg.appendChild(edit_btn);
        editpg.classList.add("edit_show");
        container.appendChild(editpg);
        const ele = e.target.parentElement.childNodes[0];
        // console.log(ele);
        edit_btn.addEventListener("click", () => {
            editpg.classList.toggle("edit_show");
            ele.innerHTML = edit_inp.value;
            saveData();
        })
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

//save task
const saveData = () => {
    localStorage.setItem("data", taskList.innerHTML);
}


//show task
const showTask = () => {
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();
// localStorage.removeItem("data");
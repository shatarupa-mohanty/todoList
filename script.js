const usertask = document.querySelector("input");
const add = document.querySelector(".addbtn");
const taskList = document.querySelector("#task_list");
const addToTaskList = () => {
    if (usertask.value === '') {
        alert("please write a task");
    }
    else {
        const task = usertask.value;
        const newTask = document.createElement("li")
        newTask.innerText = task;
        console.log(newTask);
        taskList.appendChild(newTask);
        let cross = document.createElement("span");
        cross.innerHTML = "&#10005;";
        newTask.appendChild(cross);
    }
    usertask.value = '';
    saveData();
}
add.addEventListener("click", addToTaskList);

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

const saveData = () => {
    localStorage.setItem("data", taskList.innerHTML);
}

const showTask = () => {
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();
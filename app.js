// Función para agregar una nueva tarea a la lista
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    //se crea elemento para poder dar estilos, ya que se desordenadan los botones respecto al input
    const text = document.createElement("p");
    taskList.appendChild(li);
    text.innerText = taskInput.value;
    li.appendChild(text);
    const twoBtnsContainer = document.createElement("div");
    li.appendChild(twoBtnsContainer);

    //Agregar boton de tarea completada
    const completeButton = document.createElement("button");
    completeButton.innerText = "Completar";
    completeButton.className = "completeBtnStyle";
    completeButton.className = "btnOrder";
    completeButton.onclick = function () {
      li.classList.toggle("completada");
    };

    twoBtnsContainer.appendChild(completeButton);

    // agregar boton para eliminar tarea
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Eliminar";
    completeButton.className = "btnOrder";
    deleteButton.className = "deleteBtnStyle";
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };

    twoBtnsContainer.appendChild(deleteButton);
  }
}

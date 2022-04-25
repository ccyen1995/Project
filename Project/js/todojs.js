// localStorage.clear();
// localStorage.setItem("list", JSON.stringify([]));
let myList = localStorage.getItem("list");
if (JSON.parse(myList) == null) {
  localStorage.setItem("list", JSON.stringify([]));
}
let section = document.querySelector("section");
let ol = document.querySelector("section ol");
let add = document.querySelector("form button");

//增加清單
add.onclick = (e) => {
  e.preventDefault();
  //   get the value
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let todoMonth = form.children[1].value;
  let todoDate = form.children[2].value;
  form.children[0].focus();
  if (
    todoText === "" ||
    todoMonth === "" ||
    todoDate === "" ||
    todoMonth > 12 ||
    todoDate > 31
  ) {
    if (todoText === "") {
      form[0].style = "animation:notFilled 0.8s;";
      form[0].onanimationend = () => {
        form[0].style = "";
      };
    }
    if (todoMonth === "" || todoMonth > 12) {
      form[1].style = "animation:notFilled 0.8s;";
      form[1].onanimationend = () => {
        form[1].style = "";
      };
    }
    if (todoDate === "" || todoDate > 31) {
      form[2].style = "animation:notFilled 0.8s;";
      form[2].onanimationend = () => {
        form[2].style = "";
      };
    }
    return;
  }
  //   create a todo
  let todo = document.createElement("li");
  todo.classList.add("todo");
  let text = document.createElement("p");
  text.classList.add("todo_text");
  let time = document.createElement("p");
  time.classList.add("todo_time");
  let span = document.createElement("span");
  span.classList.add("invisiblesapn");

  //create Object
  let myTodo = {
    order: Date.now(),
    todoText: todoText,
    todoMonth: todoMonth,
    todoDate: todoDate,
  };
  //儲存資料
  let myList = localStorage.getItem("list");
  let myListArray = JSON.parse(myList);
  myListArray.push(myTodo);
  localStorage.setItem("list", JSON.stringify(myListArray));

  //   console.log(myTodo);
  // 創造綠色打勾
  let completeButton = document.createElement("button");
  completeButton.classList.add("complete");
  completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeButton.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    let todoItem = e.target.parentElement;
    todoItem.classList.toggle("done");
  });

  // 創造紅色垃圾桶
  let trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement;
    let myList = localStorage.getItem("list");
    let b = JSON.parse(myList);
    b.forEach((item, index) => {
      console.log(item);
      if (myTodo.order == item.order) {
        b.splice(index, 1);
      }
    });
    localStorage.setItem("list", JSON.stringify(b));
    todoItem.style.animation = "scaleDown 0.2s forwards";
    todoItem.addEventListener("animationend", () => {
      todoItem.remove();
    });
  });
  text.innerText = myTodo.todoText;
  time.innerText = myTodo.todoMonth + "/" + myTodo.todoDate;
  span.innerText = myTodo.order;
  todo.appendChild(text);
  todo.appendChild(time);
  todo.appendChild(completeButton);
  todo.appendChild(trashButton);
  todo.appendChild(span);
  ol.appendChild(todo);

  todo.style.animation = "scaleUp 0.2s forwards";

  //清空輸入框
  form.children[0].value = "";
  form.children[0].focus();
};

// 將資料從loacalstorage拿出並創造list;
function loadData() {
  let myList = localStorage.getItem("list");
  if (myList !== null) {
    let myListArray = JSON.parse(myList);

    //foreachhhhhhhhhhhhhhhhhhhhhhh
    myListArray.forEach((item, index) => {
      let todo = document.createElement("li");
      todo.classList.add("todo");
      let text = document.createElement("p");
      text.classList.add("todo_text");
      let time = document.createElement("p");
      time.classList.add("todo_time");
      let span = document.createElement("span");
      span.classList.add("invisiblesapn");
      // 將數值存入個物件
      text.innerText = item.todoText;
      time.innerText = item.todoMonth + "/" + item.todoDate;
      span.innerText = item.order;

      let completeButton = document.createElement("button");
      completeButton.classList.add("complete");
      completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
      completeButton.addEventListener("click", (e) => {
        console.log(e.target.parentElement);
        let todoItem = e.target.parentElement;
        todoItem.classList.toggle("done");
      });

      let trashButton = document.createElement("button");
      trashButton.classList.add("trash");
      trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
      // function current() {
      //   let newArray = myListArray.map((value, index, array) => {
      //     console.log(value);
      //     console.log(index);
      //   });
      //   newArray.splice(index, 1);

      //   myListArray.map();
      //   let newList = localStorage.getItem("list");
      //   newArray = JSON.parse(newList);
      //   console.log(newArray);
      //   newArray.forEach((it, indexx) => {
      //     newArray.splice(indexx, 1);
      //   });
      //   let newArray = myListArray;
      //   console.log(newArray);
      //   return current;
      // }
      trashButton.addEventListener("click", (e) => {
        let todoItem = e.target.parentElement;
        myListArray.splice(index, 1);
        localStorage.setItem("list", JSON.stringify(myListArray));
        todoItem.style.animation = "scaleDown 0.2s forwards";
        todoItem.addEventListener("animationend", () => {
          todoItem.remove();
        });
      });

      todo.appendChild(text);
      todo.appendChild(time);
      todo.appendChild(completeButton);
      todo.appendChild(trashButton);
      todo.appendChild(span);
      todo.style.animation = "scaleUp 0.2s forwards";
      ol.appendChild(todo);
    });
  }
}
loadData();
function mergeTime(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (Number(arr1[i].todoMonth) > Number(arr2[j].todoMonth)) {
      result.push(arr2[j]);
      j++;
    } else if (Number(arr1[i].todoMonth) < Number(arr2[j].todoMonth)) {
      result.push(arr1[i]);
      i++;
    } else if (Number(arr1[i].todoMonth) == Number(arr2[j].todoMonth)) {
      if (Number(arr1[i].todoDate) > Number(arr2[j].todoDate)) {
        result.push(arr2[j]);
        j++;
      } else {
        result.push(arr1[i]);
        i++;
      }
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let right = arr.slice(0, middle);
    let left = arr.slice(middle, arr.length);
    return mergeTime(mergeSort(right), mergeSort(left));
  }
}
let sortButton = document.querySelector("div.sort button");
sortButton.addEventListener("click", () => {
  let sortedArray = mergeSort(JSON.parse(localStorage.getItem("list")));
  localStorage.setItem("list", JSON.stringify(sortedArray));

  // 移除資料
  let len = ol.children.length;
  for (let i = 0; i < len; i++) {
    ol.children[0].remove();
  }
  // 重新載入
  loadData();
});

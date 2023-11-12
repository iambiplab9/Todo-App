let todolist = [
{item:'buy milk', duedate: '11/11/2023'},
{item:'go to collage', duedate: '11/11/2023'}
];

displayitem();

function addtodo() {
let inputelement = document.querySelector('#todo-input');
let dateelement = document.querySelector('#todo-date');
let todoitem = inputelement.value;
let tododate = dateelement.value;
todolist.push({item: todoitem, duedate: tododate});
inputelement.value = '';
dateelement.value = '';

displayitem();
}

function displayitem() {
    let containerelement = document.querySelector('#todo-container');
    
    let newhtml = '';

   
    for (let i = 0; i < todolist.length; i++) {
        let item = todolist[i].item;
        let duedate = todolist[i].duedate;
        // let {item,duedate} = todolist[i];
        newhtml += `

        <div>
        <span>${item}</span>
        <span>${duedate}</span>
        <button onclick="todolist.splice(${i}, 1);
        displayitem();">delete</button>
        </div>
        `;
        }
        containerelement.innerHTML = newhtml;   
}
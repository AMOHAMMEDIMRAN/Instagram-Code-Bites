const container = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
    data.forEach(todo => {
        container.innerHTML += `<p>${todo.title}</p>`;
    })
  })
  .catch(err => console.log(err));

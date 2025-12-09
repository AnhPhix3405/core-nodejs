function sayhello() {
  console.log("Hello from app module!");
}

export function myfun(){
    console.log("My function from app module!");
}
const a = '1.2.3'
export { myfun as default , a};


// console.log("starting")

const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await res.json();
// console.log(data);
// console.log("end")
export { data };
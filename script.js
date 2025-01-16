//your JS code here. If required.
const age = document.getElementById("age");
const name = document.getElementById("name");
const btn = document.getElementById("btn");

function promise (age) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(age < 18){
                reject(`oh sorry ${name.value}. You aren't old enough`);
             } else {
                resolve(`Welcome, ${name.value}. You can vote`);
             }
        },4000);
    });
}

btn.addEventListener("click", () => {
    promise(age.value).then((resolve) =>{
        alert(resolve)
    }).catch((reject) => {
        alert(reject);
    });
});
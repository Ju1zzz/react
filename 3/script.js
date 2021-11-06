const box = document.querySelector(".box");
const btn = document.querySelector(".btn");
/*const getDog = ()=> {
    fetch('https://dog.ceo/api/breeds/image/random').then(response => {
        return response.json();
    }).then(data =>{
        console.log(data);
        box.innerHTML = `<img src="${data.message}"/>`;
    }).catch((err)=>{
        console.log(err)
    });
    };*/

    const getDog = async()=> {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        console.log(data)
        box.innerHTML = `<img src="${data.message}"/>`;
    };

btn.addEventListener("click", getDog);

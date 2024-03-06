// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

let flag = 0;
let btn = document.getElementById("btnbar");
let navshow = document.getElementById('navshow');
btn.addEventListener("click", () => {
    if(flag === 0)
    {
        navshow.style.display = 'block';
        flag = 1;
    }
    else{
        navshow.style.display = 'none';
        flag = 0;
    }
});

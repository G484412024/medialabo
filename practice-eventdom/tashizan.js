function add(){
    let i = document.querySelector('input#left');
    let p1 = i.value;
    let p2 = Number(p1);
    
    i = document.querySelector('input#right');
    let q1 = i.value;
    let q2 = Number(q1);
    answer.textContent = p2 + q2;
}

let b = document.querySelector('button#calc');
b.addEventListener('click',add);
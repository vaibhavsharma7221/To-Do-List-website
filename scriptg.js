let j=0;

const task=document.getElementById('task');
const des=document.getElementById('des');
const main=document.getElementById("main");

const btn1= document.getElementById('btn1');

//localStorage.clear();

for( j=0;j<localStorage.length;j++)
{
     
    let x=localStorage.key(j);
    if(x.startsWith('task'))
    {
    let localtask=localStorage.getItem(x);
    let obj=JSON.parse(localtask);
    
    const tasks=document.createElement('div');
    const divi=document.createElement('div');
    const heading=document.createElement('h5');
    const para=document.createElement('p');
    
    tasks.setAttribute('id',`${j}`);
    tasks.setAttribute('class','tasks');

    heading.textContent=obj.tasi;
    para.textContent=obj.desi;

    divi.appendChild(heading);
    divi.appendChild(para);

    const divj=document.createElement('div');
    const btn2=document.createElement('button');
    
    btn2.setAttribute('id',`${j}`);
    btn2.textContent='-';
    
    divj.appendChild(btn2);
    
    divi.setAttribute('class','task1');
    divj.setAttribute('class','btnContainer');

    tasks.appendChild(divi);
    tasks.appendChild(divj);

    main.appendChild(tasks);

    const deleter=(e)=>{
        const element=document.getElementById(e.target.id);
        element.remove();
        localStorage.removeItem(x);
     }
     
    btn2.addEventListener('click',deleter);
    }
}

let i;

if(localStorage.length==0){
 i=0;
}
else{
i=localStorage.getItem('index');
}
const add=()=>{
    if(task.value=="" || des.value==""){
        alert("ENTER VALUES IN THE GIVEN FIELDS!")
    }
    
    else{

    const tasks=document.createElement('div');
    const divi=document.createElement('div');
    const heading=document.createElement('h5');
    const para=document.createElement('p');
    
    tasks.setAttribute('id',`${i}`);
    tasks.setAttribute('class','tasks');

    heading.textContent=task.value;
    para.textContent=des.value;

    localStorage.setItem(`task${i}`,JSON.stringify({tasi:task.value,desi:des.value}));


    divi.appendChild(heading);
    divi.appendChild(para);

    const divj=document.createElement('div');
    const btn2=document.createElement('button');
    
    btn2.setAttribute('id',`${i}`);
    btn2.textContent='-';
    
    divj.appendChild(btn2);
    
    divi.setAttribute('class','task1');
    divj.setAttribute('class','btnContainer');

    tasks.appendChild(divi);
    tasks.appendChild(divj);

    main.appendChild(tasks);

    task.value="";
    des.value="";

    i++;

    localStorage.setItem('index',i);

    const deleter=(e)=>{
        const element=document.getElementById(e.target.id);
        element.remove();
        localStorage.removeItem(`task${e.target.id}`);
        localStorage.removeItem(`des${e.target.id}`);
     }
     
    btn2.addEventListener('click',deleter);
    }
}


btn1.addEventListener('click',add);

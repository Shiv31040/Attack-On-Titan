const randomColor=function(){
    const hex="123456789ABCDEF";
    let color='#'
    for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
}
    return color;
}

let colorChange=function(){document.body.style.backgroundColor=randomColor()}
let intervalId;
document.querySelector('#start').addEventListener('click',function(){
    if(!intervalId){
        intervalId=setInterval(colorChange,1000)
    }
},false)


document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId=null;
    console.log('It has been stopped');
},false)

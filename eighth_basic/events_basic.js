document.querySelector('.animal').addEventListener('click',function(e){
    let className = e.target.className
    console.log(`${className} is selected`)
    if(e.target.tagName==='IMG'){
        const removeIt = e.target.parentNode;
    removeIt.remove()
    }
    else{
        console.log("Its not an image");
        e.preventDefault();
    }
},false)



document.querySelector('.animal').addEventListener('click',function(e){
    console.log(e.target.tagName);
    const removeIt = e.target.parentNode;
    removeIt.remove()
})
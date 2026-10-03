const forms = (document.querySelector("form"))



forms.addEventListener('submit',function(e){
    e.preventDefault()


    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = (document.querySelector('.results'));

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = `PLease add some height `;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please add some weight `;
    }
    else{
        const bmi = ((weight)/(height/100) ** 2).toFixed(2);
            if(bmi<18.6){
                results.innerHTML=`You are Underweightand your BMI is ${bmi}`;
            }
            else if(bmi<=24.9){
                results.innerHTML=`You are Weighing normal and your BMI is ${bmi}`;
            }
            else{
                results.innerHTML=`You are Overweight and your BMI is ${bmi}`;
            }
    }
     
})


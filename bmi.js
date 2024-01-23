const onInputChange = (e) => {
    const label = document.querySelector(`label[for=${e.target.id}]`);
    if(e.target.id === 'weight'){
        document.getElementById('rangeWeight').value = e.target.value;
        if(weight.value !== ""){
            label.classList.add('active');
        }
        else{
            label.classList.remove('active');
        }
    }
    if(e.target.id === 'height'){
        document.getElementById('rangeHeight').value = e.target.value;
        if(e.target.value !== ""){
            label.classList.add('active');
        }
        else{
            label.classList.remove('active');
        }
    }
};

const onChangeRange = (e) => {
    const labelHTML = e.target.id.replace('range', '').toLowerCase();
    const label = document.querySelector(`label[for=${labelHTML}]`);
    if(e.target.id === 'rangeWeight'){
        document.getElementById('weight').value = e.target.value;
        if(e.target.value !== ""){
            label.classList.add('active');
        }
        else{
            label.classList.remove('active');
        }
    }
    if(e.target.id === 'rangeHeight'){
        document.getElementById('height').value = e.target.value;
        if(e.target.value !== ""){
            label.classList.add('active');
        }
        else{
            label.classList.remove('active');
        }
    }
};

const onClickBtn = (e) => {
    e.preventDefault();
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    let bmi = 0;
    const result = document.getElementById('result');
    if(height !== '' || weight !== '') {
        bmi = weight / ((height * height)/100);
        result.innerHTML = parseFloat(bmi.toFixed(2));
    }
};
function myScope() {
    const form = document.querySelector('.form');
    
    const pessoas = [];

    function receiveFormEvent(e) {
        e.preventDefault();
        const firstname = form.querySelector('.name');
        const lastname = form.querySelector('.lastname');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');  
        
        
        pessoas.push({
            name: firstname.value,
            lastName: lastname.value,
            weight: weight.value,
            height: height.value
        });
        
        
        console.log(pessoas);       
        
        const resp = document.querySelector('.response'); 
        resp.innerHTML = `<p>${firstname.value} ${lastname.value} peso kg ${weight.value} tenho uma altura de ${height.value} cm.</p>`;
       
    };

    form.addEventListener('submit', receiveFormEvent);

};

myScope();

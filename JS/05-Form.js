document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const error = document.getElementById('error')

    if(name === '' || email === ''){
        error.textContent = 'Todos los campos son obligatorios'
    }else{
        error.textContent = '';
        alert('Formulario enviado con éxito')
    }

})
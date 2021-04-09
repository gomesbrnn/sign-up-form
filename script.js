let nam = document.getElementById('name')
let mail = document.getElementById('email')
let pass = document.getElementById('password')
let check = document.getElementById('submit')


function register() {
    if (nam.value == '' || mail.value == '' || pass.value == '') {
        alert('Verifique se todos os campos estão preenchidos e tente novamente.')
    } else {
        alert('Tudo ok')
    }
}

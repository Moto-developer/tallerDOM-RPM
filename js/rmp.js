
//Inicio - Abrir modal de registro
const registrarse = document.querySelector('#registrarse');
const modal2 = document.querySelector('.modal2');

registrarse.addEventListener('click',()=>{
    modal2.showModal();
});
//Fin - Abrir modal de registro

// Inicio - Formulario de registro
const tipoUsuario = document.getElementById('tipoUsuario');
tipoUsuario.addEventListener('change', ()=>{

})

const registro = document.getElementById('registrar')

registro.addEventListener('click',()=>{
    
    const clave = document.getElementById('contraseña-reg').value;
    const email = document.getElementById('correo-reg').value;
    const tipoUsuarioSelect = tipoUsuario.value;

    // localStorage.setItem('clave', clave);
    // localStorage.setItem('email', email);
    // localStorage.setItem('tipoUsuario', tipoUsuario);

    localStorage.claveG = clave;
    localStorage.correoG = email;
    localStorage.tipoUsuG = tipoUsuarioSelect;

    if (confirm("Registro exitoso quieres iniciar sesión?") == true) {
        modal.showModal();
        }

});

//Fin del formulario de registro


// Inicio - Abrir modal de inicio sesión
const ingresar = document.querySelector('#ingresar');
const modal = document.querySelector('.modal');

ingresar.addEventListener('click',()=>{
    modal.showModal();
});
//Fin - Abrir modal de inicio sesión

//Inicio formulario de inicio sesión
let contraseña = document.getElementById('contraseña');
let correo = document.getElementById('correo');

const ingreso = document.getElementById('iniciar');

ingreso.addEventListener('click',()=>{

const bienvenido = document.getElementById('bienvenida');
const fondo = document.getElementById('imgpal');
const titulo = document.getElementById('tituloppal');
const slogan = document.getElementById('slogan');
const menu = document.querySelector('.menu-principal');

const salir = document.createElement('a');
salir.classList.add('enlace-menu','salir');
salir.textContent = 'Salir';
salir.href = '#';

if(correo.value.includes(" ")){
    alert('Tu correo NO puede tener espacios');
    }
    else if(contraseña.value===localStorage.claveG  &&  correo.value===localStorage.correoG && localStorage.tipoUsuG==='motoviajero'){
        alert('Bienvenido a Motoviajero')
        
        bienvenido.innerHTML = `<b>Bienvenido ${localStorage.tipoUsuG}</b>`;
        fondo.style.backgroundImage = "url('../img/motoviajeros.jpg')";
        titulo.innerHTML = 'Rutas, aveturas y lugares por conocer';
        slogan.innerHTML = 'Emprende el viaje de tus sueños por el mundo'
        menu.appendChild(salir);
        salir.addEventListener('click', _ => {
        location.reload();
        });
        
        
    }
    else if(contraseña.value===localStorage.claveG  &&  correo.value===localStorage.correoG && localStorage.tipoUsuG==='motoposada'){
        alert('Bienvenido a Motoposada');

        bienvenido.innerHTML = `<b>Bienvenido ${localStorage.tipoUsuG}</b>`;
        titulo.innerHTML = 'Motoposadas para todos los viajeros';
        slogan.innerHTML = 'Un lugar para descansar y conocer'
        fondo.style.backgroundImage = "url('../img/motoposadas.jpg')";
        menu.appendChild(salir);
        salir.addEventListener('click', _ => {
        location.reload();
        });
    }
    else if(contraseña.value===localStorage.claveG  &&  correo.value===localStorage.correoG && localStorage.tipoUsuG==='administrador'){
        alert('Bienvenido a Administrador')

        bienvenido.innerHTML = `<b>Bienvenido ${localStorage.tipoUsuG}</b>`;
        fondo.style.backgroundImage = "url('../img/administrador.jpg')";
        titulo.innerHTML = 'Estadisticas de la apllicación RPM';
        slogan.innerHTML = 'Consultas, reportes y más'
        menu.appendChild(salir);
        salir.addEventListener('click', _ => {
        location.reload();
        });
    }
    else{
        if (confirm("No estas registrado, quieres registrarte?") == true) {
        modal2.showModal();
        }
    }

});
// Aquí termina el codigo del formulario de inicio sesión


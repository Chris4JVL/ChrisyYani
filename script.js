// 1. Buscamos el botón y el contenedor en nuestra página
const boton = document.getElementById('miBoton');
const contenedor = document.getElementById('contenedorImagen');

// 2. Le decimos al botón que escuche cuando alguien haga "clic"
boton.addEventListener('click', function() {
    
    // 3. Verificamos si la imagen ya existe para no ponerla dos veces
    if (contenedor.innerHTML === "") {
        
        // 4. Creamos el elemento de imagen
        const nuevaImagen = document.createElement('img');
        
        /* 👇 CAMBIA ESTA LÍNEA CON EL NOMBRE DE TU ARCHIVO 👇 */
        nuevaImagen.src = "chrisyani.jpg"; 
        
        nuevaImagen.alt = "Mi imagen propia";
        
        
          // 👇 NUEVO: 5. Creamos un elemento de párrafo para el mensaje 👇
        const nuevoMensaje = document.createElement('p');
        nuevoMensaje.innerText = "Te amo con todo mi ser mi Reina hermosa gracias por estar conmigo en las buenas y en las malas.";
        nuevoMensaje.className = "texto-imagen"; // Le ponemos una clase para darle estilo en CSS
        
        // 6. Metemos la imagen Y luego el mensaje dentro de nuestro contenedor
        contenedor.appendChild(nuevaImagen);
        contenedor.appendChild(nuevoMensaje); // Agrega el texto debajo de la foto
        
        // Cambiamos el texto del botón
        boton.innerText = "Ocultar Contenido";
        contenedor.classList.add('animar');
    }else{
     contenedor.innerHTML = "";
     boton.innerText = "Mostrar Imagen";
     contenedor.classList.remove('animar');
    }
});

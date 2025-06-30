document.addEventListener('DOMContentLoaded', function() {
    
    const formulario = document.getElementById('formularioContacto');
    
    if(formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            
            if(!nombre || !email) {
                alert('Por favor complete los campos requeridos');
                return;
            }
            
            alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
            formulario.reset();
        });
    }
    
    const tarjetas = document.querySelectorAll('.lugar-card');
    
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        tarjeta.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    document.querySelectorAll('nav a').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            if(this.hash !== '') {
                e.preventDefault();
                
                const hash = this.hash;
                const elemento = document.querySelector(hash);
                
                window.scrollTo({
                    top: elemento.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                history.pushState(null, null, hash);
            }
        });
    });
});
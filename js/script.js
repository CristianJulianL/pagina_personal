document.addEventListener('DOMContentLoaded', function() {
    // Define tus habilidades y sus porcentajes de dominio
    const skills = [
      { name: 'HTML', percentage: 90 },
      { name: 'CSS', percentage: 80 },
      { name: 'JavaScript', percentage: 75 },
      { name: 'wordpress', percentage: 70 },
      { name: 'wf', percentage: 70 },
      { name: 'ps', percentage: 55 },
      
      // Agrega más habilidades según sea necesario
    ];
  
    // Función para verificar si un elemento está en la vista
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Función para mostrar las habilidades cuando están en la vista
    function showSkills() {
      const skillsContainer = document.querySelector('.skills-container');
      if (isInViewport(skillsContainer)) {
        skillsContainer.style.opacity = '1';
      }
    }
  
    // Verifica la visibilidad de las habilidades al cargar la página y en el evento de desplazamiento
    showSkills();
    window.addEventListener('scroll', showSkills);
  
    // Actualiza las barras de progreso con la información de las habilidades
    skills.forEach(skill => {
      const progressBar = document.getElementById(`${skill.name.toLowerCase()}-progress`);
      progressBar.style.width = '0'; // Inicialmente, establece el ancho en 0
    });
  
    // Actualiza las barras de progreso cuando las habilidades están en la vista
    window.addEventListener('scroll', function() {
      skills.forEach(skill => {
        const progressBar = document.getElementById(`${skill.name.toLowerCase()}-progress`);
        if (isInViewport(progressBar)) {
          progressBar.style.width = `${skill.percentage}%`;
        }
      });
    });
  });
  
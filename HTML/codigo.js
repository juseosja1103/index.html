document.addEventListener("DOMContentLoaded", function() {
    var enlacesMenu = document.querySelectorAll("#menu a");
    function mostrarSeccion(id) {
      var secciones = document.getElementsByClassName("seccion");
      for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
      }
      document.getElementById(id).style.display = "block";
    }
    enlacesMenu.forEach(function(enlace) {
      enlace.addEventListener("click", function(event) {
        event.preventDefault();
        var target = this.getAttribute("data-target"); 
        mostrarSeccion(target); 
      });
    });
  });
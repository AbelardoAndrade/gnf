
  // obtém todas as âncoras dentro do menu
  var menuItems = document.querySelectorAll('#Id1 a');

  // adiciona um evento de clique a cada âncora
  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // obtém a instância do offcanvas
      var offcanvasElement = document.querySelector('#Id1');
      var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);

      // esconde o offcanvas
      offcanvas.hide();
    });
  });




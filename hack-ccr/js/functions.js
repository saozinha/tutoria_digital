$(function(){
  $('nav.mobile-menu').click(function(){
      $('nav.mobile-menu').find('ul').slideToggle();
  });
});

var functions = new Vue({
    el: '#app',
    data: {
      school: [
        {id: 1, name: "Escolaridade"},
        {id: 2, name: "Ensino Fundamental"},
        {id: 3, name: "Ensino Médio"},
        {id: 4, name: "Ensino Superior"},
      ],
      finalPreco: 0,
    },
    methods: {
        add: function (preco) {
          this.showAlert = true;
          this.valor += preco;
        },
        verifyLogin: function (){
          this.login = false;
          this.cadastro = true;
          this.typeUser[0].type = "Cadastro";
          this.typeUser[1].button = "Cadastrar";
        },      
      },
  })

  
$(function(){
  $('nav.mobile-menu').click(function(){
      $('nav.mobile-menu').find('ul').slideToggle();
  });
});

var functions = new Vue({
    el: '#app',
    data: {
      counter: 0,
      showAlert: false,
      cadastro : false,
      login: true,
      camisa: true,
      moletom: false,
      jaqueta: false,
      lancamento: false,
      typeUser: [{type : "Login"},{button : "Entrar"}],
      valor: 0,
      quantidade: 0,
      indivialValue: 0,
      produtos: [
        {img: "img/camisa-1.jpg", total: 0, preco: 0},
        {img: "img/camisa-2.jpg", total: 0, preco: 0},
        {img: "img/camisa-3.jpg", total: 0, preco: 0}
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

  
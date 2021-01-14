var functions = new Vue({
    el: '#app',
    data: {
      aluno: true,
      professor: false,
      login: false,
      cadastro: true,
      forgot: false,
      school: [
        {id: 1, name: "Escolaridade"},
        {id: 2, name: "Ensino Fundamental"},
        {id: 3, name: "Ensino Médio"},
        {id: 4, name: "Ensino Superior"},
      ],
      materia: [
        {id: 1, name: "Matéria"},
        {id: 2, name: "Português"},
        {id: 3, name: "Matemática"},
        {id: 4, name: "História"},
        {id: 5, name: "Geografia"},
        {id: 6, name: "Física"},
        {id: 7, name: "Química"},
        {id: 8, name: "Inglês"},
      ],
    },
  })

  
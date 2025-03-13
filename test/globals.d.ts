// Adiciona tipos aos tipos globais ja existente dentro do do JS
// Todos os imports devem ser feitos in line https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts/51114250#51114250
// Nova Forma de sobrescrever variaveis globais
declare global {
  var testRequest: import('supertest/lib/agent');
}

export {};

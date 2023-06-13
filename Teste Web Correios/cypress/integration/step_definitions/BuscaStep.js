import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

const buscar = require("../../support/pages/Buscar");

Given("que estou na página de busca por endereço ou CEP", () => {
    buscar.acessarSite();
});

When("realizo uma busca pelo CEP {string}" , (cep) => {
  buscar.buscarEndereco(cep);
})

When("realizo uma busca pelo Endereço {string}" , (endereco) => {
  buscar.buscarEndereco(endereco);
})


Then("os dados {string}, {string}, {string} e {string} são exibidos", (logradouro, bairro, localidade, cep) => {
  buscar.checkEndereco(logradouro, bairro, localidade, cep);
})



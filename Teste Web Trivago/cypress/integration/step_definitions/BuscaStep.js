import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

const buscar = require("../../support/pages/Buscar");

Given("que estou na página inicial do site", () => {
    buscar.acessarSite();
});

When("realizo uma busca pelo Destino {string}" , (destino) => {
  buscar.buscarDestino(destino);
})

When("ordeno o resultado por {string}" , (endereco) => {
  buscar.ordernarResultado(endereco);
})

Then("o resultado com melhor avaliação e sugestão é exibido ", () => {
  buscar.checkDados();
})



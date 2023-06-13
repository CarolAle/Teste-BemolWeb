const elem = require("../elements/BuscaElements")

class Buscar {
    acessarSite() {
        cy.visit("/")
    }
    buscarEndereco(endereco) {
        cy.get(elem.inputEndereco).type(endereco) 
        cy.get(elem.buttonBusca).click()
    }

    checkEndereco(logradouro, bairro, localidade, cep) {
        cy.get(elem.logradouro).should('contain.text', logradouro)
        cy.get(elem.bairro).should('contain.text', bairro)
        cy.get(elem.localidade).should('contain.text', localidade)
        cy.get(elem.cep).should('contain.text', cep)

    }
}

module.exports = new Buscar();
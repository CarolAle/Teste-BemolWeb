const elem = require("../elements/BuscaElements")

class Buscar {
    acessarSite() {
        cy.visit("/", {
            headers: {
                'accept': 'application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed',
                'user-agent': 'axios/0.27.2'
            }
            
        })
    }
    buscarDestino(destino) {
       cy.wait(800)
        cy.get(elem.inputDestino).type(destino, {force: true}) 
        cy.get('[data-testid="suggestion-title"]').each(function ($ele, index, $list) {
            cy.log($ele.text())
            if($ele.text().includes("Manaus")) {
                cy.wrap($ele).click({force:true})
            }
        })
        cy.get(elem.buttonPesquisar).should('be.visible').click()
    }

    ordernarResultado(opt6) {
        cy.get(elem.select).click()
    }

    checkDados() {
        cy.get(elem.nome).should('be.visible')
        cy.get(elem.bairro).should('be.visible')
        cy.get(elem.avaliacao).should('be.visible')
        cy.get(elem.valor).should('be.visible')
    }
}

module.exports = new Buscar();
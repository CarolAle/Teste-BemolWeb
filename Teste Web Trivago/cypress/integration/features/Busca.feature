#Projeto usa Cucumber + Selenium + Page Objects
#language: pt

Funcionalidade: Realizar uma busca

Contexto: Acessar a página inicial
	Dado que estou na página inicial do site
	
	Cenario: Realizar uma busca ordenada
	Quando realizo uma busca pelo Destino "manaus"
	E ordeno o resultado por "Avaliação e Sugestões"
    Então um resultado com nome, avaliação e valor é exibido
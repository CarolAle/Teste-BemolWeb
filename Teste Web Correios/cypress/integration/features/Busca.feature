#Projeto usa Cucumber + Selenium + Page Objects
#language: pt

Funcionalidade: Realizar uma busca

Contexto: Acessar a página de busca
	Dado que estou na página de busca por endereço ou CEP
	
	Cenario: Realizar uma busca por CEP
	Quando realizo uma busca pelo CEP "69005-040"
    Então os dados "Rua Miranda Leão", "Centro", "Manaus/AM" e "69005-040" são exibidos

	Cenario: Realizar uma busca por Endereço 
	Quando realizo uma busca pelo Endereço "Lojas Bemol"
    Então os dados "Rua Miranda Leão", "Centro", "Manaus/AM" e "69005-901" são exibidos
	
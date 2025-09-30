# dados-atletas
Implementação de uma classe Atleta em JavaScript, que calcula e armazena parâmetros como Categoria, IMC e Média Válida (descartando notas extremas) para cada atleta...

# 🏅 dados-atletas: Orientação a Objetos para Gestão de Atletas

## Sobre o Projeto

Este projeto estende a lógica de cálculo de notas do desafio anterior, implementando-a dentro de uma estrutura de **Orientação a Objetos (Classes)** em JavaScript.

A solução é centrada na classe `Atleta`, que encapsula todos os dados (nome, idade, peso, altura, notas) e a lógica de processamento em métodos dedicados.

## Funcionalidades da Classe `Atleta`

A classe `Atleta` possui atributos e métodos para:

1.  **Cálculo da Categoria:** Determina a faixa etária do atleta (Infantil, Juvenil, Intermediário, Adulto ou Sem Categoria) com base em sua idade.
2.  **Cálculo do IMC:** Calcula o Índice de Massa Corporal através da fórmula padrão (peso / (altura * altura)).
3.  **Cálculo da Média Válida:** Aplica a regra da competição para encontrar a média das notas, **desconsiderando** a maior e a menor nota do conjunto.

## Estrutura e Métodos

A classe expõe métodos claros para obtenção de atributos e parâmetros calculados:

| Tipo | Método | Função |
| :--- | :--- | :--- |
| **Getters Simples** | `obtemNomeAtleta()` | Retorna o nome do atleta. |
| | `obtemIdadeAtleta()` | Retorna a idade do atleta. |
| **Cálculo** | `calculaCategoria()` | Retorna a categoria com base na idade. |
| | `calculaIMC()` | Retorna o valor do IMC. |
| | `calculaMediaValida()` | Retorna a média das notas válidas. |

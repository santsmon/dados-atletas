// Implementação da classe Atleta
class Atleta {
    
    // Construtor: Recebe e atribui os atributos
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // Métodos para obtenção de atributos (Getters Simples)
    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    // Método 1: Calcula a Categoria
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    // Método 2: Calcula o IMC (Fórmula: peso / (altura * altura))
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    // Método 3: Calcula a Média Válida (Lógica do Projeto 1: slice e sort)
    calculaMediaValida() {
        let notasOrdenadas = [...this.notas].sort((a, b) => a - b);
        let notasComputadas = notasOrdenadas.slice(1, 4); 

        let soma = notasComputadas.reduce((total, nota) => total + nota, 0);

        return soma / notasComputadas.length;
    }

    // Métodos para obtenção dos Parâmetros Calculados
    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

// ----------------------------------------------------------------------
// Bloco de Teste e Saída (Obrigatório para o Exemplo de Saída)
// ----------------------------------------------------------------------

// Declara o atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

// Saída no console.log() (Formato solicitado)
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`); // Usando o getter para maior conformidade
console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);

// Formata a Média Válida para o formato de saída (ponto decimal para vírgula)
let mediaValida = atleta.obtemMediaValida();
// Usa toFixed(8) para garantir precisão e substitui o ponto pela vírgula
let mediaValidaFormatada = mediaValida.toFixed(8).replace('.', ','); 
console.log(`Média válida: ${mediaValidaFormatada}`);

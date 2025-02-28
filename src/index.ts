import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { EstoqueVeiculos } from "./classes/EstoqueVeiculo";
import { filtrarPorAno, filtrarPorMarca, filtrarPorModelo } from "./utils/FiltroVeiculos";
import { Veiculo } from "./interface/Veiculo";
import { gerarRelatorio } from "./utils/RelatorioVeiculos";

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();

gerenciadorCarros.adicionar({ modelo: "Civic", ano: 2024, marca: "Honda", portas: 4, acelerar: () => "Carro acelerando" });
gerenciadorMotos.adicionar({ modelo: "S1000", ano: 2025, marca: "BMW", cilindradas: 1000, acelerar: () => "Moto acelerando"});

console.log("Lista de Carros:", gerenciadorCarros.listarVeiculos());
console.log("Lista de Motos:", gerenciadorMotos.listarVeiculos());

gerenciadorCarros.removerVeiculo("Civic");

const estoque = new EstoqueVeiculos();

estoque.adicionarEstoque("Civic", 7);
estoque.adicionarEstoque("S1000", 2);

console.log("Estoque após adição:", estoque.consultarEstoque("Civic"));
estoque.removerEstoque("Civic", 3);
console.log("Estoque após remoção:", estoque.consultarEstoque("Civic"));

console.log("Após remoção:", gerenciadorCarros.listarVeiculos());

const veiculos: Veiculo[] = [
    { modelo: "Civic", ano: 2024, marca: "Honda", acelerar: () => "Carro acelerando"},
    { modelo: "Corolla", ano: 2025, marca: "Toyota", acelerar: () => "Carro acelerando"},
    { modelo: " S1000", ano: 2025, marca: "BMW", acelerar: () => "Moto acelerando"}
];

console.log("Veículos de 2025:", filtrarPorAno(veiculos, 2025));
console.log("Veículos da marca Honda:", filtrarPorMarca(veiculos, "Honda"));
console.log("Veículo modelo Civic:", filtrarPorModelo(veiculos, "Civic"));

const veiculo: Veiculo[] = [
    { modelo: "Civic", ano: 2024, marca: "Honda", acelerar: () => "Carro acelerando" },
    { modelo: "Corolla", ano: 2025, marca: "Toyota", acelerar: () => "Carro acelerando"},
    { modelo: "S100", ano: 2025, marca: "BMW", acelerar: () => "Moto acelerando" }
];

console.log("Relatório de Veículos:\n", gerarRelatorio(veiculos));

const meuCarro: Carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2024,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};
const minhaMoto: Moto = {
    marca: "BMW",
    modelo: "S1000",
    ano: 2025,
    cilindradas: 1000,
    acelerar: () => "A moto está acelerando!"
};
console.log("Carro: ", meuCarro);
console.log(meuCarro.acelerar());
console.log("Moto: ", minhaMoto);
console.log(minhaMoto.acelerar());
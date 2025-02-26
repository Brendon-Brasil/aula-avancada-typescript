import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";

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
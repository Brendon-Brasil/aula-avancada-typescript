import { Veiculo } from './../interface/Veiculo';

export class GerenciadorVeiculos<T> {

    private veiculos: T[] = [];
    adicionar(veiculo: T): void {
        this.veiculos.push(veiculo);
    }

    listaVeiculos(veiculos:T[]):T[]{
        return veiculos;
    }

    removerVeiculo(veiculo: T, indice: number): void {
        this.veiculos.splice(indice);
    }
}

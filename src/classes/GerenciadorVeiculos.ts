import { Veiculo } from './../interface/Veiculo';

export class GerenciadorVeiculos<T extends Veiculo> {

    private veiculos: T[] = [];
    adicionar(veiculo: T): void {
        this.veiculos.push(veiculo);
    }

    listarVeiculos(): T[] {
        return this.veiculos;
    }

    removerVeiculo(modelo: string): void {
        this.veiculos = this.veiculos.filter(v => v.modelo !== modelo);
    }
}

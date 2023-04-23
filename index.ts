// Questão 01
export class Animal {
  #nome: string;
  #caracteristicas: string[];

  constructor(nome: string, caracteristicas: string[]) {
    this.#nome = nome;
    this.#caracteristicas = caracteristicas;
  }

  exibirAnimal() {
    console.log(`Animal: ${this.#nome}`);
  }

  cadastrar(caracteristica: string) {
    this.#caracteristicas.push(caracteristica);
  }

  exibirCaracteristica(): string {
    const randomIndex = Math.floor(Math.random() * this.#caracteristicas.length);
    return this.#caracteristicas[randomIndex];
  }
}


// Questão 02
export interface FilhoteInterface {
    readonly cores: string[];
    readonly pelagem: number;
    readonly tutor: string | undefined;
}
  
export class Filhote implements FilhoteInterface {
    readonly cores: string[];
    readonly pelagem: number;
    tutor: string | undefined;
  
    constructor(cores: string[], pelagem: number) {
      this.cores = cores;
      this.pelagem = pelagem;
      this.tutor = undefined;
    }
  
    adotar(tutor: string): void {
      this.tutor = tutor;
    }
}


// Questao 03
export type ComidaDePet = 'insetos' | 'frutas' | 'plantas' | 'sementes' | 'vegetais';

export abstract class PequenoRoedor {
  protected felicidade: number = 0;

  constructor(protected readonly especie: string) {}

  abstract comer(comida: ComidaDePet): boolean;

  estaFeliz(): boolean {
    return this.felicidade > 0;
  }
}

export class Furao extends PequenoRoedor {
  constructor() {
    super('Furão');
  }

  cavar(): void {
    this.felicidade++;
  }

  comer(comida: ComidaDePet): boolean {
    return comida === 'insetos' || comida === 'plantas' || comida === 'sementes' || comida === 'vegetais';
  }
}

export class Hamster extends PequenoRoedor {
  constructor() {
    super('Hamster');
  }

  correr(): void {
    this.felicidade++;
  }

  comer(comida: ComidaDePet): boolean {
    return true;
  }
}

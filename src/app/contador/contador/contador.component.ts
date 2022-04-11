import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>

        <button (click)="numero = numero + 1;"> + 1 </button>
        <span> {{numero}} </span>
        <button (click)="numero = numero - 1;"> - 1 </button>

        <br><br>
        <span>Con métodos</span>
        <br>

        <button (click)="sumar();"> + 1 </button>
        <span> {{numero}} </span>
        <button (click)="restar();"> - 1 </button>

        <br><br>
        <span>Otra forma con métodos</span>
        <br>

        <button (click)="acumular(1);"> + 1 </button>
        <span> {{numero}} </span>
        <button (click)="acumular(-1);"> - 1 </button>

        <br><br>
        <h1>La base es: <strong>{{ base }}</strong></h1>
        <br>

        <button (click)="acumular(base);"> + {{ base }} </button>
        <span> {{numero}} </span>
        <button (click)="acumular(-base);"> - {{ base }} </button>
    `
})

export class ContadorComponent{
    public titulo: string = 'Contador App';
    public numero: number = 0;
    public base: number = 5;

    sumar(){
        this.numero+=1;
    }
    restar(){
        this.numero-=1;
    }
    acumular( valor: number){
        this.numero+= valor;
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  get borradoVacio():boolean{
    if (this.heroeBorrado!=''){
      return true;
    } else {
      return false;
    }
  }
  get mostrarBorrado():string{
    return this.heroeBorrado;
  }

  borraItem():void{
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

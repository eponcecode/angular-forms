import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls:['./side-menu.component.css']
})
export class SideMenuComponent {
  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    }
  ]
  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    }
  ]
  authMenu: MenuItem[] = [
  {
    texto: 'Registro',
    ruta: './auth/registro'
  }]/*,
  {
    texto: 'Login',
    ruta: './auth/login'
  }*/
  selectoresMenu: MenuItem[] = [
    {
      texto: 'Selectores Anidados',
      ruta: './selectors'
    }
  ]
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  miNombre: string;
  miImagen: string;
  miElemento: any;
  miDiv: string;

  constructor() { }

  ngOnInit(): void {

    this.miNombre = 'Jorge Torres A';
    this.miImagen = 'https://www.ucreativa.com/wp-content/themes/ucreativa-sage-template/dist/images/compania-convenio-6.png';
  }


  miFuncion(){
    this.miDiv = '<h3>Mi elemento h3</3>'
    this.miDiv = this.miDiv + '<h5>otro elemento</h5>';
  }



}

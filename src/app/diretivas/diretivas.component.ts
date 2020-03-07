import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styles: ['.block1{background-color:#d5f4e6;margin:10px;padding:10px;}',
          '.block2{background-color:#d5f4ff;margin:10px;padding:10px;}',
          '.block3{background-color:#d5cce4;margin:10px;padding:10px;}',
          '.block4{background-color:#d5ace6;margin:10px;padding:10px;}'
  ]
})
export class DiretivasComponent implements OnInit {

  nome: string = "";
  email: string = "";
  mostrar: boolean = true;
  selecao = "nome";
  opcao = ['nome', 'endereco', 'telefone', 'outros',]
  meuFavorito:boolean = false;

  constructor() { }

  ngOnInit() {
  }


  alternar() {
    this.mostrar = !this.mostrar;
  }

onClick(){
  this.meuFavorito = !this.meuFavorito
}

}
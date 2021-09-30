import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bAtivo: boolean = false;
  cAtivo: string = '';

  ngOnInit(): void {
  }

  fnMenu(){
    if(this.bAtivo == false){
      this.cAtivo = 'active';
    } else {
      this.cAtivo = '';
    }
    this.bAtivo = !this.bAtivo;
  }

  fecharMenu(){
    this.cAtivo = '';
  }

}

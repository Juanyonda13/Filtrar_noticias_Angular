import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit {
  @Input() lisNoticias:any
  constructor() { }

  ngOnInit(): void {
  }

}

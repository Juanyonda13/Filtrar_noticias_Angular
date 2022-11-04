import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lisNoticias:any[]=[]
  loading=false
  constructor(private noticiasService:NoticiaService){

  }
  title = 'noticias';
  buscarNoticias(parametros:any){
    this.loading=true
    this.lisNoticias=[]
    this.noticiasService.getNoticias(parametros).subscribe(data=>{
      this.lisNoticias=data.articles
      this.loading=false
    },error=>{
      console.log(error),
      this.loading=false
    })
  }
}

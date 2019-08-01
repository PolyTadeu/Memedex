import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  meme: any={
    nome: '',
    descricao:'',
    nivel:'', 
    imagem:''

  }
  searchtext: string;
  form: any ={
    metodo:'',
    nome: '',
    descricao:'',
    nivel:'', 
    imagem:''
  }
  constructor( public memeService: MemeService ) { }

  getMeme(id):void{
    console.log(id);
    this.memeService.getMeme(id).subscribe(
      (res)=>{
        this.meme = res[0];
        console.log(res);
    });
  }
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form)
    if(this.form.metodo=="post"){
      this.memeService.createMeme(this.meme).subscribe(
        (res)=> {
          console.log(res);
        });
    }
    else if(this.form.metodo== "put"){
      this.memeService.updateMeme(this.meme, this.searchtext).subscribe(
        (res)=> {
          console.log(res);
        }
      );
    }

    else if (this.form.metodo=="delete")
    {
      this.memeService.deleteMeme(this.searchtext).subscribe(
        (res)=> {
          console.log(res);
        }
      );
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vitesse',
  templateUrl: './vitesse.component.html',
  styleUrls: ['./vitesse.component.css']
})
export class VitesseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   this.vitesse = "vitesse N";
   this.auth = false;
   this.couleur = "";
  }

  vitesse : string;
  rapport : string;
  auth : Boolean;
  couleur : string;

  vitesse5(){
     if(this.vitesse == "vitesse 4"){
      this.vitesse = "vitesse 5";
      this.rapport = "OK";
      this.couleur = "vert";
}else{
      this.rapport = "KO";
      this.couleur = "rouge";
}


  }

  vitesse4(){
     if(this.vitesse == "vitesse 3" && this.auth == true){
      this.vitesse = "vitesse 4";
      this.rapport = "OK";
      this.couleur = "vert";
}else{
   this.rapport = "KO";
   this.couleur = "rouge";
}

  }

  vitesse3(){
     if(this.vitesse == "vitesse 2" || this.vitesse == "vitesse 5"){
      this.vitesse = "vitesse 3";
      this.rapport = "OK";
      this.couleur = "vert";
      setTimeout(
         () => {
           this.auth = true;
         }, 10000
       );
}else{
   this.rapport = "KO";
   this.couleur = "rouge";
}

  }

  vitesse2(){
     if(this.vitesse == "vitesse 1"){
      this.vitesse = "vitesse 2";
      this.rapport = "OK";
      this.couleur = "vert";
}else{
   this.rapport = "KO";
   this.couleur = "rouge";
}

  }

  vitesse1(){
     if(this.vitesse == "vitesse N" || this.vitesse == "vitesse 3" || this.vitesse =="vitesse 4"){
      this.vitesse = "vitesse 1";
      this.rapport = "OK";
      this.couleur = "vert";
}else{
   this.rapport = "KO";
   this.couleur = "rouge";
}

  }

  vitessen(){
     if(this.vitesse == "vitesse R" || this.vitesse == "vitesse 5" || this.vitesse == "vitesse 1"){
      this.vitesse = "vitesse N";
      this.rapport = "OK";
      this.couleur = "vert";
}else{
   this.rapport = "KO";
   this.couleur = "rouge";
}

  }

  vitesser(){
     if(this.vitesse == "vitesse N" || this.vitesse == "vitesse 2"){
      this.vitesse = "vitesse R";
      this.rapport = "OK";
      this.couleur = "vert";
}else{
   this.rapport = "KO";
   this.couleur = "rouge";
}

  }


}

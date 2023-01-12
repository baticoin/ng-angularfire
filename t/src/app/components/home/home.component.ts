import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/app/models/Kategori';
import { DataService } from 'src/app/services/data.service';
import { FbservisService } from 'src/app/services/fbservis.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  odevler!:[Kategori]
  sec:string[]= [];
  favButon = 'false';
  favButon2 = "false";
  favButon3 = "false";
  favButon4 = "false";
  
  constructor(
    public servis: DataService,
    public fbservis: FbservisService
  ) {

  }

  ngOnInit() {
    this.fbservis.aktifUye.subscribe(d => {
      console.log(d);
    });

  }

  favbuton1(){
    if(this.favButon == 'false'){
      this.favButon = "true";
    } else if(this.favButon == 'true'){
      this.favButon = "false";
    }

  }
  select(a:string){
    if (this.sec.indexOf(a)<0){
      this.sec.push(a);
      

    }
     
  }
  sil(b:string){
    console.log(b);
    if (b.length>0){
      this.sec.indexOf(b)
    this.sec.splice(this.sec.indexOf(b),1);
    console.log(this.sec)
   

    }
    
  }
  
  favbuton2(){
    if(this.favButon2 == 'false'){
      this.favButon2 = "true";
    } else if(this.favButon2 == 'true'){
      this.favButon2 = "false";
    }
  }
  favbuton3(){
    if(this.favButon3 == 'false'){
      this.favButon3 = "true";
    } else if(this.favButon3 == 'true'){
      this.favButon3 = "false";
    }
  }
  favbuton4(){
    if(this.favButon4 == 'false'){
      this.favButon4 = "true";
    } else if(this.favButon4 == 'true'){
      this.favButon4 = "false";
    }
  }
}


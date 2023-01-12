import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FbservisService } from './services/fbservis.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public servis: DataService,
    public fbServis : FbservisService,
    public router:Router

  ) { }
  ngOnInit(): void {
  }
  OturumKapat() {
    this.fbServis.OturumKapat().subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}

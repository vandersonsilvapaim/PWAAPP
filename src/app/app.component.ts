import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pwa-app';

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if(confirm("Uma nova versão está disponivel, atualizar ?")) { window.location.reload(); }
      });
    }
  }

}

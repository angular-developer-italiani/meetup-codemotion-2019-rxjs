import { Component } from '@angular/core';
import { RXJS_MEETUP_CODEMOTION } from './data/rxjs-meetup-codemotion';

@Component({
  selector: 'fb-root',
  template: `
    <div class="container" style="max-width: 400px">
      <div *ngFor="let speaker of speakers">
        <!--<div>{{speaker.author}}</div>-->
        <div class="text-center mb-3">
          <img [src]="'assets/' + speaker.thumb" width="100%" style="max-width: 250px">
        </div>
        
        <div *ngFor="let snippet of speaker.snippets; let i = index">
          <h5>{{i + 1}}) {{snippet.title}}</h5>
          
          <div class="d-flex justify-content-between">
            <div>
              <a 
                *ngIf="snippet.urlFinal as urlFinal" 
                class="text-secondary"
                [href]="urlFinal" 
              >
                <i class="fa fa-code"></i> Source Code
              </a>
            </div>
            <div>
              <a 
                *ngIf="snippet.urlStart as urlStart" 
                class="text-success"
                [href]="urlStart" 
              >
                <i class="fa fa-play-circle"></i> Playground
              </a>
            </div>
          </div>
          
          <hr>
        </div>
      </div>
    </div>  
  `,
  styles: []
})
export class AppComponent {
  speakers = RXJS_MEETUP_CODEMOTION;

  constructor() {
  }
}

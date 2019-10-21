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
        
        <div *ngFor="let snippet of speaker.snippets">
          <h6>{{snippet.title}}</h6>
          
          <div class="d-flex justify-content-between">
            <div>
              <a [href]="urlFinal" *ngIf="snippet.urlFinal as urlFinal">
                <i class="fa fa-code"></i> Source Code
              </a>
            </div>
            <div>
              <a [href]="urlStart" *ngIf="snippet.urlStart as urlStart">
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imgUrls = [
    'https://placekitten.com/500/600',
    'https://placekitten.com/400/500',
    'https://placekitten.com/600/700',
    'https://placekitten.com/500/700',
    'https://placekitten.com/700/800',
    'https://placekitten.com/800/900',
    'https://placekitten.com/300/400',
    'https://placekitten.com/600/700',
    'https://placekitten.com/500/700',
    'https://placekitten.com/700/800',
    'https://placekitten.com/50/50',
  ]

  constructor() {}

}

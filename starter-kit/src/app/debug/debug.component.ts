import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {
  version: string | null = environment.version;

  websitesProvidedServiceDescription: string = 'Websites for small business owners.';
  webapplicationProvidedServiceDescription: string =
    'Wide Variety of Web Applications in a plethora of differnt languages.';
  outsideworkProvidedServiceDescription: string =
    "Anything Techy I'm involved in that would not fit in the other categories";

  quote1 = 'Find a quote to live by';
  author1 = '-Whoeve R. Itis';
  constructor() {}

  ngOnInit() {}
}

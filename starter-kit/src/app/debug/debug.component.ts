import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {
  version: string | null = environment.version;

  organizedIntroTitle = 'Organized.';
  organizedIntroText = "I'm always hella organized and stuff about lorem ipsum example or is it sample text.";
  resourcefulIntroTitle = 'Resourceful.';
  resourcefulIntroText =
    'Resourcefulness is a great trait to have. I hope many of my next wave of co-workers behave like this.';
  creativeIntroTitle = 'Creative.';
  creativeIntroText =
    "Creativity is a great talent to harness. I have harness the power of the castle of Grey Skull. That's from a cartoon that's old AF.";

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

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

  aboutTitle = 'FrontEnd.';
  aboutText =
    'A few years ago I made a concerted push towards moving from backend development to frontend development. Frontend development is blah blah bloah lorem sorta ipsum situation. Since then...';
  angularValue = '83';
  awsValue = '67';
  sassValue = '80';

  websitesProvidedServiceDescription: string = 'Websites for small business owners.';
  webapplicationProvidedServiceDescription: string =
    'Wide Variety of Web Applications in a plethora of differnt languages.';
  outsideworkProvidedServiceDescription: string =
    "Anything Techy I'm involved in that would not fit in the other categories";

  quote1 = 'Find a quote to live by';
  author1 = '-Whoeve R. Itis';

  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];

  constructor() {}

  ngOnInit() {}
}

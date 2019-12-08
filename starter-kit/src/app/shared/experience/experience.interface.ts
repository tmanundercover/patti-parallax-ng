export class ExperienceInterface {
  title: string;
  location: { city: string; state: string };
  dutiesDescription: string[] | string;
  dates: { start: Date; end: Date };
  company: string;
}

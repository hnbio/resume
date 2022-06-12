import { Component } from '@angular/core';

import resume_md from './resume_md';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';

  resume = resume_md
}

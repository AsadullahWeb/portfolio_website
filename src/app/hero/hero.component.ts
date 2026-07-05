import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  name = 'Muhammad Asadullah';

  description =
    'I build modern, responsive and beautiful web applications using Angular, TypeScript and modern UI technologies.';

  ngAfterViewInit(): void {

    const options = {

      strings: [
        'Angular Developer',
        'Mearn Stack Developer',
        'UI / UX Designer',
        'Full Stack Learner',
        'Freelancer'
      ],

      typeSpeed: 70,

      backSpeed: 40,

      backDelay: 1500,

      loop: true,

      showCursor: true,

      cursorChar: '|'

    };

    new Typed('#typing', options);

  }

}
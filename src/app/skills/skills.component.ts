import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {

  skills = [
    { name: 'HTML', value: 95, current: 0 },
    { name: 'CSS', value: 90, current: 0 },
    { name: 'JavaScript', value: 85, current: 0 },
    { name: 'TypeScript', value: 80, current: 0 },
    { name: 'Angular', value: 85, current: 0 },
    { name: 'Python', value: 75, current: 0 }
  ];

  animated = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting && !this.animated) {

          this.animated = true;

          this.startAnimation();

        }

      });

    }, { threshold: 0.4 });

    observer.observe(this.el.nativeElement);

  }

  startAnimation() {

    this.skills.forEach(skill => {

      let count = 0;

      const timer = setInterval(() => {

        if (count >= skill.value) {

          clearInterval(timer);

        } else {

          count++;

          skill.current = count;

        }

      }, 20);

    });

  }

}
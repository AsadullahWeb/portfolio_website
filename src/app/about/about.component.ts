import {
  Component,
  AfterViewInit,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  projects = 0;
  clients = 0;
  years = 0;
  dedication = 0;

  private animated = false;

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting && !this.animated) {

            this.animated = true;

            this.startCounters();

          }

        });

      },

      {
        threshold: 0.4
      }

    );

    observer.observe(this.element.nativeElement);

  }

  startCounters() {

    this.animateCounter('projects',20,40);

    this.animateCounter('clients',15,55);

    this.animateCounter('years',2,600);

    this.animateCounter('dedication',100,20);

  }

  animateCounter(
    property: keyof AboutComponent,
    target:number,
    speed:number
  ){

    const timer = setInterval(()=>{

      if((this[property] as number) < target){

        (this[property] as number)++;

      }

      else{

        clearInterval(timer);

      }

    },speed);

  }

}
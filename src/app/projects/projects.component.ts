import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [

    {
      title: 'Portfolio Website',
      image: 'assets/project1.jpg',
      desc: 'Modern Angular Portfolio Website',
      tech: 'Angular • TypeScript • CSS • JavaScript • NodeJs '
    },

    {
      title: 'Hotel Management',
      image: 'assets/project2.jpg',
      desc: 'Complete Hotel Management System',
      tech: 'Angular • TypeScript • JavaScript'
    },

    {
      title: 'Weather App',
      image: 'assets/project3.jpg',
      desc: 'Live Weather API Application',
      tech: 'API • Angular'
    },

    {
      title: 'Chat Application',
      image: 'assets/project4.jpg',
      desc: 'Realtime Chat App',
      tech: 'Firebase • Angular'
    },

    {
      title: 'E-Commerce',
      image: 'assets/project5.jpg',
      desc: 'Online Shopping Website',
      tech: 'Angular • css • typescript • NodeJs • JavaScript • Bootstrap'
    },

    {
      title: 'Admin Dashboard',
      image: 'assets/project6.jpg',
      desc: 'Responsive Admin Panel',
      tech: 'Angular • Charts'
    }

  ];

}
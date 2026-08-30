import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Service {
  code: string;
  title: string;
  desc: string;
}

interface Skill {
  name: string;
  level: number;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

interface Project {
  name: string;
  category: 'Web App' | 'Dashboard' | 'Utility';
  tag: string;
  desc: string;
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  activeSection: string = 'home';

  setActive(section: string): void {
    this.activeSection = section;
  }
  readonly name = 'Mohamed Ibrahem';
  readonly title = 'Front-End Developer';
  readonly email = 'moibrahem.aboelenen@gmail.com';
  readonly phone1 = '+20 102 089 7534';
  readonly phone2 = '+20 155 550 9466';

  readonly services: Service[] = [
    { code: '<>', title: 'Responsive Interfaces', desc: 'Building layouts that hold up cleanly from mobile to desktop using HTML5, CSS3 and modern responsive patterns.' },
    { code: 'JS', title: 'JavaScript (ES6+)', desc: 'Interactive, dynamic front-ends built with modern JavaScript — from DOM logic to fetch-driven UI.' },
    { code: 'ng', title: 'Angular Applications', desc: 'Component-driven Angular apps with clean structure, routing and reusable UI building blocks.' },
    { code: 'TS', title: 'TypeScript', desc: 'Typed, maintainable front-end code that catches mistakes before they reach the browser.' },
    { code: '▤', title: 'Bootstrap UI Kits', desc: 'Fast, consistent UI assembly with Bootstrap — grid systems, components and utility classes.' },
  ];

  readonly skills: Skill[] = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'Angular', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'Bootstrap', level: 85 },
  ];

  readonly experience: ExperienceItem[] = [
    {
      role: 'IT Help Desk Administrator',
      company: 'Al Maaref School',
      period: 'Jan 2026 — Present',
      bullets: [
        'Provide technical support to administrative staff, teachers and end-users.',
        'Troubleshoot software and system issues and support day-to-day technical operations.',
        'Configure and maintain workstations and software environments.',
      ],
    },
    {
      role: 'Premium Technical Support Specialist',
      company: 'WE — Telecom Egypt',
      period: 'Mar 2025 — Dec 2025',
      bullets: [
        'Delivered Tier-2 technical support to enterprise and high-priority clients.',
        'Diagnosed and resolved complex technical and connectivity incidents.',
        'Performed root-cause analysis on escalated technical problems within SLAs.',
      ],
    },
    {
      role: 'IT Help Desk Administrator',
      company: 'Al Maaref School',
      period: '2023 — 2025',
      bullets: [
        'Maintained end-user devices and supported software deployments.',
        'Supported local network resources, shared file access and system updates.',
      ],
    },
  ];

  readonly projects: Project[] = [
    {
      name: 'E-Commerce Store',
      category: 'Web App',
      tag: 'Web App',
      desc: 'A multi-page online store front-end with product listings and cart-style browsing flow.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      demoUrl: 'https://mohamedibrahem99999.github.io/E-Commerce/',
      repoUrl: 'https://github.com/mohamedibrahem99999/E-Commerce',
      image: 'assets/projects/ecommerce.jpg',
    },
    {
      name: 'Weather App',
      category: 'Utility',
      tag: 'Utility',
      desc: 'Looks up live weather by city using a public weather API and renders it in a clean card UI.',
      tech: ['JavaScript', 'API', 'CSS3'],
      demoUrl: 'https://mohamedibrahem99999.github.io/Weather/',
      repoUrl: 'https://github.com/mohamedibrahem99999/Weather',
      image: 'assets/projects/weather.jpg',
    },
    {
      name: 'To-Do List',
      category: 'Utility',
      tag: 'Utility',
      desc: 'A task manager for adding, completing and removing to-dos with state kept in the browser.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      demoUrl: 'https://mohamedibrahem99999.github.io/To-Do-List/home',
      repoUrl: 'https://github.com/mohamedibrahem99999/To-Do-List',
      image: 'assets/projects/todo.jpg',
    },
    {
      name: 'Admin Dashboard',
      category: 'Dashboard',
      tag: 'Dashboard',
      desc: 'An admin panel layout with a sidebar, data widgets and a structured content dashboard.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      demoUrl: 'https://mohamedibrahem99999.github.io/Admin-Dashboard/dashboard',
      repoUrl: 'https://github.com/mohamedibrahem99999/Admin-Dashboard',
      image: 'assets/projects/dashboard.jpg',
    },
    {
      name: 'Calculator',
      category: 'Utility',
      tag: 'Utility',
      desc: 'A functioning calculator UI handling basic arithmetic operations with keyboard-style input.',
      tech: ['JavaScript', 'CSS3'],
      demoUrl: 'https://mohamedibrahem99999.github.io/Calculator/',
      repoUrl: 'https://github.com/mohamedibrahem99999/Calculator',
      image: 'assets/projects/calculator.jpg',
    },
    {
      name: 'Clock',
      category: 'Utility',
      tag: 'Utility',
      desc: 'A live, continuously updating clock/time display built with vanilla JavaScript.',
      tech: ['JavaScript', 'CSS3'],
      demoUrl: 'https://mohamedibrahem99999.github.io/Time/',
      repoUrl: 'https://github.com/mohamedibrahem99999/Time',
      image: 'assets/projects/clock.jpg',
    },
  ];

  readonly filters: Array<Project['category'] | 'All'> = ['All', 'Web App', 'Dashboard', 'Utility'];
  activeFilter: Project['category'] | 'All' = 'All';
  failedImages: Record<string, boolean> = {};

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') return this.projects;
    return this.projects.filter((p) => p.category === this.activeFilter);
  }

  setFilter(f: Project['category'] | 'All'): void {
    this.activeFilter = f;
  }

  readonly socials = [
    { name: 'LinkedIn', handle: '@mohamed-ibrahem', icon: 'in', url: 'https://www.linkedin.com/in/mohamed-ibrahem-375a4835b' },
    { name: 'GitHub', handle: '@MohamedIbrahem99999', icon: 'gh', url: 'https://github.com/MohamedIbrahem99999' },
    { name: 'Instagram', handle: '@mohamedibrahem2050', icon: 'ig', url: 'https://www.instagram.com/mohamedibrahem2050' },
    { name: 'Facebook', handle: 'Mohamed Ibrahem', icon: 'fb', url: 'https://www.facebook.com/share/14mg7CAjHxm/' },
  ];
}

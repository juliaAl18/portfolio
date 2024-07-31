import { Component, HostListener } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('0.5s', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})

export class ProjetosComponent {

  projetos = [
    {
      nome: 'Cliníca de Odontologia - Frontend',
      descricao: 'Um projeto incrível que vai desde funcionalidades básicas até as mais avançadas. Ele oferece uma interface intuitiva e recursos robustos que atendem desde as necessidades mais simples até as mais complexas. Utiliza tecnologias modernas para garantir uma experiência fluida e eficiente, adaptando-se a diferentes cenários e requisitos.',
      link: 'https://github.com/juliaAl18/projeto-clinica-frontend',
      imagensTecnologias: ['assets/angular-logo.png', 'assets/typescript.png', 'assets/css.png', 'assets/html.png']
    },
    {
      nome: 'Cliníca de Odontologia - Backend',
      descricao: 'Um projeto focado em otimização e desempenho, oferecendo funcionalidades abrangentes, incluindo o cadastro de pacientes e equipamentos, conferência de faturamento, envio de emails e SMS, entre outras funcionalidades.',
      link: 'https://github.com/juliaAl18/projeto-clinica-backend',
      imagensTecnologias: ['assets/node-logo.png', 'assets/js.png']
    },
    {
      nome: 'Doe Sangue',
      descricao: 'Um sistema que conecta doadores a hemocentros, permitindo o agendamento de doações e acompanhamento do histórico. Inclui um feed RSS para fornecer atualizações em tempo real sobre necessidades urgentes de sangue e campanhas de doação.',
      link: 'https://github.com/juliaAl18/doe-sangue',
      imagensTecnologias: ['assets/angular-logo.png', 'assets/typescript.png', 'assets/css.png', 'assets/html.png']
    },
    {
      nome: 'Feed RSS',
      descricao: 'Um projeto desenvolvido para fornecer atualizações em tempo real sobre conteúdos de interesse, como notícias e artigos. Ele permite a personalização das fontes de notícias e o gerenciamento dos feeds, oferecendo uma interface intuitiva para acompanhar as últimas atualizações de maneira eficiente.',
      link: 'https://github.com/juliaAl18/feed-rss',
      imagensTecnologias: ['assets/node-logo.png', 'assets/js.png']
    },
  ];

  @HostListener('window:scroll', ['$event'])
  Scroll() {
    this.onScroll();
  }

  onScroll() {
    const projectContainers = document.querySelectorAll('.project-container');
    projectContainers.forEach((container) => {
      const elem = container as HTMLElement;
      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        elem.classList.add('in-view');
      } else {
        elem.classList.remove('in-view');
      }
    });
  }


}

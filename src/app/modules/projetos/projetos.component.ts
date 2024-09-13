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
      nome: 'Feed RSS - Backend',
      descricao: 'Um projeto desenvolvido para fornecer atualizações em tempo real sobre conteúdos de interesse, como notícias e artigos. Ele permite a personalização das fontes de notícias e o gerenciamento dos feeds, oferecendo uma interface intuitiva para acompanhar as últimas atualizações de maneira eficiente.',
      link: 'https://github.com/juliaAl18/feed-rss',
      imagensTecnologias: ['assets/node-logo.png', 'assets/js.png']
    },
    {
      nome: 'InovaTech',
      descricao: 'O projeto envolve a criação de uma landing page atrativa e funcional para a InovaTech, especializada na venda de telefones e serviços de assistência técnica. A página será otimizada para dispositivos móveis e desktop, apresentando um design moderno que destaca os produtos disponíveis, promoções e a expertise em assistência técnica. Incluiremos um feed automatizado do Instagram para mostrar as postagens mais recentes e interações com os clientes, além de seções dedicadas a informações sobre os serviços oferecidos.',
      link: 'https://github.com/juliaAl18/inovatechs',
      imagensTecnologias: ['assets/angular-logo.png','assets/node-logo.png', 'assets/js.png', 'assets/typescript.png']
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

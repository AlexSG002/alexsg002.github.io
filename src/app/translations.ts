import { Language } from './language';

export const translations: Record<Language, any> = {
  es: {
    nav: {
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
      language: 'EN',
    },

    hero: {
      eyebrow: 'JAVA & FULL STACK DEVELOPER',
      titleStart: 'Construyendo aplicaciones web',
      titleEnd: 'con Java & Angular.',
      description:
        'Desarrollador Full Stack especializado en Java y Spring Boot, con experiencia creando aplicaciones web, APIs REST y soluciones modernas con Angular.',
      projectsButton: 'Ver mis proyectos',
      githubButton: 'GitHub',
    },

    stack: {
      title: 'TECNOLOGÍAS',
    },

    projects: {
      label: 'PROYECTOS',
      title: 'Cosas que he construido.',
      description:
        'Una selección de proyectos en los que he aplicado mis conocimientos de desarrollo backend y frontend.',

      meetingBooking: {
        title: 'Meeting Booking',
        description:
          'Sistema Full Stack para la reserva de salas, con una API REST desarrollada con Spring Boot y una interfaz web desarrollada con Angular.',
      },

      gestienerCRM: {
        title: 'GestienerCRM',
        description:
          'Aplicación CRM Full Stack para la gestión de información y procesos empresariales, desarrollada con Java, Spring Boot, Angular y MariaDB.',
        details: 'Proyecto desarrollado bajo acuerdo de confidencialidad',
      },

      gameLog: {
        title: 'GameLog TFG',
        description:
          'Aplicación android para realizar seguimiento de videojuegos jugados por el usuario, desarrollada en Java y Android Studio con Firebase para el almacenamiento de datos.',
      },

      deittaCRUD: {
        title: 'Prueba Técnica para Deitta (CRUD)',
        description:
          'API RESTful CRUD de backend desarrollada como parte de la prueba técnica para el puesto de Backend Developer en Deitta, orientada a la gestión de productos.',
      },
    },

    about: {
      label: 'SOBRE MÍ',
      title: 'Desarrollador enfocado en crear aplicaciones que funcionan.',
      paragraph1:
        'Soy desarrollador Full Stack especializado en Java y Spring Boot, con experiencia desarrollando aplicaciones web y APIs REST.',
      paragraph2:
        'Me gusta trabajar en todo el stack, desde la arquitectura del backend y las bases de datos hasta el desarrollo de interfaces modernas con Angular.',
      github: 'Ver más en GitHub →',
    },
  },

  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      language: 'ES',
    },

    hero: {
      eyebrow: 'JAVA & FULL STACK DEVELOPER',
      titleStart: 'Building web applications',
      titleEnd: 'with Java & Angular.',
      description:
        'Full Stack Developer specialized in Java and Spring Boot, with experience building web applications, REST APIs and modern solutions with Angular.',
      projectsButton: 'View my projects',
      githubButton: 'GitHub',
    },

    stack: {
      title: 'TECH STACK',
    },

    projects: {
      label: 'PROJECTS',
      title: "Things I've built.",
      description:
        'A selection of projects where I have applied my backend and frontend development skills.',

      meetingBooking: {
        title: 'Meeting Booking',
        description:
          'Full Stack room reservation system with a REST API built with Spring Boot and a web interface developed with Angular.',
      },

      gestienerCRM: {
        title: 'GestienerCRM',
        description:
          'Full Stack CRM application for managing business information and processes, developed using Java, Spring Boot, Angular, and MariaDB.',
        details: 'Project developed under non-disclosure agreement',
      },

      gameLog: {
        title: 'GameLog TFG',
        description:
          'Android app designed to follow-up on users played videogames developed in Java and Android Studio with Firebase for data managing',
      },

      deittaCRUD: {
        title: 'Deitta CRUD Technical Assessment',
        description:
          'Backend CRUD RESTful API developed as part of the Deitta Backend Developer technical assessment develooped for managing products',
      },
    },

    about: {
      label: 'ABOUT ME',
      title: 'Developer focused on building things that work.',
      paragraph1:
        'I am a Full Stack Developer specialized in Java and Spring Boot, with experience building web applications and REST APIs.',
      paragraph2:
        'I enjoy working across the entire stack, from backend architecture and databases to modern Angular interfaces.',
      github: 'More on GitHub →',
    },
  },
};

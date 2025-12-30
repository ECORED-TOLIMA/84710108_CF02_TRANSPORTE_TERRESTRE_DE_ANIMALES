export default {
  global: {
    componenteFormativo: 'Manual de procedimiento de transporte terrestre',
    descripcionCurso:
      'Este componente profundiza en los procedimientos técnicos para movilizar animales en pie conforme a la normativa vigente. Desarrolla competencias para planear el viaje, manejar los animales con bajo estrés, aplicar criterios de bienestar, ejecutar protocolos de bioseguridad y responder a contingencias durante el transporte terrestre.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnica de planificación, plan y orden de viaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Especie animal en pie',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de separación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Etapas fisiológicas del animal, comportamiento y sentidos animal',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Técnicas de elección de vehículo según especie animal',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Personas del proceso de transporte animal en pie',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Manejo de personal y obligaciones de los operarios',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Normativa de seguridad y salud en el trabajo',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Listas de chequeo y tiempos máximos de recorrido',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo:
              'Tipos de formatos y técnicas de diligenciamiento de plan de ruta o plan de viaje',
            hash: 't_1_9',
          },
          {
            numero: '1.10',
            titulo: 'Lugares de sombra y stress térmico',
            hash: 't_1_10',
          },
          {
            numero: '1.11',
            titulo: 'Planes de contingencia',
            hash: 't_1_11',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Proceso precargue de animales en pie',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de selección',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de manejo animal y condiciones de salud',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicas de precargue',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Técnicas de manejo de utensilios e implementos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Embarcaderos etológicos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Técnica de colocación de rampas y plataforma',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Características de carga animal',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Tipos de adaptación de animales en pie',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Camas de superficie para transporte',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Responsabilidad de revisión de carga animal',
            hash: 't_2_10',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de transporte de animales en pie',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Periodos de descanso, tipos paradas y tipos de inspecciones en animales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Métodos de suministro de agua y alimentos en trayectos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de suministro de agua y alimento',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Técnicas de conducción en transporte de animales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Técnicas de inspección',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Técnicas de supervisión de animales en trayecto',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo:
              'Técnicas de control de condiciones térmicas y tipos de riesgos',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Técnicas de aspersión a animales en pie',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo:
              'Animales caídos, enfermos, lesionados, atrapados y muertos',
            hash: 't_3_9',
          },
          {
            numero: '3.10',
            titulo: 'Técnica de reporte de animales con novedades',
            hash: 't_3_10',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_84710108_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normativa Completa',
      referencia:
        'Ministerio de Transporte (2022). <em>Resolución 20223040006915 de 2022</em>.',
      tipo: 'Documento Oficial (PDF)',
      link:
        'https://www.ica.gov.co/getattachment/b3a62883-a4a3-4b68-809d-c5e39622d14b/2022R2022304006915.aspx',
    },
    {
      tema: 'Fichas Técnicas Vehículos',
      referencia:
        'Ministerio de Transporte. (2004). <em>Resolución 4100 de 2004</em>.',
      tipo: 'Documento Oficial (PDF)',
      link: 'Proporcionar enlace a la resolución de tipología vehicular.',
    },
    {
      tema: 'Manejo de Aves',
      referencia:
        'FENAVI. (s.f.).<em> Guías de Buenas Prácticas Avícolas</em>.',
      tipo: 'Manual / Guía',
      link:
        'Búsqueda en el portal de la Federación Nacional de Avicultores de Colombia.',
    },
  ],
  glosario: [
    {
      termino: 'Aptitud (para el transporte)',
      significado:
        'condición física y de salud de un animal que le permite soportar el viaje sin sufrimiento innecesario. Incluye estar sano, no gestante (último tercio) y poderse mantener en pie.',
    },
    {
      termino: 'Ayuno',
      significado:
        'período controlado antes del embarque en el que se retira el alimento (no el agua) para disminuir el estrés fisiológico y la defecación durante el viaje.',
    },
    {
      termino: 'Densidad de carga',
      significado:
        'relación entre el número de animales, su peso y el espacio disponible (m²) en el piso del vehículo, crucial para evitar el hacinamiento y las lesiones.',
    },
    {
      termino: 'Embarque',
      significado:
        'procedimiento de subir los animales al vehículo. Debe realizarse de manera tranquila, sin maltrato y utilizando instalaciones (rampas) adecuadas.',
    },
    {
      termino: 'EPP',
      significado:
        'elementos de protección personal. Equipo que debe usar el operario para protegerse de riesgos (guantes, gafas, botas) durante el manejo o la desinfección.',
    },
    {
      termino: 'Etología',
      significado:
        'ciencia que estudia el comportamiento natural de los animales.',
    },
    {
      termino: 'GSMI',
      significado:
        'guía sanitaria de movilización interna. Documento oficial expedido por el ICA que autoriza el transporte, certificando origen, destino y condición sanitaria.',
    },
    {
      termino: 'Higiene postural',
      significado:
        'conjunto de normas y técnicas para mantener una posición correcta del cuerpo en el trabajo (conducir, levantar cargas) y prevenir lesiones.',
    },
    {
      termino: 'Aprendizaje y desarrollo',
      significado:
        'siglas para limpieza y desinfección. Protocolo de bioseguridad obligatorio para los vehículos después de cada transporte.',
    },
    {
      termino: 'Plan de contingencia',
      significado:
        'documento que establece los procedimientos a seguir en caso de emergencias (accidentes, fallas mecánicas, animales heridos) durante el transporte.',
    },
    {
      termino: 'Zona de fuga',
      significado:
        'término etológico que define el espacio personal o “burbuja” de un animal. El operario la usa para guiar al animal sin invadirlo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Transporte. (2022). <em>Resolución 20223040006915 del 1 de noviembre de 2022. Por la cual se adopta el Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie</em>.',
    },
    {
      referencia:
        'Ministerio de Transporte. (2004). <em>Resolución 4100 de 2004. Por la cual se adopta la NTC 4788 para la designación y clasificación de vehículos de carga</em>.',
    },
    {
      referencia:
        'Decreto 1072 de 2015. (2015). <em>Decreto Único Reglamentario del Sector Trabajo</em>. Ministerio del Trabajo.',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (sf). <em>Bienestar Animal</em>.',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/bienestar-animal-1',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (sf). <em>Guía Sanitaria de Movilización Interna (GSMI)</em>.',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/guia-sanitaria-de-movilizacion-interna-gsmi',
    },
    {
      referencia:
        'Ley 1562 de 2012. (2012). <em>Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional</em>. Congreso de Colombia.',
    },
    {
      referencia:
        'Ministerio de Transporte. (2022). <em>Resolución 20223040006915 del 1 de noviembre de 2022. Por la cual se adopta el Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie</em>.',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal (OMSA). (2021). <em>Código Sanitario para los Animales Terrestres. Título 7: Bienestar de los animales</em>.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Oscar Eduardo Villarraga Córdoba',
          cargo: 'Experto temático',
          centro: 'Centro de Formación Agroindustrial - Regional Huila',
        },
        {
          nombre: 'Lola Fernanda Herrera Hernández',
          cargo: 'Experta temática',
          centro: 'Centro de Formación Agroindustrial - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

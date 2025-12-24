<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Proceso precargue de animales en pie: concepto, densidad de carga animal y procedimientos técnicos
    
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema2/img01.png', alt="Imagen decorativa")

    p.mb-5 El proceso de precargue incluye todas las actividades esenciales que deben completarse antes de que los animales ingresen a la unidad de transporte, siendo un momento crítico para asegurar la selección sanitaria, el bienestar animal y la adecuación del vehículo.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Concepto del proceso de precargue (actividades previas a la carga)

    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img02.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p La precarga abarca la preparación del vehículo, la selección de los animales y el alistamiento de la rampa, siendo una responsabilidad compartida entre el propietario y el transportador.
        p.mb-0 Como apoyo para comprender estas responsabilidades, el siguiente recurso organizado sintetiza los elementos clave del proceso de precargue:
    
    AcordionA.color-acento-botones.mb-5(tipo="a" clase-tarjeta="tarjeta BG03" data-aos="zoom-in")
      .row.justify-content-center(titulo="Carga de animales")
        .col-lg-6.order-lg-1.order-2
          p Corresponde al procedimiento por el que se cargan o embarcan los animales en las unidades de transporte. El precargue son las actividades inmediatamente anteriores a este procedimiento.
          p.mb-0 #[strong Soporte documental (texto exacto)]: manual de procedimiento (num. 1. Carga de animales): "Corresponde al procedimiento por el que se cargan o embarcan los animales en las unidades de transporte".
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema2/img03.jpg', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Responsabilidad")
        .col-lg-6.order-lg-1.order-2
          p La obligación de realizar el control de precargue recae en el propietario, tenedor o poseedor de los animales (remitente), aunque la ejecución se haga en coordinación con el transportador.
          p.mb-0 #[strong Soporte documental (texto exacto)]: "el propietario, tenedor o poseedor de los animales... deberá observar y seleccionar los animales..." — Manual de procedimiento (num. 4.a).
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema2/img04.jpg', alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-10
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Densidad de carga animal
        
        p.mb-5 La densidad de carga animal es un requisito de bienestar que debe ser planificado y verificado en la etapa de precargue, asegurando el espacio vital para los animales durante la ruta.

        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img05.svg', alt="Imagen decorativa")
            h4.text-center Concepto de densidad adecuada
            p.mb-0 La densidad no solo se refiere al peso total, sino al espacio disponible por animal. El objetivo técnico es garantizar que los animales no estén hacinados y puedan moverse mínimamente.
          .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img06.svg', alt="Imagen decorativa")
            h4.text-center Requisito técnico
            p.mb-0 La técnica de precargue exige que se utilicen las tablas y fórmulas correspondientes a la especie para garantizar que se cuente con espacio disponible para que el animal pueda levantarse, acostarse, dar vuelta y mantener su equilibrio sin comprometer a otros.

        .cajon.color-primario.p-4(data-aos="fade-right")
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img07.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4 Soporte documental
              p.mb-0 "...procurar que se cuente con espacio disponible para que el animal pueda levantarse, acostarse, dar vuelta..." — Manual de procedimiento (num. 4.e).

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img08.jpg' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Procedimientos técnicos de precargue
        p.mb-5 Estos procedimientos son acciones obligatorias de verificación y alistamiento que deben completarse antes de que el animal ingrese al vehículo.
        .row.mb-4
          .col-auto.BG11.px-4.py-2
            .h4.text-center.mb-0 Procedimiento de selección sanitaria y bienestar
        p El técnico de precargue debe realizar una observación y selección rigurosa de cada animal.
        p.mb-0 Como referencia operativa, el siguiente recurso sintetiza los procedimientos y los criterios de exclusión que deben aplicarse:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 8.
      i Procedimiento de selección sanitaria y bienestar
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Procedimiento técnico
            th(style="background-color: #F3BC5B; width: 38%;") Criterio de exclusión
            th(style="background-color: #F3BC5B; width: 38%;") Soporte documental (texto exacto)
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Exclusión sanitaria/lesional
            td(style="background-color: #F6F6F6;") Detectar y excluir animales enfermos, lesionados o con prolapsos (rectal, vaginal o uterino).
            td(style="background-color: #F6F6F6;") "Animales enfermos, lesionados o con prolapsos (rectal, vaginal o uterino)." — Manual de procedimiento  (núm. 4.ai).
          tr(data-aos="fade-right")
            th Exclusión por movilidad
            td Excluir animales que no puedan permanecer en la posición de estación de equilibrio estático animal sin ayuda (incapacidad de mantenerse de pie).
            td "Animales que no puedan permanecer en la posición de estación de equilibrio estático animal sin ayuda." — Manual de procedimiento  (núm. 4.ai).
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Exclusión por etapa fisiológica
            td(style="background-color: #F6F6F6;") Excluir hembras próximas al parto (último tercio de gestación) o que hayan parido siete (7) días antes de la fecha del embarque.
            td(style="background-color: #F6F6F6;") "Hembras próximas al parto (último tercio de gestación) o que hayan parido siete (7) días antes de la fecha del embarque." — Manual de procedimiento  (núm. 4.ai).

    .row.mb-4
      .col-auto.BG11.px-4.py-2(data-aos="fade-right")
        .h4.text-center.mb-0 Procedimiento de adecuación de la rampa
    
    p.mb-5 La rampa de carga debe ser alistada según los requisitos técnicos de seguridad y manejo etológico.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img09.svg' alt="Imagen decorativa")
          .tarjeta.BG03
            .p-4
              .h4 Inclinación
              p.mb-0 La rampa debe tener una inclinación máxima de 20 grados.
      .col-lg-6.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img10.svg' alt="Imagen decorativa")
          .tarjeta.BG03
            .p-4
              .h4 Seguridad de superficie
              p.mb-0 La superficie de la rampa debe ser antideslizante y estar sin salientes puntiagudas, hoyos u orificios para evitar el miedo y las lesiones en el animal.
      
    .row.justify-content-center.mb-5  
      .col-lg-10(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-4  
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img11.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4 Soporte documental
              p.mb-0 la carga se realizará a través de rampas o plataformas "...con pisos de superficies antideslizantes, que no presentan salientes puntiagudas, hoyos u orificios y con máximo 20 grados de inclinación..." — Manual de procedimiento (num. 4.a).
    
    .row.mb-4
      .col-auto.BG11.px-4.py-2(data-aos="fade-right")
        .h4.text-center.mb-0 Procedimiento de preparación vehicular (previo a la carga)

    p.mb-5 Aunque la limpieza es un requisito general del vehículo, su verificación es clave en la precarga:

    .BGM12.px-md-5.px-4.mb-4
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-5(tipo="n")
            .row.justify-content-center
              .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
                h4 Bioseguridad
                p.mb-0 Chequeo de que el vehículo ha sido lavado y desinfectado previamente y que cuenta con el sistema para evitar la filtración de orina y heces hacia la vía pública.
              .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema2/img12.png', alt="Imagen decorativa")
            .row.justify-content-center
              .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img13.png', alt="Imagen decorativa")
              .col-lg-8(data-aos="fade-left")
                h4 Separación
                p.mb-0 Instalación y aseguramiento de las divisiones o barreras fuertes necesarias para la separación de grupos (por especie, edad o cuernos) antes de que el cargue inicie.
      p.mb-0 La salud de las personas no depende únicamente de factores biológicos, sino también de las condiciones sociales en las que nacen, crecen, viven, trabajan y envejecen. Estos factores, conocidos como determinantes sociales de la salud, incluyen aspectos como el acceso a servicios básicos, la calidad de la vivienda, el nivel educativo, las condiciones laborales, el entorno ambiental y el acceso a servicios de salud. Cuando estas condiciones son desfavorables, aumentan las probabilidades de exposición a riesgos sanitarios y ambientales, afectando de manera desproporcionada a las poblaciones más vulnerables. Comprender los determinantes sociales permite abordar la salud desde una perspectiva integral y promover políticas públicas orientadas a la equidad.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Técnicas de selección
    
    p.mb-5 Las técnicas de selección se refieren al procedimiento de observación y exclusión que se realiza en la etapa de precargue, siendo una obligación del propietario, tenedor o poseedor de los animales. El objetivo es identificar y segregar a aquellos animales que no son aptos para el transporte debido a su condición física, de salud o etapa fisiológica, previniendo el sufrimiento injustificado en ruta.

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img14.jpg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Concepto de la técnica de selección
        p.mb-5 La técnica se basa en un control sanitario y de bienestar animal de carácter preventivo.
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/img15.svg' alt="Imagen decorativa")
              .tarjeta.BG03
                .p-4
                  h2.text-center Rol del responsable
                  p.mb-0 El propietario, tenedor o poseedor debe aplicar esta técnica observacional para garantizar que solo se movilicen animales que puedan soportar la duración y el estrés del viaje.
          .col-lg-6.mb-lg-0.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/img16.svg' alt="Imagen decorativa")
              .tarjeta.BG03
                .p-4
                  h2.text-center Propósito
                  p.mb-0 Detectar animales no aptos que, de ser transportados, podrían sufrir dolor, lesiones graves o morir, comprometiendo también la salud de los demás animales y la inocuidad de los productos finales.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4(data-aos="fade-right")
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img17.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4 Soporte documental
              p.mb-0 "El propietario, tenedor o poseedor de los animales... deberá observar y seleccionar los animales, para detectar animales no aptos para el transporte". Manual de procedimiento (núm. 4.a).
    
    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Criterios de exclusión (animales no aptos)
    
    p.mb-5 A continuación, se presentan los criterios técnicos y normativos que determinan la exclusión obligatoria de animales no aptos para el transporte.

    .row.mb-4
      .col-auto.BG11.px-4.py-2(data-aos="fade-right")
        .h4.text-center.mb-0 Estructura de verificación de exclusión
    
    .BGIMG01.p-md-5.p-4.mb-5
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              p #[strong Criterio de exclusión]: salud y lesiones físicas.
              p #[strong Detalle de la técnica de observación]: se observa cualquier signo de enfermedad evidente (fiebre, diarrea, cojera severa), lesiones abiertas o presencia de prolapsos rectal, vaginal o uterino.
              p.mb-0 #[strong Soporte documental]: "Animales enfermos, lesionados o con prolapsos (rectal, vaginal o uterino)". Manual de procedimiento (núm. 4.ai).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img18.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              p #[strong Criterio de exclusión]: capacidad de movilidad.
              p #[strong Detalle de la técnica de observación]: se evalúa la capacidad del animal para mantenerse en pie. Se excluye aquel que no pueda permanecer en la posición de estación de equilibrio estático animal sin ayuda, ya sea por caída, debilidad extrema o dificultad para desplazarse.
              p.mb-0 #[strong Soporte documental]: "animales que no puedan permanecer en la posición de estación de equilibrio estático animal sin ayuda". Manual de procedimiento (núm. 4.ai).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img19.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              p #[strong Criterio de exclusión]: etapa reproductiva crítica.
              p #[strong Detalle de la técnica de observación]: se excluyen hembras próximas al parto, observables en el último tercio de gestación, o aquellas que hayan parido siete (7) días antes de la fecha del embarque.
              p.mb-0 #[strong Soporte documental]: "hembras próximas al parto (último tercio de gestación) o que hayan parido siete (7) días antes de la fecha del embarque". Manual de procedimiento (núm. 4.ai).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img20.jpg' alt="Imagen decorativa")
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Técnicas de manejo post-selección
        p.mb-5 Una vez realizada la selección sanitaria, se aplican técnicas específicas para el manejo previo al cargue de los animales aptos y de aquellos que, siendo aptos, presentan condiciones particulares que requieren control adicional.
        .row
          .col-auto.BG11.px-4.py-2(data-aos="fade-right")
            .h4.text-center.mb-0 Recursos operativos aplicables al manejo post-selección

    .tarjeta.BG10.p-4.mb-4
      SlyderA.color-acento-botones(tipo="b" data-aos="zoom-in")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Técnica de manejo: separación de condicionalmente aptos
            p #[strong Propósito]: reducir riesgos de lesiones y conflictos cuando los animales presentan características que los hacen vulnerables o potencialmente agresivos, como cuernos, menor tamaño o juventud.
            p.mb-0 #[strong Soporte documental]: obligación de separar por "edad, tamaño, machos sexualmente maduros de hembras, animales con y sin cuernos...". Manual de procedimiento (núm. 4.c.iii).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img21.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Técnica de manejo: manejo tranquilo
            p #[strong Propósito]: disminuir el estrés antes del cargue mediante un manejo calmado durante el encierro y el desplazamiento hacia la rampa.
            p.mb-0 #[strong Soporte documental]: el cargue debe realizarse con "calma, sin ruidos ni hostigamiento". Manual de procedimiento (núm. 4).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img22.jpg' alt="Imagen decorativa")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Técnicas de manejo animal y condiciones de salud

    p.mb-5 Las #[strong técnicas de manejo animal] son el conjunto de procedimientos operativos que se aplican durante el cargue, el transporte y el descargue para minimizar el estrés, el sufrimiento y el dolor de los animales, garantizando su bienestar y su condición de salud. Las condiciones de salud constituyen el criterio primario que determina la idoneidad del animal para ser movilizado.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Condiciones de salud (técnicas de selección sanitaria)

    p La técnica inicial de manejo es la selección, la cual se basa en criterios estrictos de salud y aptitud física, y es una obligación del propietario o tenedor.
    p.mb-5 A continuación, se presentan los criterios de salud exigidos para la movilización de animales en pie y las técnicas de observación asociadas.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 9.
      i Condiciones de salud requeridas y criterios de exclusión
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Condición de salud requerida
            th(style="background-color: #F3BC5B; width: 38%;") Técnica de observación (criterio de exclusión)
            th(style="background-color: #F3BC5B; width: 38%;") Soporte documental (texto exacto)
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Aptitud para la movilización
            td(style="background-color: #F6F6F6;") El animal debe ser observado para asegurar que pueda mantener su posición de estación de equilibrio estático animal sin ayuda.
            td(style="background-color: #F6F6F6;") Animales que "no pueden permanecer en la posición de estación de equilibrio estático animal sin ayuda". (criterio de exclusión). Manual de procedimiento (núm. 4.ai).
          tr(data-aos="fade-right")
            th Ausencia de enfermedades o lesiones
            td La técnica exige excluir a los animales con signos evidentes de enfermedad, lesiones o prolapsos (rectal, vaginal o uterino) que puedan causar sufrimiento en la ruta.
            td "Animales enfermos, lesionados o con prolapsos (rectal, vaginal o uterino)". (criterio de exclusión). Manual de procedimiento (núm. 4.ai).
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Estado fisiológico estable
            td(style="background-color: #F6F6F6;") Se debe excluir a las hembras en etapas fisiológicas críticas, como el último tercio de gestación o aquellas que hayan parido siete (7) días antes del embarque.
            td(style="background-color: #F6F6F6;") "Hembras próximas al parto (último tercio de gestación) o que hayan parido siete (7) días antes de la fecha del embarque". (criterio de exclusión). Manual de procedimiento (núm. 4.ai).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnicas de manejo humanitario (cargue y descargue)

    p Una vez seleccionados los animales aptos, el manejo se enfoca en la minimización del miedo y el uso de técnicas basadas en la etología animal.
    p.mb-5 A continuación, se describen las técnicas obligatorias durante las operaciones de cargue y descargue.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 10.
      i Técnicas de manejo durante cargue y descargue
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Técnica de manejo
            th(style="background-color: #F3BC5B; width: 38%;") Detalle operativo
            th(style="background-color: #F3BC5B; width: 38%;") Soporte documental (texto exacto)
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Manejo calmo y sin hostigamiento
            td(style="background-color: #F6F6F6;") El procedimiento de carga y descarga debe realizarse con calma, sin ruidos y sin empleo de fuerza innecesaria. El personal no debe gritar ni golpear a los animales.
            td(style="background-color: #F6F6F6;") "Los animales deberán ser cargados y descargados con calma, sin ruidos ni hostigamiento, ni empleo de fuerza innecesarios". Manual de procedimiento (núm. 4).
          tr(data-aos="fade-right")
            th Uso de rampas seguras
            td La técnica exige el uso de rampas con una inclinación máxima de 20 grados y superficies antideslizantes para prevenir caídas, miedo y lesiones óseas.
            td "A través de rampas o plataformas... con máximo 20 grados de inclinación". Manual de procedimiento (núm. 4.a).
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Técnica de separación
            td(style="background-color: #F6F6F6;") El manejo exige el uso de divisiones o barreras fuertes para segregar a los animales por especie, edad, tamaño, sexo y condición de hostilidad o presencia de cuernos, previniendo peleas y lesiones.
            td(style="background-color: #F6F6F6;") "Separar por especie, edad, tamaño, machos sexualmente maduros de hembras, animales con y sin cuernos". Manual de procedimiento (núm. 4.c.iii).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnicas de manejo en ruta (salud y confort)
    
    p Durante el transporte, el manejo se centra en el control ambiental y la vigilancia activa para mantener las condiciones de salud y bienestar de los animales.
    p.mb-5 A continuación, se presentan las técnicas de manejo en ruta exigidas por la normativa.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
         LineaTiempoD.color-acento-botones.especial
          div(numero="1" titulo="Control de estrés térmico")
            p El manejo ambiental exige mantener la ventilación constante y asegurar que la temperatura dentro del vehículo se mantenga entre 5 °C y 30 °C.
            p #[strong Soporte documental (texto exacto)]: "Mantener la ventilación constante y asegurar la temperatura que no podrá ser inferior a 5 °C y superior a 30 °C". Manual de procedimiento (núm. 4.f).
            figure
              img(src='@/assets/curso/tema2/img23.jpg' alt="Imagen decorativa")
          div(numero="2" titulo="Vigilancia activa de la salud")
            p Obligación de realizar la inspección de los animales en movimiento, por lo menos cada cuatro (4) horas, para detectar problemas de salud o caídas.
            p #[strong Soporte documental (texto exacto)]: "Por lo menos cada cuatro (4) horas durante el viaje". Manual de procedimiento (núm. 4.g).
            figure
              img(src='@/assets/curso/tema2/img24.jpg' alt="Imagen decorativa")
          div(numero="3" titulo="Hidratación y comodidad")
            p En las interrupciones en el lugar de descanso, se exige realizar acomodación, hidratación o alimentación de los animales para mitigar el estrés y prevenir la deshidratación.
            p #[strong Soporte documental (texto exacto)]: "Realizar actividades de inspección, alojamiento, hidratación o alimentación". Manual de procedimiento (núm. 4.h).
            figure
              img(src='@/assets/curso/tema2/img25.jpg' alt="Imagen decorativa")
          div(numero="4" titulo="Contingencia sanitaria")
            p El operador debe conocer y aplicar el plan de contingencia ante la detección de un animal enfermo o lesionado, que incluye la ayuda inmediata y la notificación al ICA más cercano.
            p #[strong Soporte documental (texto exacto)]: "Las medidas van desde la ayuda o atención inmediata al animal, informar a la oficina del Instituto Colombiano Agropecuario ICA más cercana". ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie, pág. 6.
            figure
              img(src='@/assets/curso/tema2/img26.jpg' alt="Imagen decorativa")

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Técnicas de precargue
    
    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img26.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p.mb-0 Las #[strong técnicas de precargue] (o actividades previas al cargue) son el conjunto de procedimientos obligatorios que se realizan justo antes de que los animales ingresen al vehículo. Estas técnicas son esenciales para garantizar que la unidad de transporte sea segura y que solo se movilicen animales aptos, mitigando riesgos de bienestar animal y sanitarios.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnica de selección sanitaria (obligación del propietario)

    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p La técnica más crítica del precargue es la #[strong observación y selección de los animales], con el fin de excluir inmediatamente a aquellos que no pueden soportar el viaje sin sufrir injustificadamente.
        p.mb-0 A continuación, se presentan los criterios técnicos que deben verificarse durante este procedimiento:

    .BGIMG01.p-md-5.p-4.mb-5
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Exclusión por condición física
              p.mb-5 Excluir animales enfermos, lesionados o con prolapsos (rectal, vaginal o uterino).
              .h4 Soporte documental (texto exacto)
              p.mb-0 “Animales enfermos, lesionados o con prolapsos (rectal, vaginal o uterino).” — Manual de procedimiento (Núm. 4.ai).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img27.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Exclusión por movilidad
              p.mb-5 Excluir animales que no puedan permanecer en la posición de estación de equilibrio estático animal sin ayuda, es decir, que no logren mantenerse de pie y estables.
              .h4 Soporte documental (texto exacto) 
              p.mb-0 “Animales que no puedan permanecer en la posición de estación de equilibrio estático animal sin ayuda.” — Manual de procedimiento (Núm. 4.ai).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img28.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Exclusión por etapa fisiológica
              p.mb-5 Excluir hembras próximas al parto (último tercio de gestación) o que hayan parido siete (7) días antes de la fecha del embarque.
              .h4 Soporte documental (texto exacto) 
              p.mb-0 “Hembras próximas al parto (último tercio de gestación) o que hayan parido siete (7) días antes de la fecha del embarque.” — Manual de procedimiento (Núm. 4.ai).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img29.jpg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnicas de preparación y adecuación del vehículo

    p Antes de recibir a los animales, el vehículo debe ser preparado conforme a los requisitos sanitarios, estructurales y de contención definidos por la normativa.
    p.mb-5 A continuación, se describen los procedimientos técnicos obligatorios:

    .tarjeta.BG08.p-4.mb-5(data-aos="fade-right")
      SlyderA.color-acento-botones(tipo="b" data-aos="zoom-in")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Chequeo sanitario
            p.mb-5 Verificación de que la unidad haya sido lavada y desinfectada, y que su diseño facilite estos procesos.
            .h4 Soporte documental (base de la obligación)
            p.mb-0 “Las unidades de transporte… deberán estar elaboradas de materiales que faciliten la limpieza y desinfección.” — RESOLUCIÓN 20223040006915 (Núm. 2.2.ci).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img30.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Alistamiento de bioseguridad
            p.mb-5 Verificación de que el piso sea estanco y cuente con el sistema para evitar la filtración de orina y heces hacia la vía pública.
            .h4 Soporte documental (base de la obligación)
            p.mb-0 “Contar con un sistema que evite la filtración de orina y heces hacia la vía pública.” — RESOLUCIÓN 20223040006915 (Núm. 2.2.c.ii).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img31.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Instalación de divisiones
            p.mb-5 Instalación de divisiones o barreras fuertes para la separación de grupos por especie, tamaño, edad o presencia de cuernos, según la composición de la carga.
            .h4 Soporte documental (base de la obligación)
            p.mb-0 “Contar con divisiones o barreras fuertes que permitan la separación de los animales.” — Manual de procedimiento (Núm. 2.2.c.iii).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img32.jpg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnicas de manejo de la rampa

    p La rampa debe ser alistada técnicamente para asegurar una carga y descargue eficiente, continuo y sin riesgo de lesiones para los animales.
    p.mb-5 A continuación, se presentan los requisitos técnicos que deben verificarse:
    
    AcordionA.color-acento-botones.mb-4(tipo="a" clase-tarjeta="tarjeta BG03" data-aos="zoom-in")
      .row.justify-content-center(titulo="Ajuste de inclinación")
        .col-lg-6.order-lg-1.order-2
          p La rampa de carga y descargue debe contar con una inclinación máxima de 20 grados, facilitando el movimiento natural de los animales.
          .h4 Soporte documental (texto exacto)
          p.mb-0 “…Con máximo 20 grados de inclinación que facilite el embarque y desembarque de los animales.” — Manual de procedimiento (Núm. 4.a).
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema2/img33.jpg', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Verificación de seguridad")
        .col-lg-6.order-lg-1.order-2
          p La superficie debe ser antideslizante y no presentar salientes puntiagudas, hoyos u orificios que puedan causar tropiezos, miedo o lesiones.
          .h4 Soporte documental (texto exacto)
          p.mb-0 “…Con pisos de superficies antideslizantes, que no presentan salientes puntiagudas, hoyos u orificios…” — Manual de procedimiento (Núm. 4.a).
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema2/img34.jpg', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Ajuste de altura")
        .col-lg-6.order-lg-1.order-2
          p La rampa debe posicionarse al nivel del piso del vehículo para minimizar desniveles y movimientos bruscos durante el embarque.
          .h4 Soporte documental (texto exacto)
          p.mb-0 Implícito en la exigencia del uso de rampas o plataformas seguras — Manual de procedimiento (Núm. 4.a).
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema2/img35.jpg', alt="Imagen decorativa")

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Técnicas de manejo de utensilios e implementos
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img36.jpg' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        p Las técnicas de manejo de utensilios e implementos se refieren a los métodos de uso de herramientas y estructuras auxiliares para el manejo, confinamiento y movimiento de los animales durante las etapas de precargue, cargue y descargue, con el objetivo primordial de evitar el dolor, el sufrimiento injustificado (maltrato) y el estrés.
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Técnica de manejo de instrumentos de estímulo
        p.mb-0 La normativa establece el principio rector para el uso de cualquier instrumento auxiliar (como paletas, banderas o instrumentos de estímulo), enfocándose en la restricción de la fuerza y el hostigamiento .

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.color-acento-botones(tipo="b" clase-tarjeta="tarjeta BG03" data-aos="zoom-in")
          div(titulo="Exclusión de la fuerza innecesaria")
            p La técnica exige que el cargue y descargue, que es donde se usan estos utensilios, se realice sin empleo de fuerza innecesaria o cualquier instrumento que cause daño físico o miedo.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "Los animales deberán ser cargados y descargados con calma, sin ruidos ni hostigamiento, ni empleo de fuerzas innecesarias ..." — Manual de procedimiento (num. 4).
          div(titulo="Manejo sin hostigamiento")
            p El implemento nunca debe usarse para golpear o gritar, ya que la técnica de manejo requiere que el movimiento se haga con calma y sin ruidos ni hostigamiento, aprovechando la zona de fuga del animal.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "...Con calma, sin ruidos ni hostigamiento ..." — Manual de procedimiento (num. 4).
          div(titulo="Uso de elementos de reducción de visibilidad")
            p Aunque no se detalla un implemento específico, la técnica de manejo etológico implica el uso de elementos visuales (ej. banderas, paletas ciegas) para guiar al animal, evitando el contacto físico directo y la coacción, y siempre bajo el principio de calma.
            .h4 Soporte documental (texto exacto)
            p.mb-0 Implícito en la necesidad de evitar la fuerza y el hostigamiento (num. 4).
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img37.jpg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Implementos de contención y estructurales

    p.mb-5 Ciertos implementos estructurales son esenciales y deben ser manejados e instalados correctamente durante la precarga para garantizar la seguridad, a continuación, se presentan listados y con el respectivo soporte documental .

    TabsC.color-acento-botones.mb-5(data-aos="zoom-out")
      .BG06.px-4.py-3.py-md-4(titulo="Divisiones o barreras")
        .row.justify-content-center
          .col-lg-4.col-sm-6.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img38.jpg' alt="Imagen decorativa")
          .col-lg-8
            p Deben ser instaladas antes del cargue. La técnica exige que sean fuertes y se utilicen para separar a los animales según los criterios de bienestar (especie, edad, tamaño y hostilidad).
            .h4 Soporte documental (texto exacto)
            p.mb-0 "Contar con divisiones o barreras fuertes que permitan la separación de los animales." — Manual de procedimiento (num. 2.2.c.iii).
      .BG06.px-4.py-3.py-md-4(titulo="Rampas de cargue/descargue")
        .row.justify-content-center
          .col-lg-4.col-sm-6.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img39.jpg' alt="Imagen decorativa")
          .col-lg-8
            p Este implemento de infraestructura debe ser revisado y alistado antes de su uso. La técnica exige que su superficie sea antideslizante y que no tenga salientes puntiagudas, hoyos u orificios.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "...Con pisos de superficies antideslizantes, que no presentan salientes puntiagudas, hoyos u orificios..." — Manual de procedimiento (num. 4.a).
      .BG06.px-4.py-3.py-md-4(titulo="Cajas (para aves)")
        .row.justify-content-center
          .col-lg-4.col-sm-6.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img40.jpg' alt="Imagen decorativa")
          .col-lg-8
            p El uso de estas unidades de contención (implementos externos) debe ser monitoreado. La técnica exige que sean plásticas o de cartón seguras y que, una vez cargadas, estén fijadas o dispuestas para evitar su desplazamiento o volcamiento.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "Estar fijados o dispuestos de manera tal, que se evite su desplazamiento y/o volcamiento." — Resolución 20223040006915 (num. 2.2.cv).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Utensilios de higiene y bioseguridad

    p.mb-5 El manejo de implementos de higiene es una técnica de precargue y post descargue para prevenir la contaminación.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img41.svg' alt="Imagen decorativa")
          .tarjeta.BG03
            .p-4
              .h4 Utensilios de limpieza y desinfección
              p.mb-0 El vehículo debe estar elaborado de materiales que faciliten su limpieza y desinfección, lo que implica que los utensilios de higiene (escobas, chorros de agua a presión, desinfectantes) deben ser utilizados rigurosamente antes de la carga.
      .col-lg-6(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img42.svg' alt="Imagen decorativa")
          .tarjeta.BG03
            .p-4
              .h4 Sistema de recolección de excretas
              p.mb-0 El vehículo debe contar con un sistema o diseño que evite la filtración de orina y heces hacia la vía pública, controlando la bioseguridad.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img43.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4 Soporte documental
              p.mb-0 "...Contar con un sistema que evite la filtración de orina y heces hacia la vía pública." — Resolución 20223040006915 (num. 2.2.c.ii).
    
    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Embarcaderos etológicos
    
    p.mb-5 Las Técnicas de Manejo de Utensilios e Implementos se refieren a los métodos de uso de herramientas y estructuras auxiliares para el manejo, confinamiento y movimiento de los animales durante las etapas de precargue, cargue y descargue, con el objetivo primordial de evitar el dolor, el sufrimiento injustificado (maltrato) y el estrés.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnica de Manejo de Instrumentos de Estímulo

    p.mb-5 La normativa establece el principio rector para el uso de cualquier instrumento auxiliar, como paletas, banderas o instrumentos de estímulo, enfocándose en la restricción de la fuerza y el hostigamiento. A continuación se presentan las técnicas y su descripción.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        LineaTiempoD.color-acento-botones.especial
          div(numero="1" titulo="Exclusión de la fuerza innecesaria")
            p La técnica exige que el cargue y descargue se realicen sin empleo de fuerza innecesaria o cualquier instrumento que cause daño físico o miedo.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "Los animales deberán ser cargados y descargados con calma, sin ruidos ni hostigamiento, ni empleo de fuerzas innecesarias..." Manual de procedimiento (Num. 4).
            figure
              img(src='@/assets/curso/tema2/img44.jpg' alt="Imagen decorativa")
          div(numero="2" titulo="Manejo sin hostigamiento")
            p El implemento nunca debe usarse para golpear o gritar, ya que el manejo debe realizarse con calma, sin ruidos ni hostigamiento, aprovechando la zona de fuga del animal.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "Con calma, sin ruidos ni hostigamiento..." Manual de procedimiento (Num. 4).
            figure
              img(src='@/assets/curso/tema2/img45.jpg' alt="Imagen decorativa")
          div(numero="3" titulo="Uso de elementos de reducción de visibilidad")
            p La técnica de manejo etológico implica el uso de elementos visuales, como banderas o paletas ciegas, para guiar al animal evitando el contacto físico directo y la coacción.
            .h4 Soporte documental (texto exacto)
            p.mb-0 Implícito en la prohibición de fuerza y hostigamiento (Num. 4).
            figure
              img(src='@/assets/curso/tema2/img46.jpg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Implementos de contención y estructurales

    p.mb-5 A continuación, se presentan algunos implementos estructurales que son esenciales y deben ser manejados e instalados correctamente durante la precarga para garantizar la seguridad de los animales y del personal.

    .tarjeta.BG08.p-4.mb-5(data-aos="fade-right")
      SlyderA.color-acento-botones(tipo="b" data-aos="zoom-in")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Divisiones o barreras
            p Deben ser instaladas antes del cargue. La técnica exige que sean fuertes y se utilicen para separar a los animales según criterios de bienestar como especie, edad, tamaño y hostilidad.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "Contar con divisiones o barreras fuertes que permitan la separación de los animales." Manual de procedimiento (Num. 2.2.c.iii).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img47.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Rampas de cargue y descargue
            p Deben ser revisadas y alistadas antes de su uso. La superficie debe ser antideslizante y no presentar salientes puntiagudas, hoyos u orificios.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "Con pisos de superficies antideslizantes, que no presentan salientes puntiagudas, hoyos u orificios..." Manual de procedimiento (Num. 4.a).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img48.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Cajas para aves
            p Deben ser plásticas o de cartón seguro y, una vez cargadas, estar fijadas o dispuestas para evitar desplazamientos o volcamiento.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "Estar fijadas o dispuestas de manera tal, que se evite su desplazamiento y/o volcamiento." Resolución 20223040006915 (Num. 2.2.cv).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img49.jpg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Utensilios de higiene y bioseguridad

    p.mb-5 El manejo de implementos de higiene es una técnica obligatoria en las etapas de precargue y postdescargue para prevenir la contaminación y proteger la bioseguridad.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img50.svg', alt="Imagen decorativa")
            h4.text-center Utensilios de limpieza y desinfección
            p.mb-0 El vehículo debe estar elaborado con materiales que faciliten la limpieza y desinfección, lo que implica el uso riguroso de escobas, chorros de agua a presión y desinfectantes antes de la carga.
          .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img51.svg', alt="Imagen decorativa")
            h4.text-center Sistema de recolección de excretas
            p.mb-0 El vehículo debe contar con un sistema o diseño que evite la filtración de orina y heces hacia la vía pública, controlando riesgos sanitarios y ambientales.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-left")
        .cajon.color-secundario.p-4 
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img52.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4 Soporte documental
              p.mb-0 "Contar con un sistema que evite la filtración de orina y heces hacia la vía pública." Resolución 20223040006915 (Num. 2.2.c.ii).

    separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Técnica de colocación de rampas y plataforma
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        p.mb-5 La técnica de colocación de rampas y plataformas es un procedimiento esencial durante el precargue y el descargue, que busca alinear perfectamente la unidad de transporte con la infraestructura de manejo. El objetivo es garantizar que el tránsito de los animales sea fluido, seguro y acorde a su comportamiento etológico, previniendo caídas y lesiones.
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Requisito de diseño y construcción (implemento estructural)
        p.mb-5 El embarcadero, sea fijo o móvil, debe ser construido o instalado cumpliendo con las siguientes técnicas de seguridad:

        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
              h4 Superficie antideslizante
              p.mb-0 La técnica constructiva exige que la superficie sea antideslizante para evitar que los animales resbalen y caigan, lo cual es vital para el control del miedo.
            .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img53.png', alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img54.png', alt="Imagen decorativa")
            .col-lg-7(data-aos="fade-right")
              h4 Sin obstáculos
              p.mb-0 El diseño debe ser liso, sin salientes puntiagudas, hoyos u orificios que puedan causar tropiezos, golpes o pánico.
            
        .cajon.color-primario.p-4.mb-4(data-aos="fade-left")
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img55.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4 Soporte documental
              p la carga se realizará a través de rampas o plataformas “…con pisos de superficies antideslizante, que no presenten salientes puntiagudas, hoyos u orificios…”.
              p.mb-0 MANUAL DE PROCEDIMIENTO (Num. 4.a).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnica de colocación y angulación (uso de la rampa)

    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img56.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p La colocación se refiere al ángulo de inclinación de la rampa respecto al nivel horizontal y su ajuste con el vehículo.
        p.mb-0 A continuación, se presenta el recurso que organiza los aspectos técnicos obligatorios para la correcta colocación de rampas y plataformas durante el cargue y descargue de animales.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 11.
      i Técnica de colocación y angulación
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Aspecto de la colocación
            th(style="background-color: #F3BC5B; width: 38%;") Requisito técnico obligatorio
            th(style="background-color: #F3BC5B; width: 38%;") Soporte documental (texto exacto)--
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Inclinación máxima
            td(style="background-color: #F6F6F6;") La técnica exige que la rampa no exceda una inclinación máxima de 20 grados. Esta angulación facilita el movimiento natural del animal y evita el esfuerzo excesivo.
            td(style="background-color: #F6F6F6;") “…Y con máximo 20 grados de inclinación que facilite el embarque y desembarque de los animales.” MANUAL DE PROCEDIMIENTO (Num. 4.a).--
          tr(data-aos="fade-right")
            th Nivelación con la unidad
            td La plataforma o rampa debe colocarse de manera que facilite el embarque y desembarque de los animales, lo que implica asegurar un ajuste adecuado al nivel del piso del vehículo y minimizar el espacio entre la rampa y el camión.
            td “…Que facilite el embarque y desembarque de los animales.” MANUAL DE PROCEDIMIENTO (Num. 4.a).--

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnicas de manejo etológico en la rampa

    p.mb-5 La técnica de colocación no solo es física, sino también operativa. El manejo del personal debe ser adecuado a la infraestructura para que el animal se sienta seguro al transitar por la rampa.

    .row.justify-content-center.mb-4
      .col-lg-4.col-6.mb-4.mb-lg-0(data-aos="fade-right")
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema2/img57.svg", alt="Imagen decorativa").img90.m-auto
          .row.justify-content-center.mb-4
            .BG07.px-4.py-2
              h4.text-center.mb-0 Manejo calmo
          p.text-center.mb-0 La colocación de la rampa debe ir acompañada de un manejo con calma y sin ruidos ni hostigamiento, ya que la rampa puede generar miedo por la pendiente o el contraste de luz.
      .col-lg-4.col-6.mb-4.mb-lg-0(data-aos="flip-up")
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema2/img58.svg", alt="Imagen decorativa").img90.m-auto
          .row.justify-content-center.mb-4
            .BG07.px-4.py-2
              h4.text-center.mb-0 Control de sombras
          p.text-center.mb-0 La técnica de colocación debe evitar sombras marcadas o cambios abruptos de luz y oscuridad en la entrada o salida del vehículo, debido a que el animal puede percibirlas como obstáculos y negarse a avanzar.
      .col-lg-4.col-6.mb-4.mb-lg-0(data-aos="fade-left")
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema2/img59.svg", alt="Imagen decorativa").img90.m-auto
          .row.justify-content-center.mb-4
            .BG07.px-4.py-2
              h4.text-center.mb-0 Exclusión de fuerza
          p.text-center.mb-0 El operador tiene la obligación de evitar el empleo de fuerza innecesaria para forzar al animal a subir o bajar por la rampa.

    separador
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.7 Características de carga animal
    
    p.mb-5 Las características de la carga animal definen las condiciones físicas, sanitarias y espaciales que debe cumplir el grupo de animales transportados (carga viva) para garantizar su bienestar durante todo el viaje. Estas características son verificadas en el proceso de precargue y son responsabilidad compartida entre el propietario y el transportador.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Característica sanitaria y física de la carga (aptitud)

    p La principal característica de la carga es que todos los animales que la componen deben ser aptos para el transporte, de acuerdo con los criterios de selección establecidos. La presencia de animales no aptos altera la condición de la carga en su conjunto, poniendo en riesgo el bienestar de los demás individuos.
    p.mb-5 A continuación, se presenta un recurso que resume los criterios sanitarios y físicos que debe cumplir la carga animal para ser considerada apta para el transporte:

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.color-acento-botones(tipo="b" clase-tarjeta="tarjeta BG03" data-aos="zoom-in")
          div(titulo="Integridad física y salud")
            p La carga debe estar libre de animales enfermos, lesionados o con prolapsos (rectal, vaginal o uterino), ya que su condición compromete el bienestar.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "Animales enfermos, lesionados o con prolapsos (rectal, vaginal o uterino)." — Manual de procedimiento (núm. 4.ai).
          div(titulo="Capacidad de equilibrio")
            p La carga no debe incluir animales que no puedan permanecer en la posición de estación de equilibrio estático animal sin ayuda, asegurando que todos los individuos puedan mantenerse de pie.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "Animales que no puedan permanecer en la posición de estación de equilibrio estático animal sin ayuda." — Manual de procedimiento (núm. 4.ai).
          div(titulo="Ausencia de etapas críticas")
            p La carga no debe incluir hembras en el último tercio de gestación o que hayan parido siete (7) días antes del embarque, ya que su estado fisiológico es vulnerable.
            .h4 Soporte documental (texto exacto)
            p.mb-0 "Hembras próximas al parto (último tercio de gestación) o que hayan parido siete (7) días antes del embarque." — Manual de procedimiento (núm. 4.ai).
      .col-lg-4.order-lg-1.order-2(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img75.jpg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Característica espacial de la carga (densidad)

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img60.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p La densidad es una característica crítica de la carga y debe ser controlada para garantizar que los animales dispongan del espacio vital necesario dentro del vehículo, evitando condiciones de hacinamiento.
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-horse-head
            p.mb-0 #[strong Espacio mínimo requerido]: la característica de la carga es que el número de animales transportados debe permitir espacio suficiente para que cada animal pueda levantarse, acostarse y dar vuelta sin interferir con los demás.
        .cajon.color-secundario.p-4 
          p.mb-0 #[strong Soporte documental]: "...procurar que se cuente con espacio disponible para que el animal pueda levantarse, acostarse, dar vuelta ..." — Manual de procedimiento (num. 4.e).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Característica de organización de la carga (separación)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Una carga correctamente organizada requiere la aplicación de técnicas de separación que mitiguen la hostilidad, el estrés y las lesiones entre los animales, utilizando las divisiones internas del vehículo.
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-horse-head
            p.mb-0 #[strong Separación obligatoria]: la carga debe estar separada por especie, edad, tamaño, machos sexualmente maduros de hembras, animales con y sin cuernos, y aquellos que puedan ser hostiles o que requieran atención especial.
        .cajon.color-primario.p-4
          p.mb-0 #[strong Soporte documental]: " separar por especie, edad, tamaño, machos sexualmente maduros de hembras, animales con y sin cuernos, animales que puedan ser hostiles con otros..." — Manual de procedimiento (num. 4.c.iii).
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img61.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-10
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Característica de contención de la carga (unidades de contención)
        p Para especies pequeñas, la característica de la carga incluye el uso de unidades de contención seguras que, a su vez, deben estar correctamente aseguradas dentro del vehículo.
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-horse-head
            p.mb-0 #[strong Cajas y fijación]: en el caso de pollitos de un día de edad, la carga debe disponerse en cajas plásticas o de cartón que estén fijadas o ubicadas de manera tal que se evite su desplazamiento y/o volcamiento durante el transporte.
        .cajon.color-secundario.p-4
          p.mb-0 #[strong Soporte documental]: "estar fijados o dispuestos de manera tal, que se evite su desplazamiento y/o volcamiento." — Resolución 20223040006915 (núm. 2.2.cv).

    separador
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.8 Tipos de adaptación de animales en pie
    
    p.mb-5 El concepto de adaptación de animales en pie se refiere a la capacidad fisiológica y conductual del animal para ajustarse a las condiciones estresantes del transporte (movimiento, encierro, ruidos, cambios climáticos). La normativa no define tipos formales de adaptación, sino que establece criterios de aptitud que permiten determinar si el animal está adaptado o es lo suficientemente robusto para ser transportado. Si el animal no cumple con estos criterios, se considera no apto y debe ser excluido.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Adaptación fisiológica y estabilidad
    
    p La principal forma de adaptación es la capacidad física del animal para tolerar el viaje y sus exigencias.
    p.mb-5 A continuación, se presentan los criterios que permiten identificar la adaptación fisiológica requerida para el transporte:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 12.
      i Adaptación fisiológica y estabilidad
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Tipo de adaptación requerida
            th(style="background-color: #F3BC5B; width: 38%;") Criterio de exclusión por falta de adaptación
            th(style="background-color: #F3BC5B; width: 38%;") Impacto si no está adaptado
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Adaptación al movimiento
            td(style="background-color: #F6F6F6;") Incapacidad para mantener la posición de estación de equilibrio estático animal sin ayuda. Si el animal no puede mantenerse en pie o caminar por sí mismo, no está adaptado para soportar las fuerzas G del vehículo.
            td(style="background-color: #F6F6F6;") Caídas, aplastamiento, traumatismos y fracturas en ruta.
          tr(data-aos="fade-right")
            th Adaptación al estado fisiológico
            td Hembras en el último tercio de gestación o que hayan parido siete (7) días antes del embarque. No están adaptadas para el estrés hormonal y físico del transporte en esa etapa.
            td Parto en ruta, sufrimiento fetal, muerte de la madre o la cría.
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Adaptación a la salud
            td(style="background-color: #F6F6F6;") Presencia de enfermedades, lesiones o prolapsos. El animal no tiene la homeostasis o condición sanitaria necesaria para enfrentar el estrés adicional del transporte.
            td(style="background-color: #F6F6F6;") Aumento del sufrimiento, dolor y propagación de enfermedades en el vehículo.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-primario.p-4
          p.mb-0 #[strong Soporte documental]: uno de los criterios de exclusión es la falta de adaptación al movimiento: “Animales que no puedan permanecer en la posición de estación de equilibrio estático animal sin ayuda”. Manual de procedimiento (Núm. 4.a.i).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Adaptación comportamental y social
    
    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p El animal debe estar adaptado a la convivencia forzada y al manejo humano para que el transporte sea exitoso. La falta de adaptación social se mitiga mediante la técnica de separación.
        p.mb-0 A continuación, se presentan las técnicas de manejo asociadas a la adaptación comportamental:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 13.
      i Adaptación comportamental y social
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Tipo de adaptación requerida
            th(style="background-color: #F3BC5B; width: 38%;") Técnica de manejo para promover la adaptación
            th(style="background-color: #F3BC5B; width: 38%;") Objetivo
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Adaptación al grupo (social)
            td(style="background-color: #F6F6F6;") Separación por especie, edad, tamaño y condición de hostilidad. Esta técnica se aplica a animales que, por su naturaleza (por ejemplo, machos sexualmente maduros) o condición (por ejemplo, animales con cuernos), no están adaptados a la coexistencia pacífica en un espacio reducido.
            td(style="background-color: #F6F6F6;") Prevenir peleas, mordeduras y lesiones por agresividad que alteran la calma de la carga.
          tr(data-aos="fade-right")
            th Adaptación al manejo humano
            td Manejo durante cargue y descargue con calma, sin ruidos ni hostigamiento. El uso de técnicas etológicas minimiza el pánico derivado de la falta de adaptación al contacto humano.
            td Evitar que el animal, por miedo o pánico, se lesione al intentar huir o resistirse al embarque.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 #[strong Soporte documental]: la técnica para la falta de adaptación social es la separación: “Separar por… animales con y sin cuernos, animales que puedan ser hostiles con otros…”. Manual de procedimiento (Núm. 4.c.iii).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Adaptación ambiental (técnica de aclimatación)

    p.mb-5 Aunque el manual no utiliza explícitamente el término “aclimatación”, exige que el vehículo y el manejo proporcionen un ambiente que permita la adaptación de la carga a las condiciones microclimáticas del transporte.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-5
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img62.svg', alt="Imagen decorativa")
            h4.text-center Adaptación térmica
            p.mb-0 La técnica estructural y operacional del vehículo debe garantizar ventilación constante para ayudar a la carga a adaptarse a la temperatura de la ruta, manteniéndola entre 5 °C y 30 °C.
          .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img63.svg', alt="Imagen decorativa")
            h4.text-center Adaptación a la densidad
            p.mb-0 La técnica de densidad controlada asegura que el animal disponga de espacio suficiente para levantarse, acostarse y dar vuelta, lo que le permite adaptarse posturalmente durante viajes prolongados.
      .col-lg-10
        p.mb-0 En resumen, la adaptación de los animales en pie se evalúa mediante la exclusión de aquellos que demuestren ser no aptos y se mantiene a través de las técnicas de manejo que controlan el ambiente, la densidad y el comportamiento social durante el transporte.

    separador
    #t_2_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.9 Camas de superficie para transporte
    
    p.mb-5 Las camas de superficie (o pisos) para el transporte de animales en pie se refieren a los requisitos de diseño de la base de la unidad de transporte. La característica del piso es fundamental para garantizar el equilibrio, la seguridad y la bioseguridad de la carga viva, previniendo caídas, lesiones y la contaminación ambiental.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Requisitos de la superficie (técnica de seguridad y fricción)

    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img64.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p La técnica más importante relacionada con la superficie es garantizar que el animal pueda mantenerse en pie de forma segura durante el movimiento del vehículo, ya que la incapacidad de mantenerse en equilibrio es un criterio de exclusión.
        p.mb-0 A continuación, se presenta un recurso que describe las características técnicas exigidas para la superficie de transporte y su propósito en el bienestar animal:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 14.
      i Requisitos de la superficie
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Característica de la superficie
            th(style="background-color: #F3BC5B; width: 52%;") Requisito técnico
            th(style="background-color: #F3BC5B; width: 24%;") Propósito de la técnica
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Superficie antideslizante
            td(style="background-color: #F6F6F6;") El piso de la unidad de transporte y las rampas de embarque y desembarque deben ser de superficie antideslizante (por ejemplo, con estrías, tapetes de caucho o material rugoso).
            td(style="background-color: #F6F6F6;") Prevenir resbalones y caídas que causan lesiones, fracturas y estrés por miedo.
          tr(data-aos="fade-right")
            th Integridad y liso
            td La superficie no debe presentar salientes puntiagudas, hoyos u orificios.
            td Evitar que los animales se tropiecen o lesionen sus extremidades o pezuñas.
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Resistencia
            td(style="background-color: #F6F6F6;") El piso debe ser lo suficientemente fuerte para soportar el peso de la carga viva, especialmente en especies mayores como bovinos y équidos.
            td(style="background-color: #F6F6F6;") Evitar el colapso o el daño del piso durante el viaje.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-primario.p-4
          p.mb-0 #[strong Soporte documental]: las rampas o plataformas de carga deben tener “pisos de superficies antideslizantes, que no presentan salientes puntiagudas, hoyos u orificios…”, manual de procedimiento (núm. 4.a).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Función sanitaria y de bioseguridad de la cama
    
    p La cama de superficie también debe cumplir una función sanitaria clave relacionada con la gestión de excretas y la prevención de la contaminación ambiental.
    p.mb-5 A continuación, se presenta un recurso que relaciona los requisitos sanitarios del piso con su función de bioseguridad:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 15.
      i Función sanitaria y de bioseguridad de la cama
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Técnica sanitaria
            th(style="background-color: #F3BC5B; width: 38%;") Requisito del diseño del piso
            th(style="background-color: #F3BC5B; width: 38%;") Propósito sanitario
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Estanqueidad (ausencia de filtración)
            td(style="background-color: #F6F6F6;") El vehículo debe contar con un sistema que evite la filtración de orina y heces hacia la vía pública, lo que requiere que el piso sea hermético.
            td(style="background-color: #F6F6F6;") Prevenir la contaminación ambiental y la propagación de patógenos en la vía pública.
          tr(data-aos="fade-right")
            th Facilidad de limpieza
            td La superficie debe estar elaborada de materiales que faciliten la limpieza y desinfección, como superficies lisas y con bordes redondeados.
            td Asegurar la bioseguridad entre cargas y prevenir la contaminación cruzada.


    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4
          p.mb-0 #[strong Soporte documental]: la unidad de transporte debe contar con un “sistema que evite la filtración de orina y heces hacia la vía pública”, resolución 20223040006915 (núm. 2.2.c.ii).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Consideraciones adicionales (camas de material)
    
    p.mb-5 Aunque la normativa se centra en el diseño estructural del piso (antideslizante y estanco), en la práctica algunos vehículos utilizan materiales de cama como viruta o paja para mejorar la comodidad y la absorción, especialmente en viajes largos o en condiciones climáticas frías.

    .row.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img65.svg' alt="Imagen decorativa")
          .tarjeta.BG03
            .p-4
              .h4 Propósito del material de cama
              p.mb-0 Proporcionar amortiguación, reduciendo el impacto del movimiento, y aislamiento térmico, ayudando a mantener la temperatura mínima de 5 °C.
      .col-lg-6(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img66.svg' alt="Imagen decorativa")
          .tarjeta.BG03
            .p-4
              .h4 Técnica de manejo
              p.mb-0 El uso de este material debe ir acompañado del cumplimiento estricto de los requisitos de bioseguridad y limpieza del vehículo.

    separador
    #t_2_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.10 Responsabilidad de revisión de carga animal
    
    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img67.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p.mb-0 La responsabilidad de revisión de la carga animal recae sobre dos actores principales en diferentes etapas del proceso de movilización: el propietario/remitente (en la selección inicial o precargue) y el conductor/tripulante (en la vigilancia durante la ruta). Ambos tienen la obligación legal de asegurar el bienestar, la salud y la aptitud de los animales.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Responsabilidad del propietario, tenedor o poseedor (revisión de precargue)

    p La revisión en esta etapa es una técnica de selección y tiene como objetivo primordial la exclusión de animales no aptos antes de que comience el viaje.
    p.mb-5 A continuación, se presenta el recurso que describe las responsabilidades técnicas asociadas a esta etapa del proceso :

    .BGIMG01.p-md-5.p-4.mb-5
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Rol principal
              p Observar y seleccionar los animales para detectar animales no aptos para el transporte.
              .h4 Soporte documental clave
              p.mb-0 "El propietario, tenedor o poseedor de los animales... deberá observar y seleccionar los animales, para detectar animales no aptos para el transporte". — Manual de procedimiento (núm. 4.a)
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img68.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Punto de control crítico
              p Condición de equilibrio y salud. Se tiene la responsabilidad de excluir aquellos animales que no puedan permanecer en la posición de estación de equilibrio estático animal sin ayuda o que estén enfermos, lesionados o con prolapsos.
              .h4 Soporte documental clave
              p.mb-0 Manual de procedimiento (núm. 4.ai)
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img69.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Verificación fisiológica
              p Estado reproductivo. Responsabilidad de excluir a las hembras en etapas críticas: último tercio de gestación o aquellas que hayan parido siete (7) días antes del embarque.
              .h4 Soporte documental clave
              p.mb-0 Manual de procedimiento (núm. 4.ai)
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img70.jpg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Responsabilidad del conductor o tripulante (revisión en ruta)

    p La revisión en esta etapa es una técnica de inspección continua y tiene como objetivo el monitoreo activo de las condiciones de la carga viva y de la unidad de transporte durante el trayecto.
    p.mb-5 A continuación, se presenta el recurso que describe las responsabilidades técnicas durante la ruta:

    .tarjeta.BG08.p-4.mb-4(data-aos="fade-right")
      SlyderA.color-acento-botones(tipo="b" data-aos="zoom-in")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Frecuencia de inspección
            p Inspeccionar la unidad de transporte y los animales en movimiento, por lo menos cada cuatro (4) horas durante el viaje.
            .h4 Soporte documental clave
            p.mb-0 "El conductor o tripulante deberá realizar la inspección ... por lo menos cada cuatro (4) horas durante el viaje." — Manual de procedimiento (núm. 4.g)
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img71.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Propósito de la inspección
            p Detectar y actuar sobre caídas, lesiones, signos de estrés (por ejemplo, estrés térmico) o hacinamiento.
            .h4 Soporte documental clave
            p.mb-0 Manual de procedimiento (núm. 4.g)
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img72.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Obligación en interrupciones
            p En las paradas largas (en lugares de descanso), el operador debe realizar inspección, acomodación, hidratación o alimentación de los animales.
            .h4 Soporte documental clave
            p.mb-0 "Realizar actividades de inspección, acomodación, hidratación o alimentación." — Manual de procedimiento (núm. 4.h)
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img73.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Obligación en contingencia
            p Si se detecta un animal enfermo o muerto, tiene la responsabilidad de ejecutar el plan de contingencia, que incluye la ayuda o atención inmediata y la notificación al ICA más cercano.
            .h4 Soporte documental clave
            p.mb-0 "Las medidas van desde la ayuda o atención inmediata al animal, informar a la oficina del Instituto Colombiano Agropecuario ICA más cercana..." — ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (1).pdf, pág. 6
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img74.jpg' alt="Imagen decorativa")


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

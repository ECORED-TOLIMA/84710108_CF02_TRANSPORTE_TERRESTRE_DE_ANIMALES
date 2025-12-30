<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Salud ambiental y normativa asociada
    
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/img01.png' alt="Imagen decorativa")

    p.mb-5 La #[strong técnica de planificación, plan y orden de viaje] es un procedimiento operativo que deben implementar el transportador y el conductor para asegurar que la movilización de animales en pie se realice dentro de los límites establecidos de tiempo de conducción, incluyendo las pausas obligatorias para inspección y descanso. Su propósito es #[strong garantizar el bienestar animal y la seguridad vial], evitando situaciones de estrés, agotamiento, lesiones o riesgos durante el desplazamiento.

    .row.justify-content-center.mb-5
      .col-lg-10
        .BG01.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.px-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img02.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 La #[strong planificación del viaje] es un paso esencial dentro del proceso de transporte pecuario, ya que permite anticipar las condiciones del trayecto, evaluar la aptitud de los animales para la movilización y prever las necesidades logísticas. Esta técnica se centra en el #[strongg control estricto del tiempo de conducción], el #[strong cumplimiento de las pausas de descanso], y la ejecución de inspecciones programadas para verificar el estado de los animales, del vehículo y de la carga.
    
    p.mb-5 Una adecuada planificación incluye:

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h4 1
          p.text-center.mb-0 Verificar la #[strong documentación sanitaria y de movilización] requerida por la normativa, como la Resolución 20223040006915.
      .col-lg-3.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h4 2
          p.text-center.mb-0 Confirmar la #[strong aptitud de los animales], evaluando su condición física y descartando aquellos que no cumplen con los criterios de bienestar.
      .col-lg-3.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h4 3
          p.text-center.mb-0 Revisar el #[strong estado del vehículo], garantizando que las superficies, divisiones, ventilación y sistemas de seguridad estén en condiciones óptimas.
      .col-lg-3.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.color-secundario.ligth.p-5.h-100
          .tarjeta-numerada__numero
            .h4 4
          p.text-center.mb-0 Establecer el #[strong orden del viaje], definiendo rutas seguras, tiempos estimados, puntos de parada y protocolos de contingencia ante emergencias.

    .BG02.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img03.png' alt="Imagen decorativa")
        .col-lg-7.p-4
          .row.mb-4
            .col-lg-2.col-3
              img(src='@/assets/curso/tema1/img04.svg' alt="Imagen decorativa")
          p Una planificación adecuada permite reducir el estrés, evitar sobrecargas, disminuir el riesgo de lesiones y asegurar que el transporte se desarrolle bajo estándares técnicos y humanitarios.
          p.mb-0 Para garantizar una movilización segura y humanitaria, la planificación del viaje debe contemplar aspectos operativos que regulen los #[strong tiempos de conducción, los periodos de descanso y las pausas de inspección en ruta]. Estos elementos permiten prevenir el agotamiento del conductor, reducir el riesgo de incidentes y asegurar condiciones adecuadas para los animales durante el traslado. A continuación, se sintetizan los aspectos clave de la planificación, las técnicas de ejecución que deben aplicarse y el soporte documental correspondiente según el Manual de Procedimiento.
    
    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.color-acento-botones(tipo="b" clase-tarjeta="tarjeta BG03" data-aos="zoom-in")
          div(titulo="Planificación del descanso")
            p #[strong Técnica de ejecución y orden de viaje]: el plan debe ordenar la detención del vehículo y el descanso del conductor y tripulante por al menos ocho (8) horas, después de un máximo de ocho (8) horas de conducción continua.
            p.mb-0 #[strong Soporte documental (texto exacto)]: manual de procedimiento (Num. 4.i): "El conductor o tripulante deberá descansar al menos ocho (8) horas, una vez haya conducido ocho (8) horas continuas ".
          div(titulo="Orden de inspección en ruta")
            p #[strong Técnica de ejecución y orden de viaje]: el plan debe incorporar interrupciones programadas para la inspección y el control. Se debe realizar una revisión de la unidad y los animales, por lo menos, cada cuatro (4) horas.
            p.mb-0 #[strong Soporte documental (texto exacto)]: manual de procedimiento (Num. 4.g): "El conductor o tripulante deberá realizar la inspección de la unidad de transporte de animales y de los animales en movimiento, por lo menos cada cuatro (4) horas durante el viaje".
          div(titulo="Planificación de paradas")
            p #[strong Técnica de ejecución y orden de viaje]: en casos de viajes de larga duración, el plan de viaje debe identificar un lugar de descanso de los animales donde se puedan realizar actividades de inspección, alojamiento, hidratación o alimentación.
            p.mb-0 #[strong Soporte documental (texto exacto)]: manual de procedimiento (Num. 4.h): "En los casos de interrupciones, estas se deben realizar en un lugar de descanso de los animales para realizar actividades de inspección, acomodación, hidratación o alimentación ".
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img05.jpg' alt="Imagen decorativa")

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Especie animal en pie
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img06.svg' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Tipos de especie animal
        p El manual de procedimientos rige el transporte de una amplia variedad de especies de producción que, debido a sus características físicas y comportamentales, requieren técnicas de manejo diferenciadas y condiciones específicas en el diseño del vehículo.
        p.mb-0 La normativa aplica a múltiples especies, cuyas particularidades físicas y de comportamiento determinan los requisitos estructurales del vehículo y las técnicas de manejo adecuadas.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Tipos de especies sometidas a regulación
    
    p.mb-5 La normativa aplica a todas las especies destinadas al consumo humano, con mención específica a las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img07.jpg' alt="Imagen decorativa")
          .tarjetas-up__card.tarjeta.BG05.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3.tac
                i.fas.fa-caret-down.fa-2x.me-3.tac
              h4.mb-0 Especies terrestres mayores
            p.text-center.mb-0 Bovina, bufalina y équida.
      .col-lg-4.col-sm-6.col-10.mb-4(data-aos="flip-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img08.jpg' alt="Imagen decorativa")
          .tarjetas-up__card.tarjeta.BG05.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3.tac
                i.fas.fa-caret-down.fa-2x.me-3.tac
              h4.mb-0 Especies terrestres menores
            p.text-center.mb-0 Porcina, ovina y caprina.
      .col-lg-4.col-sm-6.col-10.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img09.jpg' alt="Imagen decorativa")
          .tarjetas-up__card.tarjeta.BG05.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3.tac
                i.fas.fa-caret-down.fa-2x.me-3.tac
              h4.mb-0 Especies aviares
            p.text-center.mb-0 Aves de corral y otras especies domésticas o de producción, incluidas aves de traspatio, gallos de pelea, codornices, avestruces, patos, gansos y pavos.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-primario.p-4
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img10.svg' alt="Imagen decorativa")
            .col-lg-9
              p #[strong Soporte documental]: la resolución aplica al transporte de animales de las especies “bovina, porcina, caprina, ovina, aviar, bufalina, équida y las demás especies de consumo humano”.
              p.mb-0 — #[strong Resolución 20223040006915 (Art. 2)]

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Características físicas y requisitos de contención
    
    p Garantizar un transporte seguro y humanitario requiere reconocer que cada especie posee condiciones físicas y comportamentales particulares que influyen directamente en su susceptibilidad al estrés y en la forma en que deben ser contenidas durante el viaje.
    p.mb-5 A continuación, se presenta información esencial para comprender cómo las características físicas y comportamentales de cada especie determinan los requisitos de contención y las condiciones mínimas de diseño del vehículo durante la movilización. Esta relación permite garantizar un manejo seguro, reducir el estrés animal y prevenir lesiones, asegurando el cumplimiento de las buenas prácticas y de la normativa vigente.

    .BGIMG01.p-md-5.p-4.mb-5
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Grandes rumiantes (bovinos, bufalinos)
              p #[strong Características físicas clave]: gran tamaño, peso, necesidad de espacio para mantener el equilibrio y riesgo de hostilidad (cuernos).
              p.mb-0 #[strong Requisito de contención / diseño del vehículo]: divisiones o Barreras Fuertes para separación de grupos y Piso Antideslizante para prevenir caídas.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img11.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Porcinos / ovinos / caprinos
              p #[strong Características físicas clave]: sensibilidad al estrés térmico (porcinos), necesidad de densidad controlada (kg/m2) y riesgo de hacinamiento por densidad.
              p.mb-0 #[strong Requisito de contención / diseño del vehículo]: ventilación constante para mantener la temperatura entre 5 °C y 30 °C.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img12.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Aves (pollitos de un día)
              p #[strong Características físicas clave]: fragilidad, muy pequeño tamaño, inmadurez fisiológica.
              p.mb-0 #[strong Requisito de contención / diseño del vehículo]: cajas plásticas o de cartón seguras que deben ir fijadas o dispuestas de manera tal, que se eviten su desplazamiento y/o volcamiento.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img13.jpg' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img14.svg' alt="Imagen decorativa")
            .col-lg-9
              p #[strong Soporte documental]: "en el caso de pollitos de un día de edad, deben transportarse en cajas plásticas o de cartón seguras y en estado adecuado."
              p.mb-0 - #[strong Resolución 20223040006915 (numeral 2.2.c.ii)].

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnicas de manejo animal (separación, comportamiento y grupos etáreos)
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img15.jpg' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        p El manejo etológico exige separar adecuadamente a los animales dentro del vehículo para prevenir conflictos sociales y reducir el riesgo de lesiones.
        p La separación obligatoria debe aplicarse rigurosamente a:
        ul.lista-ul--color
          li(style="margin-bottom: 2px")
            i.fas.fa-horse-head
            | Diferentes especies.
          li(style="margin-bottom: 2px")
            i.fas.fa-horse-head
            | Diferentes edades y tamaños (grupos etáreos).
          li(style="margin-bottom: 2px")
            i.fas.fa-horse-head
            | Machos sexualmente maduros respecto de las hembras.
          li(style="margin-bottom: 2px")
            i.fas.fa-horse-head
            | Animales con y sin cuernos.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .BG01.p-4
          p #[strong Soporte documental]: “separar por especie, edad, tamaño, machos sexualmente maduros de hembras, animales con y sin cuernos, animales que puedan ser hostiles con otros o que requieran atención especial, o que estén lesionados.” 
          p.mb-0 - #[strong Manual de Procedimiento (núm. 4.c.iii)].
    
    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnicas de manejo específicas (cargue y descargue)
    
    p.mb-5 El manejo debe adaptarse a la movilidad y características físicas de cada especie.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img16.svg' alt="Imagen decorativa")
          .tarjeta.BG03
            .p-4
              .h4 Especies mayores
              p.mb-0 Emplear rampas con un máximo de veinte grados de inclinación para facilitar el movimiento natural y evitar miedo durante el ascenso o el descenso.
      .col-lg-6(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img17.svg' alt="Imagen decorativa")
          .tarjeta.BG03
            .p-4
              .h4 Todas las especies
              p.mb-0 El cargue y descargue debe realizarse con calma, sin ruidos, sin hostigamiento y sin utilizar fuerza innecesaria.

    .row.justify-content-center.mb-4
      .col-lg-10
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Técnicas de conducción (adaptación a la fragilidad)

        p.mb-5 La conducción debe ser suave y estable, especialmente en especies sensibles.

        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema1/img18.svg', alt="Imagen decorativa")
            h4.text-center Especies frágiles (aves y porcinos)
            p.mb-0 Se deben evitar frenadas bruscas que puedan provocar aplastamiento o volcamiento de las cajas de contención, o generar pánico y golpes colectivos.
          .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema1/img19.svg', alt="Imagen decorativa")
            h4.text-center Control de temperatura
            p.mb-0 En especies susceptibles al estrés térmico, como porcinos y aves, la conducción debe garantizar ventilación constante y evitar detenciones prolongadas bajo la radiación solar directa, conforme al numeral 4.f.

        .row.justify-content-center.mb-5
          .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/tema1/img20.svg' alt="Imagen decorativa")
          .col-lg-10(data-aos="fade-left")
            p.mb-0 A continuación, se presentan de manera organizada los principales aspectos, características y referencias normativas relacionadas con el transporte de especies de consumo humano, de manera que se puedan identificar de forma clara los criterios técnicos y el soporte documental que los respalda.

        LineaTiempoD.color-acento-botones.especial
          div(numero="1" titulo="Tipos de especies")
            p El manual aplica al transporte de las siguientes especies de producción: bovina, porcina, caprina, ovina, aviar, bufalina, équida y las demás especies de consumo humano.
            p RESOLUCIÓN 20223040006915 (Art. 2): "aplica a las personas naturales y jurídicas... de animales de las especies bovina, porcina, caprina, ovina, aviar, bufalina, équida y las demás especies de consumo humano ".
            figure
              img(src='@/assets/curso/tema1/img21.jpg' alt="Imagen decorativa")
          div(numero="2" titulo="Características físicas (aves)")
            p La característica de fragilidad y tamaño de las aves recién nacidas requiere el uso de contenedores específicos.
            p Manual de procedimiento (Num. 2.2.c.ii): "en el caso de pollitos de un día de edad, deben transportarse en cajas plásticas o de cartón seguras y en estado adecuado".
            figure
              img(src='@/assets/curso/tema1/img22.jpg' alt="Imagen decorativa")
          div(numero="3" titulo="Técnicas de manejo")
            p Las técnicas de manejo deben ser específicas para la especie y su comportamiento, exigiendo la separación por condiciones físicas (cuernos, tamaño) y reproductivas para evitar lesiones y hostilidad.
            p Manual de procedimiento (Num. 4.c.iii): exige separar por especie, edad, tamaño, y animales con y sin cuernos, reconociendo sus diferentes necesidades de manejo.
            figure
              img(src='@/assets/curso/tema1/img23.jpg' alt="Imagen decorativa")

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Técnicas de separación
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img24.jpg' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-4  
          p.mb-0 La separación de los animales dentro de la unidad de transporte constituye una técnica de manejo obligatoria y esencial para garantizar el bienestar animal. Su finalidad es prevenir el sufrimiento, las lesiones, el maltrato y los comportamientos de agresividad o pelea entre los animales, situaciones que pueden afectar su salud y comprometer la calidad de la carga.
        p.mb-0 A continuación, se presenta un recurso que sistematiza los principales #[strong criterios de separación de animales durante el transporte], detallando la técnica aplicada, su justificación desde la etología y el soporte documental correspondiente. Esta información orienta la toma de decisiones para garantizar el bienestar animal, prevenir riesgos sanitarios y reducir situaciones de estrés, lesiones o agresividad dentro de la unidad de transporte.

    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
              h4 Separación por especie
              p La técnica exige separar a los animales de diferentes especies (ej. bovinos de porcinos) para evitar el miedo, la agresión interespecífica y la transmisión de patógenos.
              p.mb-0 “Separar por especie…”. Manual de Procedimiento (núm. 4.c.iii).
            .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img25.png', alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img26.png', alt="Imagen decorativa")
            .col-lg-7(data-aos="fade-left")
              h4 Separación por grupos etáreos y tamaño
              p Se deben separar los animales por edad y tamaño para asegurar que los ejemplares más pequeños o jóvenes no sean aplastados o golpeados por animales más grandes o con mayor fuerza.
              p.mb-0 “Separar por edad y tamaño…”. Manual de Procedimiento (núm. 4.c.iii).
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
              h4 Separación por sexo y madurez
              p Se deben separar los machos sexualmente maduros de las hembras (y viceversa) para evitar el acoso sexual, el estrés y el riesgo de lesiones y caídas asociadas al comportamiento reproductivo.
              p.mb-0 “Separar a los machos sexualmente maduros de las hembras…”. Manual de Procedimiento (núm. 4.c.iii).
            .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img27.png', alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img28.png', alt="Imagen decorativa")
            .col-lg-7(data-aos="fade-left")
              h4 Separación por condición física y hostilidad
              p Es obligatorio separar a los animales con y sin cuernos ya aquellos animales que puedan ser hostiles con otros. También se deben separar los que requieran atención especial o que estén lesionados.
              p.mb-0 “Separar a los animales con y sin cuernos, así como a aquellos que puedan ser hostiles con otros, requieran atención especial o se encuentren lesionados…”. Manual de Procedimiento (núm. 4.c.iii).

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-primario.p-4
          p.mb-0 La separación se aplica a diferentes niveles, por especie, por condición física o por comportamiento, con el fin de reducir el riesgo de conflictos entre los animales. Esta técnica es responsabilidad directa del conductor o del tripulante de la unidad de transporte.
    
    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Consecuencias de la falta de separación en el bienestar animal
    
    p.mb-5 La no aplicación de esta técnica operativa conlleva a una vulneración del bienestar animal, lo que puede generar las siguientes consecuencias:

    .row.justify-content-center.mb-4
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img29.svg' alt="Imagen decorativa")
      .col-lg-10(data-aos="fade-left")
        ol.lista-ol--cuadro.lista-ol--separador
          li(data-aos="fade-left") 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 #[strong Lesiones y traumatismos]: ocasionados por peleas entre los animales o por el aplastamiento de ejemplares de menor tamaño.
          li(data-aos="fade-left") 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 #[strong Aumento del estrés]: producto del acoso constante, lo cual puede afectar la calidad y la inocuidad de la carne.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Etapas fisiológicas del animal, comportamiento y sentidos animal
    
    p.mb-5 El bienestar animal durante el transporte se fundamenta en el conocimiento de la etología, entendida como el estudio del comportamiento animal, así como en la identificación de las etapas fisiológicas críticas que influyen directamente en la capacidad del animal para tolerar el estrés, el movimiento y las condiciones propias del transporte. Este conocimiento permite al personal aplicar un manejo humanitario, preventivo y basado en criterios técnicos y científicos.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Etapas fisiológicas críticas (exclusión del transporte)
    
    p.mb-5 Las siguientes situaciones fisiológicas representan un riesgo elevado de sufrimiento para el animal y constituyen causales obligatorias de exclusión del transporte, de acuerdo con la normativa vigente:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1.
      i Etapas fisiológicas críticas
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 18%;") Etapa fisiológica
            th(style="background-color: #F3BC5B; width: 36%;") Criterio de riesgo
            th(style="background-color: #F3BC5B; width: 46%;") Consecuencia y técnica de exclusión
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Gestación avanzada
            td(style="background-color: #F6F6F6;") Último tercio de gestación, animal próximo al parto.
            td(style="background-color: #F6F6F6;") La técnica es la exclusión de la hembra para prevenir el parto durante el transporte, el sufrimiento fetal y el riesgo de mortalidad de la madre en ruta.
          tr(data-aos="fade-right")
            th Postparto
            td Animal que ha parido siete (7) días antes de la fecha del embarque.
            td La técnica es la exclusión durante el período crítico de recuperación posparto.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img30.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4 Soporte documental
              p.mb-0 La exclusión es obligatoria para “hembras próximas al parto (último tercio de gestación) o que hayan parido siete (7) días antes de la fecha del embarque” (Manual de procedimiento, Núm. 4.ai).
    
    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Comportamiento animal (etología aplicada al manejo)
    
    p El comportamiento de los animales de granja, basado en su condición de presas, determina las técnicas de manejo que deben emplearse durante el cargue, el descargue y el transporte. La comprensión de estas conductas reduce el riesgo de lesiones, estrés y pérdidas productivas.
    p.mb-5 A continuación, se presentan los principales comportamientos observables y su relación con las técnicas de manejo adecuadas:

    AcordionA.color-acento-botones.mb-5(tipo="a" clase-tarjeta="tarjeta BG03" data-aos="zoom-in")
      .row.justify-content-center(titulo="Mantenimiento del equilibrio")
        .col-lg-6.order-lg-1.order-2
          p #[strong Aplicación en la técnica de manejo]: la capacidad de mantener la posición de equilibrio estático es un indicador de aptitud para el transporte. El animal que no pueda mantener esta posición sin ayuda debe ser excluido, ya que existe alto riesgo de caídas y lesiones en ruta.
          p.mb-0 #[strong Soporte documental]: criterio principal de exclusión para animales con problemas de movilidad (Manual de procedimiento, Núm. 4.ai).
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img31.jpg', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Respuesta al hostigamiento")
        .col-lg-6.order-lg-1.order-2
          p #[strong Aplicación en la técnica de manejo]: el miedo y la angustia se activan por el uso de fuerza, ruido o presión excesiva. El cargue y descargue deben realizarse con calma, sin gritos ni estímulos estresantes.
          p.mb-0 #[strong Soporte documental]: exigencia de cargue y descargue con calma, sin ruidos ni hostigamiento (Manual de procedimiento, Núm. 4).
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img32.jpg', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Agresividad y hostilidad")
        .col-lg-6.order-lg-1.order-2
          p #[strong Aplicación en la técnica de manejo]: la agresividad, especialmente en machos sexualmente maduros o animales con cuernos, se controla mediante la separación por grupos para evitar conflictos y daños físicos.
          p.mb-0 #[strong Soporte documental]: exigencia de separar machos sexualmente maduros de hembras y animales con y sin cuernos (Manual de procedimiento, Núm. 4.c.iii).
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img33.jpg', alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Sentidos animales y su influencia en el estrés
    
    p Los animales perciben el entorno de manera distinta a los humanos. Sus sentidos son más sensibles, por lo que un manejo inadecuado puede generar respuestas intensas de estrés y comprometer su bienestar.
    p.mb-5 En el siguiente recurso se relacionan los sentidos más relevantes con su impacto fisiológico y las técnicas de cuidado recomendadas:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 2.
      i Sentidos animales y su influencia en el estrés
    .tabla-a.color-acento-contenido.mb-4
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Sentido
            th(style="background-color: #F3BC5B; width: 38%;") Relevancia en el transporte
            th(style="background-color: #F3BC5B; width: 38%;") Técnica de cuidado asociada
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Oído (sensibilidad auditiva)
            td(style="background-color: #F6F6F6;") Los ruidos fuertes como gritos, bocinas, motores o golpes generan pánico, incrementan el nivel de cortisol y provocan fatiga.
            td(style="background-color: #F6F6F6;") Manejo silencioso, conducción suave y evitación de ruidos bruscos.
          tr(data-aos="fade-right")
            th Vista (percepción de la luz)
            td La visión panorámica y la sensibilidad a contrastes de luz y sombra pueden generar miedo o detenciones durante el desplazamiento.
            td Evitar sombras marcadas en rampas y pasillos, utilizar iluminación uniforme.
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Tacto (movilidad)
            td(style="background-color: #F6F6F6;") La percepción del suelo es determinante. Superficies resbaladizas generan inseguridad, resistencia al movimiento y riesgo de caídas.
            td(style="background-color: #F6F6F6;") Uso de pisos antideslizantes y rampas con inclinación suave (máximo 20 grados).
          tr(data-aos="fade-right")
            th Condiciones físicas generales
            td Lesiones, enfermedades o dolor afectan la fisiología, el estado mental y el bienestar general del animal.
            td Exclusión obligatoria de animales enfermos o lesionados (ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie, pág. 2).

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Técnicas de elección de vehículo según especie animal

    .BG02.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img34.png' alt="Imagen decorativa")
        .col-lg-7.p-4
          .row.mb-4
            .col-lg-2.col-3
              img(src='@/assets/curso/tema1/img35.svg' alt="Imagen decorativa")
          p.mb-0 La elección de la unidad de transporte es una técnica de planificación y manejo que se realiza antes del proceso de carga. El vehículo debe seleccionarse en función de la especie, el tamaño, la cantidad de animales y sus necesidades específicas de bienestar animal, tales como el espacio disponible, la ventilación y los sistemas de contención, con el fin de mitigar el riesgo de lesiones, sufrimiento y estrés durante el transporte.

    .row.justify-content-center.mb-5
      .col-lg-1.col-2.px-0(data-aos="fade-right")
        .BG07.p-2.h-100
          img(src='@/assets/curso/tema1/img36.svg' alt="Imagen decorativa")
      .col-lg-9.col-10.px-0(data-aos="fade-left")
        .BG04.p-4.h-100
          p.mb-0 A continuación, se presenta un recurso que describe los criterios técnicos que deben considerarse en la elección del vehículo según la especie animal y las exigencias normativas asociadas.

    .BGIMG01.p-md-5.p-4.mb-5
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Capacidad y densidad
              p El vehículo debe ser seleccionado según su área útil, garantizando espacio suficiente para que el animal pueda levantarse, acostarse y girar, de acuerdo con la densidad de carga establecida para cada especie.
              p.mb-0 #[strong Soporte documental]: manual de Procedimiento (Numeral 4.e). “Procurar que se cuente con espacio disponible para que el animal pueda levantarse, acostarse y dar vuelta”.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img37.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Protección climática
              p Para todas las especies, el vehículo debe contar con techo o cubierta que proteja a los animales de las condiciones climáticas adversas.
              p.mb-0 #[strong Soporte documental]: manual de Procedimiento (Numeral 2.2.c.i). “Deberán contar con techo o cubierta que proteja a los animales de las condiciones climáticas adversas”.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img38.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Contención específica
              p En especies pequeñas, como pollitos de un día, el vehículo debe ser adecuado para asegurar las cajas plásticas o de cartón utilizadas como unidades de contención, evitando su desplazamiento o volcamiento durante el transporte.
              p.mb-0 #[strong Soporte documental]: manual de Procedimiento (Numeral 2.2.c.v). “Las cajas deben estar fijadas o dispuestas de manera tal que se evite su desplazamiento y/o volcamiento”.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img39.jpg' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Técnicas de elección según necesidades específicas de la especie
        p La elección del vehículo también debe responder a las características particulares de ciertos grupos de animales, considerando sus requerimientos de manejo, contención y bienestar.
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Especies que requieren contención fuerte y separación
        p.mb-0 Por ejemplo: bovinos y équidos. El vehículo debe ser seleccionado por su capacidad estructural para albergar animales de gran tamaño y resistir su peso y movimiento. En estos casos se requiere:
      .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img40.png' alt="Imagen decorativa")  

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img41.svg' alt="Imagen decorativa")
          .tarjeta.BG03
            .p-4
              .h4 Divisiones internas
              p.mb-0 El vehículo debe contar con estructura que permita instalar barreras resistentes para separar grupos según edad, tamaño y presencia de cuernos.
      .col-lg-6(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img42.svg' alt="Imagen decorativa")
          .tarjeta.BG03
            .p-4
              .h4 Contención general
              p.mb-0 La unidad debe ofrecer seguridad y robustez, estando diseñada específicamente para el transporte de animales vivos.

    .row.justify-content-center.mb-5
      .col-lg-10
        .mb-4.d-flex(data-aos="fade-right")
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Especies que requieren control de microclima
        p.mb-5 Por ejemplo: porcinos y aves. Para estas especies, la selección del vehículo se centra en el control de temperatura y ventilación:

        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema1/img43.svg', alt="Imagen decorativa")
            h4.text-center Ventilación
            p.mb-0 El vehículo debe contar con dispositivos que garanticen ventilación constante y mantengan una temperatura entre 5 °C y 30 °C.
          .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema1/img44.svg', alt="Imagen decorativa")
            h4.text-center Altura (Porcinos)
            p.mb-0 En el caso de porcinos, los compartimentos con ventilación natural deben contar con una altura libre mínima de 90 cm para permitir un flujo de aire adecuado.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Especies que requieren contención en unidades externas
      
    p.mb-5 Por ejemplo: aves y pollitos de un día. El vehículo debe seleccionarse por su capacidad para transportar de forma segura unidades de contención externas:

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 10%")
            img(src='@/assets/curso/tema1/img45.svg' alt="Imagen decorativa")
          .tarjeta.BG03
            .p-4
              .h4 Capacidad de fijación
              p.mb-0 El vehículo debe garantizar que las cajas plásticas o de cartón estén fijadas o dispuestas de manera que se evite su desplazamiento o volcamiento durante el trayecto.
    
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img46.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4 Soporte documental
              p.mb-0 Resolución 20223040006915 (Numeral 2.2.c.v). “Las cajas deben estar fijadas o dispuestas de manera tal que se evite su desplazamiento y/o volcamiento”.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Personas del proceso de transporte animal en pie: tipos, características y tipo de obligaciones
    
    p El proceso de transporte animal en pie involucra diferentes actores que cumplen funciones específicas y complementarias. Cada uno de ellos tiene responsabilidades definidas por la normativa vigente, orientadas a garantizar el bienestar animal, la bioseguridad y el cumplimiento legal durante todas las etapas del proceso.
    p.mb-5 A continuación, se presenta un recurso que describe los principales tipos de personas involucradas, su rol dentro del proceso y las obligaciones que les corresponden.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 3.
      i Personas del proceso de transporte animal en pie
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 16%;") Tipo de persona
            th(style="background-color: #F3BC5B; width: 28%;") Característica / rol principal
            th(style="background-color: #F3BC5B; width: 28%;") Tipo de obligaciones clave
            th(style="background-color: #F3BC5B; width: 28%;") Soporte documental (texto exacto)
        tbody
          tr(data-aos="fade-right")
            td(style="background-color: #F6F6F6;") Propietario, tenedor o poseedor de los animales (remitente).
            td(style="background-color: #F6F6F6;") Responsable legal de la carga viva. Debe asegurar que solo se movilicen animales aptos.
            td(style="background-color: #F6F6F6;") Observar y seleccionar los animales para detectar y excluir a los no aptos (enfermos, lesionados, en etapa crítica de gestación).
            td(style="background-color: #F6F6F6;") "el propietario, tenedor o poseedor de los animales... deberá observar y seleccionar los animales, para detectar animales no aptos para el transporte." Manual de procedimiento (núm. 4.a).
          tr(data-aos="fade-right")
            td Toda persona involucrada en el proceso.
            td Cualquier actor que intervenga en las diferentes etapas del manejo y cuidado, incluyendo el personal de carga y descargue.
            td Realizar y aprobar el curso de capacitación en bienestar animal y portar el certificado que lo acredita.
            td "toda persona involucrada en el proceso... deberá realizar un curso de capacitación en bienestar animal y portar el documento que certifique." Manual de procedimiento (núm. 6).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Personas responsables del transporte en ruta
    
    p Durante el desplazamiento, la responsabilidad del bienestar animal recae directamente sobre quienes operan el vehículo y acompañan la carga viva. Su actuación es clave para prevenir lesiones, estrés y situaciones de riesgo durante el trayecto.
    p.mb-5 El siguiente recurso detalla los roles y obligaciones de las personas responsables de la operación en ruta.

    TabsC.color-acento-botones.mb-5(data-aos="zoom-out")
      .BG06.px-4.py-3.py-md-4(titulo="Conductor o transportador")
        .row.justify-content-center
          .col-lg-4.col-sm-6.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img47.jpg' alt="Imagen decorativa")
          .col-lg-8
            p #[strong Característica / rol principal]: responsable de la operación del vehículo. Debe asegurar la seguridad vial y el manejo humanitario.
            p #[strong Tipo de obligaciones clave]: conducción suave, descanso mínimo de ocho (8) horas tras ocho (8) horas continuas de conducción y aplicación del plan de contingencia en caso de emergencia.
            p.mb-0 #[strong Soporte documental (texto exacto)] "el conductor o tripulante deberá descansar al menos ocho (8) horas, una vez haya conducido ocho (8) horas continuas." Manual de procedimiento (núm. 4.i)
      .BG06.px-4.py-3.py-md-4(titulo="Tripulante")
        .row.justify-content-center
          .col-lg-4.col-sm-6.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img48.jpg' alt="Imagen decorativa")
          .col-lg-8
            p #[strong Característica / rol principal]: personal de apoyo en el manejo y cuidado de la carga durante el transporte.
            p #[strong Tipo de obligaciones clave]: realizar la inspección de la unidad de transporte y de los animales en movimiento por lo menos cada cuatro (4) horas durante el viaje.
            p.mb-0 #[strong Soporte documental (texto exacto)] "el conductor o tripulante deberá realizar la inspección... por lo menos cada cuatro (4) horas durante el viaje." Manual de procedimiento (núm. 4.g)

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Personas y entidades de vigilancia y control
    
    p Además de los actores operativos, existen entidades encargadas de la inspección, vigilancia y control del cumplimiento de la normativa relacionada con el transporte animal en pie. Su función es garantizar que las condiciones de bienestar animal y los requisitos legales sean respetados.
    p.mb-5 El recurso que se presenta a continuación identifica a las principales autoridades y sus obligaciones.

    AcordionA.color-acento-botones.mb-4(tipo="a" clase-tarjeta="tarjeta BG03" data-aos="zoom-in")
      .row.justify-content-center(titulo="Funcionarios del ICA (Instituto Colombiano Agropecuario)")
        .col-lg-6.order-lg-1.order-2
          p #[strong Característica / rol principal]: autoridad sanitaria encargada de la inspección y control oficial.
          p #[strong Tipo de obligaciones clave]: realizar inspección, vigilancia y control del cumplimiento de las condiciones de bienestar animal y los protocolos sanitarios.
          p.mb-0 #[strong Soporte documental (texto exacto)]: "Están en la obligación de permitir la inspección, vigilancia y control por parte de los funcionarios del instituto colombiano agropecuario (ica)." resolución 20223040006915 (art. 4, parágrafo)
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img49.jpg', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Autoridades de tránsito")
        .col-lg-6.order-lg-1.order-2
          p #[strong Característica / rol principal]: autoridad encargada de la seguridad vial.
          p #[strong Tipo de obligaciones clave]: exigir la documentación obligatoria, incluido el certificado de capacitación en bienestar animal, y controlar la capacidad legal de carga del vehículo.
          p.mb-0 #[strong Soporte documental (texto exacto)]: "El cual podrá ser exigido por las autoridades de tránsito y/o por el instituto colombiano agropecuario (ica)." Manual de procedimiento (núm. 6)
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img50.jpg', alt="Imagen decorativa")

    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Manejo de personal y obligaciones de los operarios

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img51.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Manejo de personal y obligaciones de los operadores
        p El manejo de personal en el transporte de animales en pie se centra en la capacitación obligatoria y en el cumplimiento de un conjunto de obligaciones operativas que garantizan la seguridad y el bienestar de la carga viva durante todas las fases del proceso.
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Manejo de personal: la capacitación como obligación primordial
        p La técnica de manejo del personal se fundamenta en asegurar que todo operario cuente con la competencia técnica necesaria para el manejo humanitario y el cumplimiento de la normativa vigente.
        p.mb-0 Toda persona involucrada en el proceso debe realizar y aprobar el curso de capacitación en bienestar animal, el cual constituye el principal mecanismo para estandarizar conocimientos y prácticas. Asimismo, el personal debe portar el documento que certifique la aprobación del curso, permitiendo a las autoridades competentes verificar la idoneidad del operario.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Obligaciones operacionales de los operadores (conductor y tripulante)
        p Las obligaciones del personal de ruta se organizan en acciones relacionadas con el manejo humanitario, la vigilancia permanente y la seguridad vial durante el transporte.
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Obligaciones de cuidado y manejo (cargue y descargue)
        p.mb-0 La técnica de manejo exige un comportamiento específico por parte del operador con el fin de reducir el estrés y evitar el maltrato animal. El cargue y descargue deben realizarse con calma, sin ruidos ni hostigamiento, y sin el uso de fuerza innecesaria. El operador tiene la obligación de utilizar las divisiones o barreras del vehículo para separar a los animales según especie, edad, tamaño y nivel de hostilidad.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img52.jpg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Obligaciones de vigilancia y tiempos de descanso (ruta)
    
    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img53.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p.mb-0 El operario debe planificar y ejecutar las pausas obligatorias que garanticen el bienestar animal y humano durante el trayecto. Se establece la obligación de inspeccionar la unidad de transporte y los animales en movimiento, por lo menos cada cuatro (4) horas durante el viaje. Asimismo, el operador debe descansar al menos ocho (8) horas una vez haya conducido ocho (8) horas continuas.

    p.mb-5 Antes de detallar las obligaciones específicas, a continuación, se presenta un recurso que sintetiza las principales técnicas de manejo del personal, las responsabilidades operativas y su soporte normativo.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 4.
      i Obligaciones de vigilancia y tiempos de descanso
    .tabla-a.color-acento-contenido.mb-4
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Técnica de manejo de personal
            th(style="background-color: #F3BC5B; width: 38%;") Obligación del operario
            th(style="background-color: #F3BC5B; width: 38%;") Soporte documental (texto exacto)
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Capacitación obligatoria
            td(style="background-color: #F6F6F6;") El operador tiene la obligación de realizar y aprobar el curso de capacitación en bienestar animal.
            td(style="background-color: #F6F6F6;") Manual de procedimiento (Num. 6): "Toda persona involucrada en el proceso de transporte deberá realizar un curso de capacitación en bienestar animal..."
          tr(data-aos="fade-right")
            th Manejo humanitario
            td La obligación del operario durante el cargue y descargue es actuar con calma, eliminando el uso de fuerza innecesaria.
            td Manual de procedimiento (Num. 4): "Los animales deberán ser cargados y descargados con calma, sin ruidos ni hostigamiento, ni empleo de fuerza innecesarios..."
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Control de tiempos
            td(style="background-color: #F6F6F6;") El operador tiene la obligación de descansar al menos ocho (8) horas tras ocho (8) horas continuas de conducción.
            td(style="background-color: #F6F6F6;") Manual de procedimiento (Num. 4.i): "El conductor o tripulante deberá descansar al menos ocho (8) horas..."

    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Normativa de seguridad y salud en el trabajo
    
    .row.justify-content-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img54.svg' alt="Imagen decorativa")
      .col-lg-10(data-aos="fade-left")
        p La normativa específica del transporte de animales en pie se enfoca principalmente en el bienestar animal, la bioseguridad y la seguridad vial. Por esta razón, no detalla de forma explícita los elementos de protección personal ni las técnicas de higiene postural, las cuales se rigen por la legislación general de seguridad y salud en el trabajo en Colombia.
        .cajon.color-secundario.p-4
          p.mb-0 La normativa de SST, reglamentada principalmente por el Decreto 1072 de 2015, establece la obligación de los empleadores de suministrar y supervisar el uso de los elementos de protección personal, así como de implementar programas de higiene postural para mitigar los riesgos asociados a la actividad.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          i Beneficios de la normativa SST para el bienestar animal y la seguridad laboral en el transporte
        figure(data-aos="zoom-in")
          img.d-lg-flex.d-none(src='@/assets/curso/tema1/img55.svg' alt="Imagen decorativa")
          img.d-lg-none.d-flex(src='@/assets/curso/tema1/img56.svg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Elementos de protección personal (EPP)
    
    p Los elementos de protección personal constituyen la última barrera entre el riesgo y el trabajador. En el transporte de animales en pie, su uso es especialmente relevante durante las fases de cargue, descargue, inspección en ruta y mantenimiento del vehículo.
    p.mb-5 A continuación, se presenta un recurso que relaciona las zonas del cuerpo a proteger, los EPP recomendados y su justificación en el contexto del transporte animal.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 5.
      i Elementos de protección personal (EPP)
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 20%;") Zona para proteger
            th(style="background-color: #F3BC5B; width: 40%;") EPP recomendado u obligatorio
            th(style="background-color: #F3BC5B; width: 40%;") Justificación en el transporte animal
        tbody
          tr(data-aos="fade-right")
            td(style="background-color: #F6F6F6;") Cabeza
            td(style="background-color: #F6F6F6;") Casco de seguridad
            td(style="background-color: #F6F6F6;") Protección contra impactos o caída de objetos durante las operaciones de cargue y descargue.
          tr(data-aos="fade-right")
            td Cuerpo
            td Chaleco reflectante o de alta visibilidad
            td Mejora la seguridad vial y la visibilidad durante inspecciones o paradas de emergencia.
          tr(data-aos="fade-right")
            td(style="background-color: #F6F6F6;") Ojos y rostro
            td(style="background-color: #F6F6F6;") Gafas de seguridad (transparentes o polarizadas)
            td(style="background-color: #F6F6F6;") Protección frente a polvo, partículas y salpicaduras de excretas o productos de limpieza.
          tr(data-aos="fade-right")
            td Manos
            td Guantes de protección (cuero, vaqueta o sintético rugoso)
            td Prevención de lesiones al manipular puertas, divisiones, rampas o herramientas.
          tr(data-aos="fade-right")
            td(style="background-color: #F6F6F6;") Pies
            td(style="background-color: #F6F6F6;") Calzado de seguridad (punta de acero o composite y suela antideslizante)
            td(style="background-color: #F6F6F6;") Protección contra golpes, aplastamientos y caídas en superficies húmedas o resbalosas.
          tr(data-aos="fade-right")
            td Vías respiratorias
            td Mascarilla o respirador (filtro N95 o superior)
            td Protección durante labores de limpieza, desinfección o exposición a polvo ambiental.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Relación implícita entre la normativa y la SST
      
    p Aunque el manual no detalla EPP ni técnicas posturales específicas, sí establece requisitos estructurales y operativos que impactan directamente la seguridad del operario.
    p.mb-5 A continuación, se presenta un recurso que resume esta relación implícita.

    .tarjeta.BG08.p-4.mb-5(data-aos="fade-right")
      SlyderA.color-acento-botones(tipo="b" data-aos="zoom-in")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Elementos de protección personal
            p #[strong Soporte documental (contexto del manual)]: el manual no detalla tipos de EPP (casco, botas de seguridad, guantes, etc.). La obligación implícita recae en la necesidad de usar rampas seguras con pisos antideslizantes y la capacitación, que debería incluir la seguridad laboral.
            p.mb-0 #[strong Nota]: el manual no detalla tipos de EPP específicos.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img57.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Técnicas de higiene postural
            p #[strong Soporte documental (contexto del manual)]: no se mencionan técnicas de higiene postural. La obligación es genérica a través del Curso de Bienestar Animal, que debe incluir las acciones a tomar en caso de accidentes que involucren a los animales o al personal.
            p.mb-0 #[strong Nota]: no se describen técnicas posturales específicas.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img58.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Seguridad del operario
            p #[strong Soporte documental (contexto del manual)]: se requiere una rampa segura con máximo 20 grados de inclinación, lo que indirectamente reduce el riesgo de lesiones y esfuerzo para el operario durante el manejo de la carga.
            p.mb-0 #[strong Nota]: reduce el riesgo de lesiones durante el manejo.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img59.jpg' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnicas de higiene postural y ergonomía
    
    p El principal riesgo para el conductor es la fatiga y el desarrollo de lesiones osteomusculares asociadas a la postura prolongada y a las vibraciones del vehículo. La higiene postural se divide en dos fases: ajuste del puesto de conducción y pausas activas durante la ruta.

    .BGIMG02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center
        .col-lg-10
          .mb-4.d-flex(data-aos="fade-right")
            .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
              img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
              h3.col.ps-3.mb-0 Técnica de ajuste postural (en el asiento)

          p Antes de iniciar el viaje, el operario debe realizar los siguientes ajustes ergonómicos :

          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 Ajuste del asiento (distancia): deslizar el asiento hasta mantener las rodillas ligeramente flexionadas y alcanzar los pedales sin esfuerzo.
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 Ajuste del respaldo (ángulo): inclinar ligeramente el respaldo hasta un ángulo aproximado de 100 grados para apoyar la zona lumbar.
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 3
              p.mb-0 Ajuste del reposacabezas: ubicarlo a la altura de las orejas o los ojos para prevenir lesiones cervicales.
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta
                span 4
              p.mb-0 Ajuste del volante y brazos: colocar las manos en posición “tres y cuarto”, con brazos ligeramente flexionados.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Técnica de pausas activas (en ruta)
    
    p.mb-5 Las pausas activas complementan la obligación legal de descanso y contribuyen a reducir la fatiga física.

    .row.justify-content-center.mb-4
      .col-lg-10
        LineaTiempoD.color-acento-botones.especial
          div(numero="1" titulo="Frecuencia")
            p Pausas de cinco a diez minutos cada dos horas de conducción continua.
            figure
              img(src='@/assets/curso/tema1/img60.jpg' alt="Imagen decorativa")
          div(numero="2" titulo="Ejecución")
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle
                | Bajar del vehículo y abandonar la posición sentada.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle
                | Realizar estiramientos suaves del cuello, moviendo la cabeza de lado a lado y de arriba hacia abajo.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle
                | Ejecutar movimientos circulares de hombros hacia adelante y hacia atrás.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle
                | Realizar giros suaves del tronco estando de pie.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle
                | Caminar brevemente y realizar elevaciones de rodillas o sentadillas suaves.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle
                | Aprovechar la pausa para hidratarse con agua.
            figure
              img(src='@/assets/curso/tema1/img61.jpg' alt="Imagen decorativa")

    separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.8 Listas de chequeo y tiempos máximos de recorrido
    
    p.mb-5 Las listas de chequeo y el control de los tiempos máximos de recorrido son técnicas de gestión operativa obligatorias orientadas a garantizar el bienestar animal y a prevenir accidentes asociados a la fatiga del personal durante el transporte de animales en pie. Estas técnicas permiten verificar de manera periódica el estado de la carga viva, las condiciones estructurales del vehículo y el cumplimiento de los tiempos de conducción establecidos por la normativa.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Contenido de las listas de chequeo (inspección en ruta)
    
    p.mb-5 Durante el recorrido, el conductor o tripulante debe realizar inspecciones periódicas de la unidad de transporte y de los animales movilizados. A continuación, se presenta un recurso que organiza los principales puntos críticos que deben ser verificados en cada inspección, las cuales deben efectuarse cada cuatro (4) horas o durante las paradas programadas.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 6.
      i Contenido de las listas de chequeo
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Punto de chequeo (verificación)
            th(style="background-color: #F3BC5B; width: 38%;") Elemento estructural, operacional o sanitario a revisar
            th(style="background-color: #F3BC5B; width: 38%;") Soporte documental (base de la obligación)
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Chequeo de bienestar animal
            td(style="background-color: #F6F6F6;") Espacio disponible suficiente para que el animal pueda levantarse, acostarse y dar vuelta, asociado a la densidad de carga.
            td(style="background-color: #F6F6F6;") “Procurar que se cuente con espacio disponible para que el animal pueda levantarse, acostarse, dar vuelta …”. Manual de procedimiento (Num. 4.e).
          tr(data-aos="fade-right")
            th Chequeo sanitario
            td Verificación de que el sistema de contención del vehículo evite la filtración de orina y heces hacia la vía pública.
            td “Evite la filtración de orina y heces hacia la vía pública.” Resolución 20223040006915 (Núm. 2.2.c.ii).
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Chequeo de la carga viva
            td(style="background-color: #F6F6F6;") Inspección para detectar animales caídos, lesionados, enfermos o aquellos que requieran acomodación, hidratación o alimentación.
            td(style="background-color: #F6F6F6;") “…Inspección, acomodación, hidratación o alimentación.” Manual de procedimiento (Núm. 4.h).
          tr(data-aos="fade-right")
            th Chequeo de bioseguridad estructural
            td Verificación de que el vehículo tenga techo o cubierta y que la rampa utilizada cumpla con la inclinación máxima de 20°.
            td Resolución 20223040006915 (Num. 2.2.c.i) y Manual de procedimiento (Num. 4.a).
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Chequeo climático
            td(style="background-color: #F6F6F6;") Verificación de la ventilación constante y del mantenimiento de la temperatura interna entre 5 °C y 30 °C.
            td(style="background-color: #F6F6F6;") “…Ventilación constante y asegurar la temperatura que no podrá ser inferior a 5° ni superior a 30 °C.” Manual de procedimiento (Núm. 4.f).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Tiempos máximos de recorrido
    
    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img62.svg' alt="Imagen decorativa")
      .col-lg-11.col-10(data-aos="fade-left")
        p.mb-0 El control de los tiempos máximos de recorrido es una obligación normativa orientada a prevenir la fatiga del conductor y a proteger el bienestar animal durante el transporte. A continuación, se presenta un recurso que sintetiza los límites de conducción, los tiempos de inspección y los contenidos mínimos que deben ser verificados durante las paradas.
    
    .BGIMG01.p-md-5.p-4.mb-4
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Tiempos máximos de conducción
              p #[strong Detalle de la técnica o tiempos máximos]: ocho (8) horas continuas corresponde al límite máximo de conducción permitido para el conductor o tripulante.
              p.mb-0 #[strong Soporte documental (texto exacto)]: Manual de procedimiento (Num. 4.i).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img63.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Tiempos mínimos de inspección
              p #[strong Detalle de la técnica o tiempos máximos]: la inspección de la unidad y de los animales debe realizarse, como mínimo, cada cuatro (4) horas durante el viaje.
              p.mb-0 #[strong Soporte documental (texto exacto)]: Manual de procedimiento (Num. 4.g).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img64.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Contenido del chequeo estructural
              p #[strong Detalle de la técnica o tiempos máximos]: verificación de que el vehículo cuente con techo o cubierta y que la rampa cumpla con una inclinación máxima de 20°.
              p.mb-0 #[strong Soporte documental (texto exacto)]: Manual de procedimiento (Num. 2.2.c.i y 4.a).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img65.jpg' alt="Imagen decorativa")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Contenido del chequeo sanitario
              p #[strong Detalle de la técnica o tiempos máximos]: verificación de que el vehículo cuente con un sistema que evite la filtración de orina y heces hacia la vía pública.
              p.mb-0 #[strong Soporte documental (texto exacto)]: Manual de procedimiento (Num. 2.2.c.ii).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img66.jpg' alt="Imagen decorativa")

    separador
    #t_1_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.9 Tipos de formatos y técnicas de diligenciamiento de plan de ruta o plan de viaje
    
    p La documentación del viaje y el diligenciamiento preciso de los registros operativos constituyen un mecanismo de control indispensable para verificar el cumplimiento de los tiempos de conducción, las pausas de descanso y los protocolos de bienestar animal exigidos por las autoridades competentes (ICA y tránsito).
    p.mb-5 Aunque el manual no suministra un formato específico denominado plan de ruta, sí define los formatos y registros obligatorios que deben diligenciarse durante la movilización de animales en pie, los cuales se describen a continuación.

    .row.justify-content-center.mb-5
      .col-auto(data-aos="fade-right")
        .tarjeta.BG07.p-3
          .h4.mb-0 Tipos de formatos y técnicas de registro requeridos para el plan de viaje
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
         LineaTiempoD.color-acento-botones.especial
          div(numero="1" titulo="Formato oficial de control")
            p Guía sanitaria de movilización (GSMI). Este es el formato de control sanitario indispensable para toda movilización legal de animales en pie. (Documento exigido por el ICA, implícito en el control oficial).
            figure
              img(src='@/assets/curso/tema1/img67.jpg' alt="Imagen decorativa")
          div(numero="2" titulo="Registro de tiempos")
            p La técnica de diligenciamiento debe incluir el registro de las horas de conducción y de descanso del conductor o tripulante, demostrando el cumplimiento de las ocho (8) horas de descanso tras ocho (8) horas de manejo.
            p #[strong Soporte documental]: manual de procedimiento (Num. 4.i): “el conductor o tripulante deberá descansar al menos ocho (8) horas …”.
            figure
              img(src='@/assets/curso/tema1/img68.jpg' alt="Imagen decorativa")
          div(numero="3" titulo="Registro de novedades")
            p El plan de viaje debe registrar las interrupciones y las actividades realizadas en el lugar de descanso, tales como inspección, alojamiento, hidratación o alimentación.
            p #[strong Soporte documental]: manual de procedimiento (Num. 4.h): menciona las interrupciones para realizar actividades.
            figure
              img(src='@/assets/curso/tema1/img69.jpg' alt="Imagen decorativa")
          div(numero="4" titulo="Registro de inspecciones")
            p La técnica exige el registro de las inspecciones realizadas cada cuatro (4) horas, detallando el estado de la unidad de transporte y de los animales en movimiento.
            p #[strong Soporte documental]: manual de procedimiento (Num. 4.g): “…inspección de la unidad de transporte… por lo menos cada cuatro (4) horas …”.
            figure
              img(src='@/assets/curso/tema1/img70.jpg' alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img71.svg' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left") 
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Técnicas de diligenciamiento del plan de ruta (registros operacionales)
        p.mb-5 El plan de ruta se diligencia mediante el registro continuo y ordenado de las acciones operativas y de bienestar animal realizadas durante el viaje, conforme a los tiempos máximos y mínimos establecidos por la normativa vigente.
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
            img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
            h3.col.ps-3.mb-0 Técnica de registro de tiempos de conducción y descanso
        p.mb-0 El diligenciamiento debe evidenciar el cumplimiento estricto de los tiempos de conducción y de descanso obligatorios, con el fin de prevenir la fatiga del personal y reducir el riesgo de accidentes durante el transporte.

    separador
    #t_1_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.10 Lugares de sombra y #[i stress] térmico
    
    p.mb-5 La provisión de sombra es una técnica de protección contra las condiciones climáticas adversas, principalmente frente a la radiación solar directa, y constituye un elemento clave para la prevención del estrés térmico durante el transporte animal en pie.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Mitigación estructural (sombra fija)
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img72.jpg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p La técnica principal para proveer sombra se basa en las características estructurales de la unidad de transporte, las cuales son de cumplimiento obligatorio según la normativa vigente.
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/img73.svg' alt="Imagen decorativa")
              .tarjeta.BG03
                .p-4
                  .h4.text-center Techo o cubierta
                  p.mb-0 El vehículo seleccionado debe contar con techo o cubierta que proteja a los animales de las condiciones climáticas adversas, lo que incluye la exposición directa al sol como principal fuente de estrés térmico.
          .col-lg-6.mb-lg-0.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/img74.svg' alt="Imagen decorativa")
              .tarjeta.BG03
                .p-4
                  .h4.text-center Soporte documental
                  p.mb-0 "Las unidades de transporte deberán contar con techo o cubierta que proteja a los animales de las condiciones climáticas adversas." Resolución 20223040006915 (núm. 2.2.ci).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Mitigación operacional (lugares de descanso)
    
    p.mb-5 El plan de viaje debe contemplar interrupciones operativas que permitan la búsqueda y utilización de lugares adecuados que proporcionen sombra o refugio cuando las condiciones ambientales lo requieran.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5(data-aos="fade-right")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema1/img75.svg', alt="Imagen decorativa")
            h4.text-center Uso de lugares de descanso
            p.mb-0 En el orden de viaje, las interrupciones prolongadas deben realizarse en lugares de descanso de los animales que ofrezcan protección adecuada frente a las condiciones climáticas.
          .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema1/img76.svg', alt="Imagen decorativa")
            h4.text-center Propósito
            p.mb-0 Durante estas pausas, la técnica de cuidado exige realizar actividades de inspección, acomodación, hidratación o alimentación, siendo la provisión de sombra un componente implícito de la acomodación para mitigar el riesgo de golpe de calor.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img77.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4 Soporte documental
              p.mb-0 "En los casos de interrupciones, estas se deben realizar en un lugar de descanso de los animales para realizar actividades de inspección, acomodación, hidratación o alimentación." Manual de procedimiento (núm. 4.h).

    p El estrés térmico, entendido como el exceso de calor o frío, es uno de los principales factores de riesgo que afectan la salud y el bienestar animal durante el transporte. La normativa establece técnicas estructurales y operativas específicas para mitigar este riesgo, siendo la provisión de sombra y el control de la ventilación los elementos centrales.
    p.mb-5 A continuación, se presentan los criterios técnicos que regulan el control del estrés térmico en el transporte animal en pie.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 7.
      i Control del estrés térmico
    .tabla-a.color-acento-contenido.mb-4
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #F3BC5B; width: 24%;") Técnica de control de estrés térmico
            th(style="background-color: #F3BC5B; width: 38%;") Requisito detallado
            th(style="background-color: #F3BC5B; width: 38%;") Soporte documental (texto exacto)
        tbody
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Control de la temperatura
            td(style="background-color: #F6F6F6;") La técnica de manejo debe procurar que la temperatura dentro del vehículo no sea inferior a 5 °C ni superior a 30 °C.
            td(style="background-color: #F6F6F6;") "...asegurar la temperatura que no podrá ser inferior a 5 °C ni superior a 30 °C." Manual de procedimiento (núm. 4.f).
          tr(data-aos="fade-right")
            th Ventilación obligatoria
            td Para mantener el rango de temperatura, el vehículo debe garantizar la ventilación constante en todos sus compartimentos, evitando la acumulación de calor (hipertermia) o la falta de oxígeno.
            td "Procurar mantener la ventilación constante." Manual de procedimiento (núm. 4.f).
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") Diseño vehicular (porcinos)
            td(style="background-color: #F6F6F6;") En los vehículos con ventilación natural, la altura libre mínima por compartimento debe ser de 90 cm para permitir un flujo de aire adecuado en especies sensibles como los porcinos.
            td(style="background-color: #F6F6F6;") Mencionado en la norma como requisito para mitigar el riesgo de estrés térmico en especies específicas.

    p El manejo del estrés térmico y la provisión de sombra constituyen técnicas de cuidado ambiental esenciales para garantizar el bienestar animal durante el transporte.

    separador
    #t_1_11.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.11 Planes de contingencia
    
    p Los planes de contingencia y emergencia son un componente obligatorio del proceso de transporte, manejo y movilización de animales en pie. Su objetivo es establecer los procedimientos y las acciones que deben ejecutar los operadores (propietario, conductor y tripulante) para atender y mitigar el sufrimiento, el dolor y la mortalidad de los animales que resulten enfermos, lesionados o muertos durante el cargue, la ruta o la descarga, así como en caso de accidente.
    p.mb-5 Para garantizar una respuesta adecuada ante situaciones críticas, la normativa define los siguientes aspectos mínimos que deben estar cubiertos en el plan de contingencia:

    TabsA.color-acento-botones.mb-5(data-aos="fade-right")
      .tarjeta.BG10.p-4(titulo="Eventos de contingencia")
        p El plan debe cubrir situaciones críticas como animales enfermos, muertos o accidentes que resulten en animales atrapados, caídas, traumatismos o fracturas.
        p.mb-0 #[strong Soporte documental]: ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (pág. 6): “Ante animales enfermos, muertos o accidentes que conlleven animales atrapados, caídas, traumatismos o fracturas de estos…”.
      .tarjeta.BG10.p-4(titulo="Acciones inmediatas")
        p El plan debe incluir acciones inmediatas, como la ayuda o atención inmediata al animal y la notificación a la autoridad sanitaria más cercana.
        p.mb-0 #[strong Soporte documental]: ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (pág. 6): “…las van desde la ayuda o atención inmediata al animal, informar a la Oficina del Instituto Colombiano Agropecuario ICA más cercana…”.
      .tarjeta.BG10.p-4(titulo="Disposición sanitaria")
        p Un componente crítico del plan es la técnica de sacrificio y disposición adecuada de los animales muertos en ruta, para evitar riesgos biológicos y ambientales.
        p.mb-0 #[strong Soporte documental]: ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (pág. 6): “…sacrificio y disposiciones de los animales muertos”.
      .tarjeta.BG10.p-4(titulo="Inclusión en capacitación")
        p Las acciones del plan de contingencia deben ser un componente obligatorio del curso de capacitación en bienestar animal.
        p.mb-0 #[strong Soporte documental]: Manual de procedimiento (núm. 5): “Las acciones a tomar por parte del conductor o tripulante frente a las situaciones anteriores deberán estar incluidas dentro del plan de estudios del curso de capacitación según la especie”.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.BG04.pe-4(style="border-radius: 5px;")
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Obligación y tipos de eventos de contingencia
    

    .row.justify-content-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-4
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11.col-10
        p La existencia, conocimiento y aplicación del plan de contingencia es un requisito obligatorio para todos los actores involucrados en la cadena de transporte de animales en pie.
        p.mb-0 En relación con esta obligación, la normativa establece los siguientes lineamientos:

    .tarjeta.BG10.p-4.mb-4
      SlyderA.color-acento-botones(tipo="b" data-aos="zoom-in")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2
            .h4 Obligatoriedad
            p El plan debe ser conocido y aplicado por el propietario, poseedor, tenedor, conductor, transportador y/o tripulante.
            p.mb-0 #[strong Soporte documental]: ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (1).pdf, pág. 6: “El propietario, poseedor, tenedor, conductor, transportador y/o tripulante deberá tener en cuenta las instrucciones contenidas en el manual, para atender la situación de emergencia que se presenta…”.
          .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img78.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2
            .h4 Eventos por cubrir
            p El plan debe estar diseñado para responder ante animales enfermos, muertos o accidentes que conlleven animales atrapados, caídas, traumatismos o fracturas, durante el proceso de cargue, transporte y descarga.
            p.mb-0 #[strong Soporte documental]: ABC Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie (1).pdf, pág. 6: “Ante animales enfermos, muertos o accidentes que conlleven animales atrapados, caídas, traumatismos o fracturas de estos, durante el proceso de cargue, transporte y descarga de los animales…”.
          .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img79.jpg' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2
            .h4 Vinculación a la capacitación
            p Las acciones por tomar en situaciones de contingencia deben estar incluidas dentro del plan de estudios del curso de capacitación en bienestar animal, según la especie transportada.
            p.mb-0 #[strong Soporte documental]: Manual de procedimiento transporte terrestre (2).pdf, núm. 5: “Las acciones a tomar por parte del conductor o tripulante frente a las situaciones anteriores deberán estar incluidas dentro del plan de estudios del curso de capacitación según la especie”.
          .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img80.jpg' alt="Imagen decorativa")


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
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

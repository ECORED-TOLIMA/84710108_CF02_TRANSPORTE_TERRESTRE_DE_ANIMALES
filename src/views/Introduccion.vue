<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/intro/img01.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La movilización de animales en pie es un proceso logístico crítico que influye directamente en el #[strong bienestar animal], la #[strong inocuidad] y la #[strong calidad final del producto pecuario]. Cada etapa —desde la selección de los animales en el predio de origen hasta su llegada al destino— incluye puntos sensibles donde una mala práctica puede generar #[strong estrés, lesiones, pérdidas económicas] y afectaciones al rendimiento productivo.
        .row.justify-content-center
          .col-lg-2.col-3.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
          .col-lg-10
            p.mb-0 El manejo inadecuado, la planificación deficiente o las condiciones inapropiadas del vehículo pueden desencadenar respuestas fisiológicas como la liberación de cortisol, lo que se refleja en #[strong mermas de peso, contusiones] y #[strong cortes oscuros]. Por ello, la normativa vigente, como la #[strong Resolución 20223040006915], exige aplicar procedimientos estandarizados que garanticen un transporte humanitario y seguro.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img02.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Este componente formativo orienta al aprendiz en el #[storng “cómo hacer”]: la preparación del viaje, la verificación de la aptitud de los animales, la elaboración del plan de contingencia, las técnicas de manejo de bajo estrés y el uso adecuado de las instalaciones de embarque y desembarque. También aborda el control de variables esenciales durante el desplazamiento —densidad de carga, ventilación, tiempos de descanso— y los protocolos de #[strong limpieza y desinfección], fundamentales para la bioseguridad.
    
    p.mb-5 Dominar estos procedimientos fortalece las competencias del personal operativo y contribuye al cumplimiento normativo, la protección del bienestar animal y la sostenibilidad del sector pecuario colombiano. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda de manera integral las técnicas y procedimientos normativos para el transporte de animales en pie, con énfasis en el bienestar animal, la salud, la bioseguridad y la seguridad operativa durante todas las etapas del proceso. Se estudian las responsabilidades del propietario, el transportador, el conductor y el tripulante en las fases de precargue, cargue, trayecto y descargue, así como los criterios de selección sanitaria, adaptación, densidad y organización de la carga. Asimismo, se analizan las técnicas de manejo etológico, conducción, supervisión e inspección en ruta, incluyendo el control de condiciones térmicas, la provisión de agua y alimento, y el uso de medidas correctivas como la aspersión en situaciones de estrés térmico. Finalmente, el componente profundiza en la gestión de contingencias, el manejo de animales caídos, enfermos, lesionados o muertos, y los procedimientos de reporte y notificación a la autoridad competente, garantizando el cumplimiento de la normativa vigente y la mitigación del sufrimiento animal durante la movilización.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se presentan de manera integrada los contenidos relacionados con la planificación, el precargue y el transporte de animales en pie, abordando desde la identificación de especies, técnicas de selección, separación y manejo según el comportamiento y las etapas fisiológicas, hasta la preparación del vehículo, el uso de embarcaderos etológicos y la adecuación de rampas y superficies. Asimismo, desarrolla las técnicas operativas durante el trayecto, incluyendo los periodos de descanso, los métodos de suministro de agua y alimento, la conducción, la inspección y supervisión en ruta, el control de las condiciones térmicas y la aspersión. Finalmente, se incluyen los procedimientos de contingencia, el manejo de animales caídos, enfermos, lesionados, atrapados o muertos, y las responsabilidades y técnicas de reporte ante novedades, con énfasis en el bienestar animal y el cumplimiento normativo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

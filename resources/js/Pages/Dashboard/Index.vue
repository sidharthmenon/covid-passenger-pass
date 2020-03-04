<template lang="pug">
  layout
    .container
      .row.justify-content-center
        .col-sm-6.text-center
          img.img-fluid(src="/assets/img/logo.svg")
      .row.pt-5.justify-content-center
        .col-sm-12
          h2.text-center.text-center Self Service Portal
        .col-sm-4.col-8.text-center.mt-5
          inertia-link.btn.btn-primary.d-block(:href="route('self.create')") Fill Self Declaration Form
        .col-sm-4.col-8.text-center.mt-3        
          a.btn.btn-warning.d-block(href="#") Designated Hospitals
        .col-sm-4.col-8.text-center.mt-3        
          a.btn.btn-danger.d-block(href="#") Do's and Dont's
</template>

<script>
import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';

export default {
  components: {
    layout: layout,
    page_header: pageHeader,
  },
}
</script>

<style lang="sass" scoped>

</style>
<template lang="pug">
  layout
    .container
      .row.justify-content-center
        .col-sm-6.text-center
          img.img-fluid(src="/assets/img/logo.svg")
      .row.pt-5
        .col-sm-12
          h2.text-center.text-center Self Service Portal
        .col-sm-12.text-center.mt-5
          inertia-link.btn.btn-primary(:href="route('self.create')") Fill Self Declaration Form
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
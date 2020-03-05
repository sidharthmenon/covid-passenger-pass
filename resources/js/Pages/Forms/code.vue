<template lang="pug">
  layout
    .container
      page_header(title="Self Declaration", subhead="View")
        inertia-link.btn.btn-primary.ml-3(:href='route("home")')
          i.feather-arrow-left
          | Back

      .row
        .col-sm-6.text-center
          qrcode(:value="route('passengers.show', {id: passenger.id})" :options='{ width: 400 }')
          h4.mt-3 {{passenger.name}}
          p.m-0 {{passenger.passport}}
          img.img-fluid.w-50(src="/assets/img/cleared.png" v-if="passenger.status=='cleared'")
          img.img-fluid.w-50(src="/assets/img/not-clear.png" v-else-if="passenger.status=='not-clear'")
          h4.badge.mb-3(:class="statusclass(passenger.status)" v-else) {{passenger.status}}

      .row
        .col-sm-12
           h4 Instructions
           p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      
</template>

<script>
import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default {
  props: ['passenger'],
  components: {
    layout: layout,
    page_header: pageHeader,
    qrcode: VueQrcode,
  },
  methods:{
    statusclass(item){
      if(item=="cleared"){
        return 'bg-green';
      }
      if(item=="not-clear"){
        return 'bg-red';
      }
      if(item=="pending"){
        return 'bg-azure';
      }
    },
  }
}
</script>

<style lang="sass" scoped>

</style>
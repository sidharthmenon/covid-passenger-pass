<template lang="pug">
  layout
    .container
      page_header(title="Self Declaration", subhead="Retrive")
        inertia-link.btn.btn-primary.ml-3(:href='route("home")')
          i.feather-arrow-left
          | Back


</template>

<script>
import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';

export default {
  props: ['passenger'],
  components: {
    layout: layout,
    page_header: pageHeader,
  },
  data(){
    return {
     
    }
  },
}
</script>
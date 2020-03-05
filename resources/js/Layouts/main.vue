<template lang="pug">
  .page
    //- layout_header
      div
    .hamburger-menu.d-lg-none(@click="openmenu" :class="open?'open':''")
        span
        span
        span
        span
    layout_menu( :class="open?'open':''" )
    .content
      .alert.alert-success.alert-dismissible(role='alert' v-if="$page.flash.message")
          | {{$page.flash.message}}
          a.close(href='#' data-dismiss='alert' aria-label='close') &times;
      slot
</template>
<script>
// import header from './header';
import menu from './menu';

export default {
  components: {
    // layout_header: header,
    layout_menu: menu
  },
  data(){
    return{
      open: false,
    }
  },
  methods: {
    openmenu(){
      this.open = !this.open;
    }
  }
}
</script>
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

<style lang="scss" scoped>
a{
  &:hover{
    text-decoration: none;
  }
}
.hamburger-menu {
    position: relative;
    right: 20px;
    width: 100%;
    max-width: 24px;
    height: 22px;
    margin-left: auto;
    transition: .5s ease-in-out;
    margin-top: 10px;
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: #ea0763;
      border-radius: 10px;
      opacity: 1;
      left: 0;
      transition: .25s ease-in-out;
      &:nth-child(1) {
        top: 2px;
      }
      &:nth-child(2),
      &:nth-child(3) {
        top: 10px;
      }
      &:nth-child(4) {
        top: 18px;
      }
    }
    &.open span {
      &:nth-child(1) {
        top: 18px;
        width: 0;
        left: 50%;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 18px;
        width: 0;
        left: 50%;
      }
    }
  }
</style>
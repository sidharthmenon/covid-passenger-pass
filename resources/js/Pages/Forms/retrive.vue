<template lang="pug">
  layout
    .container
      page_header(title="Self Declaration", subhead="Retrive")
        inertia-link.btn.btn-primary.ml-3(:href='route("home")')
          i.feather-arrow-left
          | Back

      .row
        .col-sm-6
          .card
            .card-body.border-bottom.p-5
              form_input(type="text", name="passport", label="Passport Number", placeholder="Passport Number" v-model="form.passport")
              form_input#date_picker(type="date", name="date", label="Date of Arrival", placeholder="Date of Arrival" v-model="form.date")
              form_input(type="text", name="flight", label="Flight Number", placeholder="Flight Number" v-model="form.flight")
              .row
                .col-sm-12.text-right.d-flex
                  button.btn.btn-primary.ml-auto(type="submit" :disabled='sending') Submit

</template>

<script>
import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';
import formInput from '../../Components/formInput';

export default {
  props: ['passenger'],
  components: {
    layout: layout,
    page_header: pageHeader,
    form_input: formInput,
  },
  data(){
    return {
      form: {
        passport: '',
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
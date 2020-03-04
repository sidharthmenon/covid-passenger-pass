<template lang="pug">
  layout
    .container
      // Page title
      page_header(title="Self Declaration Form", subhead="Add New")
        inertia-link.btn.btn-primary.ml-3(:href='route("home")')
          i.feather-arrow-left
          | Back
      form(@submit.prevent="submit")
        .row
          .col-sm-6(v-if="step==1")
            .card
              .card-header
                h4.card-title Personal Information
              .card-body.border-bottom.p-5
                .row
                  .col-sm-6
                    form_input(type="text", name="name", label="Name of the passenger", placeholder="Name of the passenger" v-model="form.name")
                  .col-sm-6
                    .row
                      .col-6
                        form_input(type="number", name="seat", label="Seat Number", placeholder="Seat Number" v-model="form.seat")
                      .col-6
                        form_input(type="text", name="flight", label="Flight Number", placeholder="Flight Number" v-model="form.flight")
                  .col-sm-6
                    form_input(type="text", name="passport", label="Passport Number", placeholder="Passport Number" v-model="form.passport")
                  .col-sm-6
                    form_input#date_picker(type="date", name="date", label="Date of Arrival", placeholder="Date of Arrival" v-model="form.date")
                  .col-sm-6
                    form_input(type="text", name="origin", label="Port of origin of Journey", placeholder="Port of origin of Journey" v-model="form.origin")
                  .col-sm-6
                    form_input(type="text", name="destination", label="Port of final destination", placeholder="Port of final destination" v-model="form.destination")

          .col-sm-6(v-if="step==2")
            .card
              .card-header
                h4.card-title Contact Address in India for All Travelers
              .card-body.border-bottom.p-5
                .row
                  .col-sm-6
                    form_input(type="text", name="house", label="House Number", placeholder="House Number" v-model="form.house")
                  .col-sm-6
                    form_input(type="text", name="street", label="Street/ Village", placeholder="Street/ Village" v-model="form.street")
                  .col-sm-12
                    .row
                      .col-6
                        form_input(type="text", name="tehsil", label="Tehsil", placeholder="Tehsil" v-model="form.tehsil")
                      .col-6
                        form_input(type="text", name="district", label="District/ City", placeholder="District/ City" v-model="form.district")
                  .col-sm-12
                    .row
                      .col-6
                        .mb-3
                          label.form-label State
                          selectize.form-select(name='state' v-model="form.state" :settings="{ placeholder: 'State' }")
                            option(v-for="state in states" :value='state.name') {{state.name}}
                      .col-6
                        form_input(type="text", name="pin", label="PIN", placeholder="PIN" v-model="form.pin")
                  .col-sm-12
                    .row
                      .col-6
                        form_input(type="text", name="phone", label="Residence Number", placeholder="Residence Number" v-model="form.phone")
                      .col-6
                        form_input(type="text", name="mobile", label="Mobile", placeholder="Mobile" v-model="form.mobile")
                  .col-sm-6
                    form_input(type="text", name="email", label="Email", placeholder="Email" v-model="form.email")

          .col-sm-6(v-if="step==3")
            .card
              .card-header
                h4.card-title PART-A
              .card-body.border-bottom.p-5
                .row
                  .col-sm-12
                    .mb-3
                      label.form-label Details of the countries visited since last 28 days?
                      selectize.form-select(name='countries' v-model="form.countries" :settings="{ placeholder: 'Details of the countries visited since last 28 days?', maxItems: 15, plugins: ['remove_button'], }")
                        option(v-for="country in countries" :value='country.id') {{country.name}}
                    form_input(type="text", name="cities", label="Details of the cities visited since last 28 days?", placeholder="Details of the cities visited since last 28 days?" v-model="form.cities")
                    .mb-3
                      .form-label Are you suffering from any of the following symptoms
                      label.form-check.form-switch
                        input.form-check-input(type='checkbox' v-model="form.fever")
                        span.form-check-label Fever
                      label.form-check.form-switch
                        input.form-check-input(type='checkbox' v-model="form.cough")
                        span.form-check-label Cough
                      label.form-check.form-switch
                        input.form-check-input(type='checkbox' v-model="form.respiratory")
                        span.form-check-label Respiratory distress


        .row
          .col-sm-6.text-right.d-flex
            button.btn.btn-link(type="button" v-if="step>1" @click.prevent="back()") Back
            button.btn.btn-primary.ml-auto(type="button" v-if="step<3" @click.prevent="next()") Next
            button.btn.btn-success.ml-auto(type="submit" :disabled='sending' v-if="step==3") Save


</template>

<script>

import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';
import formInput from '../../Components/formInput';
import Selectize from 'vue2-selectize'

export default {
  metaInfo: { title: 'Self Declaration Form' },
  props: ['states', 'countries'],
  components: {
    layout: layout,
    page_header: pageHeader,
    form_input: formInput,
    Selectize,
  },
  data(){
    return{
      sending: false,
      step: 1,
      form: {
        name: '',
        seat: '',
        flight: '',
        passport: '',
        date: '',
        origin: '',
        destination: '',
        house: '',
        street: '',
        tehsil: '',
        district: '',
        state: '',
        pin: '',
        phone: '',
        mobile: '',
        email: '',
        countries: '',
        cities: '',
        fever: false,
        cough: false,
        respiratory: false
      }
    }
  },
  methods:{
    submit(){
      this.sending = true
      this.$inertia.post(this.route('self.store'), {
        name: this.form.name,
        seat: this.form.seat,
        flight: this.form.flight,
        passport: this.form.passport,
        date: this.form.date,
        origin: this.form.origin,
        destination: this.form.destination,
        house: this.form.house,
        street: this.form.street,
        tehsil: this.form.tehsil,
        district: this.form.district,
        state: this.form.state,
        pin: this.form.pin,
        phone: this.form.phone,
        mobile: this.form.mobile,
        email: this.form.email,
        countries: this.form.countries,
        cities: this.form.cities,
        fever: this.form.fever,
        cough: this.form.cough,
        respiratory: this.form.respiratory,
        _token: this.$page.csrf_token,
      }).then(() => this.sending = false)
    },
    next(){
      // alert('');
      if(this.step<4){
        this.step = this.step+1;
      }
    },
    back(){
      if(this.step>1){
        this.step = this.step-1;
      }
    }
  },
  mounted(){
    flatpickr(document.querySelector('#date_picker input'), {});
  }
}
</script>

<style lang="scss">
  .flatpickr-calendar {
    background: white;
  }
</style>
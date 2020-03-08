<template lang="pug">
  layout
    .container
      // Page title
      page_header(title="Passengers", subhead="Details")
        inertia-link.btn.btn-primary.ml-3(:href='route("passengers.index")')
          i.feather-arrow-left
          | Back
      .row
        .col-sm-6
          .card
            .card-body.border-bottom.py-3
              
              .row
                .col-sm-8.col-6
                  form_static(label = 'Name of Passenger') {{passenger.name}}
                .col-sm-4.col-6
                  form_static(label = 'Passport Number') {{passenger.passport}}
                .col-sm-4.col-6
                  form_static(label = 'Date of Arrival') {{passenger.date}}
                .col-sm-4.col-6
                  form_static(label = 'Flight Number') {{passenger.flight}}
                .col-sm-4.col-6
                  form_static(label = 'Seat Number' ) {{passenger.seat}}
                .col-6
                  form_static.bottom-margin-0(label = 'Port of origin') 
                    p.m-0 {{passenger.origin.name}}
                    p.m-0.small.text-muted {{passenger.origin.city}} | {{passenger.origin.country}}
                .col-6
                  form_static.bottom-margin-0(label = 'Port of destination' )
                    p.m-0 {{passenger.destination.name}}
                    p.m-0.small.text-muted {{passenger.destination.city}} | {{passenger.destination.country}}
        
          .card
            .card-body.border-bottom.py-3
              .row
                .col-sm-4.col-6
                  form_static(label = 'House Number') {{passenger.house}}
                .col-sm-4.col-6
                  form_static(label = 'Street/Village') {{passenger.street}}
                .col-sm-4.col-6
                  form_static(label = 'Tehsil') {{passenger.tehsil}}
                .col-sm-4.col-6
                  form_static(label = 'District/City') {{passenger.district}}
                .col-sm-4.col-6
                  form_static(label = 'State') {{passenger.state}}
                .col-sm-4.col-6
                  form_static(label = 'PIN') {{passenger.pin}}
                .col-sm-4.col-6
                  form_static(label = 'Residence Number') {{passenger.phone}}
                .col-sm-4.col-6
                  form_static(label = 'Mobile Number') {{passenger.mobile}}
                .col-sm-12
                  form_static(label = "Email Address") {{passenger.email}}

        .col-sm-6
          .card
            .card-body.border-bottom.py-3
              form_static(label="Countries visited since last 28 days")
                span.badge.bg-blue.mr-1(v-for="item in passenger.countries") {{item.name}}
              form_static(label="Details of the cities visited since last 28 days?") {{passenger.cities}}
              .row
                .col-4
                  form_static(label = 'Fever') 
                    i.feather-check(v-if="passenger.fever==1")
                    i.feather-x(v-else)
                .col-4
                  form_static(label = 'Cough') 
                    i.feather-check(v-if="passenger.cough==1")
                    i.feather-x(v-else)
                .col-4
                  form_static(label = 'Respiratory Distress') 
                    i.feather-check(v-if="passenger.respiratory==1")
                    i.feather-x(v-else)

          .card
            .card-body.border-bottom.py-3
              .mb-3
                label.form-label Remarks
                textarea.form-control(name='example-textarea-input' rows='6' placeholder='Remarks' v-model="form.remarks")
              .mb-3
                label.form-label Status
                selectize.form-select(name='status' v-model="form.status" :settings="{ placeholder: 'Status'}")
                  option(value="pending") Pending
                  option(value="cleared") Cleared
                  option(value="not-clear") Not Cleared
              .mb-3.text-right
                button.btn.btn-success.ml-auto(type="submit" :disabled='sending' @click="submit()") Save
        
</template>

<script>
import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';
import formStatic from '../../Components/formStatic';
import Selectize from 'vue2-selectize'

export default {
  metaInfo: { title: 'Passenger' },
  props: ['passenger'],
  components: {
    layout: layout,
    page_header: pageHeader,
    form_static: formStatic,
    Selectize,
  },
  data(){
    return {
      sending: false,
      form:{
        remarks:this.passenger.remarks,
        status: this.passenger.status,
      }
    }
  },
  methods:{
    submit(){
      this.sending = true
      this.$inertia.put(this.route('passengers.update', {id: this.passenger.id}), {
        remarks: this.form.remarks,
        status: this.form.status,
        _token: this.$page.csrf_token,
      }).then(() => this.sending = false)
    }
  }
}
</script>
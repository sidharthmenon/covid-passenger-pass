<template lang="pug">
  layout
    .container
      // Page title
      page_header(title="Roles", subhead="Add New")
        inertia-link.btn.btn-primary.ml-3(:href='route("roles.index")')
          i.feather-arrow-left
          | Back
      .row
        
        .col-sm-12
          form.card(@submit.prevent="submit")
            .card-body.border-bottom.p-5
              .row
                .col-sm-6
                  form_input(type="text", name="name", label="Name", placeholder="Enter Role Name" v-model="form.name")
                .col-sm-6
                  form_input(type="text", name="description", label="Description", placeholder="Enter Description" v-model="form.description")
              .row
                .col-md-3(v-for="permission in permissions")
                  label.custom-control.custom-checkbox.custom-control-inline
                    input.custom-control-input(type='checkbox' name='permissions[]' :value='permission.id' v-model="form.permissions")
                    span.custom-control-label {{permission.name}}
              .d-flex.align-items-center
                a.btn.btn-link Back
                button.btn.btn-primary.ml-auto(type="submit" :disabled='sending') Save

</template>

<script>

import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';
import formInput from '../../Components/formInput';

export default {
  metaInfo: { title: 'Create Role' },
  props: ['permissions'],
  components: {
    layout: layout,
    page_header: pageHeader,
    form_input: formInput
  },
  data(){
    return{
      sending: false,
      form: {
        name: '',
        description: '',
        permissions: []
      }
    }
  },
  methods:{
    submit(){
      this.sending = true
      this.$inertia.post(this.route('roles.store'), {
        name: this.form.name,
        description: this.form.description,
        permissions: this.form.permissions,
        _token: this.$page.csrf_token,
      }).then(() => this.sending = false)
    }
  }
}
</script>
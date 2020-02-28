<template lang="pug">
  layout
    .container
      // Page title
      page_header(title="Users", subhead="Add New")
        inertia-link.btn.btn-primary.ml-3(:href='route("users.index")')
          i.feather-arrow-left
          | Back
      .row
        .col-sm-8
          form.card(@submit.prevent="submit")
            .card-body.border-bottom.p-5
              form_input(type="text", name="name", label="Name", placeholder="Enter User's Name" v-model="form.name")
              form_input(type="email", name="email", label="Email", placeholder="Enter Email ID" v-model="form.email")
              form_input(type="password", name="password", label="Password", placeholder="Enter Password" v-model="form.password")
              form_input(type="number", name="phone", label="Phone", placeholder="Enter Phone Number" v-model="form.phone")
              .mb-3
                .form-label Role
                select.form-select(v-model="form.role")
                  option(v-for="role in roles" :value='role.id') {{role.name}}
              .d-flex.align-items-center
                a.btn.btn-link Back
                button.btn.btn-primary.ml-auto(type="submit") Save

</template>

<script>

import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';
import formInput from '../../Components/formInput';

export default {
  props: ['roles'],
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
        email: '',
        password: '',
        phone: '',
        role: '',
      }
    }
  },
  methods:{
    submit(){
      this.sending = true
      this.$inertia.post(this.route('users.store'), {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        phone: this.form.phone,
        role: this.form.role,
        _token: this.$page.csrf_token,
      }).then(() => this.sending = false)
    }
  }
}
</script>
<template lang="pug">
  .flex-fill.d-flex.flex-column.justify-content-center
    .container-tight.py-6
      .text-center.mb-4
        h2 Portal
      form.card.card-md(:action="route('login')" method="post" @submit.prevent="submit")
        input(name="_token" :value="$page.csrf_token" type="hidden")
        .card-body
          h2.mb-5.text-center Login to your account
          .mb-3
            label.form-label Email address
            input.form-control(:class="$page.errors.email?'is-invalid':''" name="email" type='email' placeholder='Enter email' autocomplete='off' v-model="form.email")
            form_error(:errors="$page.errors.email")
          .mb-2
            label.form-label
              | Password
              span.form-label-description
                a(:href="route('password.request')") I forgot password
            
            input.form-control(:class="$page.errors.password?'is-invalid':''" name="password" type='password' placeholder='Password' v-model="form.password")
            form_error(:errors="$page.errors.password")
          .mb-2
            label.form-check
              input.form-check-input(type='checkbox' v-model="form.remember")
              span.form-check-label Remember me on this device
          .form-footer
            loading_btn(type='submit' :loading="sending") Sign in
      //- .text-center.text-muted
      //-   | Don&apos;t have account yet? 
      //-   a(href='./sign-up.html' tabindex='-1') Sign up
</template>

<script>
import loadingBtn from '../../Components/loadingBtn';
import formError from '../../Components/formErrors';
export default {
  metaInfo: { title: 'Login' },
  components: {
    loading_btn : loadingBtn,
    form_error: formError,
  },
  data(){
    return {
      sending: false,
      form: {
        email: '',
        password: '',
        remember: null,
      },
    }
  },
  methods: {
    submit() {
      this.sending = true
      this.$inertia.post(this.route('login'), {
        email: this.form.email,
        password: this.form.password,
        remember: this.form.remember,
        _token: this.$page.csrf_token,
      }).then(() => this.sending = false)
    },
  },
}
</script>
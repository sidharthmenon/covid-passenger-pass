<template lang="pug">
  .flex-fill.d-flex.flex-column.justify-content-center
    .container-tight.py-6
      .text-center.mb-4
        h2 Portal
      form.card.card-md(:action="route('password.email')" method="post")
        input(name="_token" :value="$page.csrf_token" type="hidden")
        .card-body
          h2.mb-5.text-center Forgot password
          .alert.alert-success.alert-dismissible(role='alert' v-if="$page.flash.status")
            | {{$page.flash.status}}
            a.close(href='#' data-dismiss='alert' aria-label='close') &times;
          p.text-muted Enter your email address and your password will be reset and emailed to you.
          .mb-3
            label.form-label Email address
            input.form-control(type='email' placeholder='Enter email' name='email')
            .invalid-feedback.d-block
              span(v-for="error in $page.errors.email") {{error}}
          .form-footer
            button.btn.btn-primary.btn-block(type='submit') Send Password Reset Link
      .text-center.text-muted
        | Forget it, 
        a(:href="route('login')") send me back
        |  to the sign in screen.
</template>

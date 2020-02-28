<template lang="pug">
  .flex-fill.d-flex.flex-column.justify-content-center
    .container-tight.py-6
      .text-center.mb-4
        h2 Portal
      form.card.card-md(:action="route('password.update')" method="post")
        input(name="_token" :value="$page.csrf_token" type="hidden")
        input(name="email" :value="$page.email" type="hidden")
        input(name="token" :value="$page.token" type="hidden")
        .card-body
          h2.mb-5.text-center Reset password
          .alert.alert-success.alert-dismissible(role='alert' v-if="$page.flash.status")
            | {{$page.flash.status}}
            a.close(href='#' data-dismiss='alert' aria-label='close') &times;
          p.text-muted Enter your new Password
          .mb-3
            label.form-label Password
            input.form-control(type='password' placeholder='Enter password' name='password')
          .mb-3
            label.form-label Confirm Password
            input.form-control(type='password' placeholder='Enter password' name='password_confirmation')
          .form-footer
            button.btn.btn-primary.btn-block(type='submit') Send Password Reset Link
      .text-center.text-muted
        | Forget it, 
        a(:href="route('login')") send me back
        |  to the sign in screen.
</template>

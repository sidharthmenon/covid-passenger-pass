<template lang="pug">
    nav#navbar-primary.navbar.navbar-expand-lg.navbar-light.navbar-primary.navbar-vertical
      .container
        a.navbar-brand.navbar-brand-autodark.d-none-navbar-horizontal(href='.')
          h2 Portal
        .navbar-collapse.collapse.show
          h6.navbar-heading Navigation
          ul.navbar-nav
            li.nav-item(v-if="$page.auth.user.perms.includes('home_view')")
              inertia-link.nav-link(:href='route("home")')
                span.nav-link-icon
                  i.feather-home
                span.nav-link-title Home
            li.nav-item(v-if="$page.auth.user.perms.includes('user_view')")
              inertia-link.nav-link(:href='route("users.index")')
                span.nav-link-icon
                  i.feather-user
                span.nav-link-title Users
            li.nav-item(v-if="$page.auth.user.perms.includes('role_view')")
              inertia-link.nav-link(:href='route("roles.index")')
                span.nav-link-icon
                  i.feather-sliders
                span.nav-link-title Roles
            li.nav-item(v-if="$page.auth.user.perms.includes('passenger_view')")
              inertia-link.nav-link(:href='route("passengers.index")')
                span.nav-link-icon
                  i.feather-users
                span.nav-link-title Passengers
            li.nav-item
              inertia-link.nav-link(:href="route('self.create')")
                span.nav-link-icon
                  i.feather-clipboard
                span.nav-link-title Self Declaration Form
            li.nav-item(v-if="false")
              a.nav-link.dropdown-toggle(href='#navbar-base' data-toggle='dropdown' role='button' aria-expanded='false')
                span.nav-link-icon
                  svg.icon(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
                    line(x1='16.5' y1='9.4' x2='7.5' y2='4.21')
                    path(d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z')
                    polyline(points='3.27 6.96 12 12.01 20.73 6.96')
                    line(x1='12' y1='22.08' x2='12' y2='12')
                span.nav-link-title Base
              ul.dropdown-menu.dropdown-menu-arrow.dropdown-menu-columns.dropdown-menu-columns-2
                li
                  a.dropdown-item(href='./empty.html')
                    | Empty page
                li
                  a.dropdown-item(href='./blank.html')
                    | Blank page
                li
                  a.dropdown-item(href='./buttons.html')
                    | Buttons        
          .navbar-side(v-if="$page.auth.user.name")
            .ml-auto.d-none-navbar-vertical-narrow
              h5.text-center {{$page.auth.user.name}} - {{$page.auth.user.role}}
            form(:action="route('logout')" method="POST")
              input(name="_token" :value="$page.csrf_token" type="hidden")
              button.btn.btn-primary.btn-block(type="submit")
                i.feather-log-out
                | Logout
          
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>
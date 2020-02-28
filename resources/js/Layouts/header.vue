<template lang="pug">
  nav#navbar-secondary.navbar.navbar-light.navbar-secondary.navbar-expand
    .container
      a.navbar-brand.navbar-brand-autodark.d-none-navbar-vertical(href='.')
        h2 Portal
      form.form-inline.w-50.mr-4.d-none.d-md-flex
        .input-icon.w-100
          span.input-icon-addon
            svg.icon(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
              circle(cx='11' cy='11' r='8')
              line(x1='21' y1='21' x2='16.65' y2='16.65')
          input.form-control.form-control-flush.w-100(type='text' placeholder='Search…')
      ul.navbar-nav.ml-auto
        li.nav-item.dropdown
          a.nav-link.px-0(href='#' data-toggle='dropdown')
            svg.icon(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
              circle(cx='12' cy='12' r='3')
              path(d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z')
          .dropdown-menu.dropdown-menu-right.dropdown-menu-arrow
            a.dropdown-item(href='#')
              svg.icon.dropdown-item-icon(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
                circle(cx='12' cy='12' r='3')
                path(d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z')
              |                   Action
            a.dropdown-item(href='#')
              svg.icon.dropdown-item-icon(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
                path(d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7')
                path(d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z')
              |                   Another action
            .dropdown-divider
            a.dropdown-item(href='#')
              svg.icon.dropdown-item-icon(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
                line(x1='12' y1='5' x2='12' y2='19')
                line(x1='5' y1='12' x2='19' y2='12')
              |                   Separated link
        li.nav-item.dropdown
          a.nav-link(href='#' data-toggle='dropdown')
            span.flag.flag-country-us.mr-1
            span.d-none.d-lg-inline English
          .dropdown-menu.dropdown-menu-arrow.dropdown-menu-right(style='')
            a.dropdown-item(href='#')
              span.flag.flag-country-de.mr-1
              |                   German
            a.dropdown-item(href='#')
              span.flag.flag-country-pl.mr-1
              |                   Polish
            a.dropdown-item(href='#')
              span.flag.flag-country-jp.mr-1
              |                   Japan
            a.dropdown-item(href='#')
              span.flag.flag-country-ru.mr-1
              |                   Russian
        li.nav-item.dropdown
          a.nav-link(href='#' data-toggle='dropdown')
            svg.icon(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
              path(d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9')
              path(d='M13.73 21a2 2 0 0 1-3.46 0')
          .dropdown-menu.dropdown-menu-right.dropdown-menu-arrow.dropdown-menu-card(style='max-width: 20rem;')
            .card
              .card-body
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet consectetur exercitationem fugiat in ipsa ipsum, natus odio quidem quod repudiandae sapiente. Amet debitis et magni maxime necessitatibus ullam.
        li.nav-item.dropdown.pl-2
          a.nav-link.d-flex.lh-1.text-inherit.p-0.text-left(href='#' data-toggle='dropdown')
            span.avatar(style='background-image: url(./static/avatars/000m.jpg)')
            .d-none.d-lg-block.pl-2
              div Pawe&lstrok; Kuna
              .mt-1.small.text-muted Founder
          .dropdown-menu.dropdown-menu-right.dropdown-menu-arrow
            a.dropdown-item(href='#')
              svg.icon.dropdown-item-icon(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
                circle(cx='12' cy='12' r='3')
                path(d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z')
              |                   Action
            a.dropdown-item(href='#')
              svg.icon.dropdown-item-icon(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
                path(d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7')
                path(d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z')
              |                   Another action
            .dropdown-divider
            a.dropdown-item(href='#')
              svg.icon.dropdown-item-icon(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
                line(x1='12' y1='5' x2='12' y2='19')
                line(x1='5' y1='12' x2='19' y2='12')
              |                   Separated link

</template>
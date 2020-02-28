<template lang="pug">
  layout
    .container
      // Page title
      page_header(title="Dashboard", subhead="Overview")
        span.d-none.d-sm-inline
          a.btn.btn-secondary(href='#')
            | New view
        a.btn.btn-primary.ml-3.d-none.d-sm-inline-block(href='#')
          i.feather-plus
          | Create new report
        a.btn.btn-primary.ml-3.d-sm-none.btn-icon(href='#' data-toggle='modal' data-target='#modal-report' aria-label='Create new report')
          i.feather-plus
      .row
        p {{$page}}
</template>

<script>
import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';

export default {
  components: {
    layout: layout,
    page_header: pageHeader,
  },
}
</script>

<style lang="sass" scoped>

</style>
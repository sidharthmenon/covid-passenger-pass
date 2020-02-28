<template lang="pug">
  .page-header
    .row.align-items-center
      .col-auto
        // Page pre-title
        .page-pretitle
          | {{subhead}}
        h2.page-title
          | {{title}}
      // Page title actions
      .col-auto.ml-auto.d-print-none
        slot
</template>

<script>
export default {
  props: ['title', 'subhead']
}
</script>
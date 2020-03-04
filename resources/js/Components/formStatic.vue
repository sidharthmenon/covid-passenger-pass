<template lang="pug">
  .mb-3
    label.form-label {{label}}
    .form-control-plaintext
      slot
</template>

<script>
export default {
  props:[
    'label', 'value'
  ]
}
</script>
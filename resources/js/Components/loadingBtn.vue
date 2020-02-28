<template lang="pug">
  button.btn.btn-primary.btn-block(:disabled='loading')
    .btn-spinner.mr-2(v-if='loading')
    slot
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
}
</script>
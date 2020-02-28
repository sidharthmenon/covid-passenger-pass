<template lang="pug">
  .invalid-feedback.d-block
    span(v-for="error in errors") {{error}}
</template>

<script>
export default {
  props: ['errors']
}
</script>
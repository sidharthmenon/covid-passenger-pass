<template lang="pug">
  .mb-3
    label.form-label {{label}}
    input.form-control(:class="$page.errors[name]?'is-invalid':''" :type='type' :name='name' :placeholder='placeholder' :value="value" @input="$emit('input', $event.target.value)" required)
    form_error(:errors="$page.errors[name]")
</template>

<script>
import formError from './formErrors';
export default {
  components: {
    form_error: formError,
  },
  props:[
    'label', 'type', 'name', 'placeholder', 'value'
  ]
}
</script>
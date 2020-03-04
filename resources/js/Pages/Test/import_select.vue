<template lang="pug">
  layout
    .container
      // Page title
      page_header(title="Test", subhead="Import")
        inertia-link.btn.btn-primary.ml-3(:href='route("testmodel.index")')
          i.feather-arrow-left
          | Back
      .row
        .col-sm-6
          form.card
            .card-header
              h3.card-title Select Import File
            .card-body.border-bottom.p-5
              input.form-control(type="file", name="file", label="File", ref="file", placeholder="Select file" @change="fileupload()")
      
        .col-sm-6(v-if="fields")
          form.card(@submit.prevent="sendImport()")
            .card-header
              h3.card-title Match fields to import
            .card-body.border-bottom.p-5
              .mb-3(v-for="field in fields" v-if="field!='id'")
                .form-label {{field}}
                select.form-select(v-model="form.headers[field]")
                  option(:value="null") Do Not Import
                  option(v-for="(header,index) in headers" :value='index') {{header}}
            .card-footer.text-right
              button.btn.btn-primary.ml-auto(type="submit" ) Import

</template>

<script>
import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';

export default {
  metaInfo: { title: 'Test' },
  props: ['fields', 'headers', 'path'],
  components: {
    layout: layout,
    page_header: pageHeader,
  },
  data(){
    return {
      files: '',
      form: {
        headers: {}
      }
    }
  },
  methods: {
    fileupload(){
      var file = this.$refs.file.files[0]
      const formData = new FormData()
      formData.append('file', file, file.name)
      console.log(file, file.name);
      console.log(formData);
      this.$inertia.post(route('testmodel.import'), formData)
        .then(()=> {
          this.files = [];
        })
        .catch(error => {
          Logger.log(error);
        })
    },
    sendImport(){
      this.$inertia.put(route('testmodel.import'), {
        headers: this.form.headers,
        file: this.path,
      })
    }
  }
}
</script>
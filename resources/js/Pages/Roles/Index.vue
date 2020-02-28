<template lang="pug">
  layout
    .container
      // Page title
      page_header(title="Roles", subhead="Overview")
        inertia-link.btn.btn-primary.ml-3(:href='route("roles.create")')
          i.feather-plus
          | Create new
      .row
        .col-sm-12
          .card
            //- .card-header
            //-   h3.card-title 
            .card-body.border-bottom.py-3
              .d-flex
                .text-muted
                  | Show
                  .mx-2.d-inline-block
                    input.form-control.form-control-sm(type='text' value='8' size='3' v-model="form.per_page" @input="search()")
                  | entries
                //- .ml-auto.text-muted
                //-   | Filter By:
                //-   .ml-2.d-inline-block
                //-     select(v-model="form.filter_name")
                //-       option name
                //-       option email
                //-       option role
                .text-muted.ml-auto
                  | Search:
                  .ml-2.d-inline-block
                    .input-group
                      input.form-control.form-control-sm(type='text' v-model="form.query")
                      .input-group-append
                        .input-group-text
                          button(type="button" @click="search()" class="btn btn-sm btn-link p-0")
                            i.feather-search
            .table-responsive
              table.table.card-table.table-vcenter.text-nowrap.datatable
                thead
                  tr
                    th Name
                    th Description
                    th
                    th

                tbody
                  tr(v-for="role in roles.data")
                    td {{role.name}}
                    td {{role.description}}
                    td.w-1
                      inertia-link(:href="route('roles.edit', {id:role.id})" v-if="$page.auth.user.perms.includes('role_edit')")
                        i.feather-edit
                    td.w-1
                      a(href="#" @click.prevent="delete_item(role.id)" v-if="$page.auth.user.perms.includes('role_delete')")
                        i.feather-trash

                  
            .card-footer.d-flex.align-items-center
              p.m-0.text-muted
                | Showing 
                span {{roles.from}}
                |  to 
                span {{roles.to}}
                |  of 
                span {{roles.total}}
                |  entries
              ul.pagination.m-0.ml-auto
                li.page-item(:class="roles.current_page-1 < 1 ? 'disabled': ''")
                  a.page-link(href='#' tabindex='-1' @click.prevent="page(roles.current_page-1)")
                    | &lt; prev
                li.page-item(v-for="number in roles.last_page" :class="number==roles.current_page?'active':''")
                  a.page-link(href='#' @click.prevent="page(number)") {{number}}
                li.page-item(:class="roles.current_page+1 > roles.last_page ? 'disabled': ''")
                  a.page-link(href='#' @click.prevent="page(roles.current_page+1)")
                    | next &gt;

</template>

<script>
import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';

export default {
  metaInfo: { title: 'Roles' },
  props: ['roles', 'searchParam', 'query'],
  components: {
    layout: layout,
    page_header: pageHeader,
  },
  data(){
    return {
      form: {
        per_page : this.roles.per_page,
        searchParam: this.searchParam,
        query: this.query
      }
    }
  },
  methods:{
    visit(data){
      this.$inertia.visit(this.route('roles.index'), {
        method: 'get',
        data: data,
        replace: false,
        preserveState: false,
        preserveScroll: false,
        only: [],
      })
    },
    search(){
      this.visit({
        perPage: this.form.per_page,
        searchParam: this.form.searchParam,
        query: this.form.query
      })
    },
    page(number){
      this.visit({
        page: number,
        perPage: this.form.per_page,
        searchParam: this.form.searchParam,
        query: this.form.query
      });
    },
    delete_item(id){
      if(confirm('Are you sure?')){
        this.$inertia.delete(this.route('roles.destroy', {id: id}), {
          replace: false,
          preserveState: false,
          preserveScroll: false,
          only: [],
        })
      }
    }
  }
}
</script>
<template lang="pug">
  layout
    .container
      // Page title
      page_header(title="Passengers", subhead="Overview")
        
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
                      input.form-control.form-control-sm(type='text' v-model="form.query" @keyup.enter="search()")
                      .input-group-append
                        .input-group-text
                          button(type="button" @click="search()" class="btn btn-sm btn-link p-0")
                            i.feather-search
            .table-responsive
              table.table.card-table.table-vcenter.text-nowrap.datatable
                thead
                  tr
                    th Name
                    th Passport Number
                    th Flight Number
                    th Seat Number
                    th Status
                    th

                tbody
                  tr(v-for="passenger in passengers.data")
                    td {{passenger.name}}
                    td {{passenger.passport}}
                    td {{passenger.flight}}
                    td {{passenger.seat}}
                    td 
                      span.badge(:class="statusclass(passenger.status)") {{passenger.status}}
                    td.w-1
                      inertia-link(:href="route('passengers.show', {id:passenger.id})" v-if="$page.auth.user.perms.includes('passenger_view')")
                        i.feather-eye

                  
            .card-footer.d-flex.align-items-center
              p.m-0.text-muted
                | Showing 
                span {{passengers.from}}
                |  to 
                span {{passengers.to}}
                |  of 
                span {{passengers.total}}
                |  entries
              ul.pagination.m-0.ml-auto
                li.page-item(:class="passengers.current_page-1 < 1 ? 'disabled': ''")
                  a.page-link(href='#' tabindex='-1' @click.prevent="page(passengers.current_page-1)")
                    | &lt; prev
                li.page-item(v-for="number in passengers.last_page" :class="number==passengers.current_page?'active':''")
                  a.page-link(href='#' @click.prevent="page(number)") {{number}}
                li.page-item(:class="passengers.current_page+1 > passengers.last_page ? 'disabled': ''")
                  a.page-link(href='#' @click.prevent="page(passengers.current_page+1)")
                    | next &gt;

</template>

<script>
import layout from '../../Layouts/main';
import pageHeader from '../../Components/pageHeader';

export default {
  metaInfo: { title: 'Passengers' },
  props: ['passengers', 'searchParam', 'query'],
  components: {
    layout: layout,
    page_header: pageHeader,
  },
  data(){
    return {
      form: {
        per_page : this.passengers.per_page,
        searchParam: this.searchParam,
        query: this.query
      }
    }
  },
  methods:{
    statusclass(item){
      if(item=="cleared"){
        return 'bg-green';
      }
      if(item=="not-cleared"){
        return 'bg-red';
      }
      if(item=="pending"){
        return 'bg-azure';
      }
    },
    visit(data){
      this.$inertia.visit(this.route('passengers.index'), {
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
        this.$inertia.delete(this.route('passengers.destroy', {id: id}), {
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
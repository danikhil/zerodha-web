<template>
   <div>
      <b-container fluid>
         <h2> Search Bhav Copy Directory </h2>
         <div>
            <b-form @submit="searchEquity">
               <b-form-group id="input-group-1">
                  <b-row class="my-1">
                     <b-col md="3" offset="4">
                        <b-form-input list="my-list-id" required v-model="form.name" placeholder="Enter name" @input="searchNames"></b-form-input>
                        <datalist id="my-list-id">
                           <option v-for="name in names" :key="name">{{ name }}</option>
                        </datalist>
                     </b-col>
                     <b-col md="1">
                        <b-button variant="outline-primary" type="submit" >Search</b-button>
                     </b-col>
                  </b-row>
               </b-form-group>
            </b-form>
         </div>
         <div>
            <b-row class="my-1">
               <b-col md="8" offset="2">
                  <b-table md="8" striped bordered hover :items="records"></b-table>
               </b-col>
            </b-row>
            <b-row class="my-1" v-if="records.length">
               <b-col md="8" offset="2" style="text-align: right">
                  <b-button variant="primary" @click="exportAsCSV">Export</b-button>
               </b-col>
            </b-row>
         </div>
      </b-container>
  </div>
</template>

<script>
import API from '@/api/api';

export default {
   name: 'Zerodha',
   components: {
   },
   data() {
      return {
         names: [],
         selectedName: undefined,
         errorMessage: undefined,
         form: {
            name: ''
         },
         records: [],
      }
   },
   methods: {
      searchNames: function(value) {
         if (value === "")
         return
         this.selectedName = value
         API.searchName(value.toUpperCase())
         .then(res => {
            this.names=res.data
         })
         .catch(err => {
            console.log(err)
         })
      },
      searchEquity: function(event) {
         event.preventDefault()
         if(this.selectedName === "" || this.selectedName === undefined) {
            return
         }
         API.searchEquity(this.selectedName)
         .then(res => {
            this.records = res.data
         })
         .catch(err => {
            console.log(err)
         })
      },
      exportAsCSV: function() {
         let csvContent = "data:text/csv;charset=utf-8,"
         let columns = Object.keys(this.records[0])
         csvContent += columns.map(column => column.toUpperCase()).join(",") + '\n'
         this.records.map(record => {
            let row = columns.map(column => record[column]).join(",") + '\n'
            csvContent += row
         })
         let encodeURI = csvContent
         let link = document.createElement("a")
         link.setAttribute("href", encodeURI)
         link.setAttribute("download", "equity.csv")
         document.body.appendChild(link)
         link.click()
         document.body.removeChild(link)
      }
   }
}
</script>

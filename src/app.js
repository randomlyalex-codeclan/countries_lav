import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
        allCountries: [],
        countrySelect: ''

    },
    computed: {
        totalPopulation: function(){
            return this.allCountries.reduce((total, country) => total + country.population, 0);
        },
        filteredCountries: function(){
            return this.allCountries.filter(country => country.name === this.countrySelect);
        }
    }, 
    mounted: function(){ //mounted is a lifecycle hook, so this runs mounted when the app mounts, and runs the methods in there
        this.fetchCountries()
      },
    methods:{
        fetchCountries: function(){
            //fetch command here
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.allCountries = data)
        }
        
    }
  });
});

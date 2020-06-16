import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            converter: null,
            inputEuros: 0,
            convertRate: 0,
            converted: 0
        },
        mounted(){
            this.fetchRates();
        },
        methods: {
            fetchRates: function(){
                const request = fetch('https://api.exchangeratesapi.io/latest')
                .then(response => response.json())
                .then(data => this.converter = data.rates)
                // console.log(this.converter)
            },
            convertInput: function(){
                this.converted = (this.inputEuros * this.convertRate);
            }
        }
    })
})

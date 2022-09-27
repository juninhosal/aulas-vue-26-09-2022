const MyNameApp = {
    data(){
        return{
            name: "",
            idade: "",
            input_name: ""
        }
    },
    methods:{
        submitForm(e){
            e.preventDefault();

            this.name = this.input_name;
            this.idade = this.input_idade;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");
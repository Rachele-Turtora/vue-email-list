const { createApp } = Vue

  createApp({
    data() {
      return {
        title: "Lista mails",
        mails: [],
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        num: 10
      }
    },

    methods: {
      callEmail(){
        axios
            .get(this.url)
            .then((response) => {
                this.mails.push(response.data.response)    
            })
      }
    },

    created() {
        for (let i = 0; i < this.num; i++){
            this.callEmail()
        }
    }
  }).mount('#app')
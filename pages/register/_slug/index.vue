<template>
    <form @submit.prevent="createCustomer">
        <input v-model="customer.name" class="border py-2 px-3 text-grey-darkest" type="text" placeholder="Name" />
        <input v-model="customer.email" class="border py-2 px-3 text-grey-darkest" type="text" placeholder="Work Email" />
        <button v-if="slug === corePriceId" type="submit">Free Trial</button>
        <button v-else type="submit">Continue</button>
    </form>
</template>
<script>
    export default{
        data(){
            return{
                slug: this.$route.params.slug,
                corePriceId: "price_1IRIwiCD5ZUxyIJEU4jaghEZ",
               customer: {}
            }
        },
        methods:{
        createCustomer (){
            console.log(JSON.stringify(this.customer))
            fetch("app/api/customers", {
  body: "name=kelly&email=kelly.live.com",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})
            // fetch('api/customers', {
            //     method: 'POST',
            //     headers: {
            //     'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(this.customer)
            // })
            .then(response =>{
                console.log('Response:', response)
                return response.json()
            })
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            }
        }
    }
</script>
<style scoped>

</style>
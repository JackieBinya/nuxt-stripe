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
        createCustomer(){
            fetch('api/customers', {
                method: 'POST',
                headers: {
      'Content-Type': 'application/json'
      
            },
                body: JSON.stringify(this.customer)
        })
        .then(function(response) {
          return response.json();
        })
            }
        }
    }
</script>
<style scoped>

</style>
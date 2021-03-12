<template>
  <form @submit.prevent="createCustomer">
    <!-- <input v-model="customer.name" class="border py-2 px-3 text-grey-darkest" type="text" placeholder="Name" /> -->
    <input
      v-model="customer.email"
      class="border py-2 px-3 text-grey-darkest"
      type="text"
      placeholder="Work Email"
    />
    <button type="submit">Free Trial</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
    //   corePriceId: "price_1IRIwiCD5ZUxyIJEU4jaghEZ",
      customer: {},
    };
  },
  methods: {
    async createCustomer() {
      const result = await fetch("https://nuxt-stripe-v5.vercel.app/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.customer),
      });

      const { id } = result.json();
    //   this.createFreeTrial(id);
    },

    async createFreeTrial(id) {
      const result = await fetch("api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      console.log(result.json());
    },
  },
};
</script>
<style scoped>
</style>
<template>
  <div class="container">
    <!-- <button v-if="isStripeLoaded" @click="checkout">Subscribe</button> -->
    <nuxt-link  v-for="{plan, id,priceId} in plans" :to="`/register/${priceId}`" v-bind:key="id" class="inline-block">
      <span v-if="plan === 'core'">Free Trial</span>
      <span v-else>Select Plan</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isStripeLoaded: false,
      plans: [
        {
          id: 1,
          plan: "core",
          priceId: "price_1IRIwiCD5ZUxyIJEU4jaghEZ"
        },
        {
          id: 2,
          plan: "plus",
          priceId: "price_1IRIzDCD5ZUxyIJETz8vAYeR"
        },
        {
          id: 1,
          plan: "enterprise",
          priceId: "price_1IRJ0mCD5ZUxyIJETbusbjQX"
        }
      ]
    }
  },
   head() {
    return {
      script: [
        {
          hid: "stripe",
          src: "https://js.stripe.com/v3/",
          defer: true,
          callback: () => {
            this.isStripeLoaded = true
          },
        },
      ],
    }
  },
   methods: {
    checkout() {
      /*
       * The logic below is only executed when the Stripe script has been fully loaded
       * When this page is mounted Stripe does not exist, when in dev mode eslint picks up that issue and kills the server
       * So we disable the eslint-no-undef rule to prevent constantly restarting the server
       */

      /* eslint-disable-next-line */
      const stripe = Stripe('pk_test_51IP1D3CD5ZUxyIJExfLLgTNutoYf0nZaajcJYKd112kSEam8Lrv1oRM2CLbOmHBt9bKpCeMolF89j10iKj95xIu600uSXS2OZL')

      this.isLoadingCheckout = true

      fetch('api/create-checkout-session', {
          method: 'POST',
        })
        .then(function(response) {
          return response.json();
        })
        .then(function(session) {
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function(result) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, you should display the localized error message to your
          // customer using `error.message`.
          if (result.error) {
            alert(result.error.message);
          }
        })
        .catch(function(error) {
          console.error('Error:', error);
        });
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

a{
  border: 1px solid blueviolet;
  border-radius: 4px;
  margin-right: 1rem;
  width: 140px;
  padding: 1rem;
}
</style>

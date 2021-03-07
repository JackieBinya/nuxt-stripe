<template>
  <div class="container">
    <button v-if="isStripeLoaded" @click="checkout">Subscribe</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isStripeLoaded: false
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
    checkout(priceId) {
      /*
       * The logic below is only executed when the Stripe script has been fully loaded
       * When this page is mounted Stripe does not exist, when in dev mode eslint picks up that issue and kills the server
       * So we disable the eslint-no-undef rule to prevent constantly restarting the server
       */

      /* eslint-disable-next-line */
      const stripe = Stripe(process.env.stripePublishableKey)

      this.isLoadingCheckout = true

      fetch('/create-checkout-session', {
          method: 'POST',
        })
        .then(function(response) {
          return response.json();
        })
        .then(function(session) {
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
          // TODO Logic to handle custom errors
          if (result.error) {
            const displayError = document.getElementById("error-message")
            displayError.textContent = result.error.message
          }
        })
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
</style>

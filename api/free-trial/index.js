const stripe = require('stripe')('sk_test_51IP1D3CD5ZUxyIJEJEj26gjKOBaWPVFTCigOU4g9PNSvMe5ZS8kyc9hdO7J9MO8YgiUPUu0fApzU2l7fspER7Xco00wRapK4fy');

const subscription = await stripe.subscriptions.create({
  customer: 'cus_4fdAW5ftNQow1a',
  items: [
    {
      price: 'price_CBb6IXqvTLXp3f',
    },
  ],
  trial_period_days: 15,
});
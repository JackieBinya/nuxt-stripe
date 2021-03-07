const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51IP1D3CD5ZUxyIJEJEj26gjKOBaWPVFTCigOU4g9PNSvMe5ZS8kyc9hdO7J9MO8YgiUPUu0fApzU2l7fspER7Xco00wRapK4fy')

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));
// const httpProxy = require('http-proxy')
// const proxy = httpProxy.createProxyServer()
// const express = require('express');
// const app = express();
// const stripe = require('stripe')('sk_test_51IP1D3CD5ZUxyIJEJEj26gjKOBaWPVFTCigOU4g9PNSvMe5ZS8kyc9hdO7J9MO8YgiUPUu0fApzU2l7fspER7Xco00wRapK4fy')

// const API_URL = process.env.API_URL || 'https://api.mydomain.com'

// export default function(req, res, next) {
//   proxy.web(req, res, {
//      target: "http://localhost:4242"
//   })
// }

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'T-shirt',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'https://example.com/success',
//     cancel_url: 'https://example.com/cancel',
//   });

//   res.json({ id: session.id });
// });

// app.listen(4242, () => console.log(`Listening on port ${4242}!`));

module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  })
}
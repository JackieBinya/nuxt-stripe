const stripe = require('stripe')('sk_test_51IP1D3CD5ZUxyIJEJEj26gjKOBaWPVFTCigOU4g9PNSvMe5ZS8kyc9hdO7J9MO8YgiUPUu0fApzU2l7fspER7Xco00wRapK4fy');

module.exports = async (req, res) => {
    // const example = req.body

    const {id} = await stripe.customers.create({
        email: req.body.email,
    });

    await stripe.subscriptions.create({
        customer: id,
        items: [
          {
            price: 'price_1IRIwiCD5ZUxyIJEU4jaghEZ',
          },
        ],
        trial_period_days: 15,
      })
}
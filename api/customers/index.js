const stripe = require('stripe')('sk_test_51IP1D3CD5ZUxyIJEJEj26gjKOBaWPVFTCigOU4g9PNSvMe5ZS8kyc9hdO7J9MO8YgiUPUu0fApzU2l7fspER7Xco00wRapK4fy');

const customer = await stripe.customers.create({
  description: 'My First Test Customer (created for API docs)',
});


module.exports = async (req, res) => {
    const { body } = req

    const customer = await stripe.customers.create({
        name: body.name,
        email: body.email,
      });


    res.send("Hello World")
}
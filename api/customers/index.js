const stripe = require('stripe')('sk_test_51IP1D3CD5ZUxyIJEJEj26gjKOBaWPVFTCigOU4g9PNSvMe5ZS8kyc9hdO7J9MO8YgiUPUu0fApzU2l7fspER7Xco00wRapK4fy');

module.exports = async (req, res) => {
    const example = req.body

    // const customer = await stripe.customers.create({
    //     name: body.name,
    //     email: body.email,
    //   });


    // res.send(customer)

    res.send({name: req.body.name})
}
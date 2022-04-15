const {Schema, model} = require('mongoose');

const subscriptionSchema = new Schema({
    subscriptionName: {
        type: String, 
        required: true,
    },
    // A subscription should only have ONE of the following: Monthly Cost OR Annual Cost
    monthlyCost: Number,
    annualCost: Number,
    paymentType: String,
    startDate: Date,
    // We might want dueDate as a Integer, representing the Day-of-Month
    dueDate: Date,
    autoPay: Boolean,
    autoRenew: Boolean,
})

const Subscriptions = model('Subscriptions', subscriptionSchema)

module.export = Subscriptions
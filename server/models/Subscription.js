const {Schema, model} = require('mongoose');

const subscriptionModel = new Schema({
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
    dueDate: {type: Number, min: 1, max: 31},
    autoPay: {type: Boolean, default: false},
    autoRenew: {type: Boolean, default: false}
})

const Subscription = model('Subscription', subscriptionModel)

module.export = Subscription
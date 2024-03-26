export type SubscriptionPlan = {
  name : string,
  buttonText : string
  price : number,
  features : string[]
}

export const SubscriptionData : SubscriptionPlan[] = [
  {
    name : "Free",
    buttonText : "Upgrade Plan",
    price : 0,
    features : ["3 listings", "1 sponsored listing ads", "5 images/listing"]
  },
  {
    name : "Silver",
    buttonText : "Select Plan",
    price : 4000,
    features : ["5 listings", "3 sponsored listing ads", "7 images/listing", "Email Notification", "SMS Notification"]
  },
  {
    name : "Gold",
    buttonText : "Select Plan",
    price : 9000,
    features : ["10 listings", "5 sponsored listing ads", "10 images/listing", "Email Notification", "SMS Notification", "24/7 Support"]
  },
  {
    name : "Platinum",
    buttonText : "Select Plan",
    price : 20000,
    features : ["Unlimited listings", "15 sponsored listing ads", "20 images/listing", "Email Notification", "SMS Notification", "24/7 Support",
      "User Profile Management"
    ]
  }
]
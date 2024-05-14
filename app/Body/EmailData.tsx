export const rawData: Email[] = [
    {
      subject: "Welcome to Our Newsletter",
      body: "Thank you for subscribing to our monthly newsletter.",
      to: "john.doe@example.com",
      time: "08:30 AM",
    },
    {
      subject: "Project Update",
      body: "Here is the latest update on the project we discussed.",
      to: "sarah.connor@example.com",
      time: "10:45 AM",
    },
    {
      subject: "Your Order Has Shipped",
      body: "We're excited to let you know that your order has shipped!",
      to: "alice.jones@example.com",
      time: "01:15 PM",
    },
    {
      subject: "Invitation to Event",
      body: "We would like to invite you to our upcoming event next month.",
      to: "david.smith@example.com",
      time: "03:20 PM",
    },
    {
      subject: "Important Account Update",
      body: "Please review the recent changes to your account settings.",
      to: "michael.brown@example.com",
      time: "09:00 AM",
    },
    {
      subject: "Scheduled Maintenance Notification",
      body: "We will be performing scheduled maintenance this weekend.",
      to: "laura.wilson@example.com",
      time: "02:30 PM",
    },
    {
      subject: "Thank You for Your Purchase",
      body: "We appreciate your recent purchase and would like to thank you.",
      to: "james.white@example.com",
      time: "11:55 AM",
    },
    {
      subject: "Feedback Request",
      body: "We would love to hear your thoughts on our service.",
      to: "emily.green@example.com",
      time: "04:40 PM",
    },
    {
      subject: "Appointment Confirmation",
      body: "This email is to confirm your appointment for next week.",
      to: "benjamin.carter@example.com",
      time: "08:20 AM",
    },
    {
      subject: "Your Subscription Renewal",
      body: "Your annual subscription is set to renew automatically.",
      to: "sophia.thompson@example.com",
      time: "10:10 AM",
    },
    {
      subject: "Exclusive Offer Just for You",
      body: "We've crafted an exclusive offer for our loyal customers.",
      to: "ethan.harris@example.com",
      time: "12:45 PM",
    },
    {
      subject: "Security Alert",
      body: "We detected unusual activity in your account.",
      to: "madison.clark@example.com",
      time: "03:05 PM",
    },
    {
      subject: "Happy Birthday!",
      body: "We would like to wish you a very happy birthday!",
      to: "oliver.lewis@example.com",
      time: "06:30 AM",
    },
    {
      subject: "Interview Schedule",
      body: "We would like to schedule an interview with you next week.",
      to: "isabella.walker@example.com",
      time: "11:20 AM",
    },
    {
      subject: "System Update Completed",
      body: "The scheduled system update has been completed successfully.",
      to: "liam.allen@example.com",
      time: "02:15 PM",
    },
    {
      subject: "Reminder: Payment Due",
      body: "This is a reminder that your payment is due next week.",
      to: "noah.wright@example.com",
      time: "05:00 PM",
    },
    {
      subject: "Change of Address Confirmation",
      body: "We have updated your address in our records.",
      to: "mia.martin@example.com",
      time: "07:40 AM",
    },
    {
      subject: "Welcome to Our Platform",
      body: "Thank you for joining our platform. Here's what to do next.",
      to: "jacob.lee@example.com",
      time: "09:25 AM",
    },
    {
      subject: "Service Interruption",
      body: "We're sorry for the unexpected service interruption.",
      to: "ava.perez@example.com",
      time: "01:50 PM",
    },
    {
      subject: "Feedback Received",
      body: "We appreciate your feedback and thank you for helping us improve.",
      to: "william.scott@example.com",
      time: "03:35 PM",
    },
    {
      subject: "Renewal Confirmation",
      body: "Your service has been renewed for another year.",
      to: "sophie.turner@example.com",
      time: "12:15 PM",
    },
    {
      subject: "Upcoming Workshop",
      body: "We're excited to invite you to our upcoming workshop on digital skills.",
      to: "jack.roberts@example.com",
      time: "10:35 AM",
    },
    {
      subject: "Service Upgrade",
      body: "We have upgraded your service to provide you with better performance.",
      to: "amelia.thomas@example.com",
      time: "02:55 PM",
    },
    {
      subject: "New Features Available",
      body: "We have added new features that you might find useful.",
      to: "logan.hall@example.com",
      time: "04:10 PM",
    },
    {
      subject: "Thank You for Your Feedback",
      body: "We have received your feedback and are working on improvements.",
      to: "charlotte.moore@example.com",
      time: "08:50 AM",
    },
  ];

  export interface Email {
    subject: string;
    body: string;
    to: string;
    time: string;
  };
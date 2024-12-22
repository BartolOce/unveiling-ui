//useDarkPattern.js
export const useDarkPattern = () => {
  const darkPattern = [
    //PRESSURING DARK PATTERNS
    //Confirmshaming dark pattern subpage
    {
      name: "confirmshaming",
      header: "Confirmshaming",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/confirmshaming_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 5,
      views: "348",
      description:
        "Confirmshaming is a dark pattern that guilts or shames users into opting into something, often using language that makes refusal seem unreasonable or socially unacceptable.",
      highlights: [
        "Look for dismissive, rude or guilt-tripping language in the opt-out options",
        "Often found in pop-ups, email subscription prompts, or during the checkout process on e-commerce sites.",
      ],
      impact:
        "Confirmshaming can lead to decisions driven by guilt or social pressure rather than personal preference or rational judgment. It can cause unnecessary stress and regret after the fact, reducing overall user satisfaction and trust in the website or service employing these tactics.",
      explanation:
        "In this example, Dailylook offers the option to enroll in their newsletter to receive a discount. If you choose not to subscribe, you are met with a message suggesting that you don't want to look your best, which can be perceived as a form of shaming.",
      definition:
        "Confirmshaming manipulates users by using emotionally charged language to make the act of declining an offer seem foolish, irresponsible, or socially unacceptable. This tactic preys on the user's fear of missing out, social judgment, or guilt, thereby coercing them into making a choice they might otherwise avoid.",
      examples: [
        {
          question: "Dropbox:",
          answer:
            'At one point, Dropbox used a confirmshaming technique in its email subscription pop-up, where opting out said, "No, I don\'t want to stay up-to-date."',
        },
        {
          question: "The Guardian:",
          answer:
            'When asking for donations, the Guardian sometimes uses confirmshaming, with the decline option saying, "I’m not interested in supporting quality journalism."',
        },
      ],
    },

    //Fake scarcity dark pattern subpage
    {
      name: "fake-scarcity",
      header: "Fake scarcity",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/fake-scarcity_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/fake-scarcity_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 1,
      views: "5568",
      description:
        "Fake scarcity is a dark pattern that creates a false sense of urgency by claiming that a product or service is in limited supply, pushing users to make quick purchasing decisions.",
      highlights: [
        'Low stock warnings like "Only 2 left in stock!" even when the product is not genuinely scarce.',
        'Messages such as "10 people are viewing this item right now" or "Only a few items left due to high demand.',
        "Pop-up alerts that someone just purchased the item you are viewing",
      ],
      impact:
        "Fake scarcity can cause impulsive buying decisions based on artificial urgency, leading to potential regret or buyer’s remorse. It can also foster distrust towards the platform or retailer once the user realizes the scarcity claims were exaggerated or false. This manipulation can erode user confidence and satisfaction over time.",
      explanation:
        'In this example, ASOS uses a "selling fast" banner on products to create a sense of urgency, encouraging users to make a quick purchase decision to avoid missing out. Although the products may be selling quickly, the actual stock levels are unclear, and it is possible that there is ample supply for everyone interested.',
      definition:
        "Fake scarcity exploits psychological triggers to rush users into making purchases by creating the illusion that a product is in limited supply or that an offer is about to expire. This tactic manipulates consumer behavior by leveraging urgency and scarcity, which are known to increase the perceived value and desirability of an item. This strategy is especially prevalent among online fashion retailers and in the fast fashion industry, where frequent sales further enhance the appeal of products.",
      examples: [
        {
          question: "Booking.com:",
          answer:
            'Often uses fake scarcity by showing messages like "Only 1 room left at this price!" or "10 people are looking at this hotel right now," even if these claims are not always accurate.',
        },
        {
          question: "Amazon:",
          answer:
            'Frequently displays "Only a few left in stock - order soon" on product pages, regardless of actual inventory levels.',
        },
      ],
    },

    //Countdown dark pattern subpage
    {
      name: "countdown",
      header: "Countdown",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/countdown_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },

        // More images...
      ],
      rarity: 2,
      views: "1023",
      description:
        "Countdowns are timers displayed on websites that create a sense of urgency by indicating a limited time to take advantage of a deal or offer, pressuring users to act quickly.",
      highlights: [
        "Countdown timers that indicate limited time offers or sales that are about to end.",
        "After the timer expires, the offer might reset or the countdown might start over, indicating it wasn’t a genuine limited-time deal.",
      ],
      impact:
        "Countdowns can lead to rushed decisions, making you purchase items or services without adequate consideration or comparison. This pressure can result in regret if the decision was made hastily. Over time, repeated exposure to such tactics can diminish trust in the platform, especially if the user realizes that the deadlines were artificial.",
      explanation:
        "In this example, Udemy displays a large banner with a countdown timer, creating urgency by suggesting that users have limited time to save big. However, this timer resets each time the page cookies are refreshed, indicating that the time limit is not genuine.",
      definition:
        "Countdowns use time pressure as a psychological tool to accelerate decision-making processes. By imposing a deadline, they trigger fear of missing out (FOMO) and a sense of urgency, compelling users to make quicker purchasing decisions. This manipulation leverages the human tendency to act under time constraints to push sales or sign-ups.",
      examples: [
        {
          question: "Amazon:",
          answer:
            "During special sales events like Prime Day or Black Friday, Amazon often uses countdowns to highlight time-sensitive deals.",
        },
        {
          question: "Udemy:",
          answer:
            "Frequently displays countdowns on course discounts, with messages like “Offer ends in 03:00:00,” pushing users to buy before the timer runs out.",
        },
      ],
    },

    //Nagging dark pattern subpage
    {
      name: "nagging",
      header: "Nagging",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/nagging_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/nagging_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 2,
      views: "1023",
      description:
        "Nagging involves persistently interrupting or repeatedly asking users to take an action, such as signing up for a newsletter, enabling notifications, upgrading to a premium service, or giving feedback.",
      highlights: [
        "Recurrent pop-ups, notifications, or prompts that appear multiple times during a session.",
        "The messages can be pushy or overly insistent, sometimes escalating in urgency and hard to dismiss.",
      ],
      impact:
        "Nagging can lead to a frustrating and disjointed user experience, as the constant interruptions break concentration and flow. Over time, this can result in a negative perception of the brand or service, decreased user satisfaction, and possibly lead users to abandon the service in favor of less intrusive alternatives.",
      explanation:
        "In this example, CBS News employs persistent pop-ups asking users to turn off their ad blockers. Every image is covered, and the pop-up reappears every time you refresh or navigate to another page, continuing until the ad blocker is disabled.",
      definition:
        "Nagging is a tactic used to wear down the user's resistance by persistently pushing them towards a desired action. This could be anything from subscribing to a service, purchasing an upgrade, or providing feedback. The incessant nature of these interruptions can diminish the overall user experience, making the interface feel more like a series of hurdles than a smooth, enjoyable journey.",
      examples: [
        {
          question: "YouTube:",
          answer:
            "Regularly interrupts viewers with prompts to subscribe to YouTube Premium, especially during video ads.",
        },
        {
          question: "LinkedIn:",
          answer:
            "Frequently prompts free-tier users to upgrade to Premium with persistent notifications and pop-ups.",
        },
      ],
    },

    //Social proof dark pattern subpage
    {
      name: "social-proof",
      header: "Social proof",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/social-proof_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 1,
      views: "1023",
      description:
        "Social proof leverages others' behavior and opinions to influence users' decisions, often highlighting only positive comments to create a skewed perception of popularity and satisfaction.",
      highlights: [
        "Customer reviews or quotes prominently displayed on product pages, often overwhelmingly positive.",
        "High visibility of star ratings and positive reviews, often with negative reviews less prominently displayed, harder to find or non-existent.",
      ],
      impact:
        "Social proof can boost users' confidence by providing a sense of community endorsement. However, it can also manipulate users into making choices based on perceived popularity rather than personal need. This can lead to unnecessary purchases or engagement, driven by fear of missing out or a desire to conform. The selective display of positive feedback can create unrealistic expectations and disappointment when the product or service doesn't meet these inflated perceptions.",
      explanation:
        "In this example, and on most websites, the social proof displayed on home pages is often handpicked to present the best possible reviews. Sometimes, these ratings are not even genuine but rather artificial design elements created to influence user perception.",
      definition:
        "Social proof is a psychological and social phenomenon where people mimic the actions of others in an attempt to reflect correct behavior. In the digital context, this is used to create a sense of popularity and trustworthiness around a product or service. By selectively highlighting positive feedback and high engagement numbers, companies aim to convince potential customers to follow suit. This manipulation creates a biased view, making users believe that the product or service is universally well-received, even if there are significant negative opinions or issues.",
      examples: [
        {
          question: "Wolt:",
          answer: "Nemožeš nastavit koristit app bez da ocjenis narudbu",
        },
        {
          question: "LinkedIn:",
          answer:
            "Frequently prompts free-tier users to upgrade to Premium with persistent notifications and pop-ups.",
        },
      ],
    },

    //FORCING DARK PATTERNS
    //Forced enrollment dark pattern subpage
    {
      name: "forced-enrollment",
      header: "Forced enrollment",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/forced-enrollment_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/forced-enrollment_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 3,
          name: "Angled view",
          src: "/forced-enrollment_example3.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 4,
          name: "Angled view",
          src: "/forced-enrollment_example4.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 3,
      views: "1023",
      description:
        "Forced enrollment requires users to sign up for an account or provide personal information before they can access certain features or content.",
      highlights: [
        "Certain features or content are inaccessible without giving your email address or creating an account.",
        "Repeated prompts that needs be completed before continuing.",
      ],
      impact:
        "Forced enrollment can be frustrating and intrusive, as it demands personal information before allowing access. It can deter users from exploring the service fully and lead to privacy concerns, as users may feel pressured to provide information they're uncomfortable sharing.",
      explanation:
        "In this example, the blog site Medium makes part of an article visible, but obstructs the rest with a sign-up pop-up, requiring users to create an account before they can continue reading.",
      definition:
        "Forced enrollment is a tactic where users must sign up or create an account to access specific features, content, or services. This can often feel intrusive, as it demands personal information upfront, sometimes before users are certain they want to commit to the service.",
      examples: [
        {
          question: "Quora:",
          answer: "Requires users to sign up or log in to view answers.",
        },
        {
          question: "Pinterest:",
          answer: "Forces users to create an account to view pins fully.",
        },
      ],
    },

    //Forced continuity dark pattern subpage
    {
      name: "forced-continuity",
      header: "Forced continuity",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/forced-continuity_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/forced-continuity_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 2,
      views: "1023",
      description:
        "Forced continuity occurs when a free trial automatically converts into a paid subscription without adequate warning or an easy way to cancel.",
      highlights: [
        "Requiring credit card information for a free trial.",
        "Complicated or hidden cancellation processes.",
        "Few or no reminders about the trial ending and the start of billing.",
      ],
      impact:
        "Forced continuity can lead to unexpected charges, frustration, and a feeling of being trapped in a service. Users may find it challenging to cancel and feel deceived by the initial free trial offer, reducing trust in the service.",
      explanation:
        "In most free trials, once the trial period ends, you will be charged the regular monthly fee without any alerts or confirmations asking if you want to continue the subscription. This is why you are required to provide your credit card information upfront.",
      definition:
        "Forced continuity is a tactic where users are signed up for a free trial that seamlessly transitions into a paid subscription. Often, the terms are hidden or downplayed, making it difficult for users to cancel before being charged.",
      examples: [
        {
          question: "Amazon Prime:",
          answer:
            "Free trial converts to a paid subscription if not canceled in time.",
        },
        {
          question: "Netflix:",
          answer:
            "Automatically starts billing after the free trial period ends.",
        },
      ],
    },

    //Forced review dark pattern subpage
    {
      name: "forced-review",
      header: "Forced review",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/forced-review_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 4,
      views: "1023",
      description:
        "Forced reviews require users to leave a review or rating before they can continue using the app or service.",
      highlights: [
        "Repeated prompts to leave a review, blocking further use until completed.",
        "Making reviews a required step to unlock features or continue usage.",
      ],
      impact:
        "Forced reviews can be annoying and disruptive, leading to a less enjoyable user experience. They may pressure users into leaving insincere reviews just to remove the prompt, which can skew the app's overall ratings and make it harder for new users to trust the reviews they see.",
      explanation:
        "In this example, Glassdoor forces users to submit a review in order to continue using their service. This requirement pressures users into providing feedback, even if they may not be ready or willing to share their opinions at that moment. The platform restricts access to further content and features until a review is submitted, effectively holding the user experience hostage to obtain more reviews.",
      definition:
        "Forced reviews compel users to provide feedback, often by interrupting their experience and requiring a review before allowing further use. This tactic pressures users into leaving ratings, which may not reflect their true opinions due to the coercive nature of the request.",
      examples: [
        {
          question: "YouTube:",
          answer:
            "Regularly interrupts viewers with prompts to subscribe to YouTube Premium, especially during video ads.",
        },
        {
          question: "LinkedIn:",
          answer:
            "Frequently prompts free-tier users to upgrade to Premium with persistent notifications and pop-ups.",
        },
      ],
    },

    //OBSTRUCTIVE DARK PATTERNS
    //Roach motel dark pattern subpage
    {
      name: "roach-motel",
      header: "Roach motel",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/roach-motel_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/roach-motel_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 3,
          name: "Angled view",
          src: "/roach-motel_example3.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 4,
          name: "Angled view",
          src: "/roach-motel_example4.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 1,
      views: "348",
      description:
        "Roach motel makes it easy to get into a situation (like subscribing to a service or making an account) but difficult to get out of it.",
      highlights: [
        "Lack of clear instructions on how to end the relation.",
        "Repeated prompts or hurdles when attempting to cancel.",
      ],
      impact:
        "Roach motel can lead to frustration and a feeling of being trapped in a service you no longer want. It can also result in unnecessary charges and wasted time trying to navigate the cancellation process.",
      explanation:
        "In this example, Michaels' webstore allows users to subscribe to their newsletter with a single click by providing an email address. However, if users wish to unsubscribe, they are first presented with two bonus prompts designed to try to change their minds and after confirming the decision to unsubscribe, users are informed that the newsletter will remain active for a few more weeks before being deactivated.",
      definition:
        "Roach motel is a tactic where users can easily enter into a service, subscription, or membership, but face significant barriers when trying to exit. This can involve complicated cancellation processes, hidden unsubscribe options, and persistent retention prompts designed to discourage leaving.",
      examples: [
        {
          question: "Gym Memberships:",
          answer:
            "Often require in-person visits or lengthy procedures to cancel.",
        },
        {
          question: "Cable Services:",
          answer:
            'When asking for donations, the Guardian sometimes uses confirmshaming, with the decline option saying, "I’m not interested in supporting quality journalism."',
        },
      ],
    },

    //Price comparison prevention dark pattern subpage
    {
      name: "price-comparison-prevention",
      header: "Price comparison prevention",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/price-comparison-prevention_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/price-comparison-prevention_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 3,
          name: "Angled view",
          src: "/price-comparison-prevention_example3.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 3,
      views: "5568",
      description:
        "Price comparison prevention makes it difficult for users to compare prices of products or services, often by obscuring costs or making comparisons inconvenient.",
      highlights: [
        "Important cost details are hidden in fine print or require multiple clicks to uncover.",
        'Claims of "exclusive" prices that prevent easy comparison with other sites.',
      ],
      impact:
        "Price comparison prevention can lead to overpaying for products or services because there is no easy way to compare it with other options on the market. This can cause frustration and reduce trust in the company's transparency.",
      explanation:
        "When choosing a premium plan on LinkedIn, there is no clear visual representation of the prices for the plans displayed. Additionally, on the subpages of these premium plans, the price is not shown, only an option to try it for a month for free. This obscures the actual cost, making it difficult to compare LinkedIn's pricing with competitors without committing to the trial.",
      definition:
        "Price comparison prevention is a tactic where websites and apps make it hard for users to compare prices, often by hiding or obscuring the cost details of products or services. This prevents users from easily determining if they're getting the best deal.",
      examples: [
        {
          question: "Booking.com:",
          answer:
            'Often uses fake scarcity by showing messages like "Only 1 room left at this price!" or "10 people are looking at this hotel right now," even if these claims are not always accurate.',
        },
        {
          question: "Amazon:",
          answer:
            'Frequently displays "Only a few left in stock - order soon" on product pages, regardless of actual inventory levels.',
        },
      ],
    },

    //Preselection dark pattern subpage
    {
      name: "preselection",
      header: "Preselection",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/preselection_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/preselection_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 2,
      views: "1023",
      description:
        "Preselection involves automatically selecting certain options for users, often leading them to make choices they might not have made otherwise.",
      highlights: [
        "Options preselected by default, such as opting into newsletters, optional cookies or additional services.",
        "Prefilled checkboxes are often designed to be easily overlooked.",
      ],
      impact:
        "Preselection can lead to unintended purchases and additional costs or unwanted newscellers as users might overlook the preselected options. It can cause frustration and decrease trust in the service, making users feel manipulated.",
      explanation:
        "In this example, it's clear that the user is selecting a yearly subscription for $8.99. However, after clicking to add it to the cart, a prompt appears encouraging the user to upgrade their subscription. The preselected option in this prompt is not the one the user initially chose, leading to potential confusion and an unintended buying of higher subscription level.",
      definition:
        "Preselection is a tactic where websites and apps automatically select certain options for users, often nudging them toward choices that benefit the company. This can include opt-ins for newsletters, additional services, or products added to the cart without explicit consent.",
      examples: [
        {
          question: "Amazon:",
          answer:
            "During special sales events like Prime Day or Black Friday, Amazon often uses countdowns to highlight time-sensitive deals.",
        },
        {
          question: "Udemy:",
          answer:
            "Frequently displays countdowns on course discounts, with messages like “Offer ends in 03:00:00,” pushing users to buy before the timer runs out.",
        },
      ],
    },

    //Click fatigue dark pattern subpage
    {
      name: "click-fatigue",
      header: "Click fatigue",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/click-fatigue_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/click-fatigue_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 3,
      views: "1023",
      description:
        "Click fatigue involves overwhelming users with many steps or clicks to achieve a desired action, wearing them down to the point of compliance.",
      highlights: [
        "Processes requiring many steps or clicks.",
        "Asking for the same information multiple times.",
        "Frequent interruptions or confirmations that slow down the process.",
      ],
      impact:
        "Click fatigue can lead to frustration, mistakes, and unintended compliance with options users might not have chosen otherwise. It diminishes the overall user experience and can make users feel manipulated.",
      explanation:
        "On the BioWare website, when users try to decline cookies, they receive a message that the process is taking some time. However, accepting cookies happens instantly. This tactic makes the unwanted option lengthy, encouraging users to choose the quicker, more convenient option instead. Even though there is no repeated clicking in this example, the core idea is the same. ",
      definition:
        "Click fatigue is a tactic that involves creating a process so tedious and lengthy that users become exhausted and more likely to comply with the default or suggested options. It leverages the natural tendency to avoid effort, pushing users toward choices that benefit the company.",
      examples: [
        {
          question: "Online Surveys:",
          answer:
            "Lengthy surveys that wear users down, making them more likely to provide superficial or compliant answers.",
        },
        {
          question: "Software Installations:",
          answer:
            "Long installation processes with multiple steps that include optional add-ons preselected.",
        },
      ],
    },

    //Hidden information dark pattern subpage
    {
      name: "hidden-information",
      header: "Hidden information",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/hidden-information_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/hidden-information_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 4,
      views: "1023",
      description:
        "Hidden information involves deliberately concealing important details or burying them in fine print, making it hard for users to make informed decisions.",
      highlights: [
        "Important details hidden in small text or footnotes.",
        "Information that requires several clicks to uncover.",
        "Vague or misleading descriptions that obscure critical information.",
      ],
      impact:
        "Hidden information can lead to unexpected costs, misunderstandings, and regretful decisions. It undermines trust and can result in a feeling of deception, as users realize they were not provided with all necessary information upfront.",
      explanation:
        "In this example, Netflix's subscription selection screen does not display every plan, creating the impression that users must choose between the standard or premium plans to avoid ads. In reality, there is a cheaper, ad-free plan, but the button to show all plans is hidden in small text beneath the flashy design.",
      definition:
        "Hidden information is a tactic where websites and apps deliberately conceal important details, such as costs, terms of service, or product limitations. This makes it challenging for users to access the full picture and make well-informed decisions.",
      examples: [
        {
          question: "YouTube:",
          answer:
            "Regularly interrupts viewers with prompts to subscribe to YouTube Premium, especially during video ads.",
        },
        {
          question: "LinkedIn:",
          answer:
            "Frequently prompts free-tier users to upgrade to Premium with persistent notifications and pop-ups.",
        },
      ],
    },

    //SNEAKING DARK PATTERNS
    //Sneak into basket dark pattern subpage
    {
      name: "sneak-into-basket",
      header: "Sneak into basket",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/sneak-into-basket_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/sneak-into-basket_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 3,
      views: "1023",
      description:
        "Sneak into basket involves adding additional items to a user's shopping cart without their explicit consent, often through misleading design or preselection.",
      highlights: [
        "Additional products automatically added to the cart.",
        "Extra items included in the cart summary that are easy to overlook.",
      ],
      impact:
        "Sneak into basket can lead to unexpected charges and frustration as users may end up buying items they did not intend to purchase.",
      explanation:
        "In this example, on the webstore Name.com, adding a product priced at $8.99 will not result in a total price of $8.99. When you view your cart, you'll find an extra product that you did not actively add, increasing the total cost.",
      definition:
        "Sneak into basket is a tactic where additional products or services are added to the user's shopping cart without clear consent. This is often achieved through preselected options, misleading buttons, or bundled offers, making it easy for users to unintentionally purchase more than they intended.",
      examples: [
        {
          question: "Quora:",
          answer: "Requires users to sign up or log in to view answers.",
        },
        {
          question: "Pinterest:",
          answer: "Forces users to create an account to view pins fully.",
        },
      ],
    },

    //Hidden subscription dark pattern subpage
    {
      name: "hidden-subscription",
      header: "Hidden subscription",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/hidden-subscription_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/hidden-subscription_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 4,
      views: "1023",
      description:
        "Hidden subscription involves enrolling users in recurring payments without clear disclosure upfront, disguised as a one-time purchase.",
      highlights: [
        "Subscription details hidden in fine print or terms and conditions.",
        "Vague descriptions that suggest a one-time purchase rather than an ongoing subscription.",
        "Product pages and checkout processes that do not clearly indicate the subscription nature.",
      ],
      impact:
        "Hidden subscriptions can lead to unexpected recurring charges, causing financial strain and frustration. Users may feel deceived when they discover ongoing payments for what they thought was a single purchase.",
      explanation:
        'On Manscaped product page, users can clearly see the description and images of the product they are buying. However, the detail that the product comes with a subscription called the "Peak Hygiene Plan" is hidden in small gray text. This can result in users unintentionally purchasing a subscription when they are expecting to buy just the product.',
      definition:
        "Hidden subscription is a tactic where users are misled into thinking they are making a one-time purchase, when in reality, they are signing up for a recurring subscription. This deceit often involves hiding subscription terms in fine print or using ambiguous language to mask the true nature of the transaction.",
      examples: [
        {
          question: "Manscaped što doda u košaricu subskripciju",
          answer:
            "Free trial converts to a paid subscription if not canceled in time.",
        },
        {
          question: "Software Downloads:",
          answer:
            "Advertising a one-time software purchase that includes hidden monthly or yearly subscription fees.",
        },
      ],
    },

    //Hidden cost dark pattern subpage
    {
      name: "hidden-cost",
      header: "Hidden cost",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/hidden-cost_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/hidden-cost_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 3,
          name: "Angled view",
          src: "/hidden-cost_example3.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 3,
      views: "1023",
      description:
        "Hidden costs involve concealing additional fees and charges until late in the purchasing process, making the total cost unclear upfront.",
      highlights: [
        "Fees revealed only at the final checkout step.",
        "Prices that don't include taxes, shipping, or handling fees.",
      ],
      impact:
        "Hidden costs can lead to spending more than anticipated and cause frustration when unexpected fees appear at the last moment.",
      explanation:
        "In this example, the webshop does not visually indicate that the prices shown exclude VAT fees. These fees are only added at the last step of the buying process, preventing users from knowing the true price until the end.",
      definition:
        "Hidden costs is a tactic where the full price of a product or service is not disclosed until late in the purchasing process. Additional fees, such as taxes, shipping, and handling, are often hidden or only revealed at the final checkout step, making it difficult for users to understand the total cost upfront.",
      examples: [
        {
          question: "YouTube:",
          answer:
            "Regularly interrupts viewers with prompts to subscribe to YouTube Premium, especially during video ads.",
        },
        {
          question: "LinkedIn:",
          answer:
            "Frequently prompts free-tier users to upgrade to Premium with persistent notifications and pop-ups.",
        },
      ],
    },

    //DECEPTIVE DARK PATTERNS
    //Trick questions dark pattern subpage
    {
      name: "trick-wording",
      header: "Trick wording",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/trick-wording_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 3,
      views: "5568",
      description:
        "Trick wording involve using confusing or misleading language in interface elements to manipulate users into giving unintended responses.",
      highlights: [
        "Using double negatives to obscure the true meaning.",
        "Answer choices that don't logically align with the question.",
        "Placing questions or options in a way that increases the chance of selecting the wrong answer.",
      ],
      impact:
        "Trick wording can lead to unintended agreements, sharing of personal data, or unwanted subscriptions. This manipulation can cause frustration, mistrust in the service, and potentially unwanted consequences like spam or unauthorized charges.",
      explanation:
        'In this example, after unsubscribing from Rule newsletter, users receive a confirmation that they have successfully unsubscribed. However, they are also presented with a button labeled "ununsubscribe." This button is designed to look like an option to finalize the unsubscription, but it actually resubscribes the user if clicked, potentially misleading them into subscribing again without realizing it.',
      definition:
        "Trick wording are a tactic where forms, surveys, or dialogs use confusing language, complex wording, or misleading formats to trick users into selecting an option they did not intend. This often results in users inadvertently opting into services, sharing data, or agreeing to terms.",
      examples: [
        {
          question: "Booking.com:",
          answer:
            'Often uses fake scarcity by showing messages like "Only 1 room left at this price!" or "10 people are looking at this hotel right now," even if these claims are not always accurate.',
        },
        {
          question: "Amazon:",
          answer:
            'Frequently displays "Only a few left in stock - order soon" on product pages, regardless of actual inventory levels.',
        },
      ],
    },

    //Misdurection dark pattern subpage
    {
      name: "misdirection",
      header: "Misdirection",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/misdirection_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 2,
      views: "1023",
      description:
        "Misdirection involves drawing the user's attention away from important information or actions to influence their decisions.",
      highlights: [
        "Emphasizing less relevant information while downplaying critical details.",
        "Using visual elements to draw attention away from important information.",
        "Hiding essential information in less noticeable parts of the page.",
      ],
      impact:
        "Misdirection can lead to uninformed decisions, unexpected costs, and regret. Users may feel misled and frustrated when they discover important information they missed due to the deliberate distraction tactics used by the service or website.",
      explanation:
        "In this example, Euronews places two prominent buttons side by side, making the options to accept cookies the only visibly clickable ones. The option to decline cookies is disguised as regular text under the logo, making it easy to miss, nudging users towards the preferred choices of accepting cookies.",
      definition:
        "Misdirection is a tactic where design and content are used to divert the user's attention from critical information or actions. By focusing attention on less relevant aspects, users may overlook important details that could affect their decision-making.",
      examples: [
        {
          question: "Amazon:",
          answer:
            "During special sales events like Prime Day or Black Friday, Amazon often uses countdowns to highlight time-sensitive deals.",
        },
        {
          question: "Udemy:",
          answer:
            "Frequently displays countdowns on course discounts, with messages like “Offer ends in 03:00:00,” pushing users to buy before the timer runs out.",
        },
      ],
    },

    //Bait and switch dark pattern subpage
    {
      name: "bait-and-switch",
      header: "Bait and switch",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/bait-and-switch_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/bait-and-switch_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 3,
      views: "1023",
      description:
        "Bait and switch involves advertising a desirable offer to attract users, only to replace it with a less favorable offer when they attempt to take advantage of it.",
      highlights: [
        "Too good to be true offers.",
        "Advertised items that are out of stock, replaced with more expensive alternatives.",
        "Promises of discounts or offers that require purchasing additional items or services.",
      ],
      impact:
        "Bait and switch can lead to disappointment and wasted time when you see what is really offered to you.",
      explanation:
        "Webstores often use inflated and flashy marketing to showcase enormous sales. For instance, on the Ekupi website, the advertisements boast huge discounts and impressive deals. However, when you explore the actual selection, you find that the popular items that people are really buying are only offered at mediocre discounts.",
      definition:
        "Bait and switch is a tactic where users are lured by an attractive offer, only to find that the offer is not available or has significant conditions attached. Instead, users are directed towards a less favorable or more expensive option, exploiting their initial interest to drive a different outcome.",
      examples: [
        {
          question: "Online Surveys:",
          answer:
            "Lengthy surveys that wear users down, making them more likely to provide superficial or compliant answers.",
        },
        {
          question: "Software Installations:",
          answer:
            "Long installation processes with multiple steps that include optional add-ons preselected.",
        },
      ],
    },

    //Disguised Ads dark pattern subpage
    {
      name: "disguised-ads",
      header: "Disguised Ads",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "/disguised-ads_example1.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "/disguised-ads_example2.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      rarity: 2,
      views: "1023",
      description:
        "Disguised ads are advertisements that are made to look like regular content, deceiving users into interacting with them as if they were organic posts or articles.",
      highlights: [
        "Ads that blend seamlessly with the surrounding content, making them hard to distinguish.",
      ],
      impact:
        "Disguised ads can lead to unintentional engagement with promotional content. Users might feel deceived when they realize that what they thought was genuine content is actually an ad, leading to skepticism and reduced credibility of the source.",
      explanation:
        "On Reddit, ads are designed to look just like normal posts, as shown in the first picture. There is no visual distinction between ads and regular posts, which can be very confusing for users. It often takes time for users to realize that what they are seeing is not a post from the subreddit but an ad.",
      definition:
        "Disguised ads are a tactic where advertisements are integrated into regular content in such a way that users might not immediately recognize them as ads. This deceptive integration leverages the trust users have in the platform or content to promote products or services without clear disclosure.",
      examples: [
        {
          question: "YouTube:",
          answer:
            "Regularly interrupts viewers with prompts to subscribe to YouTube Premium, especially during video ads.",
        },
        {
          question: "LinkedIn:",
          answer:
            "Frequently prompts free-tier users to upgrade to Premium with persistent notifications and pop-ups.",
        },
      ],
    },
    // Add more patterns here...
  ];

  const getPatternByName = (name) => {
    return darkPattern.find((darkPattern) => darkPattern.name === name);
  };

  return { darkPattern, getPatternByName };
};

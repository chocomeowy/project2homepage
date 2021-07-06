const motivation = [
  {
    name: "Alice Kingsley",
    quote:
      "I’m afraid so. You're entirely bonkers. But I'll tell you a secret. All the best people are.",
  },
  {
    name: "Bob Ross",
    quote:
      "Talent is a pursued interest. Anything that you're willing to practice, you can do.",
  },
  {
    name: "Luna Lovegood, The Order of the Phoenix",
    quote:
      "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
  },
  {
    name: "Albus Dumbledore, The Chamber of Secrets",
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
  },
  {
    name: "Albus Dumbledore, Harry Potter and the Goblet of Fire",
    quote: "It matters not what someone is born, but what they grow to be.",
  },
  {
    name: "Sirius Black, Harry Potter and the Order of the Phoenix",
    quote:
      "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.",
  },

  {
    name: "Amelia Earhart",
    quote:
      "Decide whether or not the goal is worth the risks involved. If it is, stop worrying.",
  },
  {
    name: "Tony Stark",
    quote:
      "Part of the journey is the end. Everything’s gonna work out exactly the way it’s supposed to.",
  },
  {
    name: "Mark Twain",
    quote: "Continuous improvement is better than delayed perfection.",
  },
  {
    name: "Elvis Presley",
    quote: "Wise men say, only fools rush in.",
  },
  {
    name: "unknown",
    quote: "Aim for excellence, not perfection. ",
  },
  {
    name: "unknown",
    quote:
      "Don't let the success of others discourage you. Let it inspire you.",
  },
  {
    name: "Amelia Earhart",
    quote: "Adventure is worthwhile in itself.",
  },
  {
    name: "Amelia Earhart",
    quote: "The most effective way to do it, is to do it.",
  },
  {
    name: "Maya Angelou",
    quote:
      "Do the best you can until you know better. Then when you know better, do better.",
  },
  {
    name: "J.R.R. Tolkien",
    quote: `All that is gold does not glitter, not all those who wander are lost; the old
    that is strong does not wither, deep roots are not reached by the frost.`,
  },

  {
    name: "Ralph Waldo Emerson",
    quote:
      "Dare to live the life you have dreamed for yourself. Go forward and make your dreams come true.",
  },
  {
    name: "Barack Obama",
    quote: "The best way to not feel hopeless is to get up and do something.",
  },
  {
    name: "Ernest Hemingway",
    quote:
      "The best way to find out if you can trust somebody is to trust them.",
  },
  {
    name: "Edwin H. Land",
    quote: "An essential part of creativity is not being afraid to fail.",
  },
  {
    name: "Albert Einstein",
    quote:
      "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
  },
  {
    name: "Aristotle",
    quote: "Happiness depends upon ourselves",
  },
  {
    name: "Winston Churchill",
    quote: "If you’re going through hell, keep going.",
  },
  {
    name: "Walt Disney",
    quote: "Whatever you do, do it well.",
  },
  {
    name: "unknown",
    quote:
      "Never stop doing your best just because someone doesn’t give you credit",
  },
  {
    name: "Nike",
    quote: "Yesterday you said tomorrow. Just do it.",
  },
  {
    name: "Steve Jobs",
    quote: "Stay curious, stay hungry!",
  },
  {
    name: "unknown",
    quote: "Always believe something wonderful is about to happen",
  },
  {
    name: "Walt Disney",
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
  },
  {
    name: "Amelia Earhart",
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
  },
  {
    name: "Ralph Waldo Emerson",
    quote:
      "The only person you are destined to become is the person you decide to be.",
  },
  {
    name: "Teddy Roosevelt",
    quote: "Do what you can, where you are, with what you have.",
  },
  {
    name: "Oscar Wilde",
    quote: "Live the wonderful life that is in you.",
  },
  {
    name: "",
    quote:
      "The Pareto principle states that for many outcomes roughly 80% of consequences come from 20% of the causes.",
  },
  {
    name: "Henry Ford",
    quote:
      "One of the greatest discoveries a person makes is to find they can do what they were afraid they couldn't do.",
  },
  {
    name: "Bianca Sparacino",
    quote:
      "You wake up every single day with the opportunity to start feeling again.",
  },
  {
    name: "Bianca Sparacino",
    quote:
      "When the world is quiet and you’re truly alone and with your mind, what do you think about? What do you hope for? Follow that.",
  },
  {
    name: "Liane Cordes",
    quote:
      "Continuous effort, not strength or intelligence, is the key to unlocking our potential.",
  },
  {
    name: "Vincent van Gogh",
    quote:
      "Great things are not something accidental, but must certainly be willed.",
  },
  {
    name: "Pele",
    quote:
      "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
  },
  {
    name: "Will Durant",
    quote:
      "We are what we repeatedly do. Excellence then, is not an act, but a habit.",
  },
  {
    name: "Oprah Winfrey",
    quote:
      "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.",
  },
  {
    name: "Confucius",
    quote: "Wherever you go, go with all your heart.",
  },
  {
    name: "Steve Jobs",
    quote: "Deciding what not to do is as important as deciding what to do.",
  },
  {
    name: "Jim Rohn",
    quote:
      "Happiness is not something you postpone for the future; it is something you design for the present.",
  },
  {
    name: "Dr. Seuss",
    quote:
      "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
  },
  {
    name: "Terry Fox",
    quote: "Dreams are made possible if you try.",
  },
  {
    name: "Buddha",
    quote:
      "Every morning we are born again. What we do today is what matters most.",
  },
  {
    name: "F. Matthias Alexander",
    quote:
      "People do not decide their futures, they decide their habits and their habits decide their futures. ",
  },
  {
    name: "-",
    quote: "Do more of what makes you happy. ",
  },
  {
    name: "-",
    quote: "Remember that the sky’s the limit",
  },
  {
    name: "-",
    quote: "Aspire to inspire before we expire.",
  },
  {
    name: "Joseph Campbell",
    quote:
      "Follow your bliss and the universe will open doors where there were only walls.",
  },
];
export default motivation;

export const Links = [
  {
    linkName: "Home",
    src: "/",
  },
  {
    linkName: "Tasks",
    src: "/tasks",
  },
  {
    linkName: "Pomodoro",
    src: "/pomodoro",
  },
  {
    linkName: "Notes",
    src: "/notes",
  },
];
export const AuthButtons = [
  { id: 1, name: "Sign In", src: "/sign-in" },
  { id: 2, name: "Sign Up", src: "/sign-up" },
];

export const HeroContent = [
  {
    id: 1,
    imgUrl: "/growth.png",
    heading: "Welcome to Meraki – Productivity with Passion",
    subHeading:
      "Unlock your true potential and stay on top of your goals with Meraki, your ultimate productivity companion.",
    orderImg: 1,
    orderText: 2,
  },
  {
    id: 2,
    imgUrl: "/sitting.png",
    heading: "Why Meraki?",
    subHeading:
      "Meraki is more than just a productivity app—it’s designed to help you infuse intention, creativity, and joy into everything you do.",
    orderImg: 2,
    orderText: 1,
  },
  {
    id: 3,
    imgUrl: "/sofa.png",
    heading: "Our Philosphy",
    subHeading:
      "We believe productivity isn’t just about getting things done—it’s about doing them with heart and purpose, finding joy in the process.",
    orderImg: 1,
    orderText: 2,
  },
  {
    id: 4,
    imgUrl: "/rogue.png",
    heading: "Start Your Journey Today",
    subHeading:
      "Join Meraki and redefine productivity. Start using Meraki now to transform the way you work, one step at a time.",
    orderImg: 2,
    orderText: 1,
  },
];

export const PRIORITY_NAMES = [
  { value: "priority 1", label: "Priority 1: Urgent and Important Tasks" },
  {
    value: "priority 2",
    label: "Priority 2: Important  but Non-urgent Tasks",
  },
  { value: "priority 3", label: "Priority 3: Low priority tasks" },
];

export const LABELS = [
  { value: "personal", label: "Personal" },
  { value: "work", label: "Work" },
  { value: "shopping", label: "Shopping" },
  { value: "health", label: "Health" },
  { value: "finance", label: "Finance" },
  { value: "education", label: "Education" },
  { value: "hobbies", label: "Hobbies" },
  { value: "travel", label: "Travel" },
];

export const PomodoroModeButtons = [
  {
    id: 1,
    name: "Focus",
    modName: "Focus",
  },
  {
    id: 2,
    name: "Short Break",
    modName: "Short",
  },
  {
    id: 3,
    name: "Long Break",
    modName: "Long",
  },
];

export const PomodoroPageContent = {
  imgUrl: "/roboto.png",
  heading: "Start Focusing With Pomodoro",
  subHeading:
    "Start the timer to start using Pomodoro Timer and remember to take breaks.",
  orderImg: 2,
  orderText: 1,
};

export const mood = {
  0.5: "Frustrated",
  1: "Anxious",
  1.5: "Sad",
  2: "Content",
  2.5: "Hopeful",
  3: "Joyful",
  3.5: "Ecstatic",
  4: "Inspired",
  4.5: "Thriving",
  5: "Blissful",
};

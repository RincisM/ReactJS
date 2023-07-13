const week = [
  {
    day: "Monday",
    time: "05:00pm - 09:00pm",
  },
  {
    day: "Wednesday",
    time: "01:00pm - 02:00pm",
  },
  {
    day: "Thursday",
    time: "03:00pm - 06:00pm",
  },
  {
    day: "Friday",
    time: "09:30pm - 10:30pm",
  },
];

const weekFunction = () => {
  return week.map((a) => {
    return `${a.day} ${a.time}`;
  });
};

const team = [
  {
    members: ["John", "Mani", "Virat"],
  },
  {
    members: ["Kevin", "Alexa", "Carey"],
  },
  {
    members: ["Jacob", "Abhishek", "Menon"],
  },
  {
    members: ["Jason", "Roy", "Steve"],
  },
  {
    members: ["Smith", "Dwayne", "Maria"],
  },
  {
    members: ["Healey", "Swiatek", "Carolina"],
  },
  {
    members: ["Marin", "Feergusen", "Johnty"],
  },
  {
    members: ["Rhodes", "Jerin", "Albert"],
  },
  {
    members: ["Einstein", "Bruce", "Lee"],
  },
];

const teamFunction = () => {
  return team.map((b) => {
    return `${b.members}`;
  });
};

export { weekFunction, teamFunction };

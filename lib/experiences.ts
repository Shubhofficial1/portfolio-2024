import moment from "moment";

export const experiences = [
  {
    company: "TCS",
    joinedOn: moment("2018-01-01"),
    currentlyWorking: true,
    workLocation: "New Delhi, India",
    projects: [
      {
        projectName: "Johnson & Johnson ( J&J ) Project",
        startedOn: moment("2018-02-01"),
        completedOn: null,
        location: "New Delhi",
        role: "Software Analyst",
      },
      {
        projectName: "Ingram Micro",
        startedOn: moment("2023-01-16"),
        completedOn: moment("2019-09-01"),
        location: "New Delhi ",
        role: "Software Analyst",
      },
    ],
  },
  {
    company: "Capgemini",
    joinedOn: moment("2020-10-21"),
    leftOn: moment("2022-12-02"),
    currentlyWorking: false,
    workLocation: "Mumbai , India",
    projects: [
      {
        projectName: "Tyco Electronics (TE) ",
        startedOn: moment("2020-10-21"),
        completedOn: moment("2022-12-02"),
        location: "Mumbai , India",
        role: "Senior Software Engineer",
      },
    ],
  },
];

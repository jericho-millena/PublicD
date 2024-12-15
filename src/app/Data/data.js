const basePath = "/PublicD"; // Replace <repository-name> with your GitHub repository name

export const navbarItems = [
  { id: 1, label: "Home", link: `${basePath}/` },
  { id: 2, label: "Profile", link: `${basePath}/pages/profile` },
  { id: 3, label: "Projects", link: `${basePath}/pages/projects` },
  { id: 4, label: "Papers", link: `${basePath}/pages/papers` },
  { id: 6, label: "Centers", link: `${basePath}/pages/centers` },
];

export const user = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueJ3H_hybo6F2Budlg4UsSENERnpWarVKIDQvnsffvA&s",
    researchUnit: "Pablo Borbon", // Research unit
    topics: ["Patient Care", "Healthcare Technology"], // Multiple common research topics
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueJ3H_hybo6F2Budlg4UsSENERnpWarVKIDQvnsffvA&s",
    researchUnit: "STEER Hub", // Research unit
    topics: ["Machine Learning", "Data Science"], // Multiple common research topics
  },
  {
    id: 3,
    name: "Alice Johnson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueJ3H_hybo6F2Budlg4UsSENERnpWarVKIDQvnsffvA&s",
    researchUnit: "KIST Park", // Research unit
    topics: ["Renewable Energy", "Sustainable Development"], // Multiple common research topics
  },
  {
    id: 4,
    name: "Bob Brown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueJ3H_hybo6F2Budlg4UsSENERnpWarVKIDQvnsffvA&s",
    researchUnit: "VIP Corals", // Research unit
    topics: ["Marine Biology", "Oceanography"], // Multiple common research topics
  },
];

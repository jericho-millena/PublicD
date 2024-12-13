const basePath = "/PublicD"; // Replace <repository-name> with your GitHub repository name

export const navbarItems = [
  { id: 1, label: "Home", link: `${basePath}/` },
  { id: 2, label: "Profile", link: `${basePath}/pages/profile` },
  { id: 3, label: "Projects", link: `${basePath}/pages/projects` },
  { id: 4, label: "Papers", link: `${basePath}/pages/papers` },
  { id: 6, label: "Centers", link: `${basePath}/pages/centers` },
];

const user = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueJ3H_hybo6F2Budlg4UsSENERnpWarVKIDQvnsffvA&s",
    researchUnit: "KIST Park", // Ensure this field is correct
    topic: "Patient",
  },
];

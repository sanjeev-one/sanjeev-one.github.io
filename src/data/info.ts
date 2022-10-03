export const info = {
  baseUrl: "https://sanjeev.one/",
  name: "Sanjeev Chauhan",
  jobDescription: "Aeroelasticity researcher",
  about: `a Student at Duke University and a researcher at the Duke Aeroelasticity Group.
  `,

  experience: [
    {
      name: "Duke Aeroelasticity Group",
      location: "Duke University",
      startDate: "May 2022",
      endDate: "Present",
      description: [
        "Performing Computational Fluid Dynamics simulations aimed at exploring buffet in transonic flow. Buffet is often explored with the Navier-Stokes equations,",
        " but those are computationally intensive. On the other hand, the Euler Equations, which are less computationally intensive, do not account for viscous effects,",
        " but may still offer reasonable predictions of buffet onset at a lower computational cost, while giving insight into viscosity’s impact on the phenomenon.",
      ],
    },

    {
      name: "Resbench: HPC Deep Learning Benchmark",
      location: "University of South Carolina",
      startDate: "May 2021",
      endDate: "Dec 2021",
      description: [
        "Researched Deep Learning frameworks for image recognition. Used NVIDIA's DL examples, and benchmarked 3 frameworks on 3 datasets using ResNet50V1.5",
      ],
    },

    {
      name: "Freelance Photographer",
      location: "Duke University",
      startDate: "Aug 2022",
      endDate: "Present",
      description: [
        "An Immersive Internship Program that prepares me for the world's most in-demand career. A six weeks program completely based on learning and challenges.",
        "The internship track is built by an industry expert that let develop the skills in the areas most important ",
      ],
    },
  ],

  education: [
    {
      name: "Duke University",
      location: "Durham, NC",
      startDate: "2022",
      endDate: "2026",
      description: [
        "ECE or MechE Major. Researching transonic buffet flow for the Duke Aeroelasticity Lab.",
      ],
    },
    {
      name: "South Carolina Governor's School for Science and Math",
      location: "Hartsville, SC",
      startDate: "2020",
      endDate: "2022",
      description: ["Recieved 2022 Robotics Award. Built a Vehicle-Agnostic Control Systems for Autonomous Vehicle Fleets. https://autogolfcart.github.io/ "],
    },
    
  ],

  socialMedia: {
    
    github: "https://github.com/dh2di3oj2",
    email: "sanjeev.chauhan@duke.edu",
    linkedin: "https://www.linkedin.com/in/sanjeev-chauhan-a5b570240/",
  },

  projects: [
    {
      title: "Astro Portfolio",
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "https://github.com/uzzii-21/astro-portfolio",
      liveUrl: "https://astro-portfolio-uzair.vercel.app/",
    },
  ],
};

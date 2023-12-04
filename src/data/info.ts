export const info = {
  baseUrl: "https://sanjeev.one/",
  name: "Sanjeev Chauhan",
  jobDescription: "Machine Learning Researcher, Founder and CTO, Computational Fluid Dynamics Researcher",
  about: `Currently pursuing a B.S. in Electrical and Computer Engineering and Computer Science at Duke University, I have a strong passion for computational research, entrepreneurship, and robotics. With my academic pursuits complemented by hands-on research and leadership experiences, I aim to drive innovation at the intersection of technology and real-world challenges.`,

  experience: [
    {
      name: "Stanford Linear Accelerator Center National Lab",
      location: "Stanford, CA",
      startDate: "Jun 2023",
      endDate: "Aug 2023",
      description: [
        "Re-engineered FACET-II's computer simulation infrastructure, implementing algorithmic control to improve efficiency.",
        "Developed a fast machine learning model for the FACET-II photo injector, achieving a speed up of 26,000X vs traditional simulations.",
        "Recognized for exceptional performance and innovation, earning a return offer to continue spearheading machine learning research.",
        "Leveraged a technology stack consisting of XOPT, MATLAB, and OpenPMD. Employed Bayesian optimization and Controlled Non-dominated Sorting Genetic Algorithm for advanced simulation optimizations."
      ],
    },
    {
      name: "DeAP Learning Labs",
      location: "Durham, NC",
      startDate: "April 2023",
      endDate: "Current",
      description: [
        "Founded and technically directed an AI-driven educational startup aimed at transforming traditional education through interactive AI.",
        "Developed custom, scalable RAG-based generative AI API on AWS, enabling chatbots to be trained on history, gov, and econ textbooks.",
        "Introduced 'talking textbooks': AI-driven chatbots that engage with students using the course material, turning textbooks into responsive tutors.",
        "Integrated AI tools to grade AP test questions, assist students in answering worksheet questions, and enable chatbots to learn from teacher-provided content.",
        "Collaborated with notable education Youtubers like Heimler's History, integrating AI versions of their personalities into their online courses.",
        "Committed to turning education into an immersive, enjoyable experience where subjects come to life, fostering deeper engagement and understanding among students.",
        "Watch our vision and approach in this [video](https://www.youtube.com/watch?v=qk0ucMmoJa4)."
      ],
    },
    
    {
      name: "Duke Aeroelasticity Lab",
      location: "Durham, NC",
      startDate: "May 2022",
      endDate: "Current",
      description: [
        "Conducted grad-level CFD research on transonic airflow over a wing.",
        "Investigated use of Euler equations as an alternative to Navier-Stokes equations."
      ],
    },
    // ... Add other experiences here
  ],

  education: [
    {
      name: "Duke University",
      location: "Durham, NC",
      startDate: "2022",
      endDate: "May 2025",
      description: [
        "B.S. in Electrical and Computer Engineering and Computer Science.",
        "Innovation & Entrepreneurship certificate.",
        "GPA: 3.78/4.00.",
        "Relevant Coursework: Machine Learning, Linear Algebra, Modern Physics, Multi, ODE, Data Structures, Data Engineering."
      ],
    },
    {
      name: "South Carolina Governor's School for Science and Math",
      location: "Hartsville, SC",
      startDate: "2020",
      endDate: "May 2022",
      description: [
        "Honors: SCGSSM Robotics Award, FRC Design Award S.E. region and more.",
        "Built a Vehicle-Agnostic Control Systems for Autonomous Vehicle Fleets."
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/sanjeev-one",
    email: "mailto:sanjeev.chauhan@duke.edu",
    linkedin: "https://www.linkedin.com/in/sanjeev-chauhan-a5b570240/",
    resume: "/assets/docs/resume.pdf"
  },

  projects: [
    {
      title: "Vehicle-Agnostic Control Systems for Autonomous Vehicle Fleets",
      isFeatured: true,
      thumbnail: "/assets/images/cart.jpeg",
      githubUrl: "https://github.com/AutoGolfCart",
      liveUrl: "https://golfcart.sanjeev.one/",
    },
    // ... Add other projects here
  ],
};

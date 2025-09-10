export const info = {
  baseUrl: "https://sanjeev.one/",
  name: "Sanjeev Chauhan",
  jobDescription:
    "AI/ML Researcher • Semiconductor Devices (Neuromorphic, 2D materials) • VC Associate",
  about: `AI/ML researcher with venture capital experience, expanding into semiconductor devices and neuromorphic hardware. Inspired by John Bardeen’s view that “the most important work is done on the borderlines,” I aim to bridge AI, devices, and scalable systems—from HPC/ML ops to memristive synapses and 2D-material devices.`,

  experience: [
    {
      name: "Semiconductor Devices Research – Roy Lab @ Duke | AI Hardware",
      location: "Durham, NC",
      position: "Researcher",
      startDate: "May 2025",
      endDate: "Current",
      description: [
        "Working on 2D materials, neuromorphic computing (memristors), artificial synapses, and AOS.",
        "Fabricating ITO-based GAAFETs at SMIF for VLSI ’26; two IEDM publications in pipeline."
      ],
    },
    {
      name: "Duke Capital Partners (Seed-Stage VC)",
      location: "Durham, NC",
      position: "Associate",
      startDate: "Oct 2023",
      endDate: "Current",
      description: [
        "Youngest Associate hired; contributed to four closings totaling $30.8M.",
        "Built AI-powered data sourcing pipeline to accelerate diligence."
      ],
    },
    {
      name: "SLAC National Accelerator Laboratory (FACET-II)",
      location: "Stanford, CA",
      position: "Machine Learning Researcher / DevOps Engineer",
      startDate: "Jun 2023",
      endDate: "Jan 2025",
      description: [
        "Published at IPAC 2024: ML digital twin ~2600× faster than traditional simulation.",
        "Containerized complex physics software with Docker/Apptainer for on-prem HPC; cut setup time from days to minutes and reduced setup errors by ~98%."
      ],
    },
    {
      name: "DeAP Learning Labs (deaplearning.com)",
      location: "Durham, NC",
      position: "Founder & former CTO",
      startDate: "2023",
      endDate: "May 2024",
      description: [
        "Scaled free AP history prep to 258,000+ students; answered ~3M questions.",
        "Built RAG-based LLM API on AWS (Docker, FastAPI, Weaviate); ~98.82% uptime."
      ],
    },
    {
      name: "Duke Aeroelasticity Lab",
      location: "Durham, NC",
      position: "Computational Fluid Dynamics Researcher",
      startDate: "2022",
      endDate: "May 2024",
      description: [
        "Transonic buffet studies; achieved ~30% compute reduction using Euler vs. Navier–Stokes."
      ],
    },
    {
      name: "Self-Driving Golf Cart Initiative (High School)",
      location: "Columbia, SC",
      position: "Design/Mechanical Lead; Program Founder",
      startDate: "2022",
      endDate: "2022",
      description: [
        "Engineered modular autonomy retrofit; secured ~$35k in grants (Google, SC DoE)."
      ],
    },
    {
      name: "University of South Carolina Research Computing Lab (High School)",
      location: "Columbia, SC",
      position: "Deep Learning Researcher",
      startDate: "2021",
      endDate: "2021",
      description: [
        "Benchmarked ResNet-50 across PyTorch, TensorFlow, MXNet; SCJAS paper & oral presentation awards."
      ],
    },
  ],

  leadership: [
    {
      name: "Duke IEEE / HKN Chapter",
      location: "Durham, NC",
      startDate: "Dec 2023",
      endDate: "Current",
      description: [
        "President & Founder; raised $31k; 360+ members.",
        "Hosted/lectured NSF-funded supercomputing + AI practices workshop for emerging researchers."
      ],
    },
    {
      name: "Duke Robotics Mentorship",
      location: "Durham, NC",
      startDate: "Jan 2023",
      endDate: "May 2024",
      description: [
        "President; delivered free hands-on courses to four middle schools, impacting 80+ students."
      ],
    },
    {
      name: "FIRST Robotics",
      location: "SC/NC",
      startDate: "Jan 2020",
      endDate: "2023",
      description: [
        "FTC Team Captain (327); FRC (2815) Lead Driver & Fabrication Specialist; later mentor."
      ],
    },
  ],

  education: [
    {
      name: "Duke University — Erdman Engineering Scholarship",
      location: "Durham, NC",
      startDate: "2022",
      endDate: "May 2026",
      description: [
        "B.S. ECE & CS (’25); M.Eng./M.S. ECE: Semiconductor Technology (’26).",
        "Coursework: Microelectronic Devices, Computer Architecture, Digital Systems, OS, Networks, Cloud DevOps.",
        "Honors: IEEE HKN President, ACCESS CCEP Grant, Pratt Research Grant."
      ],
    },
    {
      name: "South Carolina Governor's School for Science & Math",
      location: "Hartsville, SC",
      startDate: "2020",
      endDate: "May 2022",
      description: [
        "Honors: SCGSSM Robotics Award, National Merit Finalist, National AP Scholar."
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/sanjeev-one",
    email: "mailto:sanjeev.chauhan@duke.edu",
    linkedin: "https://www.linkedin.com/in/sanjeev-one/",
    resume: "/assets/docs/resume.pdf"
  },

  projects: [
    {
      title: "DeAP Learning Labs",
      isFeatured: true,
      thumbnail: "/assets/images/dl.png",
      githubUrl: "https://github.com/Deap-Learning-Labs",
      liveUrl: "https://deaplearning.com",
      description:
        "Free AP history prep for 258k+ students; ~3M Q&A. RAG LLM API on AWS (FastAPI, Weaviate, Docker)."
    },
    {
      title: "Audio2Blog",
      isFeatured: true,
      thumbnail: "/assets/images/audio2blog.png",
      githubUrl: "",
      liveUrl: "",
      description:
        "Serverless Rust-on-AWS micro-architecture that turns recorded conversations into AI-authored blog posts."
    },
    {
      title: "Incognito (Stanford TreeHacks)",
      isFeatured: false,
      thumbnail: "/assets/images/incognito.png",
      githubUrl: "",
      liveUrl: "",
      description:
        "Face-to-PII pipeline prototype highlighting privacy risks and the need for robust safeguards."
    },
    {
      title: "Sanjeev.one — Blog",
      isFeatured: false,
      thumbnail: "/assets/images/project.png",
      githubUrl: "https://github.com/sanjeev-one/blog",
      liveUrl: "https://blog.sanjeev.one",
      description: "Writing on AI/ML, semiconductors, HPC DevOps, and research workflows."
    },
    {
      title: "Vehicle-Agnostic Control Systems for AV Fleets",
      isFeatured: false,
      thumbnail: "/assets/images/cart.jpeg",
      githubUrl: "https://github.com/AutoGolfCart",
      liveUrl: "https://github.com/AutoGolfCart",
      description:
        "Modular autonomy stack aimed at retrofitting legacy carts for on-demand campus transport."
    }
  ],
};

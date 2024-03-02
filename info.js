let info = {
  name: "Vanessa Nguyen",
  logo_name: "Vanessa",
  flat_picture: require("./public/portrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm currently pursuing a Master's degree in Information and Communications Technology at Lund University, where my focus lies in Software Development, UX Design, and VR Development. I am actively seeking captivating opportunities within these realms.<br><br>Beyond academia, I have led and contributed to various projects that showcase my technical prowess and creativity. Whether it's developing mobile games, designing UX prototypes, or deploying cloud solutions using AWS, I am passionate about leveraging technology to make a positive impact.<br><br>The fusion of my academic pursuits and past experiences has honed my abilities, equipping me to tackle challenges with creativity and efficiency. I am enthusiastic about the prospect of further refining and applying my skills in new and exciting opportunities.",
  links: {
    linkedin: "https://linkedin.com/in/vanessa-nguyen-485186267",
    github: "https://github.com/vanessavy",
    resume:"./public/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "Lund University",
      place: "Sweden",
      date: "Aug, 2019 - current",
      degree: "M.Sc in Informations and Communications Technology",
      description:
        "Currently pursuing my Master's in Informations and Communications Technology, while specializing in the field of Interaction Design and Usability.",
      skills: [
        "Software Engineering",
        "Web Development",
        "UX/UI Design",
        "Interaction Design",
        "VR Development",
        "Mobile development"
      ]
    },
    {
      name: "Polytechnique Montréal",
      place: "Canada",
      date: "Aug, 2023 - January, 2025",
      degree: "Software",
      description:
        "An exchange term studying courses related to Software Development.",
      skills: [
        "Cloud Computing",
        "Amazon Web Services",
        "Software Quality Engineering",
        "Software architectures and advanced patterns",
        "HCI"
      ]
    }
  ],
  experience: [
    {
      name: "Axis Communications",
      place: "Lund, Sweden",
      date: "Jun, 2023 - Aug, 2023",
      position: "Summer worker",
      description:
        "Worked as a Software Intern for the SiteDesigner team at Axis, designed and developed a feature that enables RTL languages for a web application.",
      skills: ["React", "Node.js", "Typescript", "Git", "Frontend development"]
    },
    /* {
      name: "Amazon Web Services",
      place: "Polytechnique Montréal, Canada",
      date: "Aug, 2023 - Jan, 2024",
      position: "Software developer",
      description:
        "Deployed multiple instances of Flask applications and a cluster of MySQL using AWS. Used AWS to create virtual machines for different purposes. ",
      skills: ["AWS", "Flask", "Ubuntu", "Linux", "Cloud computing"]
    }, */
  ],
  SoftwareDevelopment: [
  {
    name: "Äggstafett",
    place: "Lund University, Sweden",
    date: "Jan, 2022 - Jun, 2022",
    description:
      "Developed an Android mobile game using Android Studio. The game involves players balancing an egg on a spoon and competing with others.",
    skills: ["Java", "Android Studios", "Mobile development"]
  },
  {
    name: "Plants & stuff",
    place: "Lund University, Sweden",
    date: "Aug, 2021 - Nov, 2021",
    description:
      "Developed an e-commerce website using PHP and MySQL. The website enables users to browse and purchase plants and garden tools.",
    skills: ["Web development","PHP", "MySQL", "Backend development"]
  }],
  VRDevelopment: [{
    name: "A musical VR Experience",
    place: "Lund University, Sweden",
    date: "Jan, 2023 - Jun, 2023",
    description:
      "Developed a VR application for musical experiences in collaboration with Capgemini using Unity and Blender. The application enables users to manipulate sounds, play instruments and experience music in a virtual environment with the use of hand tracking.",
    skills: ["Unity", "Blender", "C#", "VR"]
  },
  {
    name: "To Be a Robot",
    place: "Lund University, Sweden",
    date: "Aug, 2022 - Jan, 2023",
    description:
      "Developed a multiplayer game in Virtual Reality for cognitive research using Unity and Photon Pun. The game involves two players building a tower with restricted visual perception.",
    skills: ["Unity", "Blender", "C#", "VR"]
  }
],
  skills: [
    {
      title: "programming languages",
      info: [
        "Python",
        "Javascript",
        "TypeScript",
        "Java",
        "C",
        "C#",
        "SQL",
        "php"
      ],
      icon: "fa fa-code"
    },
    {
      title: "languages",
      info: [
        "English",
        "Swedish",
        "Vietnamese"
      ],
      icon: "fas fa-globe"
    },
    {
      title: "web technologies",
      info: ["Vue", "React", "Node", "Flask", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MySQL"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Android",
        "Unity",
        "AWS EC2",
        "Agile",
        "Scrum",
        "JIRA"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Figma", "Blender"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "A musical VR Experience",
      pictures: [
        {
          img: "/public/assets/portfolio/VR/poster.png"
        },
        {
          img: "/public/assets/portfolio/VR/wideshot.png"
        },
        {
          img: "/public/assets/portfolio/VR/testing.png"
        }
      ],
      technologies: ["Unity", "Blender", "C#", "VR"],
      category: "VR development",
      date: "Jan, 2023 - Jun, 2023",
      description:
        "Collaborated with Capgemini to develop a music VR application using Unity and Blender. The VR application provides users with an immersive musical experience with various interactive features. Through hand gestures and interactions, users can manipulate, direct, and immerse themselves in the music. The VR system utilized for this project was the Meta Quest 2."
    },
    {
      name: "To Be a Robot",
      pictures: [
        {
          img: "/public/assets/portfolio/TBAR/To Be a Robot.png"
        }
      ],
      technologies: ["Unity", "Blender", "C#", "VR"],
      category: "VR development",
      date: "Aug, 2022 - Jan, 2023",
      description: "To Be a Robot is a collaborative research project undertaken with two cognitive science master students from Lund University, focusing on understanding how restrained visual perception affects human cognitive abilities. As the technical lead, my role encompassed designing and developing a multiplayer VR game using Unity. In this immersive experience, players adopt the visual perspective of a robot (Epi) and collaborate to construct a tower. The game was engineered for dual-player engagement, facilitated by Photon Pun, and optimized for Valve Index VR systems."},
    {
      name: "Äggstafett",
      pictures: [
        {
          img: "/public/assets/portfolio/äggstafett/one.png"
        },
        {
          img: "/public/assets/portfolio/äggstafett/two.png"
        }
      ],
      technologies: ["Java", "Android Studios", "Mobile development"],
      category: "Mobile app development",
      date: "Jan, 2022 - June, 2022",
      description:"In the realm of app development, our team achieved success in creating Äggstafett, an Android mobile game, utilizing Android Studio with pair programming. The game is inspired by the Swedish tradition of Äggstafett, challenging players to balance an egg on a spoon while racing against each other. Throughout the project, I undertook the dual roles of designing and developing the game. The implementation was done by pair programming in Java and using Figma for design purposes."
    },
    {
      name: "Plants & stuff",
      pictures: [
        {
          img: "/public/assets/portfolio/PnS/PnS.png"
        },
        {
          img: "/public/assets/portfolio/PnS/PnS2.png"
        },
        {
          img: "/public/assets/portfolio/PnS/PnS3.png"
        },
        {
          img: "/public/assets/portfolio/PnS/PnS4.png"
        },
        {
          img: "/public/assets/portfolio/PnS/PnS5.png"
        }
      ],
      technologies: ["php", "MySQL", "Java", "HTML", "CSS", "backend"],
      category: "Back end development",
      date: "Aug, 2021 - Nov, 2021",
      description: "Co-developed an e-commerce website using PHP and MySQL for backend. The website enables users to create accounts, log in, browse, and purchase plants and garden tools."
    }
  ],
  portfolio_design: [
    {
      name: "EcoFinder",
      title: "EcoFinder - Mockup Design",
      pictures: [
        {
          img: "/public/assets/designs/ecofinder/ecofinder.png",
        },
        {
          img: "/public/assets/designs/ecofinder/affinitydiagram.png",
          title: "The affinity diagram made from all data collected from the user research."
        },
        {
          img: "/public/assets/designs/ecofinder/storyboard.png",
          title: "One of the storyboards created during brainstorming."
        },
        {
          img: "/public/assets/designs/ecofinder/lofi1.png",
          title: "The lo-fi prototype."
        },
        {
          img: "/public/assets/designs/ecofinder/lofi2.png",
          title: "The lo-fi prototype."
        },
        {
          img: "/public/assets/designs/ecofinder/1.png",
          title: "The hi-fi prototype created in Figma."
        },
        {
          img: "/public/assets/designs/ecofinder/2.png",
          title: "Hi-fi prototype of Info Page."
        },
        {
          img: "/public/assets/designs/ecofinder/3.png",
          title: "Hi-fi prototype of Voucher Page."
        }
      ],
      technologies: ["Figma"],
      category: "UI Design",
      date: "Aug, 2021 - Jan, 2022",
      description:
        "EcoFinder is a mockup mobile application designed duing a project in a course in interaction design. The mobile application's purpose is to inform consumers about environmentally friendly food alternatives. Leveraging user research methodologies such as interviews and questionnaires, the user data was organised and analyzed using an affinity diagram. The brainstorming process included various techniques such as creating storyboards. We initially crafted a low-fidelity (lo-fi) prototype with simple sketches to test the usability of the proposed product. Subsequently, this prototype evolved into a high-fidelity (hi-fi) version using Figma. The design journey unfolded iteratively across three sprints, with thorough usability testing conducted after each phase."
    },
    {
      name: "Privacy Notice Management",
      title: "PNM - Mockup Design",
      pictures: [
        {
          img: "/public/assets/designs/Pinteg/one.png",
          title: "Hi-fi prototype of Start page."
        },
        {
          img: "/public/assets/designs/Pinteg/two.png",
          title: "Hi-fi prototype of Edit page."
        },
        {
          img: "/public/assets/designs/Pinteg/three.png",
          title: "Hi-fi prototype of Confirmation page."
        }
      ],
      technologies: ["Figma"],
      category: "UI Design",
      github: "",
      date: "Jan, 2023 - April, 2023",
      visit: "",
      description: "Privacy Notice Management is a conceptual web application collaboratively developed with Pinteg as part of a school project. This application streamlines the process of managing privacy notices for Pinteg's clientele. The design concept emerged from comprehensive user and market research, coupled with close collaboration and communication with Pinteg throughout the development process."    }
  ],
  /*recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]*/
};

export default info;

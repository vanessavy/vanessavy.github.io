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
    resume:
      "https://github.com/vanessavy/vanessavy.github.io/blob/main/public/assets/pdfs/Resume.pdf"
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
      skills: ["React", "Node.js", "Typescript", "Git", "UX design", "Figma"]
    },
    {
      name: "Amazon Web Services",
      place: "Polytechnique Montréal, Canada",
      date: "Aug, 2023 - Jan, 2024",
      position: "Software developer",
      description:
        "Deployed multiple instances of Flask applications and a cluster of MySQL using AWS. Used AWS to create virtual machines for different purposes. ",
      skills: ["AWS", "Flask", "Ubuntu", "Linux", "Cloud computing"]
    },
    {
      name: "A musical VR Experience",
      place: "Lund University, Sweden",
      date: "Jan, 2023 - Jun, 2023",
      position: "VR developer",
      description:
        "Developed a VR application for musical experiences in collaboration with Capgemini using Unity and Blender. The application enables users to manipulate sounds, play instruments and experience music in a virtual environment with the use of hand tracking.",
      skills: ["Unity", "Blender", "C#", "VR"]
    },
    {
      name: "Äggstafett",
      place: "Lund University, Sweden",
      date: "Jan, 2022 - Jun, 2022",
      position: "Android developer",
      description:
        "Developed an Android mobile game using Android Studio. The game involves players balancing an egg on a spoon and competing with others.",
      skills: ["Java", "Android Studios", "Mobile development"]
    },
    {
      name: "EcoFinder",
      place: "Lund University, Sweden",
      date: "Aug, 2021 - Jan, 2021",
      position: "UX/UI designer",
      description:
        "Designed a conceptualize prototype for a mobile application using Figma.",
      skills: ["UX/UI design", "Figma", "Prototyping"]
    },
    {
      name: "Plants & stuff",
      place: "Lund University, Sweden",
      date: "Aug, 2021 - Nov, 2021",
      position: "Web developer",
      description:
        "Developed an e-commerce website using React. The website enables users to browse and purchase plants and garden tools.",
      skills: ["React", "Web development", "php", "Javascript", "Typescript"]
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
        "SQL"
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
      name: "Axis Communications",
      pictures: [
        {
          img: '/public/assets/portfolio/Axis/Axis.png'
        },
        {
          img: "/public/assets/portfolio/Axis/Sitedesigner.png"
        }
      ],
      technologies: ["React", "Node.js", "Typescript", "Git", "UX design", "Figma"],
      category: "Front end development",
      date: "June, 2023 - Aug, 2023",
      description:
        "Responsible for designing and developing a feature that enables RTL languages for the SiteDesigner website. The UI components was designed using Figma and the feature was developed in React. Was also involved in introducing FluentUI to the website."
    },
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
        "Developed a music VR application Unity and Blender in collaboration with Capgemini. The VR application provides users with an immersive musical experience with various interactive features. Users can manipulate, direct and experience music with hand gestures and interactions. The VR system used for this project was Meta Quest 2."
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
      description:
        "To Be a Robot is a research project, conducted along with two cognitive science master students from Lund University, investigating how restraint perceptual visual affect human's cognitive abilities. As a technical expert in this project, I was responsible for designing and developing the multiplayer VR game using Unity. In this game, players have the same restraint perception as a robot's (Epi) and are tasked to build a tower together. The game was developed to be played by two players simultaneously using Photon Pun. The VR systems used were Valve Index."
    },
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
      description:
        "In the app development domain, my team and I successfully developed an Android mobile game, Äggstafett, using Android Studio. The game aims to enable players to play the swedish game Äggstafett, where players have to balance an egg on a spoon and race each other. In this project, I was responsible for both designing and developing the game using tools such as Figma for designing and prototyping."
    }
  ],
  portfolio_design: [
    {
      name: "EcoFinder",
      title: "EcoFinder - Mockup Design",
      pictures: [
        {
          img: "/public/assets/designs/ecofinder/1.png",
          title: "Home Page"
        },
        {
          img: "/public/assets/designs/ecofinder/2.png",
          title: "Info Page"
        },
        {
          img: "/public/assets/designs/ecofinder/3.png",
          title: "Voucher Page"
        }
      ],
      technologies: ["Figma"],
      category: "UI Design",
      date: "Aug, 2021 - Jan, 2022",
      description:
        "EcoFinder is a mockup mobile application created by my team and I in a course in interaction design. The mobile application's purpose is to inform consumers about environmentally friendly food alternatives. Through user research (interviews and questionaires), a low fidelity (lo-fi) prototype was created which later developed to a high-fi prototype and later to the end product."
    },
    {
      name: "Privacy Notice Management",
      title: "PNM - Mockup Design",
      pictures: [
        {
          img: "/public/assets/designs/Pinteg/one.png",
          title: "Start page"
        },
        {
          img: "/public/assets/designs/Pinteg/two.png",
          title: "Edit page"
        },
        {
          img: "/public/assets/designs/Pinteg/three.png",
          title: "Confirmation page"
        }
      ],
      technologies: ["Figma"],
      category: "UI Design",
      github: "",
      date: "Jan, 2023 - April, 2023",
      visit: "",
      description:
        "Privacy Notice Management is a mockup webapplication created by my team and I in collaboration with Pinteg. The application's purpose is to facilitate for Pinteg's clients to manage their privacy notices."
    }
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

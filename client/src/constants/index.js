import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiAngular,
    SiDotnet,
    SiTypescript,
    SiTailwindcss,
    SiRedux,
    SiGraphql,
    SiPostman,
    SiDocker,
    SiGit,
    SiGithubactions,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiFirebase,
    SiMysql,
    SiPostgresql,
  } from "react-icons/si";

import { DiReact, DiNodejs, DiJavascript } from "react-icons/di";
import { resolveAssetPath } from "../utils/resolveAssetPath";
  
  const logoIconsList = [
    { icon: SiReact, label: "React" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiExpress, label: "Express" },
    { icon: SiMongodb, label: "MongoDB" },
    { icon: SiAngular, label: "Angular" },
    { icon: SiDotnet, label: ".NET" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiTailwindcss, label: "Tailwind CSS" },
    { icon: SiRedux, label: "Redux" },
    { icon: SiGraphql, label: "GraphQL" },
    { icon: SiPostman, label: "Postman" },
    { icon: SiDocker, label: "Docker" },
    { icon: SiGit, label: "Git" },
    { icon: SiGithubactions, label: "GitHub Actions" },
    { icon: SiHtml5, label: "HTML5" },
    { icon: SiCss3, label: "CSS3" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiFirebase, label: "Firebase" },
    { icon: SiMysql, label: "MySQL" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: DiReact, label: "React (Di)" },
    { icon: DiNodejs, label: "Node.js (Di)" },
    { icon: DiJavascript, label: "JavaScript (Di)" },
  ];
  


const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Resume",
      link: "#resume",
    },
    {
      name: "About Me",
      link: "#about",
    }
  ];

const words = [
    { text: "Ideas", imgPath: resolveAssetPath("/images/ideas.svg") },
    { text: "Concepts", imgPath: resolveAssetPath("/images/concepts.svg") },
    { text: "Designs", imgPath: resolveAssetPath("/images/designs.svg") },
    { text: "Code", imgPath: resolveAssetPath("/images/code.svg") },
    { text: "Ideas", imgPath: resolveAssetPath("/images/ideas.svg") },
    { text: "Concepts", imgPath: resolveAssetPath("/images/concepts.svg") },
    { text: "Designs", imgPath: resolveAssetPath("/images/designs.svg") },
    { text: "Code", imgPath: resolveAssetPath("/images/code.svg") },
  ];

  const counterItems = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];

 
  const abilities = [
    {
      imgPath: resolveAssetPath("/images/seo.png"),
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: resolveAssetPath("/images/chat.png"),
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: resolveAssetPath("/images/time.png"),
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const expCards = [
    {
      review:
        "Akanksha has consistently delivered high-quality full-stack solutions at Deloitte. Her attention to scalable architecture, secure coding, and collaborative mindset has had a meaningful impact on our client applications.",
      imgPath: resolveAssetPath("/images/logos/Deloitte.png"),
      logoPath: resolveAssetPath("/images/logos/Deloitte.png"),
      title: "Full Stack Developer",
      date: "July 2023 – Present",
      responsibilities: [
        "Built and maintained scalable full-stack solutions using Angular, .NET, and SQL for enterprise clients.",
        "Collaborated with cross-functional teams to design secure, high-performance APIs.",
        "Followed DevOps best practices using Azure pipelines and CI/CD integrations.",
      ],
    },
    {
      review:
        "Akanksha's internship in cybersecurity auditing demonstrated her ability to apply security-first principles in real-world systems. Her audit reports and best practice recommendations were top-notch.",
      imgPath: resolveAssetPath("/images/logos/CRIS.png"),
      logoPath: resolveAssetPath("/images/logos/CRIS2.png"),
      title: "Cybersecurity Auditing Intern",
      date: "May 2022 – December 2022",
      responsibilities: [
        "Assisted in conducting security audits of cloud-based systems following NIST standards.",
        "Documented vulnerabilities and recommended remediations for secure architecture.",
        "Gained hands-on exposure to threat modeling and secure software development lifecycle (SSDLC).",
      ],
    },
    {
      review:
        "Akanksha showcased solid Python and Django skills during her full-stack internship. Her ability to build RESTful APIs and clean admin dashboards was impressive.",
        imgPath: resolveAssetPath("/images/logos/CRIS.png"),
        logoPath: resolveAssetPath("/images/logos/CRIS2.png"),
      title: "Python Full Stack Developer Intern",
      date: "May 2022 – December 2022",
      responsibilities: [
        "Developed Django-based REST APIs and integrated them with dynamic frontend templates using Bootstrap.",
        "Built custom admin panels, form validation systems, and user authentication modules.",
        "Worked with PostgreSQL and deployed projects on Heroku with Git-based workflows.",
      ],
    },
  ];
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: resolveAssetPath("/models/react_logo-transformed.glb"),
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: resolveAssetPath("/models/python-transformed.glb"),
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: resolveAssetPath("/models/node-transformed.glb"),
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: resolveAssetPath("/models/three.js-transformed.glb"),
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Git + CI Practices",
      modelPath: resolveAssetPath("/models/git-svg-transformed.glb"),
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: resolveAssetPath("/images/logos/react.png"),
    },
    {
      name: "Python Developer",
      imgPath: resolveAssetPath("/images/logos/python.svg"),
    },
    {
      name: "Backend Developer",
      imgPath: resolveAssetPath("/images/logos/node.png"),
    },
    {
      name: "Interactive Developer",
      imgPath: resolveAssetPath("/images/logos/three.png"),
    },
    {
      name: "Git + CI Practices",
      imgPath: resolveAssetPath("/images/logos/git.svg"),
    },
  ];
  const testimonials = [
    {
      name: "Stuti Gupta",
      mentions: "@stuti_gupta",
      review:
        "I can’t say enough good things about Stuti. She was able to take our complex project requirements and turn them into a seamless, functional website. Her problem-solving abilities are outstanding.",
      imgPath: "",
    },
    {
      name: "Sahil Malla",
      mentions: "@sahil_malla",
      review:
        "Working with Akanksha was a fantastic experience. She transformed our outdated website into a modern, user-friendly platform. Her attention to detail and commitment to quality are unmatched. Highly recommend her for any web dev projects.",
      imgPath: "",
    },
    {
      name: "Abhijit Kumar",
      mentions: "@abhijitkumar",
      review:
        "Collaborating with Akanksha was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Akanksha's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Akanksha is the ideal partner.",
      imgPath: "",
    },
    {
      name: "Nikita Kadav",
      mentions: "@nikitakadav",
      review:
        "Akanksha was a pleasure to work with. She turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "",
    },
    {
      name: "Jaydeep Patel",
      mentions: "@jaydeep_patel",
      review:
        "Akanksha’s expertise in web development is truly impressive. She delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. She’s a true professional!",
      imgPath: "",
    },
    {
      name: "Spandana",
      mentions: "@spandana",
      review:
        "Akanksha was a pleasure to work with. She understood our requirements perfectly and delivered a website that exceeded our expectations. Her skills in both frontend and backend dev are top-notch.",
      imgPath: "",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: resolveAssetPath("/images/insta.png"),
    },
    {
      name: "fb",
      imgPath: resolveAssetPath("/images/fb.png"),
    },
    {
      name: "x",
      imgPath: resolveAssetPath("/images/x.png"),
    },
    {
      name: "linkedin",
      imgPath: resolveAssetPath("/images/linkedin.png"),
    },
  ];
  export{
    words, counterItems, navLinks, logoIconsList, abilities, expCards, techStackIcons, techStackImgs, socialImgs, testimonials
  };
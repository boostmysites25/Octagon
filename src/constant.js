import logoImg from "./assets/images/logo/logo.webp";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.jpg";
import appLandingAbout from "./assets/images/app-landing-about.jpg";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/aboutusbanner.jpg";
import contactusbanner from "./assets/images/contactusbanner1.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.jpg";
import profileImg2 from "./assets/images/profileimg-2.jpg";
import serviceswebdevelopment from "./assets/images/services/serviceswebdevelopment.jpg";
import serviceaidevelopment from "./assets/images/services/serviceaidevelopment.jpg";
import chatbotdevelopment from "./assets/images/services/chatbotdevelopment.jpg";
import datadevelopment from "./assets/images/services/datadevelopment.jpg";
import gamedevelopment from "./assets/images/services/gamedevelopment.jpg";
import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
import machinelearning from "./assets/images/services/machinelearning.jpg";
import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
import rpa from "./assets/images/services/rpa.jpg";
import aboutone from "./assets/images/aboutone.jpg";
import abouttwo from "./assets/images/abouttwo.jpg";
import aboutthree from "./assets/images/aboutthree.jpg";
import aboutfour from "./assets/images/aboutfour.jpg";
import aboutfive from "./assets/images/aboutfive.jpg";
import aboutusintroone from "./assets/images/aboutusintroone.jpg";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.jpg";
import allbgimage from "./assets/images/allbgimage.jpg";
import { lazy } from "react";
import { BiBrain, BiBulb, BiRocket } from "react-icons/bi";
import { GoFileMedia, GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import { MdOutlineDashboardCustomize } from "react-icons/md";

import { FaAppStoreIos } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaCogs,
  FaDatabase,
  FaNetworkWired,
  FaVrCardboard,
  FaLayerGroup,
  FaPaintBrush,
} from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.webp";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold-creekcap.webp";
import ThinkRealityImg from "./assets/web-development-portfolio/think-reality.webp";
import AkashMegaMart from "./assets/web-development-portfolio/Akash-Mega-Mart.webp";
import MidwamImmersive from "./assets/web-development-portfolio/Midwam–Immersive-Experience-Design-Company.webp";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "./assets/app-development-portfolio/Rentop–Bike-&-Car-Rentals.webp";
import AkashMegaMartApp from "./assets/app-development-portfolio/Akash-Mega-Mart-Mobile-App.webp";
import FeelItMobileApp from "./assets/app-development-portfolio/FeelIt-Mobile-App.webp";
import KlikomicsMobileApp from "./assets/app-development-portfolio/Klikomics-Mobile-App.webp";
import AutoSnapMobileApp from "./assets/app-development-portfolio/AutoSnap-Mobile-App.webp";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  serviceswebdevelopment,
  serviceaidevelopment,
  chatbotdevelopment,
  datadevelopment,
  gamedevelopment,
  blockchaindevelopment,
  machinelearning,
  clouddevelopment,
  rpa,
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
  allbgimage,
};

// company details
export const companyDetails = {
  name: "Octagon Software Solutions",
  phone: "+91-9642130466",
  whatsapp: "+91-9642130466",
  whatsappbox:
    "https://api.whatsapp.com/send/?phone=9642130466&text&type=phone_number&app_absent=0",
  email: "work@octagonsoftwaresolutions.com",
  address: "WeWork Raheja Platinum Marol Andheri East, Mumbai, MH 400059",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do I get started?",
    answer:
      "Simply schedule a free consultation with us to discuss your project. We will outline how we can help turn your vision into impactful digital solutions that drive business growth.",
  },
  {
    id: 2,
    question: "What services does Octagon Software Solutions offer?",
    answer:
      "We specialize in UI/UX design, web and mobile app development, artificial intelligence, data analytics, IoT, VR/AR, and blockchain technologies.",
  },
  {
    id: 3,
    question: "How long does it take to develop a digital product?",
    answer:
      "The timeline varies depending on the project scope. Typically, it takes 2 to 6 months to complete a robust and scalable solution.",
  },
  {
    id: 4,
    question: "What industries do you serve?",
    answer:
      "We partner with startups, enterprises, and growing businesses across various industries, delivering tailored digital solutions that drive results.",
  },
  {
    id: 5,
    question: "Why choose Octagon Software Solutions?",
    answer:
      "Our multidisciplinary team offers expertise in multiple domains, a client-centric approach, and a commitment to quality, ensuring reliable and efficient solutions tailored to your needs.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    img: <CgWebsite />,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: <GoFileMedia />,
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: <TfiLayoutMediaRightAlt />,
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: <MdOutlineDashboardCustomize />,
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: <FaAppStoreIos />,
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: <IoLogoAndroid />,
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: <SiFlutter />,

    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: <TbDeviceMobileCode />,
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

// all services with React icons
export const allServices = [
  {
    id: 1,
    title: "UI/UX Design",
    img: <FaPaintBrush />,
    image: require("./assets/images/services/ui-ux-design.webp"),
    link: "/services/ui-ux-design",
    desc: "Create intuitive and engaging user experiences with our expert UI/UX design services. We focus on user-centered design principles to develop interfaces that are not only visually appealing but also highly functional and accessible. Our designs prioritize user satisfaction while achieving your business objectives through thoughtful interactions and seamless journeys.",
    detailContent:
      "Our UI/UX design services transform complex user needs into elegant, intuitive digital experiences. We begin with comprehensive user research and persona development to understand your audience's behaviors, preferences, and pain points. Through meticulous wireframing, prototyping, and usability testing, we create designs that feel natural and effortless to your users while driving meaningful engagement and conversion. Our design philosophy balances aesthetic appeal with functional simplicity, ensuring your digital products not only look stunning but deliver measurable results through enhanced user satisfaction and retention.",
    subTitle: "Design That Feels Natural",
    subDesc:
      "We don't just make things look good — we create experiences users actually enjoy. From wireframes to polished interfaces, we focus on intuitive design that boosts engagement and converts visitors into loyal customers. Our user-centered approach ensures every element serves a purpose in the user journey.",
    services: [
      "Prototyping & Interactive Mockups",
      "User Journey & Experience Mapping",
      "Responsive & Mobile-First Design",
      "Comprehensive UI Audits & Optimization",
      "Accessibility Compliance & Testing",
      "Design Systems & Component Libraries",
    ],
  },
  {
    id: 2,
    title: "Web Development",
    img: <FaLaptopCode />,
    image: require("./assets/images/services/web-development.webp"),
    link: "/services/web-development",
    desc: "Build a powerful online presence with custom web solutions tailored to your business needs. From responsive websites to complex web applications, we deliver scalable, secure, and high-performance digital experiences. Our development team combines technical expertise with strategic thinking to create web solutions that drive real business growth.",
    detailContent:
      "Our web development services deliver powerful, custom digital solutions that drive business growth and enhance user engagement. We employ modern frameworks and best practices to build responsive, accessible websites and web applications that perform flawlessly across all devices. Our development process emphasizes clean code, security, and scalability, ensuring your web presence can evolve alongside your business. From content management systems to complex enterprise applications, we create tailor-made solutions that solve your unique challenges while providing exceptional user experiences.",
    subTitle: "Websites That Work Hard",
    subDesc:
      "Your website is more than just a digital space — it's where first impressions are made and relationships begin. We build fast, SEO-optimized, and scalable websites tailored to your goals and designed to deliver measurable results. Our solutions combine stunning visuals with powerful functionality to create digital experiences that truly represent your brand.",
    services: [
      "Custom Web Platforms & Enterprise Solutions",
      "CMS Development & Content Architecture",
      "API Integration & Third-party Services",
      "E-commerce & Payment Gateway Integration",
      "Progressive Web Applications (PWAs)",
      "Performance Optimization & Security Hardening",
    ],
  },
  {
    id: 3,
    title: "Mobile App Development",
    img: <FaMobileAlt />,
    image: require("./assets/images/services/mobile-app-development.webp"),
    link: "/services/mobile-app-development",
    desc: "Transform your ideas into powerful mobile applications designed for iOS and Android platforms. Our expert developers create native, hybrid, and cross-platform solutions that deliver exceptional user experiences and drive engagement. We focus on building intuitive, high-performing apps that users love to interact with while meeting your business objectives.",
    detailContent:
      "Our mobile app development services turn innovative ideas into powerful, user-friendly applications for iOS and Android platforms. We leverage the latest technologies and frameworks to create apps that offer seamless experiences while maximizing performance and battery efficiency. Our development approach emphasizes clean architecture, offline capabilities, and robust security measures to ensure your app functions flawlessly in any environment. From concept refinement to store submission and post-launch support, we handle every aspect of the mobile app development lifecycle with expertise and precision.",
    subTitle: "Your Idea, in Your Users' Hands",
    subDesc:
      "From MVPs to full-scale apps, we design and develop mobile applications that deliver on performance and usability while creating lasting connections with your audience. We understand the unique constraints and opportunities of mobile platforms and optimize every element to create engaging, intuitive experiences that keep users coming back.",
    services: [
      "iOS & Android Native App Development",
      "Cross-Platform & Hybrid Solutions",
      "App Redesigns & Performance Optimization",
      "Mobile App Testing & Quality Assurance",
      "App Store Optimization & Submission",
      "Ongoing Maintenance & Version Updates",
    ],
  },
  {
    id: 4,
    title: "Artificial Intelligence Development",
    img: <FaCogs />,
    image: require("./assets/images/services/ai-development.webp"),
    link: "/services/ai-development",
    desc: "Harness the power of AI to gain competitive advantages through intelligent automation, predictive analytics, and personalized user experiences. Our AI solutions help businesses make smarter decisions and optimize operations. We translate complex AI capabilities into practical applications that deliver measurable value and transform how you serve your customers.",
    detailContent:
      "Our AI development services empower your business with intelligent systems that transform operations and drive innovation. We build custom AI solutions that analyze data patterns, automate repetitive tasks, and provide actionable insights for better decision-making. Our team combines expertise in machine learning, natural language processing, and data science to create AI applications that solve real business problems while adapting and improving over time. Whether you're looking to enhance customer experiences, optimize internal processes, or develop entirely new AI-powered products, we provide the technical expertise and strategic guidance to turn your vision into reality.",
    subTitle: "Smarter Systems, Real Business Value",
    subDesc:
      "We build AI-powered tools that streamline operations, personalize experiences, and drive smarter decisions across your organization. Our solutions go beyond the hype to deliver practical applications of artificial intelligence that address specific business challenges and create measurable advantages in your market.",
    services: [
      "Machine Learning & Deep Learning Solutions",
      "Predictive Analytics & Forecasting Models",
      "AI Chatbots & Conversational Interfaces",
      "Natural Language Processing & Understanding",
      "Computer Vision & Image Recognition",
      "Recommendation Systems & Personalization",
    ],
  },
  {
    id: 5,
    title: "Data Analytics and Business Intelligence",
    img: <FaDatabase />,
    image: require("./assets/images/services/data-analytics.webp"),
    link: "/services/data-analytics",
    desc: "Transform raw data into actionable business insights with our comprehensive analytics solutions. We help you collect, process, analyze, and visualize data to uncover patterns, trends, and opportunities that drive informed decision-making. Our data solutions provide clarity through complexity, helping you identify the metrics that matter most to your business.",
    detailContent:
      "Our data analytics and business intelligence services transform your organization's data into strategic assets that drive growth and competitive advantage. We create comprehensive data ecosystems that integrate information from multiple sources, clean and normalize data for accuracy, and implement powerful analytics tools that deliver real-time insights. Our focus is on making data accessible and actionable for decision-makers through intuitive dashboards, automated reporting, and predictive models. By unlocking the full potential of your data, we help you identify emerging opportunities, mitigate risks, and optimize operations across your entire business.",
    subTitle: "Insights That Move the Needle",
    subDesc:
      "Make your data work harder. We turn numbers into strategies through clear dashboards and real-time analytics that illuminate the path forward. Our data solutions cut through complexity to deliver insights that stakeholders can actually understand and act upon, creating a data-driven culture throughout your organization.",
    services: [
      "Interactive BI Dashboards & Reporting",
      "Data Visualization & Storytelling",
      "ETL Solutions & Data Pipeline Development",
      "Forecasting Models & Predictive Analytics",
      "Big Data Processing & Management",
      "Data Governance & Quality Assurance",
    ],
  },
  {
    id: 6,
    title: "Internet of Things Development",
    img: <FaNetworkWired />,
    image: require("./assets/images/services/iot-development.webp"),
    link: "/services/iot-development",
    desc: "Connect and integrate smart devices to create innovative IoT solutions that automate processes, gather valuable data, and enhance operational efficiency across various environments and industries. Our IoT expertise bridges the physical and digital worlds to create systems that make your operations smarter, more efficient, and more responsive.",
    detailContent:
      "Our Internet of Things (IoT) development services create intelligent, connected ecosystems that transform how businesses operate and interact with the physical world. We design and implement comprehensive IoT solutions that connect devices, sensors, and machines to centralized platforms for monitoring, analysis, and control. Our approach emphasizes security, scalability, and interoperability, ensuring your IoT infrastructure can grow with your needs while maintaining data integrity and protection. From industrial automation to smart buildings and connected products, we leverage IoT technology to create tangible business value through enhanced efficiency, improved decision-making, and new service opportunities.",
    subTitle: "Connected Tech That Works Together",
    subDesc:
      "We help businesses build smarter ecosystems by connecting devices, gathering insights, and automating operations across physical environments. Our IoT solutions create networks that communicate seamlessly, delivering real-time data and enabling responsive actions that drive efficiency and create new capabilities for your organization.",
    services: [
      "End-to-End IoT Application Development",
      "Device Integration & Connectivity Solutions",
      "Edge Computing & Data Processing",
      "IoT Platform Development & Customization",
      "Sensor Networks & Hardware Integration",
      "IoT Security & Compliance Implementation",
    ],
  },
  {
    id: 7,
    title: "Virtual Reality and Augmented Reality",
    img: <FaVrCardboard />,
    image: require("./assets/images/services/vr-ar.webp"),
    link: "/services/vr-ar",
    desc: "Create immersive experiences with cutting-edge VR and AR technologies. Our solutions bring digital elements into real-world environments or create entirely new virtual worlds for training, marketing, entertainment, and more. We design interactive experiences that engage users on a deeper level and create powerful memories that conventional media simply cannot match.",
    detailContent:
      "Our Virtual Reality (VR) and Augmented Reality (AR) development services create immersive digital experiences that transform how users interact with content, products, and environments. We develop custom VR and AR applications that transport users to new realities or enhance the physical world with digital overlays, creating engaging, interactive experiences that drive deeper engagement. Our technical expertise spans 3D modeling, spatial computing, and interactive design, enabling us to create solutions that push the boundaries of what's possible with immersive technology. Whether you're looking to revolutionize training, marketing, customer experiences, or entertainment, our VR/AR solutions deliver memorable interactions that achieve your business objectives.",
    subTitle: "Immersive Experiences That Stick",
    subDesc:
      "From virtual showrooms to training simulations, we design interactive AR and VR experiences that captivate audiences and create lasting impressions. By engaging multiple senses and enabling active participation, our immersive solutions create deeper connections and deliver information in ways that traditional media cannot achieve.",
    services: [
      "VR Applications & Interactive Environments",
      "AR Filters & Location-Based Experiences",
      "3D Simulation Tools & Training Programs",
      "Interactive 3D Asset Development",
      "WebAR & WebVR Solutions",
      "Mixed Reality & Spatial Computing",
    ],
  },
  {
    id: 8,
    title: "Blockchain Development",
    img: <FaLayerGroup />,
    image: require("./assets/images/services/blockchain-development.webp"),
    link: "/services/blockchain-development",
    desc: "Implement secure, transparent, and decentralized blockchain solutions for various business needs. From cryptocurrency and smart contracts to supply chain tracking and digital identity verification, we build robust applications on leading blockchain platforms. Our solutions leverage distributed ledger technology to create new levels of trust, efficiency, and security for your operations.",
    detailContent:
      "Our blockchain development services help businesses leverage distributed ledger technology to create secure, transparent, and efficient digital systems. We design and implement custom blockchain solutions that enhance security, establish trust, and streamline processes through decentralized consensus mechanisms and immutable record-keeping. Our technical expertise covers leading blockchain platforms and protocols, allowing us to select the optimal approach for your specific use case. From smart contracts and decentralized applications to private blockchain networks and tokenization systems, we help you navigate the complexities of blockchain technology to create solutions that deliver tangible business value and position your organization at the forefront of digital innovation.",
    subTitle: "Build Trust With Every Transaction",
    subDesc:
      "We develop blockchain-powered applications that are secure, transparent, and built for the future of digital commerce and information exchange. Our solutions create verifiable trust without intermediaries, enabling new business models and improving existing processes through enhanced security, efficiency, and auditability.",
    services: [
      "Smart Contract Development & Auditing",
      "Decentralized Application (dApp) Creation",
      "NFT Platform & Marketplace Development",
      "Cryptocurrency & Digital Wallet Solutions",
      "Supply Chain & Identity Verification Systems",
      "Blockchain Integration & Consulting",
    ],
  },
];

export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Expertise Across Multiple Domains",
    desc: "Our multidisciplinary team brings a wealth of experience in various technologies, ensuring your project is in capable hands.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Client-Centric Approach",
    desc: "We prioritize your business goals and tailor solutions accordingly, focusing on delivering impactful digital experiences.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Agile Development Process",
    desc: "Our flexible methodologies ensure timely delivery and adaptability, so you stay ahead of the competition.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Data-Driven Insights",
    desc: "We leverage data analytics to provide actionable insights that drive smarter business decisions and improve outcomes.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Commitment to Quality",
    desc: "We adhere to the highest standards to deliver reliable, efficient solutions that foster long-term partnerships.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "Elena D.",
    role: "Product Manager, SaaS Octagon Software Solutions",
    desc: "“We came to them with a clunky interface. They came back with a complete redesign that instantly felt intuitive and polished. Our users now spend 2x more time in-app, and our feedback has been overwhelmingly positive.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Ravi S.",
    role: "Founder, E-commerce Brand",
    desc: "“We needed more than a website — we needed a platform that could grow with us. The team delivered something fast, reliable, and beautifully responsive. Plus, our organic traffic has gone up by 40%.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "Julia K.",
    role: "CEO, HealthTech Startup",
    desc: "“The mobile app they built helped us connect directly with users in a way we hadn’t before. From design to deployment, the communication was clear and the execution flawless.”",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "David M.",
    role: "CTO, E-Learning Platform",
    desc: "“Their AI team built us a predictive engine that actually works. We’ve automated over 50% of our manual data processing, and the chatbot they integrated has been a hit with our customers.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "Samantha L.",
    role: "COO, Retail Chain",
    desc: "“Before this project, our data was just sitting in spreadsheets. Now, we have a full dashboard that updates in real time. It’s helped our leadership team make faster, smarter decisions.”",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Marcus B.",
    role: "Operations Lead, Manufacturing Octagon Software Solutions",
    desc: "“We wanted to unify our device network and get real-time insights — and that’s exactly what they delivered. The platform is reliable, secure, and easy to scale as we grow.”",
  },
  {
    id: 7,
    profileImg: profileImg2,
    name: "Rachel P.",
    role: "Marketing Director, Tech Firm",
    desc: "“They created an AR-based demo experience that wowed both clients and internal stakeholders. It’s now one of our top tools for product marketing and live demos.”",
  },
  {
    id: 8,
    profileImg: profileImg1,
    name: "Leo A.",
    role: "Co-Founder, CreativeTech Startup",
    desc: "“Their blockchain devs helped us build a secure, gas-efficient NFT marketplace. The UI was clean, the contracts were solid, and the launch went off without a hitch.”",
  },
  {
    id: 9,
    profileImg: profileImg2,
    name: "Claire J.",
    role: "IT Director, GlobalTech Solutions",
    desc: "“The cloud migration and management services we received from Octagon Software Solutions have been invaluable. They took us from a traditional setup to a flexible cloud environment, allowing us to scale easily. It’s been a huge boost for our team’s productivity.”",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam ",
    link: "https://www.midwam.com/en/about",
  },
];

export const webPortfolioHomepage = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
    description:
      "A dynamic internet service provider platform offering high-speed connectivity solutions.",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
    description:
      "A financial investment firm website focused on strategic asset management and capital growth.",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
    description:
      "A real estate platform showcasing premium properties with a focus on smart investment opportunities.",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
    description:
      "An e-commerce platform providing a wide range of consumer goods with a seamless shopping experience.",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam ",
    link: "https://www.midwam.com/en/about",
    description:
      "An immersive experience solutions provider specializing in augmented and virtual reality content.",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart ",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
export const appPortfolioHomepage = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart ",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
    description:
      "A user-friendly e-commerce mobile app for Akash Mega Mart, offering a seamless shopping experience.",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
    description:
      "A social interaction app enabling users to express and share their emotions through customized content.",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
    description:
      "A financial management mobile app designed to simplify investment tracking and analytics.",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
    description:
      "A photography service app that streamlines the process of booking and managing real estate photography sessions.",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
    description:
      "A convenient vehicle rental app offering a range of cars and bikes for short-term rentals.",
  },
];

export const aboutUsItems = [
  {
    title: "We Design. We Build. We Evolve.",
    description:
      "At Octagon Software Solutions, we’re a team of forward-thinkers, developers, creatives, and engineers with one mission — to help you build digital products that matter. We don’t believe in tech for tech’s sake. We believe in solutions that are functional, human-first, and built to scale.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize your business goals and tailor solutions accordingly. Our client-centric approach focuses on delivering impactful digital experiences that drive results.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Agile Development Process",
    description:
      "Our flexible methodologies ensure timely delivery and adaptability, so you stay ahead of the competition. We bring clarity to complexity and turn ideas into scalable solutions.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Innovation with Purpose",
    description:
      "We don’t just make things look good — we create experiences users actually enjoy. From wireframes to polished interfaces, we focus on intuitive design that boosts engagement.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "End-to-End Solutions",
    description:
      "We provide comprehensive digital services, ensuring end-to-end support from concept to deployment. Our goal is to be your trusted partner throughout the digital journey.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];

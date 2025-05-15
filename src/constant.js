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
  phone: "+91-9000000",
  whatsapp: "+91-900000",
  whatsappbox: "90000000",
  email: "abc@xya.com",
  address: "[your company address]",
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
      "Simply schedule a free consultation with us to discuss your idea. We will outline how we can help turn your vision into a successful AI company.",
  },
  {
    id: 2,
    question: "Do I need technical knowledge to start an AI company?",
    answer:
      "No, you don’t need technical expertise. Our team of AI experts will handle the technical aspects while you focus on the business vision and strategy.",
  },
  {
    id: 3,
    question: "How long does it take to launch an AI product?",
    answer:
      "The timeline varies, but typically it takes 3 to 6 months to develop a Minimum Viable Product (MVP) and begin the launch process.",
  },
  {
    id: 4,
    question: "How do I know if my AI idea is feasible?",
    answer:
      "We offer an initial consultation to evaluate your idea’s feasibility, its market potential, and provide feedback on how to refine it for success.",
  },
  {
    id: 5,
    question: "What kind of AI solutions do you offer?",
    answer:
      "We provide a wide range of AI solutions, including predictive analytics, natural language processing, computer vision, and custom AI model development tailored to your business needs.",
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

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Transforming Vision into Reality",
    desc: "We collaborate closely to understand your vision and turn it into innovative digital solutions that exceed expectations, tailored specifically to your business needs.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Empowering Businesses with Technology",
    desc: "Our expertise in cutting-edge technologies ensures that every solution we deliver helps your business thrive in today’s competitive landscape.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Driving Efficiency with Innovation",
    desc: "From automating processes to building intelligent solutions, we bring innovation to the forefront, enabling your business to operate smarter and more efficiently.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Data-Driven Decision Making",
    desc: "We provide insightful analytics and intelligence to help you make informed decisions, uncover opportunities, and stay ahead in your industry.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Commitment to Excellence",
    desc: "We are dedicated to delivering exceptional service and long-term partnerships, supporting your journey from idea to execution and beyond.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "Mark S.",
    role: "Founder of UrbanTrends",
    desc: "“Partnering with [you company name] was a breath of fresh air. They not only brought our mobile app and website ideas to life but also helped us think through user experience details that made a huge impact. They truly understood our vision and delivered a solution that has taken our online presence to the next level.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Lisa T.",
    role: "Operations Manager at HealthPro Analytics",
    desc: "“The AI solutions from [you company name] have completely transformed our operations. Their team helped us automate data processes, which has freed up our team for higher-level tasks. The insights and predictive analytics they’ve provided have given us a competitive edge we didn’t think was possible.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "John P.",
    role: "Customer Service Lead at QuickResponse",
    desc: "“The chatbot that [you company name] developed for us has been a game-changer. It’s seamless, efficient, and our customers are happier than ever with the faster response times. We’re saving so much time on routine inquiries, and it’s made a noticeable difference in customer satisfaction.”",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "Samantha K.",
    role: "CEO at Retail Innovations",
    desc: "“Working with [you company name] on our data analytics strategy was one of our best investments. Their team transformed our raw data into meaningful insights that have guided our recent business decisions. We’ve already seen measurable results, and we’re excited to keep building on this foundation.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "Alex R.",
    role: "Product Manager at PlaySphere",
    desc: "“The gaming app [you company name] created exceeded all our expectations. From design to development, every aspect was handled with incredible attention to detail. Our players are hooked, and we couldn’t have achieved this level of engagement without their expertise!”",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Monica B.",
    role: "CTO at FinSecure",
    desc: "“We were initially overwhelmed by the complexity of blockchain, but [you company name] made it easy to understand and implement. Their team developed a secure blockchain solution tailored to our needs, and it’s given us and our clients peace of mind in every transaction.”",
  },
  {
    id: 7,
    profileImg: profileImg2,
    name: "Daniel L.",
    role: "Head of Product at InsightIQ",
    desc: "“Thanks to [you company name], we’ve integrated machine learning into our products, giving us a new level of insight into customer behavior. Their team’s knowledge and hands-on approach made the entire process smooth and rewarding. It’s changed the way we operate.”",
  },
  {
    id: 8,
    profileImg: profileImg1,
    name: "Claire J.",
    role: "IT Director at GlobalTech Solutions",
    desc: "“The cloud migration and management services we received from [you company name] have been invaluable. They took us from a traditional setup to a flexible cloud environment, allowing us to scale easily. It’s been a huge boost for our team’s productivity.”",
  },
  {
    id: 9,
    profileImg: profileImg2,
    name: "Evan W.",
    role: "Operations Director at Streamline Logistics",
    desc: "“Implementing RPA with [you company name] has transformed our day-to-day operations. Tasks that used to be time-consuming are now handled quickly and accurately, giving our team more freedom to focus on strategic initiatives. The impact on efficiency is undeniable.”",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

export const webPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
    description:
      "A comprehensive finance platform streamlining investments and portfolio management efficiently.",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
    description:
      "A global relocation service platform for seamless student mobility and accommodations.",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
    description:
      "A networking platform connecting leaders and professionals to foster meaningful collaborations.",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
    description:
      "An innovative job marketplace connecting freelancers and employers for diverse gig opportunities.",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
    description:
      "A corporate solution provider enhancing business growth with tailored financial services.",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
    description:
      "A dynamic communication platform revolutionizing team collaboration and connectivity.",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];

export const appPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
    description:
      "An intuitive platform simplifying vehicle part exchanges and purchases.",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
    description:
      "A driver-matching app ensuring efficient and reliable transportation services.",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
    description:
      "A beauty and wellness app offering personalized skincare and grooming solutions.",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
    description:
      "A platform connecting users with skilled artisans for home services.",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
    description:
      "A spiritual app offering resources for faith-building and inspiration.",
  },
];

export const aboutUsItems = [
  {
    title: "Innovation at Heart",
    description:
      "At [you company name], innovation is at the core of everything we do. We continuously embrace emerging technologies and industry trends to craft future-ready solutions that redefine possibilities.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We adopt a personalized approach, customizing each project to align seamlessly with your specific requirements. We collaborate closely with our clients, fostering long-term partnerships built on trust, transparency, and shared success.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Quality and reliability form the foundation of our work. We take pride in crafting world-class digital solutions that are robust, scalable, and secure. Every project undergoes thorough quality assurance.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Innovation with Purpose",
    description:
      "We believe that technology is only as valuable as the purpose it serves. Our mission is to harness the power of technology to create meaningful impacts—streamlining operations, elevating customer experiences, and driving business growth.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "End to End Solutions",
    description:
      "We provide a comprehensive range of services, ensuring end-to-end support from initial concept to deployment and beyond. Our aim is to be your trusted partner throughout your digital journey.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];

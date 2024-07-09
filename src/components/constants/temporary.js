// Array element
import Event_ActivityImg1 from '../../assets/images/activity_img1.png'
import Event_ActivityImg2 from '../../assets/images/activity_img2.png'
import Event_ActivityImg3 from '../../assets/images/activity_img3.png'
import { FaLaptopCode, FaMobileAlt, FaNetworkWired, FaUserShield,FaCalendar,FaClock,FaLink } from "react-icons/fa";
import NewCourseImg1 from '../../assets/images/newcourse 1.png'
import NewCourseImg2 from '../../assets/images/newcourse 2.png'
import NewCourseImg3 from '../../assets/images/newcourse 3.png'
import NewCourseImg4 from '../../assets/images/newcourse 4.png'
import MyCourseImg1 from '../../assets/images/mycourse 1.png'
import MyCourseImg2 from '../../assets/images/mycourse 2.png'


export const EVENT_ACTIVITY_CARD=[
   { name:'Blockchain-Powered Voting <br/> System',img:Event_ActivityImg1 ,text:'Revolutionizing the electoral process with a secure, transparent, and tamper-proof voting system using blockchain technology.Our solution ensures voter anonymity, real-time results, and enhanced trust in the integrity of elections.'},
   {name:'Personalized Marketing with <br/> AI',img:Event_ActivityImg2 ,text:'Revolutionizing the electoral process with a secure, transparent, and tamper-proof voting system using blockchain technology.Our solution ensures voter anonymity, real-time results, and enhanced trust in the integrity of elections.'},
   {name:'Next-Generation Firewall <br/> Development',img:Event_ActivityImg3 ,text:'Revolutionizing the electoral process with a secure, transparent, and tamper-proof voting system using blockchain technology.Our solution ensures voter anonymity, real-time results, and enhanced trust in the integrity of elections.'},
   { name:'Blockchain-Powered Voting <br/> System',img:Event_ActivityImg1 ,text:'Revolutionizing the electoral process with a secure, transparent, and tamper-proof voting system using blockchain technology.Our solution ensures voter anonymity, real-time results, and enhanced trust in the integrity of elections.'},
   { name:'Blockchain-Powered Voting <br/> System',img:Event_ActivityImg1 ,text:'Revolutionizing the electoral process with a secure, transparent, and tamper-proof voting system using blockchain technology.Our solution ensures voter anonymity, real-time results, and enhanced trust in the integrity of elections.'},
   {name:'Personalized Marketing with <br/> AI',img:Event_ActivityImg2 ,text:'Revolutionizing the electoral process with a secure, transparent, and tamper-proof voting system using blockchain technology.Our solution ensures voter anonymity, real-time results, and enhanced trust in the integrity of elections.'},
   {name:'Next-Generation Firewall <br/> Development',img:Event_ActivityImg3 ,text:'Revolutionizing the electoral process with a secure, transparent, and tamper-proof voting system using blockchain technology.Our solution ensures voter anonymity, real-time results, and enhanced trust in the integrity of elections.'}
];

export const SERVICES_CARD=[
   {name:'Software Development' ,icon:FaLaptopCode, text:' Custom software solutions designed to meet your unique business requirements.From conceptualization to deployment, we ensure top-notch quality and performance.'},
   {name:'Network Solutions' ,icon:FaNetworkWired, text:'Robust and scalable network solutions to keep your business connected.Our services include network design, implementation, and maintenance to ensure seamless operations.'},
   {name:'Cybersecurity' , icon:FaUserShield,text:'Protect your business with our advanced cybersecurity solutions. We provide  threat assessment, vulnerability management, and incident response to safeguard your data and systems.'},
   {name:'Mobile App Development' ,icon:FaMobileAlt, text:' Innovative mobile applications to reach your customers on the go.  Our team designs and develops apps that provide seamless user experiencesacross all devices.'}
];

export const EVENT_VACANCY_CARD = [
   //  {type:'',name:'',time_icon:'',time:'',salary_icon:'',salary:'',updated_time:''}
   {type:'Creative & Art',name:'User Experience Designer <br/>-Fully Remote',time:'Full Time',salary:'$ 45  - $ 55',updated_time:'2h ago'},
   {type:'Programming',name:'Android App  Developer <br/>-Hybrid',time:'Full Time',salary:'$ 45  - $ 55',updated_time:'5d  ago'},
   {type:'Programming',name:'IoT Support Associative  <br/>-Fully Remote',time:'Full Time',salary:'$ 45  - $ 55',updated_time:'2h ago'},
   {type:'Creative & Art',name:'Intern Front-End  Developer  <br/>-Fully Remote',time:'Full Time',salary:'$ 45  - $ 55',updated_time:'5d  ago'}
];

export const NewCourseCardData=[
   {img:NewCourseImg1,title:'Software  Architecture',level:'Beginner Level',star:4.8,enrolled:'1,361 already enrolled'},
   {img:NewCourseImg2,title:'Software  Architecture',level:'Advanced Level',star:4.8,enrolled:'1,361 already enrolled'},
   {img:NewCourseImg3,title:'Software  Architecture',level:'Beginner Level',star:4.8,enrolled:'1,361 already enrolled'},
   {img:NewCourseImg4,title:'Software  Architecture',level:'Intermediate  Level',star:4.8,enrolled:'1,361 already enrolled'}
]

export const MyCourseCardData=[
   {img:MyCourseImg1,title:'Software Design and Architecture',started:'Started : Jan 24',level:'Beginner Level',star:4.8 ,Progress:75},
   {img:MyCourseImg2,title:'Agile Software Development',started:'Started : Jan 24',level:'Advanced Level',star:4.8 ,Progress:40}

]

export const ComplaintsData=[
   {status:'pending', about:'Regarding the heavy work load',date:'23/03/2024'},
   {status:'approved', about:'Regarding Evaluvation marks',date:'23/03/2024'}
]

export const ComplaintsDataMore=[
   {status:'pending', about:'Regarding the heavy work load',date:'23/03/2024',to:'Human Resource Manager',description:'I am writing to formally lodge a complaint regarding the marks I received in the recent evaluation. I feel that the marks awarded do not accurately reflect the effort and quality of work I put into the assignment.',reply:'We have carefully reevaluated your assignment [or test] and taken into consideration your points regarding the grading criteria.'},
   
]
export const OnTimeTrainingCardData=[
   {title:'Mastering React and Redux',date:'Date :  28 March 2024',time:'Time :  9.00 AM onwards',link:'Link : https://learn.zoom.us/j/68040566102?pwd'},
   {title:'Kubernetes for Developers',date:'Date :  28 March 2024',time:'Time :  11.00 AM onwards',link:'Link : https://learn.zoom.us/j/68040566102?pwd'},
   {title:'Advanced JavaScript Techniques',date:'Date :  29 March 2024',time:'Time :  2:00 PM onwards',link:'Link : https://learn.zoom.us/j/68040566102?pwd'}
]

export const ProjectToDo = [
   {title:'Complete the frontend development ',date:'Due Date  : 21st March 2024',green:true,orange:true,blue:true},
   {title:'Four CRUD operations ',date:'Due Date  : 21st March 2024',orange:true,blue:true},
   {title:'Action Plan  ',date:'Due Date  : 21st March 2024',blue:true}
]

export const ProjectInProgress =[
   {title:'UI Designing ',date:'Due Date  : 21st March 2024',green:true,orange:true,blue:true,total:5,finish:3},
   {title:'Design the ER Diagram',date:'Due Date  : 21st March 2024',orange:true,total:5,finish:4},
   {title:'State transition diagrams ',date:'Due Date  : 21st March 2024',orange:true,blue:true,total:7,finish:2},
   {title:'User Interface Flow diagrams ',date:'Due Date  : 21st March 2024',green:true,orange:true,total:7,finish:2}
]

export const ProjectDone=[
   {title:'Requirements Analysis ',date:'Completed : 15th February 2024',green:true,orange:true,blue:true},
   {title:'Project Presentation ',date:'Completed : 15th February 2024',orange:true,green:true},
   {title:'Proposal Submission ',date:'Completed : 15th February 2024',blue:true,orange:true}
]
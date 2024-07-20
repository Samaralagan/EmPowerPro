//paragraph and text
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaHandSpock } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { BsPersonVideo3 } from "react-icons/bs";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaCircleQuestion } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { GrUserManager } from "react-icons/gr";
import { FaUserGroup } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import about_img1 from '../../assets/images/image 1.png'
import about_img2 from '../../assets/images/image 2.png'
import about_img3 from '../../assets/images/image 3.png'
import about_img4 from '../../assets/images/image 4.png'

export const EVENT ={
    title:'OUR  INNOVATIONS',
    text:'We continuously explore new technologies and methodologies to deliver cutting-edge solutions that drive progress and create value for our clients.'
}

export const SERVICES =   {
    title:'OUR  SERVICES' , 
    text:' We are dedicated to providing comprehensive and efficient solutions for managing your workforce.Explore our <br/> range of services that cater to all your employee management needs.'
}

export const CONTACTUS = {
    title:'CONTACT  US',
    text:'If you have any questions, issues, or need assistance with our employee management system, please reach out to us. Our support team is ready to assist you.',
    subtitle:'Contact Information',
    location:'A14-15, Industrial Estate, Ekala, Ja-ela,<br/> Sri Lanka.',
    location_icon: FaLocationDot ,
    mail_address:'admin@empowerpro.lk',
    mail_address_icon: IoIosMail ,
    phone_number:'+94 11 223 6976',
    phone_number_icon: IoCall 
}

export const SOCIALMEDIA = {
    facebook:<FaFacebookF className='social-media-icon' />,
    instagram:<FaInstagram className='social-media-icon'/>,
    linkedin:<FaLinkedinIn className='social-media-icon'/>,
    twitter:<FaTwitter className='social-media-icon'/>,
    whatsapp:<FaWhatsapp className='social-media-icon'/>
}

export const EVENT_VACANCY_CARD_ICONS = {
    salary:FaHandHoldingUsd ,
    time:MdOutlineAccessTimeFilled 
}

export const ABOUT = {
    title:'WELCOME  TO  EMPOWERPRO !',
    title_text:'With a focus on quality, integrity, and continuous improvement ,we are dedicated to providing top-notch solutions<br/>tailored to meet the unique needs of our clients.',
    text1:'Founded in  2000 , EmpowerPro began with a simple mission: to transform the industry with innovative and reliable solutions. From our humble beginnings, we have grown into a leading company with a diverse portfolio and a strong commitment to excellence.our mission is to deliver high-quality products and services that exceed our clients\' expectations. We are dedicated to continuous improvement, leveraging the latest technologies and best practices to stay ahead of the curve.',
    text2:'Our vision is to be a global leader in our industry, recognized for our innovation, customer-centric approach, and exceptional service. We aim to build long-lasting relationships with our clients by consistently delivering value and achieving outstanding results.',
    img1:about_img1,
    img2:about_img2,
    img3:about_img3,
    img4:about_img4
}

export const EmployeeSidebar = [
    {name:'Dash Board',icon:GrAppsRounded },
    {name:'Attendance',icon:FaCalendarCheck },
    {name:'Project',icon:FaProjectDiagram },
    {name:'Leave',icon:FaHandSpock },
    {name:'Pay Roll',icon:RiMoneyDollarBoxFill },
    {name:'Complaints',icon:MdReportProblem  },
    {name:'Training',icon:BsPersonVideo3 },
    {name:'Beneficiary',icon:FaHandHoldingHeart }
]

export const TeamLeaderSidebar = [
    {name:'Dash Board',icon:GrAppsRounded },
    {name:'Attendance',icon:FaCalendarCheck },
    {name:'Project',icon:FaProjectDiagram },
    {name:'Leave',icon:FaHandSpock },
    {name:'Pay Roll',icon:RiMoneyDollarBoxFill },
    {name:'Complaints',icon:MdReportProblem  },
    {name:'Training',icon:BsPersonVideo3 },
    {name:'Beneficiary',icon:FaHandHoldingHeart },
    {name:'Team members',icon:HiMiniUserGroup }
]

export const AdminSidebar = [
    {name:'Dash Board',icon:GrAppsRounded },
    {name:'Attendance',icon:FaCalendarCheck },
    {name:'Leave',icon:FaHandSpock },
    {name:'Pay Roll',icon:RiMoneyDollarBoxFill },
    {name:'Complaints',icon:MdReportProblem  },
    {name:'Create User',icon:BsPersonFillAdd  },
    {name:'Inquires',icon:FaCircleQuestion   },
    {name:'Beneficiary',icon:FaHandHoldingHeart }
]

export const HRSidebar = [
    {name:'Dash Board',icon:GrAppsRounded },
    {name:'Attendance',icon:FaCalendarCheck },
    {name:'Project',icon:FaProjectDiagram },
    {name:'Leave',icon:FaHandSpock },
    {name:'Pay Roll',icon:RiMoneyDollarBoxFill },
    {name:'Complaints',icon:MdReportProblem  },
    {name:'Training',icon:BsPersonVideo3 },
    {name:'Employees',icon:HiUserGroup  },
    {name:'Jobs',icon:GrUserManager   },
    {name:'Beneficiary',icon:FaHandHoldingHeart }
]

export const FinanceAndSupportSidebar = [
    {name:'Dash Board',icon:GrAppsRounded },
    {name:'Attendance',icon:FaCalendarCheck },
    {name:'Leave',icon:FaHandSpock },
    {name:'Pay Roll',icon:RiMoneyDollarBoxFill },
    {name:'Complaints',icon:MdReportProblem  },
    {name:'Suppliers',icon:FaUserGroup },
    {name:'Beneficiary',icon:FaHandHoldingHeart }
]

export const ExecutiveSidebar = [
    {name:'Dash Board',icon:GrAppsRounded },
    {name:'Attendance',icon:FaCalendarCheck },
    {name:'Project',icon:FaProjectDiagram },
    {name:'Leave',icon:FaHandSpock },
    {name:'Pay Roll',icon:RiMoneyDollarBoxFill },
    {name:'Complaints',icon:MdReportProblem  },
    {name:'Beneficiary',icon:FaHandHoldingHeart },
    {name:'Team members',icon:HiMiniUserGroup }
]

export const EmployeeDashboard = [
    {   timeIcon:FaClock,timecolor:'#F37C98',timebody:'#FCD8E1',timeContent:'Today’s  In  Time',time:'8.16  AM',
        taskIcon:FaTasks,taskcolor:'#037A0F',taskbody:'#E1FCD8',taskContent:'Tasks in Progress',task:'11',
        teamIcon:MdGroups,teamcolor:'#FFBB00',teambody:'#FFF6DF',teamContent:'Team Members',team:'25'}
]
              

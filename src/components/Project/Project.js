import React from 'react'
import './project.css';
import { GrGithub, GrLink } from "react-icons/gr";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Money from '../../images/moneymanager.png';
import Pizza from '../../images/pizza.png';
import Password from '../../images/Passwordreset.png';





const BootstrapTooltip = styled(({ className, ...props }) => (
   <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
   [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
   },
   [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: 16,
   },
}));

export default function Project() {

   const github = "https://github.com/Vigneshshankaran";

   return (
      <>
         <div className="project-details" id='projects'>
            <h1 className='underline-box'>Projects</h1>
         </div>

         <div className="pro-container portfolio_container flip-card-front">

            <div className="box">
               <img src={Pizza} alt="name" />

               <div className="overlay">
                  <h3>Pizza Delivery Application</h3>
                  <p>The MERN Pizza delivery app with jwt authentication,
delivery details, and payment gateway
Only the admin can edit delete and update</p>
                  <BootstrapTooltip title="Frontend source code">
                     <button>  <a href="https://github.com/Vigneshshankaran/pizza-delivery-app-frontend" target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Backend source code">

                     <button>   <a href="https://github.com/Vigneshshankaran/pizza-delivery-app-Backend" target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Live Demo">

                     <button> <a href="https://hello-pizza-name.netlify.app/" target="_blank" rel="noreferrer"><GrLink className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

               </div>
            </div>
            <div className="box">
               <img src={Password} alt="" />

               <div className="overlay">
                  <h3>PasswordReset</h3>
                  <p>The MERN Signup Password real-time register, login
and forgot password with email authentication.</p>
                  <BootstrapTooltip title="Frontend source code">
                     <button>  <a href="https://under-construction-1.netlify.app/" target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Backend source code">

                     <button>   <a href="https://under-construction-1.netlify.app/" target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Live Demo">

                     <button> <a href="https://under-construction-1.netlify.app/" target="_blank" rel="noreferrer"><GrLink className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>
               </div>
            </div>
            <div className="box">
               <img src={Money} alt="" />

               <div className="overlay">
                  <h3>Expense Tracker</h3>
                  <p>The MERN Expense Tracker application will allow
                     users to keep track of their day-to-day expenses.
                     </p>
                  <BootstrapTooltip title="frontend source code">
                     <button>  <a href="https://github.com/Vigneshshankaran/Expense-Tracker" target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Backend source code">

                     <button>   <a href="https://github.com/Vigneshshankaran/Expense-Tracker" target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Live Demo">

                     <button> <a href={github} target="_blank" rel="noreferrer"><GrLink className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>
               </div>
            </div>
            <div className="box">
               <img src={Password} alt="" />

               <div className="overlay">
                  <h3>URL Shortener</h3>
                  <p>A URL Shortener made with a MERN Stack
(MongoDB, Express, React.js, and Node.js)
A single-page app where a user inputs a link and
receives a different URL in return</p>
                  <BootstrapTooltip title="frontend source code">
                     <button>  <a href="https://under-construction-1.netlify.app/" target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Backend source code">

                     <button>   <a href="https://under-construction-1.netlify.app/" target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Live Demo">

                     <button> <a href="https://under-construction-1.netlify.app/" target="_blank" rel="noreferrer"><GrLink className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>
               </div>
            </div>
         </div>
      </>

   )
}

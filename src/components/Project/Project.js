import React from 'react'
import './project.css';
import { GrGithub, GrLink } from "react-icons/gr";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Pizza from './pizza.png';
import Password from './Passwordreset.png';



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
                  <h3>Mahbubur Rahman</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis quibusdam omnis assumenda, ipsa doloribus labore aut suscipit in id nam iure</p>
                  <BootstrapTooltip title="Frontend source code">
                     <button>  <a href={github} target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Backend source code">

                     <button>   <a href={github} target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
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
                  <h3>Mahbubur Rahman</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis quibusdam omnis assumenda, ipsa doloribus labore aut suscipit in id nam iure</p>
                  <BootstrapTooltip title="Frontend source code">
                     <button>  <a href={github} target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Backend source code">

                     <button>   <a href={github} target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
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
               <img src="https://i.postimg.cc/Ssz6spNs/annie-spratt-p-DGNBK9-A0sk-unsplash.jpg" alt="" />

               <div className="overlay">
                  <h3>Mahbubur Rahman</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis quibusdam omnis assumenda, ipsa doloribus labore aut suscipit in id nam iure</p>
                  <BootstrapTooltip title="frontend source code">
                     <button>  <a href={github} target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Backend source code">

                     <button>   <a href={github} target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
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
               <img src="https://i.postimg.cc/Ssz6spNs/annie-spratt-p-DGNBK9-A0sk-unsplash.jpg" alt="" />

               <div className="overlay">
                  <h3>Mahbubur Rahman</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis quibusdam omnis assumenda, ipsa doloribus labore aut suscipit in id nam iure</p>
                  <BootstrapTooltip title="frontend source code">
                     <button>  <a href={github} target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
                     </a>
                     </button>
                  </ BootstrapTooltip>

                  <BootstrapTooltip title="Backend source code">

                     <button>   <a href={github} target="_blank" rel="noreferrer"><GrGithub className="project-icons" />
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
         </div>
      </>

   )
}

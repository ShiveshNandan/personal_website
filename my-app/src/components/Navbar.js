import React from 'react';
import "../CSS/Navbar.css";
// import { HashScroll } from "react-hash-scroll";

export default function Navbar() {
    const [visible, setVisible] = React.useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 1564, 
        behavior: 'smooth'
      });
    };
    window.addEventListener('scroll', toggleVisible);
    const ref = React.useRef(null);

//   const scrollToTop = () => {
//     ref.current?.scrollIntoView({behavior: 'smooth'});
//   };

    return (
        <>
            <div className="navbar">
                <div className="name slide-in-blurred-top"><p className='slide-in-blurred-to'>SHIVESH NANDAN</p></div>
                <div className="options slide-in-blurred-top">
                    <ul>
                            <a onClick={scrollToTop}>
                            <li >Home</li>
                            </a>
                        <a href="">
                            <li href="" >About</li>
                        </a>
                        <a href="">
                            <li href="" >Project</li>
                        </a>
                        <a href="#Photography">
                            <li >Photography</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="socialMedia">
                <div className="icons">
                    <div className="ico1"><a href="https://instagram.com/shivesh_nandan?igshid=YmMyMTA2M2Y=" target="_blank">
                        <img className='slide-in-blurred-right' src="https://img.icons8.com/fluency-systems-regular/48/null/instagram-new--v1.png" alt='' />
                    </a>
                    </div>
                    <div className="ico2"><a href="https://instagram.com" target="_blank">
                        <img className='slide-in-blurred-right' src="https://img.icons8.com/glyph-neue/64/null/gmail.png" alt='' />
                    </a>
                    </div>
                    <div className="ico3"><a href="https://github.com/ShiveshNandan" target="_blank">
                        <img className='slide-in-blurred-right' src="https://img.icons8.com/fluency/48/null/github.png" alt='' />
                    </a>
                    </div>
                    <div className="ico4"><a href="https://in.linkedin.com/in/shivesh-nandan-39a1b219a" target="_blank">
                        <img className='slide-in-blurred-right' src="https://img.icons8.com/ios-filled/50/null/linkedin-2--v1.png" alt='' />
                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}

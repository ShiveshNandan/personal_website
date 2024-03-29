import React from 'react'
// import "../CSS/project.css"
import "../CSS/project1.css"
// import ParallaxCard from "react-parallax-card"

export default function Project() {
  window.addEventListener("scroll", function () {
    const parallax2 = document.getElementById("parallax2");
    let offset = window.pageYOffset;
    parallax2.style.backgroundPositionY = offset * -0.0001 + "px";
});
  // document.querySelector(document)
  // .addEventListener("mousemove", ".card", function(event) {
  //   var halfWidth = (this.clientWidth / 2);
  //   var halfHeight = (this.clientHeight / 2);
  //   var mouseX = (halfWidth - (event.pageX - this.offsetLeft));
  //   var mouseY = (halfHeight - (event.pageY - this.offsetTop));
  //   var degX  = ((mouseY / halfHeight) * 15) + 'deg'; //max degree = 15
  //   var degY  = ((mouseX / halfWidth) * -15) + 'deg'; //max degree = 15
  //   document.querySelector(this).css('transform', function() {
  //     return 'perspective(512px) translate3d(-2px, -2px, 0) rotateX('+ degX +') rotateY('+ degY +')';
  //   })
  //   .children('.card__info').css('transform', function() {
  //     return 'perspective(512px) translate3d(4px, 4px, 0) rotateX('+ degX +') rotateY('+ degY +')';
  //   });
  // })
  // .addEventListener("mouseout", ".card", function() {
  //   document.querySelector(this).removeAttr('style')
  //   .children('.card__info').removeAttr('style');
  // });

  return (
    <>
      <section>
        <div id="parallax2" className="parallax-item3 projectOuterBox">
          <h2>Projects</h2>
          <div className="projectMains">
            <div className="project1 proj1">
              <div className="hoveer">
                <p id='sum'>Official website of annual Technical fest of USICT,Delhi. Member of the website team.
                <div className="btns">
                <div className="btn"> <a href="https://infoxpression.tech/" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/source-code.png" />Link</a></div>
                {/* <div className="btn"> <a href="http://google.com" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/link--v1.png"/>Code</a></div> */}
                </div>
                </p>
              </div>
              </div>
            <div className="project1 proj2">
              <div className="hoveer">
                <p id='sum'>Lead of Official IPU main website maintenance team (beta version).
                <div className="btns">
                <div className="btn"> <a href="https://ipu.ac.in" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/source-code.png" />Link</a></div>
                {/* <div className="btn"> <a href="http://google.com" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/link--v1.png"/>Code</a></div> */}
                </div></p>
                
              </div>
              </div>
            <div className="project1 proj3">
              <div className="hoveer">
                <p id='sum'>Official SDC website.
                <div className="btns">
                <div className="btn"> <a href="http://google.com" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/source-code.png" />Link</a></div>
                {/* <div className="btn"> <a href="http://google.com" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/link--v1.png"/>Code</a></div> */}
                </div>
                </p>
                
              </div>
              </div>
            <div className="project1 proj4">
              <div className="hoveer">
                <p id='sum'>Hotstar clone
                <div className="btns">
                <div className="btn"> <a href="https://shiveshnandan.github.io/Hotstar-clone/" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/source-code.png" />Link</a></div>
                <div className="btn"> <a href="https://github.com/ShiveshNandan/Hotstar-clone" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/link--v1.png"/>Code</a></div>
                </div>
                </p>
              </div>
              </div>
            <div className="project1 proj5">
              <div className="hoveer">
                <p id='sum'>My own link tree. so people can easily connect with me.
                <div className="btns">
                <div className="btn"> <a href="https://shiveshnandan.github.io/LinkTree/" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/source-code.png" />Link</a></div>
                <div className="btn"> <a href="https://github.com/ShiveshNandan/LinkTree" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/link--v1.png"/>Code</a></div>
                </div>
                </p>
              </div>
              </div>
            <div className="project1 proj6">
              <div className="hoveer">
                <p id='sum'>resturant website
                <div className="btns">
                <div className="btn"> <a href="https://shiveshnandan.github.io/Resturant_website/" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/source-code.png" />Link</a></div>
                <div className="btn"> <a href="https://github.com/ShiveshNandan/Resturant_website" target="_blank" ><img src="https://img.icons8.com/material-rounded/24/null/link--v1.png"/>Code</a></div>
                </div>
                </p>
              </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}
  {/* <ParallaxCard
    label='Label (optional)'
    enableRotate
    enableTransform
    style={{ margin: '0 auto', width: 240, height: 240 }}>

    <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ maxWidth: '100%', maxHeight: '100%' }} />

    <div /><div /><div />
    <img src="shivesh.png" alt="" srcset="" style={{ top: '67%', left: '75%' }} />
    <img />

    <p className='projectPara'>
      Shivesh.
    </p>

  </ParallaxCard> */}

  {/* <ParallaxCard
    label='Label (optional)'
    enableRotate
    style={{ margin: '0 auto', width: 240, height: 240 }}>
    <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' width='240' role='presentation' />
  </ParallaxCard> */}

  {/* <div class="contaienr">
    <div class="tilt-box-wrap">
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <div class="tilt-box">
        <strong>Tilt Effect</strong>
      </div>
    </div>
  </div> */}

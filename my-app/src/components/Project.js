import React from 'react'
// import "../CSS/project.css"
import "../CSS/project1.css"
// import ParallaxCard from "react-parallax-card"

export default function Project() {

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
        <div id="parallax2" className="parallax-item3">
          <h2>Projects</h2>
          <div className="projectMains">
            <div className="project1">

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
             <div className="card">
    <div className="card__bg"></div>
    <div className="card__overlay cover"></div>
    <div className="card__info cover">
      <h1 className="card__title">sa??gon</h1>
      <button className="card__cta">view<span className="icon">&rarr;</span></button>
    </div>
  </div>



            </div>
          </div>
        </div>
      </section>
    </>
  )
}

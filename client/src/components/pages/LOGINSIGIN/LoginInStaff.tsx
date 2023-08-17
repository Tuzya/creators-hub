import React, { useEffect } from 'react';
import gsap, { Expo, Quad } from 'gsap';
import { useAppDispatch } from '../../../redux/hooks';
import { loginUserThunk } from '../../../redux/slices/user/userThunks';
import type { UserLoginFormType } from '../../../types/userTypes';
import './LoginInStaff.module.css';

export default function LoginInStaff(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    console.log(formData);

    void dispatch(loginUserThunk(formData as UserLoginFormType));
  };

  useEffect(() => {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const mySVG = document.querySelector('.svgContainer');
    const eyeL = document.querySelector('.eyeL');
    const eyeR = document.querySelector('.eyeR');
    const mouth = document.querySelector('.mouth');
    const mouthBG = document.querySelector('.mouthBG');
    const mouthSmallBG = document.querySelector('.mouthSmallBG');
    const mouthMediumBG = document.querySelector('.mouthMediumBG');
    const mouthLargeBG = document.querySelector('.mouthLargeBG');
    const mouthMaskPath = document.querySelector('#mouthMaskPath');
    const mouthOutline = document.querySelector('.mouthOutline');
    const tooth = document.querySelector('.tooth');
    const tongue = document.querySelector('.tongue');
    const tail = document.querySelector('.tail');
    let caretPos;
    let curEmailIndex;
    let screenCenter;
    let svgCoords;
    const eyeMaxHorizD = 20;
    const eyeMaxVertD = 10;
    const mouthMaxHorizD = 23;
    const mouthMaxVertD = 10;
    let dFromC;
    let eyeDistH;
    let eyeLDistV;
    let eyeRDistV;
    let eyeDistR;
    let mouthStatus = 'small';

    function getCoord(e) {
      const carPos = email.selectionEnd;
      const div = document.createElement('div');
      const span = document.createElement('span');
      const copyStyle = getComputedStyle(email);
      let emailCoords = {};
      let caretCoords = {};
      let centerCoords = {};
      [].forEach.call(copyStyle, (prop) => {
        div.style[prop] = copyStyle[prop];
      });
      div.style.position = 'absolute';
      document.body.appendChild(div);
      div.textContent = email.value.substr(0, carPos);
      span.textContent = email.value.substr(carPos) || '.';
      div.appendChild(span);

      emailCoords = getPosition(email); // console.log("emailCoords.x: " + emailCoords.x + ", emailCoords.y: " + emailCoords.y);
      caretCoords = getPosition(span); // console.log("caretCoords.x " + caretCoords.x + ", caretCoords.y: " + caretCoords.y);
      centerCoords = getPosition(mySVG); // console.log("centerCoords.x: " + centerCoords.x);
      svgCoords = getPosition(mySVG);
      screenCenter = centerCoords.x + mySVG.offsetWidth / 2; // console.log("screenCenter: " + screenCenter);
      caretPos = caretCoords.x + emailCoords.x; // console.log("caretPos: " + caretPos);

      dFromC = screenCenter - caretPos; // console.log("dFromC: " + dFromC);
      let pFromC = Math.round((caretPos / screenCenter) * 100) / 100;
      if (pFromC < 1) {
      } else if (pFromC > 1) {
        pFromC -= 2;
        pFromC = Math.abs(pFromC);
      }

      eyeDistH = -dFromC * 0.05;
      if (eyeDistH > eyeMaxHorizD) {
        eyeDistH = eyeMaxHorizD;
      } else if (eyeDistH < -eyeMaxHorizD) {
        eyeDistH = -eyeMaxHorizD;
      }

      const eyeLCoords = { x: svgCoords.x + 84, y: svgCoords.y + 66 };
      const eyeRCoords = { x: svgCoords.x + 113, y: svgCoords.y + 66 };
      // var noseCoords = {x: svgCoords.x + 97, y: svgCoords.y + 81};
      const mouthCoords = { x: svgCoords.x + 100, y: svgCoords.y + 100 };
      const eyeLAngle = getAngle(
        eyeLCoords.x,
        eyeLCoords.y,
        emailCoords.x + caretCoords.x,
        emailCoords.y + 25,
      );
      const eyeLX = Math.cos(eyeLAngle) * eyeMaxHorizD;
      const eyeLY = Math.sin(eyeLAngle) * eyeMaxVertD;
      const eyeRAngle = getAngle(
        eyeRCoords.x,
        eyeRCoords.y,
        emailCoords.x + caretCoords.x,
        emailCoords.y + 25,
      );
      const eyeRX = Math.cos(eyeRAngle) * eyeMaxHorizD;
      const eyeRY = Math.sin(eyeRAngle) * eyeMaxVertD;
      // var noseAngle = getAngle(noseCoords.x, noseCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
      // var noseX = Math.cos(noseAngle) * noseMaxHorizD;
      // var noseY = Math.sin(noseAngle) * noseMaxVertD;
      const mouthAngle = getAngle(
        mouthCoords.x,
        mouthCoords.y,
        emailCoords.x + caretCoords.x,
        emailCoords.y + 25,
      );
      const mouthX = Math.cos(mouthAngle) * mouthMaxHorizD;
      const mouthY = Math.sin(mouthAngle) * mouthMaxVertD;
      const mouthR = Math.cos(mouthAngle) * 6;
      // var chinX = mouthX * .8;
      // var chinY = mouthY * .5;
      // var chinS = 1 - ((dFromC * .15) / 100);
      // if(chinS > 1) {chinS = 1 - (chinS - 1);}
      // var faceX = mouthX * .3;
      // var faceY = mouthY * .4;
      // var faceSkew = Math.cos(mouthAngle) * 5;
      // var eyebrowSkew = Math.cos(mouthAngle) * 25;
      // var outerEarX = Math.cos(mouthAngle) * 4;
      // var outerEarY = Math.cos(mouthAngle) * 5;
      // var hairX = Math.cos(mouthAngle) * 6;
      // var hairS = 1.2;

      gsap.to(eyeL, 1, { x: -eyeLX, y: -eyeLY, ease: Expo.easeOut });
      gsap.to(eyeR, 1, { x: -eyeRX, y: -eyeRY, ease: Expo.easeOut });
      // gsap.to(nose, 1, {x: -noseX, y: -noseY, rotation: mouthR, transformOrigin: "center center", ease: Expo.easeOut});
      gsap.to(mouth, 1, {
        x: -mouthX,
        y: -mouthY,
        rotation: mouthR,
        transformOrigin: 'center center',
        ease: Expo.easeOut,
      });
      // gsap.to(chin, 1, {x: -chinX, y: -chinY, scaleY: chinS, ease: Expo.easeOut});
      // gsap.to(face, 1, {x: -faceX, y: -faceY, skewX: -faceSkew, transformOrigin: "center top", ease: Expo.easeOut});
      // gsap.to(eyebrow, 1, {x: -faceX, y: -faceY, skewX: -eyebrowSkew, transformOrigin: "center top", ease: Expo.easeOut});
      // gsap.to(outerEarL, 1, {x: outerEarX, y: -outerEarY, ease: Expo.easeOut});
      // gsap.to(outerEarR, 1, {x: outerEarX, y: outerEarY, ease: Expo.easeOut});
      // gsap.to(earHairL, 1, {x: -outerEarX, y: -outerEarY, ease: Expo.easeOut});
      // gsap.to(earHairR, 1, {x: -outerEarX, y: outerEarY, ease: Expo.easeOut});
      // gsap.to(hair, 1, {x: hairX, scaleY: hairS, transformOrigin: "center bottom", ease: Expo.easeOut});
      //
      document.body.removeChild(div);
    }

    function onEmailInput(e) {
      getCoord(e);
      const { value } = e.target;
      curEmailIndex = value.length;

      // very crude email validation for now to trigger effects
      if (curEmailIndex > 0) {
        if (mouthStatus == 'small') {
          mouthStatus = 'medium';
          gsap.to([mouthBG, mouthOutline, mouthMaskPath], 1, {
            morphSVG: mouthMediumBG,
            shapeIndex: 8,
            ease: Expo.easeOut,
          });
          gsap.to(tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
          gsap.to(tongue, 1, { x: 0, y: 1, ease: Expo.easeOut });
          // gsap.to([eyeL, eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
        }
        if (value.includes('@')) {
          mouthStatus = 'large';
          gsap.to([mouthBG, mouthOutline, mouthMaskPath], 1, {
            morphSVG: mouthLargeBG,
            ease: Expo.easeOut,
          });
          gsap.to(tooth, 1, { x: 3, y: -2, ease: Expo.easeOut });
          gsap.to(tongue, 1, { y: 2, ease: Expo.easeOut });
          // gsap.to([eyeL, eyeR], 1, {scaleX: .65, scaleY: .65, ease: Expo.easeOut, transformOrigin: "center center"});
        } else {
          mouthStatus = 'medium';
          gsap.to([mouthBG, mouthOutline, mouthMaskPath], 1, {
            morphSVG: mouthMediumBG,
            ease: Expo.easeOut,
          });
          gsap.to(tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
          gsap.to(tongue, 1, { x: 0, y: 1, ease: Expo.easeOut });
          // gsap.to([eyeL, eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
        }
      } else {
        mouthStatus = 'small';
        gsap.to([mouthBG, mouthOutline, mouthMaskPath], 1, {
          morphSVG: mouthSmallBG,
          shapeIndex: 8,
          ease: Expo.easeOut,
        });
        gsap.to(tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
        gsap.to(tongue, 1, { y: 0, ease: Expo.easeOut });
        // gsap.to([eyeL, eyeR], 1, {scaleX: 1, scaleY: 1, ease: Expo.easeOut});
      }
    }

    function onEmailFocus(e) {
      e.target.parentElement.classList.add('focusWithText');
      getCoord();
    }

    function onEmailBlur(e) {
      if (e.target.value == '') {
        e.target.parentElement.classList.remove('focusWithText');
      }
      resetFace();
    }

    function onPasswordFocus(e) {
      coverEyes();
    }

    function onPasswordBlur(e) {
      uncoverEyes();
    }

    function coverEyes() {
      gsap.to(tail, 0.9, { x: -0, y: 58, rotation: 0, ease: Quad.easeOut });
      // gsap.to(armR, .45, {x: -93, y: 2, rotation: 0, ease: Quad.easeOut, delay: .1});
    }

    function uncoverEyes() {
      // gsap.to(armL, 1.35, {y: 220, ease: Quad.easeOut});
      // gsap.to(armL, 1.35, {rotation: 105, ease: Quad.easeOut, delay: .1});
      gsap.to(tail, 1.35, { y: 220, ease: Quad.easeOut });
      gsap.to(tail, 1.35, { rotation: -105, ease: Quad.easeOut, delay: 0.1 });
    }

    function resetFace() {
      gsap.to([eyeL, eyeR], 1, { x: 0, y: 0, ease: Expo.easeOut });
      // gsap.to(nose, 1, {x: 0, y: 0, scaleX: 1, scaleY: 1, ease: Expo.easeOut});
      gsap.to(mouth, 1, { x: 0, y: 0, rotation: 0, ease: Expo.easeOut });
      // gsap.to(chin, 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
      // gsap.to([face, eyebrow], 1, {x: 0, y: 0, skewX: 0, ease: Expo.easeOut});
      // gsap.to([outerEarL, outerEarR, earHairL, earHairR, hair], 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
    }

    function getAngle(x1, y1, x2, y2) {
      const angle = Math.atan2(y1 - y2, x1 - x2);
      return angle;
    }

    function getPosition(el) {
      let xPos = 0;
      let yPos = 0;

      while (el) {
        if (el.tagName == 'BODY') {
          // deal with browser quirks with body/window/document and page scroll
          const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
          const yScroll = el.scrollTop || document.documentElement.scrollTop;

          xPos += el.offsetLeft - xScroll + el.clientLeft;
          yPos += el.offsetTop - yScroll + el.clientTop;
        } else {
          // for all other non-BODY elements
          xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
          yPos += el.offsetTop - el.scrollTop + el.clientTop;
        }

        el = el.offsetParent;
      }
      return {
        x: xPos,
        y: yPos,
      };
    }

    email.addEventListener('focus', onEmailFocus);
    email.addEventListener('blur', onEmailBlur);
    email.addEventListener('input', onEmailInput);
    password.addEventListener('focus', onPasswordFocus);
    password.addEventListener('blur', onPasswordBlur);
    // gsap.set(armL, {x: -93, y: 220, rotation: 105, transformOrigin: "top left"});
    gsap.set(tail, { x: -93, y: 220, rotation: -105, transformOrigin: 'top right ' });
  }, []);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <form onSubmit={submitHandler}>
        <div className="svgContainer">
          <svg
            className="mySVG"
            width="220px"
            height="200px"
            viewBox="0 0 200 220"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <rect id="path-1" x="31" y="152" width="72" height="47" />
              <rect id="path-2" x="0" y="22" width="134" height="133" rx="10" />
            </defs>

            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="STILL" transform="translate(0.000000, 3.000000)">
                <ellipse
                  id="Oval-3"
                  stroke="#491F1F"
                  strokeWidth="4"
                  fill="#B8E986"
                  cx="101"
                  cy="189.5"
                  rx="36"
                  ry="8.5"
                />
                <g id="Rectangle-2">
                  <use fill="#B8E986" fillRule="evenodd" xmlnsXlink="#path-1" />
                  <rect
                    stroke="#491F1F"
                    strokeWidth="5"
                    x="33.5"
                    y="154.5"
                    width="67"
                    height="42"
                  />
                </g>
                <g id="Rectangle">
                  <use fill="#B8E986" fillRule="evenodd" xmlnsXlink="#path-2" />
                  <rect
                    stroke="#491F1F"
                    strokeWidth="5"
                    x="2.5"
                    y="24.5"
                    width="129"
                    height="128"
                    rx="6"
                  />
                </g>
                <path
                  d="M155,39 C155,41.8757891 147.666667,46.5424558 132,53 L132,25 C147.666667,31.9535985 155,36.6202652 155,39 Z"
                  id="Triangle"
                  stroke="#491F1F"
                  strokeWidth="5"
                  fill="#F5A623"
                />
                <path
                  d="M156,69 C156,71.8757891 148.666667,76.5424558 132,83 L132,55 C148.666667,61.9535985 156,66.6202652 156,69 Z"
                  id="Triangle"
                  stroke="#491F1F"
                  strokeWidth="5"
                  fill="#F5A623"
                />
                <path
                  d="M156,100 C156,102.875789 148.666667,107.542456 132,114 L132,86 C148.666667,92.9535985 156,97.6202652 156,100 Z"
                  id="Triangle"
                  stroke="#491F1F"
                  strokeWidth="5"
                  fill="#F5A623"
                />
                <path
                  d="M155,132 C155,134.875789 147.666667,139.542456 132,146 L132,118 C147.666667,124.953598 155,129.620265 155,132 Z"
                  id="Triangle"
                  stroke="#491F1F"
                  strokeWidth="5"
                  fill="#F5A623"
                />
                <path
                  d="M113,161.5 C113,162.835188 110,165.001854 104,168 L104,155 C110,158.228456 113,160.395123 113,161.5 Z"
                  id="Triangle"
                  stroke="#491F1F"
                  strokeWidth="5"
                  fill="#F5A623"
                />
                <path
                  d="M112,175.5 C112,176.835188 109,179.001854 103,182 L103,169 C109,172.228456 112,174.395123 112,175.5 Z"
                  id="Triangle"
                  stroke="#491F1F"
                  strokeWidth="5"
                  fill="#F5A623"
                />
                <path
                  d="M126,11 C126,13.8757891 118.666667,18.5424558 102,25 L102,-3 C118.666667,3.95359848 126,8.62026515 126,11 Z"
                  id="Triangle"
                  stroke="#491F1F"
                  strokeWidth="5"
                  fill="#F5A623"
                  transform="translate(115.000000, 11.000000) rotate(270.000000) translate(-115.000000, -11.000000) "
                />
                <path
                  d="M92,11 C92,13.8757891 84.6666667,18.5424558 68,25 L68,-3 C84.6666667,3.95359848 92,8.62026515 92,11 Z"
                  id="Triangle"
                  stroke="#491F1F"
                  strokeWidth="5"
                  fill="#F5A623"
                  transform="translate(81.000000, 11.000000) rotate(270.000000) translate(-81.000000, -11.000000) "
                />

                <g className="eyeR" id="rightEye">
                  <ellipse id="Oval" fill="#491F1F" cx="102" cy="100.5" rx="12" ry="19.5" />
                  <ellipse
                    id="Oval-2"
                    fill="#EFA0C0"
                    stroke="#491F1F"
                    strokeWidth="2"
                    cx="111.5"
                    cy="120"
                    rx="4.5"
                    ry="3"
                  />
                </g>
                <g className="eyeL" id="leftEye">
                  <ellipse id="Oval" fill="#491F1F" cx="33" cy="100.5" rx="12" ry="19.5" />
                  <ellipse
                    id="Oval-2"
                    fill="#EFA0C0"
                    stroke="#491F1F"
                    strokeWidth="2"
                    cx="24.5"
                    cy="120"
                    rx="4.5"
                    ry="3"
                  />
                </g>
                <path
                  d="M81,162 C81.1065474,169.333333 83.0894673,173 86.9487597,173 C90.7984829,173 92.815563,169.333333 93,162"
                  id="leftArm"
                  stroke="#491F1F"
                  strokeWidth="4"
                  strokeLinecap="square"
                  transform="translate(87.000000, 167.500000) rotate(44.000000) translate(-87.000000, -167.500000) "
                />
                <path
                  d="M42,162 C42.1065474,169.333333 44.0894673,173 47.9487597,173 C51.7984829,173 53.815563,169.333333 54,162"
                  id="rightArm"
                  stroke="#491F1F"
                  strokeWidth="4"
                  strokeLinecap="square"
                  transform="translate(48.000000, 167.500000) rotate(-52.000000) translate(-48.000000, -167.500000) "
                />

                <g className="mouth">
                  <path
                    className="mouthBG"
                    fill="#491F1F"
                    d="M69 126c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5z"
                  />

                  <path
                    style={{ display: 'none' }}
                    className="mouthSmallBG"
                    fill="#617E92"
                    d="M69,126c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5z"
                  />
                  <path
                    style={{ display: 'none' }}
                    className="mouthMediumBG"
                    d="M67,127c-4.5,0-8.2-3.7-8.2-8.2v-2c0-1.2,1-2.2,2.2-2.2h22c1.2,0,2.2,1,2.2,2.2v2 c0,4.5-3.7,8.2-8.2,8.2H70z"
                  />
                  <path
                    style={{ display: 'none' }}
                    className="mouthLargeBG"
                    d="M69,133c-9 0-16.2-7.3-16.2-16.2 0-2.3 1.9-4.2 4.2-4.2h24c2.3 0 4.2 1.9 4.2 4.2 0 9-7.2 16.2-16.2 16.2z"
                    fill="#617e92"
                    stroke="#3a5e77"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                  <defs>
                    <path
                      id="mouthMaskPath"
                      d="M69,124c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5z"
                    />
                  </defs>
                  <clipPath id="mouthMask">
                    <use xmlnsXlink="#mouthMaskPath" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#mouthMask)">
                    <g className="tongue">
                      <circle cx="69" cy="124" r="8" fill="#cc4a6c" />
                      <ellipse
                        className="tongueHighlight"
                        cx="80"
                        cy="113"
                        rx="3"
                        ry="1.5"
                        opacity=".1"
                        fill="#fff"
                      />
                    </g>
                  </g>
                  <polygon
                    clipPath="url(#mouthMask)"
                    className="tooth"
                    id="Triangle-2"
                    stroke="#491F1F"
                    strokeWidth="2"
                    fill="#FFFFFF"
                    // transform="matrix(1, 0, 0, 1, 4, -11);"
                    points="75.5 128 79 134 72 134"
                  />

                  <path
                    clipPath="url(#mouthMask)"
                    className="tooth"
                    style={{ fill: '#FFFFFF' }}
                    d="M 82 120 h -3 c 3.9 2 -1 -0.9 -2 -2 v -2 h 7 v 1"
                  />
                  <path
                    className="mouthOutline"
                    fill="none"
                    stroke="#491F1F"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    d="M69,124c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5z"
                    id="Oval-5-Copy"
                  />
                  <path
                    className="mouthOutline"
                    fill="none"
                    stroke="#491F1F"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    d="M 69 124 c -4.5 0 -8.2 -3.7 -8.2 -8.2 v -2 c 0 -1.2 1 -2.2 2.2 -2.2 h 22 c 1.2 0 2.2 1 2.2 2.2 v 2 c 0 4.5 -3.7 8.2 -8.2 8.2 H 75 Z"
                    id="Oval-5-Copy"
                  />
                </g>

                <g className="tail" id="tail" stroke="#491F1F" strokeWidth="5">
                  <path
                    d="M186,20 C186,22.8757891 178.666667,27.5424558 164,34 L164,6 C178.666667,12.9535985 186,17.6202652 186,20 Z"
                    id="Triangle"
                    fill="#F5A623"
                    transform="translate(175.000000, 20.000000) rotate(280.000000) translate(-175.000000, -20.000000) "
                  />
                  <path
                    d="M159,15 C159,17.8757891 151.666667,22.5424558 137,29 L137,1 C151.666667,7.95359848 159,12.6202652 159,15 Z"
                    id="Triangle"
                    fill="#F5A623"
                    transform="translate(148.000000, 15.000000) rotate(276.000000) translate(-148.000000, -15.000000) "
                  />
                  <path
                    d="M129,12 C129,14.8757891 121.666667,19.5424558 107,26 L107,-2 C121.666667,4.95359848 129,9.62026515 129,12 Z"
                    id="Triangle"
                    fill="#F5A623"
                    transform="translate(118.000000, 12.000000) rotate(273.000000) translate(-118.000000, -12.000000) "
                  />
                  <path
                    d="M98,12 C98,14.6703756 91.3333333,19.003709 78,25 L78,-1 C91.3333333,5.45691288 98,9.79024621 98,12 Z"
                    id="Triangle"
                    fill="#F5A623"
                    transform="translate(88.000000, 12.000000) rotate(267.000000) translate(-88.000000, -12.000000) "
                  />
                  <path
                    d="M69,16 C69,18.4649621 63,22.4649621 51,28 L51,4 C63,9.96022727 69,13.9602273 69,16 Z"
                    id="Triangle"
                    fill="#F5A623"
                    transform="translate(60.000000, 16.000000) rotate(259.000000) translate(-60.000000, -16.000000) "
                  />
                  <path
                    d="M43.4968072,24.1243526 C43.4968072,26.3839012 38.1634738,30.0505679 27.4968072,35.1243526 L27.4968072,13.1243526 C38.1634738,18.5878943 43.4968072,22.2545609 43.4968072,24.1243526 Z"
                    id="Triangle"
                    fill="#F5A623"
                    transform="translate(35.496807, 24.124353) rotate(248.000000) translate(-35.496807, -24.124353) "
                  />
                  <path
                    d="M106.991251,-46.8881541 C112.548059,-46.8881541 135.571892,-19.8834196 139.208722,22.9789431 C140.842446,42.2334184 139.917087,64.4026477 134.648702,100.853692 C132.985201,112.363171 128.579716,131.857436 121.432247,159.336489 L68.646267,155.712718 C90.7925534,97.2394715 102.982433,55.2726479 105.215906,29.8122473 C109.442759,-18.3716173 101.372769,-46.8881541 106.991251,-46.8881541 Z"
                    id="Triangle-3"
                    fill="#B8E986"
                    transform="translate(104.293582, 56.224168) rotate(-92.000000) translate(-104.293582, -56.224168) "
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>

        <div className="inputGroup inputGroup1">
          <label htmlFor="email1">Email</label>
          <input type="text" id="email" className="email" name='email' maxLength={256} />

          <span className="indicator" />
        </div>

        <div className="inputGroup inputGroup2">
          <label htmlFor="password" >Password</label>
          <input type="password" id="password" name="password" className="password" />
        </div>

        <div className="inputGroup inputGroup3">
          <button id="login" type='submit'>Log in</button>
        </div>
      </form>
    </div>
  );
}

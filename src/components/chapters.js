import React from "react"

import "./layout.css"
import UCLA from '../images/ucla.jpg';
import UCB from '../images/cal.jpg';
import USC from '../images/usc.jpg';
import Stanford from '../images/stanford.jpg';
import UCSB from '../images/ucsb.jpg';
import UMich from '../images/umich.jpg';

const Chapters = () => (
  <div
    style={{
      display: `flex`, 
      flexDirection: `column`,
    }}
    id="chapterContainer"
  >
    <ChapterLink imgsrc={UCLA} chapter='UCLA' link="https://uclasep.com/" />
    <ChapterLink imgsrc={UCB} chapter='UC Berkeley' link="http://ucberkeleysep.com/" />
    <ChapterLink imgsrc={USC} chapter='University of Southern California' link="https://sigmaetapi.org/" />
    <ChapterLink imgsrc={Stanford} chapter='Stanford' link={null} />
    <ChapterLink imgsrc={UCSB} chapter='UCSB' link="http://ucsbsep.com/index.html" />
    <ChapterLink imgsrc={UMich} chapter='University of Michigan' link="https://www.umichsep.com/" />
  </div>
)

const ChapterLink = ({ imgsrc, link, chapter }) => (
  <>
    <a 
      className="chapterLink" 
      style={{ position: 'relative' }} 
      href={link} target="_blank" 
      rel="noopener noreferrer"
    >
      <img 
        style={{
          width: '100%',
          objectFit: 'cover'
        }}
        src={imgsrc} 
      />
      <div className="overlay">
        <div className="overlayText">{chapter}</div>
      </div>
    </a>
    <p className="mobile_chapterName">{chapter}</p>
  </>
)

export default Chapters

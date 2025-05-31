import React, { useState } from 'react';

function About() {
  const [activeSection, setActiveSection] = useState('skills');

  const toggleSection = (section) => {
    // If the same section clicked, close it; else open clicked section
    setActiveSection(prev => (prev === section ? null : section));
  };

  return (
    <>
    <div className='tab-headers'>
    <div className='about-section'>
      <h1 className='text-danger'>About Me</h1>
      <p>
        Hi there! I'm <strong>Yamuna</strong>, a passionate and dedicated Computer Science student currently pursuing my <strong>B.Tech 2nd year</strong> at <strong>Gayatri Vidya Parishad College of Engineering for Women</strong>.
      </p>

      <p>
        I have a deep interest in frontend development. I enjoy working with technologies like <strong>HTML, CSS, JavaScript, and React</strong>. I'm also strengthening my programming fundamentals with <strong>Java</strong> and practicing <strong>Data Structures & Algorithms (DSA)</strong> for interview preparation.
       I'm excited to continue learning, growing and expanding my skill set. I’m always open to new challenges and opportunities that push me to become a better developer and individual.
      
      </p>

      {/* Headings always visible */}
      <div  style={{ display: 'flex', gap: '30px', cursor: 'pointer', marginBottom: '10px' }}>
        <h5
          onClick={() => toggleSection('skills')} 
          className={activeSection === 'skills' ? 'active-link' : ''}
        >
          Skills 
        </h5>
       
        <h5
          onClick={() => toggleSection('achievements')}
           className={activeSection === 'achievements' ? 'active-link' : ''}
          
        >
          Achievements
        </h5>
         <h5
          onClick={() => toggleSection('education')}
           className={activeSection === 'education' ? 'active-link' : ''}
        >
          Education
        </h5>
      </div>

      {/* Show content of only the active section */}
      {activeSection === 'skills' && (
        <ul style={{ marginTop: 0, marginBottom: '20px',color:'#ea763f' , listStyleType: 'none'}}>
          <li>HTML 5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Java Programming</li>
          <li>Data Structures and Algorithms (DSA)</li>
        </ul>
      )}
      {activeSection === 'achievements' && (
  <div style={{ marginTop: 0, marginBottom: '20px', color: 'white' }}>
    <p>
      <strong style={{color:'#ea763f'}}>Topper in NPTEL Java Programming Course</strong> — I was honored to achieve the highest score in this rigorous online course, demonstrating my strong grasp of Java fundamentals and dedication to learning.
    </p>
    <p>
      I am passionate about programming and always strive to excel in my studies and practical skills.
    </p>
  </div>
)}

       {activeSection === 'education' && (
        <ul style={{ marginTop: 0, marginBottom: '20px' ,color:'#ea763f'}}>
          <h6>Gayatri Vidya Parishad College of Engineering For Women</h6>
           <p style={{color:'white'}}>2023-2027</p>
           <h6>Sri Chaitanya Junior College</h6>
           <p style={{color:'white'}}>Grad.2023</p>
           <h6>Kendriya Vidyalaya No-1</h6>
           <p style={{color:'white'}}>Grad.2021</p>
        </ul>
      )}
    {/* {activeSection === 'certifications' && (
  <ul style={{ marginTop: 0, marginBottom: '20px', color: '#ea763f', listStyleType: 'none' }}>
    <li>
      <a
        href="/images/java.png"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#ea763f', textDecoration: 'none' }}
      >
        NPTEL Java Programming Certificate
      </a>
    </li>
    <li>
      <a
        href="/certificates/dbms.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#ea763f', textDecoration: 'none' }}
      >
        NPTEL Database Management Systems (DBMS) Certificate
      </a>
    </li>
  </ul>
)}*/}
    </div>
    </div>
    </>
  );
}

export default About; 
export default function Skills() {
  return (
    <div className="skills-section">
        <h1 className="he-right">Skills</h1>
      <section className="skills-column"> 
        
        <h2 className="tech">TECHNICAL</h2>
        <ul>
          <li className="p">Programming Languages: C, Python, MySQL, Java</li>
          <li className="p">Cyber Security: SOC level 1</li>
          <li className="p">Game Development: AR, VR (Unity)</li>
          <li className="p">Web Development: HTML, CSS, JavaScript, React</li>
          <li className="p">3D Modelling: Blender</li>  
        </ul>
      </section>

      <section className="skills-column">
        <h2 className="tech">SOFT SKILLS</h2>
        <ul>        
          <li className="p">Problem Solving</li>
          <li className="p">Teamwork</li>
          <li className="p">Communication</li>    
          <li className="p">Adaptability</li>
          <li className="p">Time Management</li>
        </ul>
      </section>
    </div>
  );
}

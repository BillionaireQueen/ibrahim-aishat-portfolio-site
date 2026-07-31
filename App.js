const {useEffect, useState} = React;
const nav = ['About','Skills','Projects','Certifications','Education','Experience','Contact'];
const skillGroups = [
  ['AI & Automation',['AI Workflow Automation','Artificial Intelligence','n8n','Business Process Automation']],
  ['No-Code & Development',['Google Apps Script','Firebase','API Integrations','Webhooks']],
  ['Creative Practice',['Resin Art','Custom Crafts','Content Creation','Digital Entrepreneurship']],
  ['Communication & Community',['Technical Writing','Public Speaking','Podcast Hosting','Women’s Empowerment']]
];
const projects = [
  ['Automation','AI Bakery Assistant','An AI-powered customer support assistant that streamlines customer enquiries and improves response efficiency for Aish’s Bakery.',['AI','n8n','Firebase','Webhooks']],
  ['Automation','AI Resin Craft Assistant','An intelligent virtual assistant that supports customers, recommends products, and creates a more engaging shopping experience.',['AI','Customer Experience','Automation']],
  ['Systems','Event Ticket Automation','A Google Apps Script system that creates unique PDF tickets, emails attendees, saves files to Drive, and prevents duplicate generation.',['Apps Script','Google Drive','PDF']]
];
const certs = [
  ['University of Ilorin','Bachelor of Science (B.Sc.) in Plant Biology','Academic qualification'],
  ['World Day for Safety & Health at Work','Certificate of Participant','2025'],
  ['World Day for Safety & Health at Work','Certificate of Participant','2026'],
  ['Formazione Business School, Abuja','GFBS Certificate','Professional development']
];
const education = [
  ['University of Ilorin (UNILORIN)','Bachelor of Science (B.Sc.) in Plant Biology','University'],
  ['Onward College','Senior Secondary Education','Secondary school'],
  ['TOLA Nursery & Primary School','Primary Education','Foundation']
];
const experience = [
  ['AI Workflow Automation Developer','Independent / Client Projects','Present',['Design AI-powered workflow systems for business operations.','Connect APIs, no-code tools, Firebase, and automation platforms.','Build useful solutions that reduce manual work and improve service.']],
  ['Founder & Resin Artist',"Aish's Resin Craft",'Present',['Create custom gifts, keepsakes, home decor, and corporate pieces.','Translate client ideas into thoughtful, handcrafted resin products.','Grow a creative brand through craft and customer connection.']],
  ['Podcast Co-host','Lift Me Up Session','Present',['Facilitate thoughtful, women-focused conversations.','Create a supportive space for growth, purpose, health, and leadership.','Help turn shared experiences into practical encouragement.']]
];
function App(){
 const [open,setOpen]=useState(false),[active,setActive]=useState('About'),[sent,setSent]=useState(false);
 useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.dataset.nav)}),{rootMargin:'-35% 0px -55% 0px'});document.querySelectorAll('[data-nav]').forEach(e=>observer.observe(e));return()=>observer.disconnect()},[]);
 const go=id=>{setOpen(false);document.getElementById(id.toLowerCase()).scrollIntoView({behavior:'smooth'})};
 const submit=e=>{e.preventDefault(); const d=new FormData(e.target); window.location.href=`mailto:ibrahimtolaniaishat@gmail.com?subject=${encodeURIComponent('Portfolio enquiry from '+d.get('name'))}&body=${encodeURIComponent(d.get('message')+'\n\nReply to: '+d.get('email'))}`; setSent(true);};
 return <><header className="nav"><a className="logo" href="#top">IAO</a><button className="menu" aria-label="Open menu" onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button><nav className={open?'links open':'links'}>{nav.map(x=><button onClick={()=>go(x)} className={active===x?'active':''} key={x}>{x}</button>)}</nav><button className="hire" onClick={()=>go('Contact')}>Hire me <span>↗</span></button></header>
 <main id="top"><section className="hero"><div className="hero-copy"><p className="kicker">AI AUTOMATION SPECIALIST · NIGERIA</p><h1>Ibrahim Aishat <em>Omotolani.</em></h1><p className="lead">Building smart technology, inspiring people, and creating beautiful art.</p><p className="intro">AI Workflow Automation Developer, Resin Artist, Content Creator, Technical Author, and Digital Entrepreneur.</p><div className="actions"><button className="primary" onClick={()=>go('Projects')}>View projects <span>↓</span></button><a className="secondary" href="mailto:ibrahimtolaniaishat@gmail.com">Start a conversation ↗</a></div></div><div className="hero-image"><img src="ibrahim-aishat-omotolani.png" alt="Ibrahim Aishat Omotolani"/><div className="focus"><small>FOCUS</small><strong>AI +<br/>impact</strong></div></div></section>
 <Section id="about" label="About"><div className="about"><h2>A multidisciplinary builder with a <em>human point of view.</em></h2><p>I combine technology, creativity, education, and entrepreneurship to solve problems and create meaningful impact. I build intelligent systems that make businesses more efficient, create resin pieces that carry a story, and use conversations and practical writing to help people grow.</p></div><div className="stats"><Stat n="5" t="Creative & technical roles"/><Stat n="3" t="AI systems in portfolio"/><Stat n="1" t="Mission: meaningful impact"/></div></Section>
 <Section id="skills" label="Skills"><h2>Tools for <em>useful change.</em></h2><div className="skills">{skillGroups.map(([title,items])=><article className="skill" key={title}><h3>{title}</h3>{items.map(i=><span key={i}>{i}</span>)}</article>)}</div></Section>
 <Section id="projects" label="Projects"><h2>Built to work <em>beautifully.</em></h2><div className="projects">{projects.map(([category,title,desc,tags],i)=><article className={'project p'+i} key={title}><div className="project-art"><span>0{i+1}</span><b>{category}</b></div><div className="project-body"><small>{category}</small><h3>{title}</h3><p>{desc}</p><div>{tags.map(t=><span className="tag" key={t}>{t}</span>)}</div></div></article>)}</div></Section>
 <Section id="certifications" label="Certifications"><h2>Learning with <em>intention.</em></h2><div className="certs">{certs.map(([issuer,name,date],i)=><article className="cert" key={name}><div className="certificate">✦<span>IAO</span><small>Certificate</small></div><small>{issuer}</small><h3>{name}</h3><p>{date}</p></article>)}</div></Section>
 <Section id="education" label="Education"><h2>Curiosity has always <em>led the way.</em></h2><div className="education">{education.map(([school,degree,note],i)=><article key={school}><span>0{i+1}</span><h3>{school}</h3><p>{degree}</p><small>{note}</small></article>)}</div></Section>
 <Section id="experience" label="Experience"><h2>Work rooted in <em>purpose.</em></h2><div className="experience">{experience.map(([role,company,period,bullets])=><article key={role}><div><span>{period}</span><h3>{role}</h3><b>{company}</b></div><ul>{bullets.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></Section>
 <Section id="contact" label="Contact"><div className="contact"><div><h2>Let’s make something <em>that matters.</em></h2><p>I’m open to AI automation projects, resin commissions, content partnerships, speaking engagements, podcasts, and technical writing opportunities.</p><a href="mailto:ibrahimtolaniaishat@gmail.com">ibrahimtolaniaishat@gmail.com ↗</a><a href="https://github.com/billionairequeen" target="_blank">GitHub ↗</a><a href="https://www.linkedin.com/in/aishat-omotolani-ibrahim-b92aba232/" target="_blank">LinkedIn ↗</a></div><form onSubmit={submit}><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com"/></label><label>Message<textarea required name="message" placeholder="Tell me a little about your project"/></label><button className="primary">Send message ↗</button>{sent&&<p className="success">Your email app is opening — thank you.</p>}</form></div></Section></main><footer><span className="logo">IAO</span><span>© 2026 Ibrahim Aishat Omotolani</span><a href="https://github.com/billionairequeen" target="_blank">GitHub ↗</a></footer></>}
function Section({id,label,children}){return <section id={id} data-nav={label}><div className="section-label">{label}</div>{children}</section>}; function Stat({n,t}){return <article><strong>{n}</strong><span>{t}</span></article>};
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

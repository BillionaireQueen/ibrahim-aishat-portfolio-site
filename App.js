/* ==========================================================================
   Ibrahim Aishat Omotolani — Main Portfolio Script (Browser-Native)
   ========================================================================== */

(function() {
  const { useState, useEffect, createElement: h } = React;

  // Data Definitions
  const NAV_ITEMS = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resin-art', label: 'Resin Art' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const SKILL_CATEGORIES = ['All', 'AI & Automation', 'No-Code & Systems', 'Creative Practice', 'Communication'];

  const SKILLS = [
    { title: 'AI Workflow Automation', category: 'AI & Automation', icon: '🤖', tags: ['n8n', 'Make / Zapier', 'LLMs', 'Prompt Engineering'] },
    { title: 'Artificial Intelligence', category: 'AI & Automation', icon: '🧠', tags: ['Gemini API', 'OpenAI', 'Autonomous Agents', 'RAG'] },
    { title: 'No-Code & Custom Apps', category: 'No-Code & Systems', icon: '⚡', tags: ['Google Apps Script', 'Firebase', 'Airtable', 'Webhooks'] },
    { title: 'API Integration', category: 'No-Code & Systems', icon: '🔗', tags: ['REST APIs', 'JSON Parsing', 'Authentication', 'Data Pipelines'] },
    { title: 'Resin Craft & Design', category: 'Creative Practice', icon: '🎨', tags: ['Custom Gifts', 'Floral Preservation', 'Coaster Sets', 'Home Decor'] },
    { title: 'Digital Entrepreneurship', category: 'Creative Practice', icon: '💼', tags: ['Brand Strategy', 'Product Design', 'E-commerce', 'Client Operations'] },
    { title: 'Technical Writing', category: 'Communication', icon: '✍️', tags: ['Documentation', 'Guides', 'System Specs', 'Blog Articles'] },
    { title: 'Public Speaking & Podcast', category: 'Communication', icon: '🎙️', tags: ['Lift Me Up Session', 'Women Empowerment', 'Hosting', 'Storytelling'] }
  ];

  const PROJECTS = [
    {
      id: 'n8n-gemini-chatbox',
      category: 'AI & Automation',
      title: 'n8n + Gemini AI Website Chatbox Agent',
      desc: 'A published n8n workflow agent connecting website webhooks to Google Gemini LLM with memory buffer and custom tools for automated real-time chat responses.',
      image: 'assets/n8n_website_chatbox.png',
      tags: ['n8n Cloud', 'Google Gemini AI', 'Webhooks', 'AI Agent Memory'],
      problem: 'Website visitors needed instant, context-aware answers to inquiries without requiring human customer support agents on call 24/7.',
      solution: 'Built a custom n8n cloud workflow featuring Webhook POST triggers, an AI Agent node powered by Google Gemini Chat Model, conversation memory, and automated response payloads back to the chatbox.',
      outcomes: ['Sub-second response time for website chat inquiries', 'Maintains contextual conversation history via n8n Memory node', '100% automated handling of standard visitor questions']
    },
    {
      id: 'make-applicant-pipeline',
      category: 'Business Automation',
      title: 'Make.com Candidate & Lead Pipeline',
      desc: 'An automated Make.com scenario watching Google Sheets for new applicants, performing deduplication logic via router filters, logging entries, and dispatching Gmail notifications.',
      image: 'assets/make_applicant_automation.png',
      tags: ['Make.com', 'Google Sheets API', 'Gmail API', 'Router Logic'],
      problem: 'Processing incoming form submissions manually led to duplicate candidate records, delayed applicant follow-up, and tracking errors.',
      solution: 'Designed a Make.com automation scenario that watches new rows, searches database records to detect duplicates via a Router node, routes clean leads, dispatches tailored Gmail notifications, and updates pipeline status.',
      outcomes: ['Zero duplicate entries in applicant tracking system', 'Instant automated Gmail confirmation sent upon form submission', 'Automated 15-minute scheduled execution cycle']
    },
    {
      id: 'bakery-ai',
      category: 'AI & Automation',
      title: 'AI Bakery Assistant',
      desc: 'An AI-powered customer support assistant that streamlines customer enquiries and improves response efficiency for Aish’s Bakery.',
      image: 'assets/project_bakery_ai.jpg',
      tags: ['AI / LLM', 'n8n', 'Firebase', 'Webhooks'],
      problem: 'Aish’s Bakery faced high volumes of repetitive inquiries regarding order status, menu pricing, custom cake options, and delivery schedules.',
      solution: 'Built an intelligent virtual assistant powered by n8n workflows and AI LLMs connected to Firebase to query order databases and answer queries 24/7.',
      outcomes: ['95% reduction in customer response latency', 'Handled 500+ monthly customer conversations automatically', 'Seamless escalation to human support for custom orders']
    },
    {
      id: 'resin-bot',
      category: 'AI & E-Commerce',
      title: 'AI Resin Craft Assistant',
      desc: 'An intelligent virtual assistant that supports customers, recommends products, and creates a more engaging shopping experience.',
      image: 'assets/project_resin_bot.jpg',
      tags: ['AI Agent', 'Customer Experience', 'Product Recommender'],
      problem: 'Custom resin art pieces require understanding client preferences (colors, dried flowers, personalization text), leading to long back-and-forth messaging.',
      solution: 'Designed a conversational assistant that asks guided questions, showcases relevant resin portfolio pieces, and generates pre-filled custom order specifications.',
      outcomes: ['3x faster order specification collection', 'Increased custom gift inquiry conversions', 'Delighted buyers with personalized recommendations']
    },
    {
      id: 'ticket-auto',
      category: 'Systems Automation',
      title: 'Event Ticket Automation System',
      desc: 'A Google Apps Script system that creates unique PDF tickets, emails attendees, saves files to Drive, and prevents duplicate generation.',
      image: 'assets/project_ticket_auto.jpg',
      tags: ['Apps Script', 'Google Drive', 'PDF Generation', 'Gmail API'],
      problem: 'Manual event registration ticket generation was error-prone, slow, and risked ticket duplicating or lost email dispatches.',
      solution: 'Created an automated system using Google Apps Script that triggers upon Form response, generates personalized PDF passes with unique barcodes, stores them in Drive, and emails attendees.',
      outcomes: ['100% automated registration workflow', 'Over 1,000+ tickets generated without duplicates', 'Instant delivery within seconds of submission']
    },
    {
      id: 'crm-pipeline',
      category: 'Lead Automation',
      title: 'Automated Lead Nurturing & CRM Pipeline',
      desc: 'An end-to-end sales lead processing engine integrating Webhooks, Airtable CRM, and automated email follow-up sequences.',
      image: 'assets/project_bakery_ai.jpg',
      tags: ['Webhooks', 'Airtable', 'SendGrid', 'CRM'],
      problem: 'Inbound lead inquiries from web forms were sitting unaddressed for hours, resulting in missed client opportunities.',
      solution: 'Developed an automated pipeline that parses incoming webhooks, categorizes lead priority using AI scoring, logs leads into Airtable, and dispatches customized email sequences.',
      outcomes: ['Instant 60-second follow-up response time', 'Zero missed sales leads', 'Organized client database with full status history']
    }
  ];

  const RESIN_PIECES = [
    {
      title: 'Handcrafted Pressed Floral Coaster Set',
      desc: 'Luxury crystal-clear resin coasters featuring preserved botanical flowers and 24k gold leaf foil accents.',
      image: 'assets/resin_craft_1.jpg',
      tag: 'Coaster Collection'
    },
    {
      title: 'Emerald & Gold Ocean Wave Wall Clock',
      desc: 'Statement artisan wall clock and matching vanity tray set with deep emerald fluid resin and liquid gold metallic waves.',
      image: 'assets/resin_craft_2.jpg',
      tag: 'Home Decor'
    }
  ];

  const CERTS = [
    { issuer: 'University of Ilorin', title: 'Bachelor of Science (B.Sc.) in Plant Biology', date: 'Academic Degree Qualification', note: 'Strong foundation in biological sciences, research methodology, and analytical thinking.' },
    { issuer: 'World Day for Safety & Health at Work', title: 'Certificate of Participant (2025)', date: 'Issued April 2025', note: 'Recognized for active participation in global occupational safety and workplace health initiatives.' },
    { issuer: 'World Day for Safety & Health at Work', title: 'Certificate of Participant (2026)', date: 'Issued April 2026', note: 'Continued commitment to workplace health standards and safety best practices.' },
    { issuer: 'Formazione Business School, Abuja', title: 'GFBS Professional Certificate', date: 'Professional Development', note: 'Advanced training in business management, leadership, and operational strategies.' }
  ];

  const EDUCATION = [
    { school: 'University of Ilorin (UNILORIN)', degree: 'Bachelor of Science (B.Sc.) in Plant Biology', note: 'Comprehensive study of plant genetics, ecology, cellular biology, and research methodologies.' },
    { school: 'Onward College', degree: 'Senior Secondary Education (SSCE)', note: 'Excellence in science subjects, leadership roles, and academic awards.' },
    { school: 'TOLA Nursery & Primary School', degree: 'Primary Education', note: 'Foundational education and early creative development.' }
  ];

  const EXPERIENCE = [
    {
      role: 'AI Workflow Automation Developer',
      company: 'Independent / Client Projects',
      period: 'Present',
      bullets: [
        'Design and deploy intelligent AI-powered workflow automation systems for business operations and customer support.',
        'Integrate APIs, webhooks, Firebase, Google Apps Script, n8n, and LLM providers to eliminate manual tasks.',
        'Consult with small business owners to audit existing operations and build custom efficiency pipelines.'
      ]
    },
    {
      role: 'Founder & Resin Artist',
      company: "Aish's Resin Craft",
      period: 'Present',
      bullets: [
        'Craft custom luxury resin products, including keepsakes, floral preservation clocks, coaster sets, and corporate gifts.',
        'Manage full business lifecycle: design, client consultation, material sourcing, handcrafting, and e-commerce marketing.',
        'Built a passionate community of resin craft enthusiasts through digital storytelling and social media content.'
      ]
    },
    {
      role: 'Podcast Co-host',
      company: 'Lift Me Up Session',
      period: 'Present',
      bullets: [
        'Co-host thoughtful, women-focused conversations empowering listeners in personal growth, leadership, and health.',
        'Develop episode topics, invite guest speakers, and record impactful audio content.',
        'Foster an encouraging community space for shared experiences and practical life motivation.'
      ]
    }
  ];

  // Main App Component
  function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('iao_theme') || 'light');
    const [openMenu, setOpenMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('about');
    const [skillFilter, setSkillFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedResin, setSelectedResin] = useState(null);
    const [toastMessage, setToastMessage] = useState('');

    // Theme effect
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('iao_theme', theme);
    }, [theme]);

    // Toast helper
    const showToast = (msg) => {
      setToastMessage(msg);
      setTimeout(() => setToastMessage(''), 3500);
    };

    // Smooth scroll navigation
    const scrollToSection = (id) => {
      setOpenMenu(false);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Copy email helper
    const copyEmail = () => {
      const email = 'ibrahimtolaniaishat@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('📋 Email copied to clipboard: ' + email);
      }).catch(() => {
        showToast('Email: ' + email);
      });
    };

    // Submit form handler
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      const name = data.get('name');
      const email = data.get('email');
      const message = data.get('message');

      const mailtoUrl = `mailto:ibrahimtolaniaishat@gmail.com?subject=${encodeURIComponent('Portfolio inquiry from ' + name)}&body=${encodeURIComponent(message + '\n\nReply to: ' + email)}`;
      window.location.href = mailtoUrl;
      showToast('🚀 Opening your email client to send message...');
      form.reset();
    };

    const filteredSkills = skillFilter === 'All' ? SKILLS : SKILLS.filter(s => s.category === skillFilter);

    return h('div', { className: 'portfolio-app' },
      // Header Navigation
      h('header', { className: 'nav' },
        h('a', { className: 'logo', href: '#top', onClick: (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
          h('div', { className: 'logo-avatar' }, 'IAO'),
          h('span', null, 'Ibrahim Aishat')
        ),
        h('nav', { className: openMenu ? 'nav-links open' : 'nav-links' },
          NAV_ITEMS.map(item =>
            h('button', {
              key: item.id,
              className: activeNav === item.id ? 'active' : '',
              onClick: () => scrollToSection(item.id)
            }, item.label)
          )
        ),
        h('div', { className: 'nav-actions' },
          h('button', {
            className: 'theme-toggle',
            'aria-label': 'Toggle color theme',
            onClick: () => setTheme(theme === 'light' ? 'dark' : 'light')
          }, theme === 'light' ? '🌙' : '☀️'),
          h('a', {
            className: 'btn-hire',
            href: '#contact',
            onClick: (e) => { e.preventDefault(); scrollToSection('contact'); }
          }, 'Hire Me ', h('span', null, '↗')),
          h('button', {
            className: 'menu-toggle',
            'aria-label': 'Toggle navigation menu',
            onClick: () => setOpenMenu(!openMenu)
          }, openMenu ? '✕' : '☰')
        )
      ),

      // Main Content
      h('main', { id: 'top' },
        // Hero Section
        h('section', { className: 'container hero' },
          h('div', { className: 'hero-copy' },
            h('span', { className: 'kicker' }, '✨ AI AUTOMATION SPECIALIST · NIGERIA'),
            h('h1', null,
              'Ibrahim Aishat ',
              h('em', null, 'Omotolani.')
            ),
            h('p', { className: 'lead' }, 'Building smart technology, inspiring people, and creating beautiful art.'),
            h('p', { className: 'intro' }, 'AI Workflow Automation Developer, Resin Artist, Technical Author, Digital Entrepreneur, and Podcast Co-host.'),
            h('div', { className: 'hero-actions' },
              h('button', {
                className: 'btn-primary',
                onClick: () => scrollToSection('projects')
              }, 'View Projects ', h('span', null, '↓')),
              h('a', {
                className: 'btn-secondary',
                href: 'mailto:ibrahimtolaniaishat@gmail.com'
              }, 'Start Conversation ↗'),
              h('button', {
                className: 'btn-copy',
                onClick: copyEmail
              }, 'Copy Email 📋')
            )
          ),
          h('div', { className: 'hero-image-wrapper' },
            h('div', { className: 'hero-image-card' },
              h('img', {
                src: 'ibrahim-aishat-omotolani.png',
                alt: 'Ibrahim Aishat Omotolani'
              })
            ),
            h('div', { className: 'hero-floating-badge' },
              h('small', null, 'FOCUS'),
              h('strong', null, 'AI + impact')
            )
          )
        ),

        // About Section
        h('section', { id: 'about', className: 'container' },
          h('span', { className: 'section-tag' }, '01 · ABOUT ME'),
          h('div', { className: 'about-grid' },
            h('div', { className: 'about-text' },
              h('h2', null, 'A multidisciplinary builder with a ', h('em', null, 'human point of view.')),
              h('p', null, 'I combine technology, creativity, education, and entrepreneurship to solve real-world problems and build meaningful systems. I design intelligent AI workflows that automate business operations, handcraft resin art pieces that tell stories, and use written content and podcasts to inspire growth.'),
              h('p', null, 'With a B.Sc. in Plant Biology from the University of Ilorin, I bring a scientific, detail-oriented analytical approach to software systems, business processes, and artisan craftsmanship.'),
              h('div', { className: 'about-highlights' },
                ['AI Workflow Automation', 'Resin Craft Founder', 'Plant Biology B.Sc.', 'Podcast Host', 'Technical Author'].map(chip =>
                  h('span', { key: chip, className: 'highlight-chip' }, '✦ ', chip)
                )
              )
            ),
            h('div', { className: 'stats-grid' },
              [
                { n: '5', label: 'Creative & Technical Roles' },
                { n: '10+', label: 'Automated Workflows Built' },
                { n: '100%', label: 'Craftsmanship & Dedication' },
                { n: '1', label: 'Core Mission: Meaningful Impact' }
              ].map(st =>
                h('div', { key: st.label, className: 'stat-card' },
                  h('strong', null, st.n),
                  h('span', null, st.label)
                )
              )
            )
          )
        ),

        // Skills Section
        h('section', { id: 'skills', className: 'container' },
          h('span', { className: 'section-tag' }, '02 · SKILLS & CAPABILITIES'),
          h('h2', null, 'Tools for ', h('em', null, 'useful change.')),
          h('div', { className: 'skills-filter' },
            SKILL_CATEGORIES.map(cat =>
              h('button', {
                key: cat,
                className: skillFilter === cat ? 'active' : '',
                onClick: () => setSkillFilter(cat)
              }, cat)
            )
          ),
          h('div', { className: 'skills-grid' },
            filteredSkills.map(sk =>
              h('div', { key: sk.title, className: 'skill-card' },
                h('div', { className: 'skill-card-header' },
                  h('div', { className: 'skill-icon' }, sk.icon),
                  h('h3', null, sk.title)
                ),
                h('div', { className: 'skill-tags' },
                  sk.tags.map(t => h('span', { key: t, className: 'tag' }, t))
                )
              )
            )
          )
        ),

        // Projects Section
        h('section', { id: 'projects', className: 'container' },
          h('span', { className: 'section-tag' }, '03 · FEATURED PROJECTS'),
          h('h2', null, 'Built to work ', h('em', null, 'beautifully.')),
          h('div', { className: 'projects-grid' },
            PROJECTS.map(proj =>
              h('div', {
                key: proj.id,
                className: 'project-card',
                onClick: () => setSelectedProject(proj)
              },
                h('div', { className: 'project-thumb' },
                  h('img', { src: proj.image, alt: proj.title }),
                  h('span', { className: 'project-category-badge' }, proj.category)
                ),
                h('div', { className: 'project-body' },
                  h('h3', null, proj.title),
                  h('p', null, proj.desc),
                  h('div', { className: 'project-footer' },
                    h('div', { className: 'skill-tags' },
                      proj.tags.slice(0, 3).map(t => h('span', { key: t, className: 'tag' }, t))
                    ),
                    h('button', { className: 'btn-view-project' }, 'Case Study ', h('span', null, '↗'))
                  )
                )
              )
            )
          )
        ),

        // Resin Art Gallery Section
        h('section', { id: 'resin-art', className: 'container' },
          h('span', { className: 'section-tag' }, '04 · ARTISAN CRAFT GALLERY'),
          h('h2', null, "Aish's ", h('em', null, 'Resin Craft.')),
          h('p', { className: 'intro', style: { marginBottom: '32px' } },
            'Creating handcrafted custom gifts, floral preserved keepsakes, luxury coasters, and decorative home pieces.'
          ),
          h('div', { className: 'resin-gallery-grid' },
            RESIN_PIECES.map((piece, i) =>
              h('div', {
                key: i,
                className: 'resin-card',
                onClick: () => setSelectedResin(piece)
              },
                h('div', { className: 'resin-img-wrapper' },
                  h('img', { src: piece.image, alt: piece.title })
                ),
                h('div', { className: 'resin-info' },
                  h('span', { className: 'section-tag' }, piece.tag),
                  h('h3', null, piece.title),
                  h('p', null, piece.desc)
                )
              )
            )
          )
        ),

        // Certifications Section
        h('section', { id: 'certifications', className: 'container' },
          h('span', { className: 'section-tag' }, '05 · CERTIFICATIONS & CREDENTIALS'),
          h('h2', null, 'Learning with ', h('em', null, 'intention.')),
          h('div', { className: 'certs-grid' },
            CERTS.map(c =>
              h('div', { key: c.title, className: 'cert-card' },
                h('div', { className: 'cert-badge-icon' }, '✦'),
                h('small', null, c.issuer),
                h('h3', null, c.title),
                h('p', null, c.date),
                h('span', { style: { fontSize: '12px', color: 'var(--muted)', marginTop: '8px', display: 'block' } }, c.note)
              )
            )
          )
        ),

        // Education Section
        h('section', { id: 'education', className: 'container' },
          h('span', { className: 'section-tag' }, '06 · ACADEMIC BACKGROUND'),
          h('h2', null, 'Curiosity has always ', h('em', null, 'led the way.')),
          h('div', { className: 'education-grid' },
            EDUCATION.map((ed, idx) =>
              h('div', { key: ed.school, className: 'edu-card' },
                h('span', { className: 'edu-number' }, `0${idx + 1}`),
                h('h3', null, ed.school),
                h('p', null, ed.degree),
                h('small', null, ed.note)
              )
            )
          )
        ),

        // Experience Section
        h('section', { id: 'experience', className: 'container' },
          h('span', { className: 'section-tag' }, '07 · PROFESSIONAL EXPERIENCE'),
          h('h2', null, 'Work rooted in ', h('em', null, 'purpose.')),
          h('div', { className: 'experience-list' },
            EXPERIENCE.map(exp =>
              h('div', { key: exp.role, className: 'exp-card' },
                h('div', { className: 'exp-header' },
                  h('span', { className: 'exp-period' }, exp.period),
                  h('h3', null, exp.role),
                  h('div', { className: 'exp-company' }, exp.company)
                ),
                h('ul', { className: 'exp-bullets' },
                  exp.bullets.map((b, i) => h('li', { key: i }, b))
                )
              )
            )
          )
        ),

        // Contact Section
        h('section', { id: 'contact', className: 'container' },
          h('span', { className: 'section-tag' }, '08 · GET IN TOUCH'),
          h('div', { className: 'contact-grid' },
            h('div', { className: 'contact-info' },
              h('h2', null, 'Let’s make something ', h('em', null, 'that matters.')),
              h('p', null, 'I am open to AI workflow automation projects, resin craft commissions, technical writing opportunities, podcast features, and strategic collaborations.'),
              h('div', { className: 'contact-links' },
                h('a', { className: 'contact-link-card', href: 'mailto:ibrahimtolaniaishat@gmail.com' },
                  h('div', { className: 'contact-link-icon' }, '✉️'),
                  h('span', null, 'ibrahimtolaniaishat@gmail.com')
                ),
                h('a', { className: 'contact-link-card', href: 'https://github.com/billionairequeen', target: '_blank', rel: 'noreferrer' },
                  h('div', { className: 'contact-link-icon' }, '💻'),
                  h('span', null, 'GitHub · @billionairequeen')
                ),
                h('a', { className: 'contact-link-card', href: 'https://www.linkedin.com/in/aishat-omotolani-ibrahim-b92aba232/', target: '_blank', rel: 'noreferrer' },
                  h('div', { className: 'contact-link-icon' }, '💼'),
                  h('span', null, 'LinkedIn Profile')
                )
              )
            ),
            h('form', { className: 'contact-form', onSubmit: handleSubmit },
              h('div', { className: 'form-group' },
                h('label', { htmlFor: 'name' }, 'Your Name'),
                h('input', { id: 'name', name: 'name', required: true, placeholder: 'e.g. Jane Doe' })
              ),
              h('div', { className: 'form-group' },
                h('label', { htmlFor: 'email' }, 'Your Email'),
                h('input', { id: 'email', type: 'email', name: 'email', required: true, placeholder: 'you@example.com' })
              ),
              h('div', { className: 'form-group' },
                h('label', { htmlFor: 'message' }, 'Your Message'),
                h('textarea', { id: 'message', name: 'message', required: true, placeholder: 'Tell me about your project or inquiry...' })
              ),
              h('button', { className: 'btn-primary', style: { width: '100%', justifyContent: 'center' } }, 'Send Message ↗')
            )
          )
        )
      ),

      // Project Detail Modal
      selectedProject && h('div', {
        className: 'modal-overlay open',
        onClick: (e) => { if (e.target.className.includes('modal-overlay')) setSelectedProject(null); }
      },
        h('div', { className: 'modal-content' },
          h('button', { className: 'modal-close', onClick: () => setSelectedProject(null) }, '✕'),
          h('div', { className: 'modal-header' },
            h('span', { className: 'section-tag' }, selectedProject.category),
            h('h2', null, selectedProject.title)
          ),
          h('img', { className: 'modal-img', src: selectedProject.image, alt: selectedProject.title }),
          h('div', { className: 'modal-section' },
            h('h4', null, 'Problem Statement'),
            h('p', null, selectedProject.problem)
          ),
          h('div', { className: 'modal-section' },
            h('h4', null, 'Automated Solution'),
            h('p', null, selectedProject.solution)
          ),
          h('div', { className: 'modal-section' },
            h('h4', null, 'Key Outcomes & Impact'),
            h('ul', null, selectedProject.outcomes.map((o, i) => h('li', { key: i }, o)))
          ),
          h('div', { className: 'modal-section' },
            h('h4', null, 'Technologies Used'),
            h('div', { className: 'skill-tags' },
              selectedProject.tags.map(t => h('span', { key: t, className: 'tag' }, t))
            )
          )
        )
      ),

      // Resin Art Detail Lightbox Modal
      selectedResin && h('div', {
        className: 'modal-overlay open',
        onClick: (e) => { if (e.target.className.includes('modal-overlay')) setSelectedResin(null); }
      },
        h('div', { className: 'modal-content' },
          h('button', { className: 'modal-close', onClick: () => setSelectedResin(null) }, '✕'),
          h('div', { className: 'modal-header' },
            h('span', { className: 'section-tag' }, selectedResin.tag),
            h('h2', null, selectedResin.title)
          ),
          h('img', { className: 'modal-img', src: selectedResin.image, alt: selectedResin.title }),
          h('p', { style: { fontSize: '16px', color: 'var(--muted)' } }, selectedResin.desc),
          h('a', {
            className: 'btn-primary',
            href: '#contact',
            style: { marginTop: '20px', display: 'inline-flex' },
            onClick: () => { setSelectedResin(null); scrollToSection('contact'); }
          }, 'Commission Custom Piece 🎨')
        )
      ),

      // Toast Notifications
      toastMessage && h('div', { className: 'toast-container' },
        h('div', { className: 'toast' }, toastMessage)
      ),

      // Footer
      h('footer', { className: 'container' },
        h('div', { className: 'logo' },
          h('div', { className: 'logo-avatar' }, 'IAO'),
          h('span', null, '© 2026 Ibrahim Aishat Omotolani')
        ),
        h('div', { style: { display: 'flex', gap: '20px' } },
          h('a', { href: 'https://github.com/billionairequeen', target: '_blank', rel: 'noreferrer' }, 'GitHub ↗'),
          h('a', { href: 'https://www.linkedin.com/in/aishat-omotolani-ibrahim-b92aba232/', target: '_blank', rel: 'noreferrer' }, 'LinkedIn ↗'),
          h('a', { href: 'mailto:ibrahimtolaniaishat@gmail.com' }, 'Email ↗')
        )
      )
    );
  }

  // Mount React Root
  const rootEl = document.getElementById('root');
  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(h(App));
  }
})();

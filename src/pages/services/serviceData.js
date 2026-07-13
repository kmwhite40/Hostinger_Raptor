// Content for the four service-detail pages, captured from the original site.
// Each service renders via the shared ServiceDetail template.

export const SERVICES = {
  cybersecurity: {
    slug: 'cybersecurity',
    eyebrow: 'SERVICE DETAIL',
    title: 'Cybersecurity',
    description:
      'Tailorable. Scalable. Proven. Next-generation cyber defense engineered for the Defense Industrial Base.',
    cta: 'Schedule Security Consultation',
    blocks: [
      {
        type: 'cards',
        title: 'Managed Security Services',
        intro:
          "Comprehensive, 24/7 protection for your digital estate. We don't just alert you to problems; we actively mitigate threats before they impact your operations.",
        items: [
          { title: 'SOC-as-a-Service (SOCaaS)', desc: 'Round-the-clock monitoring, detection, and response by US-based security analysts.' },
          { title: 'Extended Detection & Response (XDR)', desc: 'Holistic visibility across endpoints, networks, and cloud environments.' },
          { title: 'Microsoft Sentinel Management', desc: 'Expert tuning and management of your cloud-native SIEM/SOAR.' },
          { title: 'Incident Response', desc: 'Rapid containment and recovery protocols to minimize breach impact.' },
          { title: 'Vulnerability Management', desc: 'Continuous scanning and prioritized patching of infrastructure.' },
          { title: 'Continuous Monitoring', desc: 'Real-time surveillance to maintain compliance and security posture.' },
        ],
      },
      {
        type: 'cards',
        title: 'Strategic Security Leadership',
        intro:
          'Align your security investments with business objectives. Our strategic services provide executive-level guidance without the full-time executive cost.',
        items: [
          { title: 'vCISO Services', desc: 'Fractional leadership to guide your overarching security program.' },
          { title: 'Zero Trust Architecture', desc: 'Design and implementation of identity-centric security models.' },
          { title: 'Risk Assessments', desc: 'Comprehensive evaluation of vulnerabilities and business impact.' },
          { title: 'Security Strategy', desc: 'Roadmapping your evolution from legacy IT to modernized defense.' },
        ],
      },
      {
        type: 'bullets',
        title: 'Why This Service Matters',
        intro:
          "For federal contractors, a breach is more than an IT disruption—it's a threat to national security and your ability to win contracts. We operationalize security so you can operate with confidence.",
        items: [
          'Protect sensitive CUI and FCI data across your organization',
          'Satisfy DFARS 7012 incident reporting requirements',
          'Reduce alert fatigue and false positives',
          'Enable secure remote work and collaboration',
        ],
      },
    ],
    other: [
      { label: 'Government Cloud', to: '/services/government-cloud' },
      { label: 'CMMC Compliance', to: '/services/cmmc-compliance' },
      { label: 'Advisory', to: '/services/advisory' },
    ],
  },

  'government-cloud': {
    slug: 'government-cloud',
    eyebrow: 'SERVICE DETAIL',
    title: 'Government Cloud',
    description:
      'Built for Microsoft 365 GCC High and Azure Government. Secure, compliant infrastructure for federal missions.',
    cta: 'Schedule Cloud Consultation',
    blocks: [
      {
        type: 'bullets',
        title: 'Architecture & Migration Services',
        intro:
          'Transitioning to Microsoft 365 GCC High or Azure Government requires precise execution. We architect compliant environments from the ground up and seamlessly migrate your data.',
        items: [
          'Tenant provisioning and validation for GCC High',
          'Secure email and data migration from Commercial or Google Workspaces',
          'Implementation of Microsoft Purview for data governance',
          'Configuration of Intune for mobile device management',
        ],
      },
      {
        type: 'cards',
        title: 'Areas of Expertise',
        intro:
          'Our engineers hold deep specialization in the Microsoft Government stack, ensuring you leverage the full capabilities of your investment.',
        items: [
          { title: 'GCC High Optimization', desc: 'Maximizing the value and security of your M365 GCC High tenant.' },
          { title: 'Azure Government', desc: 'Building scalable, compliant infrastructure in the government cloud.' },
          { title: 'Identity & Access (IAM)', desc: 'Enforcing Conditional Access and MFA via Entra ID.' },
          { title: 'Secure Collaboration', desc: 'Configuring Teams and SharePoint for compliant document sharing.' },
        ],
      },
      {
        type: 'cards',
        title: 'Purpose-Built For Your Mission',
        intro:
          'Commercial IT providers often stumble in the government space. Our solutions are explicitly designed for organizations navigating complex federal regulations.',
        items: [
          { title: 'DIB Contractors', desc: 'Securing the supply chain for the Department of Defense.' },
          { title: 'Federal Primes & Subs', desc: 'Enabling secure collaboration across contract vehicles.' },
          { title: 'CMMC Organizations', desc: 'Providing the technical foundation necessary for Level 2+ certification.' },
        ],
      },
    ],
    other: [
      { label: 'Cybersecurity', to: '/services/cybersecurity' },
      { label: 'CMMC Compliance', to: '/services/cmmc-compliance' },
      { label: 'Advisory', to: '/services/advisory' },
    ],
  },

  'cmmc-compliance': {
    slug: 'cmmc-compliance',
    eyebrow: 'SERVICE DETAIL',
    title: 'CMMC & Compliance',
    description:
      'Governance, Risk & Compliance for Evolving Federal Requirements. Navigate the alphabet soup of federal regulations.',
    cta: 'Request CMMC Readiness Review',
    blocks: [
      {
        type: 'cards',
        title: 'CMMC-Focused Services',
        intro:
          'Cybersecurity Maturity Model Certification (CMMC) is becoming a gatekeeper for DoD contracts. We guide you through the complexities to achieve and maintain certification.',
        items: [
          { title: 'Readiness Assessments', desc: 'Identifying your baseline against CMMC Level 2 requirements.' },
          { title: 'Pre-Assessment Advisory', desc: 'Mock audits and documentation review before formal C3PAO assessment.' },
          { title: 'GovCloud Enclaves', desc: 'Building secure, isolated environments specifically for CUI handling.' },
          { title: 'Gap Remediation', desc: 'Technical implementation to close identified security gaps.' },
          { title: 'Shared Responsibility', desc: 'Defining clear boundaries and inherited controls with our SRM.' },
        ],
      },
      {
        type: 'bullets',
        title: 'Additional Compliance Support',
        intro: 'CMMC is built on existing frameworks. We ensure your foundational compliance requirements are rock solid.',
        items: [
          'NIST SP 800-171 Implementation & Scoring',
          'DFARS 7012 / 7019 / 7020 Compliance',
          'Risk Management Framework (RMF) consulting',
          'Continuous Monitoring Programs and POAM management',
        ],
      },
      {
        type: 'steps',
        title: 'Your Certification Pathway',
        intro:
          'Move from uncertainty to certification with confidence. Our proven methodology breaks down the massive undertaking of CMMC into actionable, measurable phases.',
        items: [
          { title: '1. Assess & Plan', desc: 'Determine boundaries, assess current state, generate SSP/POAM.' },
          { title: '2. Remediate & Build', desc: 'Implement technical controls, write policies, deploy security tools.' },
          { title: '3. Operate & Maintain', desc: 'Generate evidence, continuous monitoring, SOC operations.' },
          { title: '4. Assess & Certify', desc: 'C3PAO engagement, audit support, achieve certification.' },
        ],
      },
    ],
    other: [
      { label: 'Cybersecurity', to: '/services/cybersecurity' },
      { label: 'Government Cloud', to: '/services/government-cloud' },
      { label: 'Advisory', to: '/services/advisory' },
    ],
  },

  advisory: {
    slug: 'advisory',
    eyebrow: 'SERVICE DETAIL',
    title: 'Advisory Services',
    description: 'Executive-Level Technology & Security Guidance. Strategic clarity for complex challenges.',
    cta: 'Schedule Advisory Consultation',
    blocks: [
      {
        type: 'bullets',
        title: 'Executive-Level Guidance',
        intro:
          'Technology should enable your mission, not complicate it. Our advisory services provide strategic clarity to leadership teams navigating digital transformation.',
        items: [
          'Cybersecurity Program Development from the ground up',
          'IT Strategy & Modernization Roadmapping',
          'Comprehensive Risk Assessments & Management',
          'Security Maturity Modeling for continuous improvement',
        ],
      },
      {
        type: 'cards',
        title: 'Fractional Leadership',
        intro: 'Gain access to seasoned technology and security executives without the overhead of full-time hires.',
        items: [
          { title: 'Virtual CISO (vCISO)', desc: 'Directing security strategy, board reporting, and compliance oversight.' },
          { title: 'Virtual CIO (vCIO)', desc: 'Aligning IT investments with business goals, budgeting, and vendor management.' },
        ],
      },
      {
        type: 'cards',
        title: 'Strategic Value Proposition',
        intro:
          'We bridge the gap between technical execution and business strategy. We ensure your technology investments deliver measurable returns while mitigating institutional risk.',
        items: [
          { title: 'Business Alignment', desc: 'Technology decisions mapped directly to corporate objectives.' },
          { title: 'Cost Optimization', desc: 'Eliminating redundant tools and streamlining IT operations.' },
          { title: 'Executive Communication', desc: 'Translating technical cyber risk into business terms for the board.' },
        ],
      },
    ],
    other: [
      { label: 'Cybersecurity', to: '/services/cybersecurity' },
      { label: 'Government Cloud', to: '/services/government-cloud' },
      { label: 'CMMC Compliance', to: '/services/cmmc-compliance' },
    ],
  },
};

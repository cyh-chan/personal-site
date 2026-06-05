/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Singapore University of Social Sciences',
    position: 'Teaching Assistant',
    url: 'https://www.suss.edu.sg/',
    startDate: '2026-01-01',
    endDate: '2026-04-30',
    // summary: 'Insert text.',
    highlights: [
      'Facilitated technical tutorials in Statistical Analysis covering probability theory, asymptotic inference, and classical linear regression.',
      'Formulated structural review frameworks to ground undergraduate cohorts in deductive mathematical reasoning and problem-solving.',
      'Guided student execution of formal model diagnostics, emphasizing verification of Gauss-Markov assumptions and residual structures.',
    ],
  },
  {
    name: 'Singapore University of Social Sciences, University Research Office',
    position: 'Research Assistant',
    url: 'https://www.suss.edu.sg/',
    startDate: '2025-10-01',
    endDate: '', // Present
    // summary: 'Insert text.',
    highlights: [
      'Formulated statistical inference frameworks for experimental psychometric data to quantify treatment effects on latent creativity constructs.',
      'Developing stochastic models for financial time-series data to capture non-stationarity, temporal dependencies, and volatility dynamics.',
      'Applying survival analysis and classification techniques to clinical datasets to isolate features driving patient non-attendance.',
      'Engineered reproducible data pipelines for high-dimensional institutional datasets to ensure mathematical integrity for academic review.',
    ],
  },
  {
    name: 'A*STAR, Advanced Remanufacturing and Technology Centre',
    position: 'Research Intern',
    url: 'https://www.a-star.edu.sg/artc/RandD-themes/digital-supply-chain',
    startDate: '2024-11-01',
    endDate: '2025-08-31',
    // summary: 'Insert text.',
    highlights: [
      'Architected deep learning models for multi-horizon time-series forecasting under non-stationary demand conditions.',
      'Implemented a SHAP-based Explainable AI (XAI) framework to quantify localized feature attributions and map non-linear interactions.',
      'Evaluated contemporary deep learning baselines, optimizing hyperparameter spaces to enhance empirical robustness and performance bounds.',
    ],
  },
  {
    name: 'Indeed',
    position: 'Finance Operations Analyst',
    url: 'https://indeed.com/',
    startDate: '2021-09-01',
    endDate: '2021-12-31',
    // summary: 'Insert text.',
    highlights: [
      'Audited cross-border financial data systems to ensure high-fidelity data migration and compliance with international reporting frameworks.',
      'Optimized workflows within Salesforce environments by implementing data validation protocols to minimize transactional errors.',
    ],
  },
  {
    name: 'Singapore Armed Forces',
    position: 'Finance Specialist',
    url: 'https://www.mindef.gov.sg/web/portal/mindef/home',
    startDate: '2019-08-14',
    endDate: '2021-12-31',
    // summary: 'Insert text.',
    highlights: [
      'Managed operational budgets and resource allocations under central government regulatory frameworks.',
      'Executed internal audits and risk assessments, applying structured methodologies to report compliance metrics to leadership.',
      'Administered large-scale operational budgets during COVID-19 deployments, maintaining accuracy under highly volatile conditions.',
    ],
  },
  {
    name: 'DBS Bank',
    position: 'Wealth Management Intern',
    url: 'https://www.dbs.com.sg/index/default.page',
    startDate: '2018-09-01',
    endDate: '2019-05-31',
    // summary: 'Insert text.',
    highlights: [
      'Conducted quantitative operational analyses, leveraging process data to isolate system inefficiencies and formulate optimization strategies.',
      'Enforced compliance protocols through the systematic validation of Accredited Investor documentation and data control frameworks.',
    ],
  },
];

export default work;

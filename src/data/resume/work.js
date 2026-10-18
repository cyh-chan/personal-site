/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date in YYYY-MM-DD format
 * @property {string|undefined} summary - Position summary
 * @property {string[]} highlights - Position highlights
 */

const work = [
  {
    name: 'Singapore University of Social Sciences, University Research Office',
    position: 'Research Assistant',
    url: 'https://www.suss.edu.sg/',
    startDate: '2025-10-01',
    endDate: '', // Present
    highlights: [
      'Conducted methodological research at the intersection of statistical inference, causal learning, and computational statistics, with applications in the social and behavioral sciences.',
      'Developed statistical modeling frameworks incorporating heterogeneous treatment effects, robust estimation, and complex dependence structures.',
      'Investigated statistical learning and stochastic modeling methodologies, emphasizing non-stationarity, model specification, and inferential robustness.',
      'Designed reproducible computational workflows for statistical estimation, numerical experimentation, and empirical validation.',
    ],
  },
  {
    name: 'Singapore University of Social Sciences',
    position: 'Teaching Assistant',
    url: 'https://www.suss.edu.sg/',
    startDate: '2026-01-01',
    endDate: '', // Present
    highlights: [
      'Facilitated undergraduate instruction in probability theory, statistical inference, asymptotic theory, and classical linear regression.',
      'Guided mathematical derivations, statistical problem-solving, and regression diagnostics, emphasizing theoretical foundations and model assumptions.',
    ],
  },
  {
    name: 'A*STAR, Advanced Remanufacturing and Technology Centre',
    position: 'Research Intern',
    url: 'https://www.a-star.edu.sg/artc/RandD-themes/digital-supply-chain',
    startDate: '2024-11-01',
    endDate: '2025-08-31',
    highlights: [
      'Developed an end-to-end non-parametric learning framework for inventory optimization under stochastic demand, uncertain lead times, and non-stationary operating conditions.',
      'Integrated predictive representation learning with decision optimization, investigating alternatives to conventional Predict-Then-Optimize formulations.',
      'Implemented explainable AI methodologies and conducted systematic benchmarking to evaluate decision quality, model robustness, and sensitivity to distributional shift.',
    ],
  },
  {
    name: 'Zaunkoenig GmbH',
    position: 'Volunteer R&D Engineer',
    url: 'https://zaunkoenig.co/',
    startDate: '2023-11-01',
    endDate: '', // Present
    highlights: [
      'Collaborated with an international engineering team across Germany, the UK, the USA, and Canada on technical prototyping, product development, and design optimization.',
      'Contributed to cable engineering and mechanical component optimization, balancing mass reduction, structural integrity, and functional performance.',
      'Coordinated regional technical operations across Southeast Asia, integrating engineering assessments and user feedback into iterative product refinements.',
    ],
  },
  {
    name: 'Indeed',
    position: 'Finance Operations Analyst',
    url: 'https://indeed.com/',
    startDate: '2021-09-01',
    endDate: '2021-12-31',
    highlights: [
      'Performed financial data validation, reconciliation, and quality assurance to maintain data integrity across international operations.',
    ],
  },
  {
    name: 'Singapore Armed Forces',
    position: 'Finance Specialist',
    url: 'https://www.mindef.gov.sg/web/portal/mindef/home',
    startDate: '2019-08-14',
    endDate: '2021-08-31',
    highlights: [
      'Oversaw financial operations, budgetary controls, and compliance assessments within government regulatory frameworks.',
    ],
  },
  {
    name: 'DBS Bank',
    position: 'Wealth Management Intern',
    url: 'https://www.dbs.com.sg/index/default.page',
    startDate: '2018-09-01',
    endDate: '2019-05-31',
    highlights: [
      'Conducted operational analyses and systematic documentation reviews to support process efficiency and regulatory compliance.',
    ],
  },
];

export default work;

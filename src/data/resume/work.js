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
    name: 'A*STAR, Advanced Remanufacturing and Technology Centre, Digital Supply Chain',
    position: 'Research Intern',
    url: 'https://www.a-star.edu.sg/artc/RandD-themes/digital-supply-chain',
    startDate: '2024-11-01',
    endDate: '2025-08-31',
    // summary: 'Insert text.',
    highlights: [
      'Awarded the A*STAR Research Internship Award.',
      'Developed deep learning time series models to forecast demand for Fast-Moving Consumer Goods (FMCG), significantly improving the accuracy of an end-to-end inventory management system.',
      'Engineered and deployed a reusable internal library for Explainable AI (XAI), integrating SHAP analysis to interpret model predictions and enhance transparency in supply chain decision-making.',
      'Contributed to the "Data-Driven Framework for Enhancing Supply Chain Resilience" project by reproducing and refining the model architecture from a key research paper on deep learning for inventory management.',
    ],
  },
  {
    name: 'Indeed',
    position: 'Finance Operations Assistant',
    url: 'https://indeed.com/',
    startDate: '2021-09-01',
    endDate: '2021-12-31',
    // summary: 'Insert text.',
    highlights: [
      'Executed the successful migration of Japanese entity accounts, ensuring alignment with international accounting standards and local regulatory requirements.',
      'Managed and reconciled financial records for Japanese corporate entities, leveraging advanced accounting software to ensure data integrity and consistency.',
      'Processed cross-departmental financial transactions using Salesforce, collaborating with internal stakeholders to improve processing time and accuracy.',
      'Designed and implemented interim communication workflows to resolve process bottlenecks, significantly enhancing team efficiency and productivity.',
    ],
  },
  {
    name: 'Singapore Armed Forces',
    position: 'Unit Finance Specialist',
    url: 'https://www.mindef.gov.sg/web/portal/mindef/home',
    startDate: '2019-08-14',
    endDate: '2021-12-31',
    // summary: 'Insert text.',
    highlights: [
      'Oversaw unit financial accounts via a central government procurement system, providing strategic advice on operational and welfare purchases to optimize resource allocation.',
      'Enforced procurement policy compliance across all HQ sub-units through effective collaboration with finance stakeholders, strengthening adherence to regulations.',
      'Conducted bi-annual internal audits and Risk Internal Control Evaluations, delivering comprehensive reports and analyses to unit leadership for governance improvements.',
      'Proposed and implemented enhancements to the unit's finance governance framework, measurably improving system discipline and operational controls.',
      'Administered the COVID-19 Taskforce budget with finance clerks and officers, ensuring precise and timely processing of all financial transactions during a critical operational period.',
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
      'Validated Accredited Investor documentation to ensure full compliance with regulatory requirements and internal risk management policies.',
      'Partnered with Front Office relationship managers to execute service requests for Private Banking clients, ensuring timely and accurate resolution.',
      'Documented and maintained transaction records for high-net-worth clients, ensuring the integrity and reliability of all financial documentation.',
      'Analyzed operational data to identify system enhancement opportunities, presenting actionable solutions to the Team Lead to improve process efficiency.',
    ],
  },
];

export default work;

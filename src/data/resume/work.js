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
    name: 'Indeed',
    position: 'Finance Assistant',
    url: 'https://indeed.com/',
    startDate: '2021-09-01',
    endDate: '2021-12-31',
    // summary: `Insert
    // text.`,
    highlights: [
      'Assisted in the successful migration of Japanese entity accounts, ensuring compliance with international accounting standards and regulatory requirements.',
      'Maintained precise and reliable financial records for Japanese entities, leveraging advanced accounting software to ensure accuracy and consistency.',
      'Collaborated with internal stakeholders to efficiently execute financial transactions using the Salesforce platform, improving transaction processing time and accuracy.',
      'Developed and implemented interim solutions to reduce miscommunications, significantly enhancing team efficiency and workflow productivity.',
    ],
  },
  {
    name: 'Singapore Armed Forces',
    position: 'Finance Assistant',
    url: 'https://www.mindef.gov.sg/web/portal/mindef/home',
    startDate: '2019-08-14',
    endDate: '2021-08-13',
    // summary: `Insert
    // text.`,
    highlights: [
      'Managed unit financial accounts using a central government procurement system, providing expert advice on operational and welfare purchases to optimize resource allocation.',
      'Ensured compliance with procurement policies and directives for HQ sub-units through effective collaboration with finance stakeholders, enhancing adherence to regulations.',
      'Conducted bi-annual internal audits, including Risk Internal Control Evaluations, and prepared comprehensive reports with findings and analyses for submission to the Unit Chief.',
      'Made strategic recommendations for improving finance governance at the unit level and implemented accepted measures to enhance system discipline and operational efficiency.',
      'Co-managed COVID-19 Taskforce finances with finance clerks and officers, ensuring accurate and timely processing of all financial transactions during a critical period.',
    ],
  },
  {
    name: 'DBS Bank',
    position: 'Wealth Management Intern',
    url: 'https://www.dbs.com.sg/index/default.page',
    startDate: '2018-09',
    endDate: '2019-05',
    // summary: `Insert
    // text`,
    highlights: [
      'Conducted comprehensive reviews of documents under the Accredited Investor regime, ensuring full compliance with regulatory requirements and internal policies.',
      'Collaborated with the Front Office to efficiently execute service requests from Private Banking clients, consistently delivering exceptional customer service.',
      'Maintained precise and up-to-date transaction records for Private Banking clients, ensuring compliance and reliability of financial documentation.',
      'Assisted the Team Lead in collecting and analyzing data, identifying areas for system enhancement, and proposing actionable solutions to improve process efficiency and effectiveness.',
    ],
  },
];

export default work;

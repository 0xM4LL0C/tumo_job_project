export const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.";

export class JobInformation {
  /**
   *
   * @param {string} company_name
   * @param {string} company_site
   * @param {string} job_title
   * @param {string} job_short_info
   * @param {"junior"|"middle"|"senior"} experiance_level
   * @param {number[]} salary_range
   * @param {string} job_deadline
   * @param {string} about_company
   * @param {string} job_description
   * @param {string} responsibilities
   * @param {string[]} qualifications
   * @param {string[]} skils
   */
  constructor(
    company_name,
    company_site,
    job_title,
    job_short_info,
    experiance_level,
    salary_range,
    job_deadline,
    about_company,
    job_description,
    responsibilities,
    qualifications,
    skils,
  ) {
    this.company_name = company_name;
    this.company_site = company_site;
    this.job_title = job_title;
    this.job_short_info = job_short_info;
    this.experiance_level = experiance_level;
    this.salary_range = salary_range;
    this.job_deadline = job_deadline;
    this.about_company = about_company;
    this.job_description = job_description;
    this.responsibilities = responsibilities;
    this.qualifications = qualifications;
    this.skils = skils;
  }
}

/**
 * @type {JobInformation[]}
 */
export const JOBS = [
  {
    company_name: "Acme",
    company_site: "www.acme.co",
    job_title: "Senior Backend Developer",
    job_short_info: "Full time | Onesite | Yerevan, Armenia",
    experiance_level: "senior",
    salary_range: [1_500_000, 2_500_000],
    job_deadline: "30 Nov 2024",
    about_company: LOREM_IPSUM,
    job_description: LOREM_IPSUM,
    responsibilities: ["abc", "def"],
    qualifications: ["abc", "def"],
    skils: ["Python", "C", "C++", "Linux", "Docker", "Asembler", "CI/CD"],
  },
  {
    company_name: "Acme 1",
    company_site: "www.acme.co",
    job_title: "Senior Backend Developer",
    job_short_info: "Full time | Onesite | Yerevan, Armenia",
    experiance_level: "senior",
    salary_range: [1_500_000, 2_500_000],
    job_deadline: "30 Nov 2024",
    about_company: LOREM_IPSUM,
    job_description: LOREM_IPSUM,
    responsibilities: ["abc", "def"],
    qualifications: ["abc", "def"],
    skils: ["Python", "C", "C++", "Linux", "Docker", "Asembler", "CI/CD"],
  },
  {
    company_name: "Acme 2",
    company_site: "www.acme.co",
    job_title: "Senior Backend Developer",
    job_short_info: "Full time | Onesite | Yerevan, Armenia",
    experiance_level: "senior",
    salary_range: [1_500_000, 2_500_000],
    job_deadline: "30 Nov 2024",
    about_company: LOREM_IPSUM,
    job_description: LOREM_IPSUM,
    responsibilities: ["abc", "def"],
    qualifications: ["abc", "def"],
    skils: ["Python", "C", "C++", "Linux", "Docker", "Asembler", "CI/CD"],
  },
];

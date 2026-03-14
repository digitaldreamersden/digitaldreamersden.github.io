export type Contributor = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  linkedin?: string;
};

const contributors: Contributor[] = [
  {
    id: 'd3-001',
    name: 'Vijayasekhar Deepak',
    role: 'Lead Developer',
    avatar: '/contributors/vijay-deepak.jpeg',
    linkedin: ' https://www.linkedin.com/in/vijay-deepak/',
  },
  {
    id: 'd3-002',
    name: 'Harish',
    role: 'Maintainer',
    avatar: '/contributors/harish-h2h.jpeg',
    linkedin: 'https://www.linkedin.com/in/harish-h2h',
  },
  {
    id: 'd3-003',
    name: 'Saravanan.C',
    role: 'Contributor',
    avatar: '/contributors/saravananc.jpeg',
    linkedin: ' https://www.linkedin.com/in/saravananc/',
  },
  {
    id: 'd3-004',
    name: 'Bhavadharani',
    role: 'Contributor',
    avatar: '/contributors/bhavadharanik412.jpeg',
    linkedin: 'https://www.linkedin.com/in/bhavadharanik412/ ',
  },
  {
    id: 'd3-005',
    name: 'Dinesh S',
    role: 'Contributor',
    avatar: '/contributors/dinesh-s-5b8b692a2.jpeg',
    linkedin: 'https://www.linkedin.com/in/dinesh-s-5b8b692a2',
  },
  {
    id: 'd3-006',
    name: 'J.MUKESHWAR RAUDRA',
    role: 'Contributor',
    avatar: '/contributors/mukeshwar-raudra.png',
    linkedin: 'https://www.linkedin.com/in/mukeshwar-raudra/',
  },
  {
    id: 'd3-008',
    name: 'RAHUL K',
    role: 'Contributor',
    avatar: '/contributors/rahul0808.png',
    linkedin: 'https://www.linkedin.com/in/rahul0808',
  },
];

export default contributors;

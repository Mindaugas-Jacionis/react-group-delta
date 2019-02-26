const education = {
  label: 'Education',
  school: 'Hogwarts School of Witchcraft and Wizardry',
  major: {
    label: 'Major:',
    value: 'Defense against the Dark Arts',
  },
  minor: {
    label: 'Minor:',
    value: 'Potions && Poison',
  },
};

const skills = {
  label: 'Skills',
  list: [
    {
      title: 'Dark Magic',
      description:
        'Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases.',
    },
    {
      title: 'Pollyjuice elixir mixing',
      description:
        'Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall.',
    },
  ],
};

const experience = {
  label: 'Experience',
  list: [
    {
      title: 'Code Academy',
      subtitle: 'Very Good Student, 2018.10 - present',
      responsibilities: ['HTML', 'CSS/SCSS', 'JavaScript', 'React.js'],
    },
    {
      title: 'The School of Life',
      subtitle: 'Human in Gneral, 1990.08 - present',
      responsibilities: [
        'Eating',
        'Breathing',
        'Listening',
        'Running from Responsibilities',
      ],
    },
  ],
};

const hobies = {
  en: {
    label: 'Hobies',
    summary:
      'Professional shower singer, Expert on politics(after a drink), Reading Comics, Pretending to be Batman',
  },
  kr: {
    label: '국민경제',
    summary: '관하여 대통령의 자문에 응하기 위하여 국민경제자',
  },
};

const references = {
  label: 'References',
  summary: 'My dog can provide excelent references',
};

export default { education, skills, experience, hobies, references };

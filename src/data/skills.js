import {
  UiDesignIcon,
  UxResearchIcon,
  WireframingIcon,
  DesignSystemsIcon,
  PrototypingIcon,
  VisualDesignIcon,
} from '../assets/icons/SkillIcons'

export const skills = [
  {
    id: 'ui-design',
    title: 'Ui Design',
    description: 'Crafting Modern,responsive interfaces with strong visual hierachy',
    Icon: UiDesignIcon,
    treatment: 'dark',
  },
  {
    id: 'ux-research',
    title: 'Ux Research',
    description: 'user interviews, personas,empathy maps and journey mapping',
    Icon: UxResearchIcon,
    treatment: 'light',
  },
  {
    id: 'wireframing',
    title: 'Wireframing',
    description: 'information architecture,user flows and low-fidelity concepts',
    Icon: WireframingIcon,
    treatment: 'light',
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    description: 'components,Auto layout.variables, Design tokens,and scalable system.',
    Icon: DesignSystemsIcon,
    treatment: 'light',
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    description: 'interactive prototypes,micro-interactions, usability testing',
    Icon: PrototypingIcon,
    treatment: 'light',
  },
  {
    id: 'visual-design',
    title: 'Visual Design',
    description: 'Logos, branding, marketing creatives, presentation design, and print materials.',
    Icon: VisualDesignIcon,
    treatment: 'dark',
  },
]

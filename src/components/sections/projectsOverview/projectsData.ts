export interface Project {
  title: string;
  image: string;
  description: string;
}


export const projects: Project[] = [
  {
    title: ('projects.items.ecommerce.title'),
    image: 'https://via.placeholder.com/300x200',
    description: ('projects.items.ecommerce.description')
  },
  {
    title: ('projects.items.taskManagement.title'),
    image: 'https://via.placeholder.com/300x200',
    description: ('projects.items.taskManagement.description')
  },
  {
    title: ('projects.items.socialMedia.title'),
    image: 'https://via.placeholder.com/300x200',
    description: ('projects.items.socialMedia.description')
  },
];

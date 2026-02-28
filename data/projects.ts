export type Project = {
  slug: string;
  title: string;
  summary: string;
  mood: string[];
  materials: string[];
  instagramIds: string[];
};

export const projects: Project[] = [
  {
    slug: 'oak-lane-residence',
    title: 'Oak Lane Residence',
    summary: 'A warm modern family home layered with plaster, oak, and linen.',
    mood: ['Calm', 'Natural Light', 'Textured Neutrals'],
    materials: ['White Oak', 'Roman Clay', 'Belgian Linen', 'Travertine'],
    instagramIds: ['1', '2', '3'],
  },
  {
    slug: 'uptown-piedmont-loft',
    title: 'Uptown Piedmont Loft',
    summary: 'Editorial city living with tailored silhouettes and sculptural lighting.',
    mood: ['Moody', 'Tailored', 'Collected'],
    materials: ['Walnut', 'Brass', 'Bouclé', 'Limestone'],
    instagramIds: ['4', '5', '6'],
  },
];

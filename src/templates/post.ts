const DELIMITTER = '---';

const frontmatter = ({ date, folder, capitalized, tags }) => {
  return [
    DELIMITTER,
    `path: "/${folder}"`,
    `date: "${date.toJSON()}"`,
    `title: "${capitalized}"`,
    tags && 'tags: []',
    DELIMITTER
  ]
    .filter(val => val && val.length > 0)
    .join('\n');
};

export default function post(options) {
  return [
    frontmatter(options),
    null,
    'Congratulations on creating a new test! I hope you get amazing feedback.',
    null
  ].join('\n');
}

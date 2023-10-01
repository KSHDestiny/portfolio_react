const pages = new Map();
pages.set('portfolio', { name: 'Home', path: '/portfolio', anchorable: false });
pages.set('home', { name: 'Home', path: '/portfolio/home', anchorable: true });
pages.set('about', { name: 'About', path: '/portfolio/about', anchorable: true });
pages.set('learning', { name: 'Learning', path: '/portfolio/learning', anchorable: true });
pages.set('achievement', { name: 'Achievement', path: '/portfolio/achievement', anchorable: true });
pages.set('concept', { name: 'Concept', path: '/portfolio/concept', anchorable: true });
pages.set('project', { name: 'Project', path: '/portfolio/project', anchorable: true });

export default pages;

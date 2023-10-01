const pages = new Map();
pages.set('home', { name: 'Home', path: '/portfolio/', anchorable: true });
pages.set('about', { name: 'About', path: '/portfolio/about', anchorable: true });
pages.set('learning', { name: 'Learning', path: '/portfolio/learning', anchorable: true });
pages.set('achievement', { name: 'Achievement', path: '/portfolio/achievement', anchorable: true });
pages.set('concept', { name: 'Concept', path: '/portfolio/concept', anchorable: true });
pages.set('project', { name: 'Project', path: '/portfolio/project', anchorable: true });

// pages.set('confirmedBooking', {
//   name: 'Confirmed Booking',
//   path: '/delicious_tour/confirmed-booking',
//   anchorable: false
// });

export default pages;

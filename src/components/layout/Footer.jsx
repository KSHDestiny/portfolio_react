import React from 'react'
import pages from '../../utils/page';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navLinks = Array.from(pages.values()).filter(page=>page.anchorable);
const contacts = [
    { icon: faLocationDot, info: 'Yangon, Myanmar', href:"/" },
    { icon: faPhone, info: '(+95) 9123456789', href:"tel:+959123456789" },
    { icon: faEnvelope, info: 'kaungsathein.5899@gmail.com', href:"mailto:kaungsathein.5899@gmail.com" },
];
const socials = [
  {class: "fa-brands fa-facebook", info: "Kaung Sat Hein", href: "https://www.facebook.com/profile.php?id=100087335343374"},
  {class: "fa-brands fa-github", info: "github.com/KSHDestiny",href: "https://github.com/KSHDestiny"},
  {class: "fa-brands fa-linkedin", info: "linkedin.com/in/kaungsathein", href: "https://www.linkedin.com/in/kaungsathein/"}
]

const Footer = () => {

  const {pathname} = useLocation();

  return (
    <footer className='bg-light'>
      <article className='row align-items-center pt-3'>
        <section className='col-6 col-md-3 offset-md-2'>
          <h6 className='ps-3'>Navigation</h6>
          <ul className='list-unstyled'>
            {navLinks.map((navLink) =>
                <Link key={navLink.name} className={pathname === navLink.path ? 'nav-link active ps-3' : 'nav-link ps-3'} to={navLink.path}>
                    {navLink.name}
                </Link>
            )}
          </ul>
        </section>
        <section className='col-6 col-md-3'>
          <h6>Connect</h6>
          <ul className='list-unstyled'>
            {contacts.map((contact,index)=>
                <li key={index}><a href={contact.href}><FontAwesomeIcon icon={contact.icon} size="lg" /> {contact.info}</a></li>
            )}
          </ul>
        </section>
        <section className='col-6 col-md-3 ms-3'>
          <h6>Social Media Links</h6>
          <ul className='list-unstyled'>
            {socials.map((social,index) =>
              <li key={index}><a href={social.href}><i className={social.class}></i> {social.info}</a></li>
            )}
          </ul>
        </section>
      </article>
    </footer>
  )
}

export default Footer
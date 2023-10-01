import React from 'react'
import Typed from 'typed.js';
import { Image } from 'react-bootstrap';
import photo from "./assets/images/my_photo.jpg";

const Home = () => {

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['My name is <b>Kaung Sat Hein.</b>', 'I am <b>a web developer.</b>'],
      typeSpeed: 50,
      backSpeed: 10,
      cursorChar: '_',
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main className='container'>
        <article className='row align-items-center mx-auto min-vh-100 flex-row-reverse flex-md-row'>
            <section className='col-12 col-md-6 text-white mt-5 mt-md-0'>
              <span className='h2 fw-light'>Welcome to my page! </span> <br />
              <span className='display-6' ref={el}></span>
            </section>
            <section className='col-12 col-md-4 offset-md-1'>
                <Image src={photo} width="400px" className='mx-auto img-thumbnail' />
            </section>
        </article>
    </main>
  )
}

export default Home
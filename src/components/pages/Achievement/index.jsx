import React from 'react'
import { Image } from 'react-bootstrap';
import PEDNCS from "./assets/images/ETVA_Diploma.png";
import PEDNCSMk from "./assets/images/ETVA_Marks.png";
import TSF from "./assets/images/Techincal Support Fundamentals.jpg";
import BBCN from "./assets/images/The Bits and Bytes of Computer Networking.png";
import OS from "./assets/images/Operation Systems and You Becoming a Power User.png";
import Infra from "./assets/images/System Administration and IT Infrastructure Services-1.png";
import Security from "./assets/images/IT Security - Defense against the digital dark arts.png";

import WebApp from "./assets/images/Web Application for everybody (Specialization).jpg";
import Meta from "./assets/images/Meta Front-End Developer.png";

const diploma = [
  {name: "Professional Exclusive Diploma in Networking Cyber Security", images: [PEDNCS, PEDNCSMk]}
];

const professionalCertificates = [
  {id: 1, name: "Web Application for Everyone", image: WebApp},
  {id: 2, name: "Meta Front-End Developer", image: Meta},
];

const googleIt = [
  {name: "Google IT Support", images: [TSF, BBCN, OS, Infra, Security]}
];

const Achievement = () =>  (
    <main className='container py-5 mt-5 text-white'>
      {diploma.map((dip) =>
        <article key={dip.name} className='row justify-content-center align-items-center g-3'>
          <h3 className='text-center'>{dip.name}</h3>
          {dip.images.map((image) =>
          <section className='col-12 col-md-6 col-lg-4'>
            <Image src={image} />
          </section>
          )}
        </article>
      )}

      <article className='row justify-content-center g-3 mt-5'>
      {professionalCertificates.map((certificate) =>
        <section key={certificate.id} className='col-12 col-md-10 col-lg-6'>
          <h3 className='text-center'>{certificate.name}</h3>
            <Image src={certificate.image} />
        </section>
      )}
      </article>

      {googleIt.map((google) =>
      <article key={google.name} className='row justify-content-center align-items-center g-3 mt-5'>
        <h3 className='text-center'>{google.name}</h3>
        {google.images.map((image) =>
          <section className='col-10 col-lg-4'>
            <Image src={image} />
          </section>
        )}
      </article>
      )}
    </main>
  )

export default Achievement
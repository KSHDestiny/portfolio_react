import React from 'react'

const aboutMe = [
  {header: "About Me", lists:["Born in - August-5, 1999","Live in - Yangon, Myanmar"]},
  {header: "My Education Background", lists:["Went to No.1 Basic Education High School, Dagon (Dagon-1)","5th year Electrical Power Engineering Student at West Yangon Technological University (Left)","Professional Executive Diploma in Network Technology and Cyber Security (LINCOLN & ETVA)"]},
  {header: "What I have learnt", lists:["UI/UX (Figma basic)","Front-end (Html, CSS, JavaScript, Bootstrap, Jquery, ReactJS, VueJS)","Back-end (Php, Laravel)","Database (Sql, MySql)","Networking","Cyber Security (especially Web Security)","Others (API)"]},
  {header: "Current Studying", lists:["ReactJS (Deep Learning)","Laravel Packages","DevOps (Containerization)"]},
]
const About = () => {
  return (
    <main className='container pt-5 text-white'>
        <article className='py-5'>
          {aboutMe.map((me) =>
            <section>
              <h3>{me.header}</h3>
              <ul>
                {me.lists.map((list) =>
                  <li>{list}</li>
                )}
              </ul>
            </section>
                )}
        </article>
    </main>
  )
}

export default About
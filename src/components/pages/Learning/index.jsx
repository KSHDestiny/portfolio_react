import React from 'react'

const myLearnings = [
  {date: "August 2022 to February 2023", course: "A to Z - Code Lab"},
  {date: "February 2023 to March 2023", course: "Web Applications for Everybody - MICHIGAN University (Coursera)"},
  {date: "May 2023 to July 2023", course: "SWD - MMSIT"},
  {date: "May 2023 to July 2023", course: "ReactJS - Code Lab"},
  {date: "May 2023", course: "PHP Dinosaur to PHP Ninja - Tech Guru (Burma Academy)"},
  {date: "May 2023 to August 2023", course: "Google IT Support - Google (Coursera)"},
  {date: "May 2023 to September 2023", course: "Professional Exclusive Diploma in Networking and Cyber Security - Myanmar Tech Academy"},
  {date: "July 2023 to September 2023", course: "Meta Front-End Developer - Meta (Coursera)"},
  {date: "July 2023 to Current", course: "Web Security - Creatigon"},
  {date: "August 2023 to Current", course: "Laravel - Lobelia Technology"}
]

const Learning = () => (
    <main className='container py-5 mt-5 text-white'>
      <h3 className='py-2'>My Learning Journey</h3>
      {myLearnings.map((myLearn) =>
        <article className='p-2 border'>
          <span>Date : {myLearn.date}</span>
          <h6>{myLearn.course}</h6>
        </article>
      )}
    </main>
  )

export default Learning
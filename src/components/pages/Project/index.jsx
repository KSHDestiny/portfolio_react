import React from 'react'
import { Card } from 'react-bootstrap'

const projects = [
  {title: "Mini Laravel Framework with Pure PHP", link: "https://github.com/KSHDestiny/PHP_OOP_Paradigm", concepts: ["Login/Logout Process", "Login with Cookie & Session", "MVC Design Pattern", "Store Old Input Data", "Validation", "Middleware Concept", "To Do Lists (CRUD)"], note: ""},
  {title: "Education Platform (Laravel)", link: "https://github.com/KSHDestiny/education_platform", concepts: ["Multiple Authentication (Founder, Professors, Students)", "Authorization (Three Authorities : Founder, Professors, Students)", "Profile (CRUD) + Change Password", "Category (CRUD)", "Courses (CRUD) + Data Searching + Enroll", "Lessons (CRUD)", "Course Ratings, Assignments & Certificates", "Discussion Chatting Groups"], note: ""},
]
const Project = () => {
  return (
    <main className='container py-5 mt-5 text-white'>
        <article className='row justify-content-center g-3'>
            {projects.map((project) =>
              <section className='col-12 col-lg-6'>
              <Card>
                <Card.Body>
                  <Card.Title className='fw-bold'>{project.title}</Card.Title>
                  <Card.Text>
                  <a href={project.link} target='blank' className='text-info'>{project.link}</a>
                  <ul>
                    {project.concepts.map((concept) =>
                      <li>{concept}</li>
                    )}
                  </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
          </section>
            )}
            <section>
              <h3>Coming Soon...</h3>
            </section>
        </article>
        <small><b>Note - </b>Some Laravel Packages Testings and small projects are deployed on my github repositories such as <a href="https://github.com/KSHDestiny/laravel_passport" className='text-info' target='blank'>https://github.com/KSHDestiny/laravel_passport</a></small>
    </main>
  )
}

export default Project
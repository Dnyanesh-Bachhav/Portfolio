import Image from "next/image";
import React_Logo from '../assets/images/React_Logo.png';
function Skills(){
        const experiences = [
          {
            id: 1,
            title: "HTML",
           // src: html,
          },
          {
            id: 2,
            title: "CSS",
           // src: css,
          },
          {
            id: 3,
            title: "JavaScript",
           // src: javascript,
          },
          {
            id: 4,
            title: "React",
           // src: reactImage,
          },
          {
            id: 5,
            title: "Next JS",
           // src: nextjs,
          },
          {
            id: 6,
            title: "Tailwind",
           // src: tailwind,
          },
          {
            id: 7,
            title: "GraphQL",
           // src: graphql,
          },
          {
            id: 8,
            title: "Node JS",
           // src: node,
          },
        ];
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical level</span>
            
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">

        <div className="grid-cols-1 items-center justify-between p-6 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{display: 'grid'}} >
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col sm: items-center justify-between p-6  lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Image src={React_Logo} width="64px" height="64px" alt={title} />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
    );
}
export default Skills;
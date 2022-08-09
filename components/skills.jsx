import Image from "next/image";
import { SKILLS } from "./constants";
function Skills(){
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical level</span>
            
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">

        <div className="grid-cols-1 items-center justify-between p-6 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{display: 'grid'}} >
          {SKILLS.map(({ id,name,img_src }) => (
            <div
              key={id}
              className="flex flex-col sm: items-center justify-between p-6  lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Image src={img_src} width="64px" height="64px" alt={name} />
              <h3 className="font-light">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
    );
}
export default Skills;
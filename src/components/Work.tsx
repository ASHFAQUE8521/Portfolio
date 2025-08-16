import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Weather App",
    description:
      "Developed a responsive weather app using HTML, CSS, Bootstrap, and JavaScript with OpenWeather API for real-time data.",
    features:
      "Features include current weather, 5-day & hourly forecast, AQI details, dynamic icons, location detection, and search functionality.",
    tech: "Javascript, TypeScript, React",
    image: "/images/Weather.png.webp",
  },
  {
    title: "Simon Says Game",
    description:
      "Created a Simon Says game using HTML, CSS, and JavaScript with a focus on user interaction and game logic.",
    features:
      "Responsive design, sound effects, and game logic for a fun user experience.",
    tech: "HTML, JAVASCRIPT, CSS",
    image: "/images/simon.jpeg.png",
    style: { objectFit: "cover", width: "100%", height: "220px", borderRadius: "20px" }, // Inline style for image
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
                <h4>{project.features}</h4>
                <p>{project.tech}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                {...(index === 1 ? { style: project.style } : {})} // Pass style only for second project
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

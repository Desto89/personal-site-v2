import ProjectSlide from "./ProjectSlide";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArticleIcon from '@mui/icons-material/Article';

function App() {
  
  const projects = [
    {
      name: 'Personal Site',
      url: 'https://aleksanderfrackowiak.vercel.app',
      desc: 'This is my personal site. Made to practice Tailwind and promote myself.',
      img: 'https://i.ibb.co/Mcbk1qh/img1.png',
      github: 'https://github.com/Desto89/personal-site-v2'
    },
    {
      name: 'Communicator',
      url: 'https://comunicator-4d568.web.app',
      desc: 'A simple communicator that let you chat with other people or in global chat. It was one of the first apps I made so it is far from perfect but it does the job.',
      img: 'https://i.ibb.co/cQzMRT7/img2.png',
      github: 'https://github.com/Desto89/Communicator'
    },
    {
      name: 'Cheap Foods',
      url: 'https://cheapfoods.vercel.app',
      desc: 'E-commerce site for selling food online.',
      img: 'https://i.ibb.co/tKdjRpF/img3.png',
      github: 'https://github.com/Desto89/Cheap-Foods'
    },
    {
      name: 'PDF Library',
      url: 'https://pdflib.vercel.app',
      desc: 'Web app for storing and reading PDF books online.',
      img: 'https://i.ibb.co/wWwJ0Qh/img4.png',
      github: 'https://github.com/Desto89/pdflibrary'
    },
    {
      name: 'Want to see more?',
      desc: 'I have few smaller projects on my Github. Feel free to check them out.',
      github: 'https://github.com/Desto89'
    }
  ]

  return (
    <div className='header text-center text-primary'>
      <div className='px-10  flex items-center justify-center'>
        <div>
          <h1 className='text-5xl sm:text-9xl mt-64'>Aleksander</h1>
          <hr className='border-solid border-2 my-6 sm:my-12 w-11/12 sm:w-3/4 m-auto border-primary' />
          <h3 className='text-3xl sm:text-6xl tracking-wide'>A WEB DEVELOPER</h3>
        </div>
      </div>
      <div className='h-20 sm:h-40'></div>
      <h1 className='text-5xl sm:text-7xl'>ABOUT ME</h1>
      <h3 className='leading-loose p-8 mt-2 sm:mt-5 w-screen sm:w-4/5 m-auto text6xl sm:text-5xl tracking-wide'>My name is Aleksander. I'm beginner Web Developer trying to put first steps in IT world.
        My main goal right now is to improve by building new projects and learning new things along the way.
        Currently I'm focusing on building using React library with a little bit of backend.
        Besides front-end I have also experience with Node.js, Firebase, Express, some CSS libraries.
        Full list of my skills can be found in my CV.
      </h3>
      <h3 className='leading-loose p-8 mt-2 sm:mt-5 w-screen sm:w-4/5 m-auto text5xl sm:text-5xl tracking-wide'>
        Also besides creating web pages in a free time I like creating web extensions, desktop apps and also I'm learning 
        mobile development with Flutter.
      </h3>
      <div className='h-10 sm:h-20'></div>
      <hr className='border-solid border-2 my-6 sm:my-12 w-10/12 sm:w-5/12 m-auto border-primary' />
      <div className='h-10 sm:h-20'></div>
      <h1 className='text-5xl sm:text-7xl'>PROJECTS</h1>
      <div className='h-20'></div>
      <div className='md:w-3/5 m-auto'>
        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                {projects.map((project) => {
                  return (
                    <div key={project.name}>
                      <ProjectSlide name={project.name} url={project.url} desc={project.desc} img={project.img} github={project.github}/>
                    </div>
                  )
                })}
            </Carousel>
      </div>
      <div className='h-20'></div>
      <hr className='border-solid border-2 my-6 sm:my-12 w-10/12 sm:w-5/12 m-auto border-primary' />
      <div className='h-20'></div>
      <h1 className='text-5xl sm:text-7xl'>CONTACT</h1>
      <div className='h-20'></div>
          <div className="h-30 flex flex-col sm:flex-row place-content-evenly">
              <div className="flex justify-center items-center text-xl"><EmailIcon style={{transform:'scale(2)'}} /><h1 className="m-5">aleksanderf997@wp.pl</h1></div>
              <div className="flex justify-center items-center text-xl"><LocalPhoneIcon style={{transform:'scale(2)'}}/><h1 className="m-5">+48 694 274 713</h1></div>
              <a href="/Aleksander_Frąckowiak_CV.pdf" download><div className="flex justify-center items-center text-xl"><ArticleIcon style={{transform:'scale(2)'}}/><h1 className="m-5">Download CV</h1></div></a>
          </div>
      <div className='h-20'></div>
    </div>
    
  );
}

export default App;

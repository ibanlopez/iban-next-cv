import { promises as fs } from 'fs'
import SectionHeading from '../section-heading';
import CardList from './card-list';
import DownloadCv from '@/components/download-cv';

export default async function Resumee({ heading }: { heading: string }) {

    const fileEducationData = await fs.readFile(process.cwd() + '/src/lib/data/estudios.json', 'utf-8');
    const educationData: Education = JSON.parse(fileEducationData)
    
    const fileExperienceData = await fs.readFile(process.cwd() + '/src/lib/data/experiencia.json', 'utf-8');
    const experienceData: Career = JSON.parse(fileExperienceData)

  return (
    <section className="bg-white w-full mx-auto shadow-lg rounded-2xl overflow-hidden lg:max-w-5xl">
        <SectionHeading heading={heading} />
        <div className="bg-white w-full h-full pt-8 px-4 flex flex-col md:flex-row md:flex-nowrap md:justify-between md:px-10 lg:py-12 lg:px-12">
            <CardList {...educationData} />
            <CardList {...experienceData} />
        </div>
        <DownloadCv mx={true}/>
    </section>
  );
}

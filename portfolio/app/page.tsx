import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScanLine from '@/components/ui/ScanLine';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Timeline from '@/components/sections/Timeline';
import Projects from '@/components/sections/Projects';
import ContribGraph from '@/components/sections/ContribGraph';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
    return (
        <>
            <ScanLine />
            <Header />
            <main>
                <Hero />
                <About />
                <Timeline />
                <Projects />
                <ContribGraph />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

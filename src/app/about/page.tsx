import AboutHero from '@/components/About/AboutHero'
import ClosingStatement from '@/components/About/ClosingStatement'
import MeetFounder from '@/components/About/MeetFounder'
import OurApproach from '@/components/About/OurApproach'
import OurPhilosohpy from '@/components/About/OurPhilosohpy'
import OurStory from '@/components/About/OurStory'
import People from '@/components/About/People'


export default function AboutPage() {
  return (
    <div>
        <AboutHero />
        <OurStory />
        <OurPhilosohpy />
        <OurApproach />
        <MeetFounder />
        <People />
        <ClosingStatement />
    </div>
  )
}

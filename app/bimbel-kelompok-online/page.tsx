import LandingProgram from '../components/LandingProgram'
import { LANDING, landingMetadata } from '../data/seo'

const page = LANDING['bimbel-kelompok-online']

export const metadata = landingMetadata(page)

export default function Page() {
  return <LandingProgram page={page} />
}

import type { Metadata } from 'next'
import HomeClient from './HomeClient'
import FaqList from './components/FaqList'
import JsonLd from './components/JsonLd'
import { FAQ_BERANDA, schemaFaq, schemaWebsite } from './data/seo'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Page() {
  return (
    <>
      <JsonLd data={[schemaWebsite(), schemaFaq(FAQ_BERANDA)]} />
      <HomeClient sebelumFooter={<FaqList faq={FAQ_BERANDA} />} />
    </>
  )
}

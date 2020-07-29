import { SEO, Props as SeoProps } from "../components/seo"
import React from "react"

type Props = {
  seo     : SeoProps
  children: React.ReactNode
}

export default function(p: Props) {
  return (<>
    <SEO {...p.seo} />
    {p.children}
  </>)
}

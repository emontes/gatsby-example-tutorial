import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  query FirstQuery{
    site {
      siteMetadata {
        titulositio:title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`

function Header() {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)
  // console.log(info)
  const title = info.titulositio
  return (
    <div>
      {/* <h1>author: {data.site.siteMetadata.author}</h1> */}
      <h1>author : {info.author}</h1>
      <h1>title : {title}</h1>
    </div>
  )
}

export default Header

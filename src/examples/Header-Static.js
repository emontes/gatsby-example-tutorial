import React from "react"
import { graphql, StaticQuery } from "gatsby"

const getData = graphql`
  query SecondQuery{
    site {
      siteMetadata {
        titulositio: title
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

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={datos => {
        return (
          <div>
            <p>{datos.site.siteMetadata.description}</p>
          </div>
        )
      }}
    ></StaticQuery>
  )
}

export default HeaderStatic

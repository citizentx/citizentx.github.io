import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Tag from "../components/tag"
import Box from "../components/box"
import { Link } from "gatsby"

import "../styles/main.scss"
import * as styles from "../styles/notes.module.scss"
import "reactflow/dist/style.css"

require("katex/dist/katex.min.css")

const shortcodes = { T: Tag, Link, Box }

export default function PageTemplate({ data: { mdx }, children }) {
  console.log(mdx)

  return (
    <>
      <div className={styles.mainContainer}>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
    </>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
    }
  }
`

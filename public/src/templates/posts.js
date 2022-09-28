import React, { createContext, useContext } from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Tag from "../components/tag"
import Box from "../components/box"
import { Link } from "gatsby"

import "../styles/main.scss"

import * as styles from "../styles/notes.module.scss"

require("katex/dist/katex.min.css")

const FootnoteContext = createContext([])

const Footnote = ({ id }) => {
  const footnotes = useContext(FootnoteContext)

  const findIndex = id => {
    for (const [index, footnote] of footnotes.entries()) {
      if (id === footnote.id) {
        return index + 1
      }
    }
    return -1
  }

  const index = findIndex(id)

  if (index > 0) {
    return <sup>{findIndex(id)}</sup>
  }

  return <></>
}

const shortcodes = { T: Tag, Link, Box, Footnote }

export default function PageTemplate({ data: { mdx }, children }) {
  console.log(mdx)

  return (
    <>
      <FootnoteContext.Provider value={mdx.frontmatter.footnotes}>
        <div className={styles.mainContainer}>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>

          {mdx.frontmatter.footnotes && (
            <div className={styles.footnotes}>
              {mdx.frontmatter.footnotes?.map((footnote, idx) => (
                <p>
                  <sup>{idx + 1}</sup>
                  <span dangerouslySetInnerHTML={{ __html: footnote.html }} />
                </p>
              ))}
            </div>
          )}
        </div>
      </FootnoteContext.Provider>
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

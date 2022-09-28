import React from "react"

import * as styles from "../styles/components/box.module.scss"

const Box = ({ type, children }) => {
  return (
    <div>
      <div className={styles.title}>{type}</div>
      <div className={styles.box}>{children}</div>
    </div>
  )
}

export default Box

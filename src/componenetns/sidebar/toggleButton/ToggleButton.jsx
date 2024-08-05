import React from 'react'
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>Button</button>
 
  )
}

export default ToggleButton
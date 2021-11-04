import { motion, useAnimation } from 'framer-motion'
import React from 'react'

export const Card = () => {
  return (
    <div className="flex flex-col space-y-2">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 500 }}
        className="bg-gray-300 w-32 h-32"
      />
      
    </div>
  )
}

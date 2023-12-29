import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AlertaProps {
  tipo: 'sucesso' | 'erro'
  mensagem: string
  onClose: () => void
}

export function Toast({ tipo, mensagem, onClose }: AlertaProps) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setShow(false)
      onClose()
    }, 5000)

    document.body.style.overflowY = 'hidden'
    document.body.style.overflowX = 'hidden'

    return () => {
      clearTimeout(closeTimer)

      document.body.style.overflowY = 'auto'
      document.body.style.overflowX = 'auto'
    }
  }, [onClose])

  const barraClasse = tipo === 'erro' ? 'bg-red-500' : 'bg-green-500'

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="toast-success"
          className="absolute right-5 top-14 mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
          role="alert"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.4 }}
        >
          {tipo === 'erro' ? (
            <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Error icon</span>
            </div>
          ) : (
            <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
          )}
          <div className="ml-3 text-sm font-normal">{mensagem}</div>

          <motion.div
            className={`h-2 w-full ${barraClasse} absolute bottom-0 left-0 right-0 rounded-b-lg`}
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            exit={{ width: '0%' }}
            transition={{ duration: 5 }}
          ></motion.div>

          <button
            type="button"
            onClick={() => {
              setShow(false)
              onClose()
            }}
            className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Close</span>
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './Toast.css'

export default function Toast({ message, variant = 'success', onDismiss }) {
  return createPortal(
    <div className="toast-region" role="status" aria-live="polite">
      <AnimatePresence>
        {message && (
          <motion.div
            className={`toast toast--${variant}`}
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="toast__message">{message}</span>
            <button
              type="button"
              className="toast__close"
              aria-label="Dismiss notification"
              onClick={onDismiss}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    document.body,
  )
}

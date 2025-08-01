import { useEffect, useRef } from 'react'
import styles from './index.module.css'

/**
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false)
 *
 * <Modal open={isOpen}>
 *  <YourHTMLCode />
 * </Modal>
 *
 * @returns
 */
export default function Modal({
  children,
  open,
  onBackdropClick,
  beforeOpen,
  beforeClose,
  backdropProps,
  ...props
}: {
  children?: React.ReactNode
  /** 열기 닫기 제어*/
  open: boolean
  /** 백드롭 클릭 이벤트 */
  onBackdropClick?: () => void
  /** 모달이 열리기 전 이벤트 */
  beforeOpen?: () => void
  /** 모달이 닫히기 전 이벤트 */
  beforeClose?: () => void
  /** 백드롭 Props */
  backdropProps?: React.DialogHTMLAttributes<HTMLDialogElement>
} & React.HTMLAttributes<HTMLDivElement>) {
  const target = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (open) {
      if (beforeOpen instanceof Function) {
        beforeOpen()
      }

      target.current?.showModal()
    } else {
      if (beforeClose instanceof Function) {
        beforeClose()
      }

      target.current?.close()
    }
  }, [open, beforeOpen, beforeClose])

  function backdropEvent() {
    if (onBackdropClick instanceof Function) {
      onBackdropClick()
    }
  }

  return (
    <dialog
      ref={target}
      className={styles.modal}
      onClick={backdropEvent}
      {...backdropProps}
    >
      <div onClick={(e) => e.stopPropagation()} {...props}>
        {children}
      </div>
    </dialog>
  )
}

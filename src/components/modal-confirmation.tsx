import { ReactNode } from 'react'
import { Button, Modal, ModalProps } from 'antd'

type ModalConfirmationProps = {
  title: string
  open: boolean
  centered?: boolean
  content?: ReactNode
} & ModalProps

export const ModalConfirmation = ({ title, open, centered = true, content, ...props }: ModalConfirmationProps) => {
  return (
    <Modal
      width={445}
      title={title}
      centered={centered}
      open={open}
      {...props}
      destroyOnClose
      footer={<FooterModal onCancel={props.onCancel} onOk={props.onOk} />}
      className="modal-confirmation"
    >
      <div className="p-4">{content}</div>
    </Modal>
  )
}

const FooterModal = ({ onCancel, onOk }: ModalProps) => {
  return (
    <div className="w-full flex items-center space-x-3">
      <Button size="large" className="flex-1 w-full font-medium" onClick={onCancel}>
        Cancel
      </Button>
      <Button onClick={onOk} size="large" className="flex-1 w-full text-white font-medium" danger type="primary">
        Confirm
      </Button>
    </div>
  )
}

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"

interface ModalProps{
  title?: string;
  children: React.ReactNode;
  isOpen: boolean;
  size?: "xs" |"sm" | "md" | "lg" | "xl" | "full";
  onClose: () => void;
}
export function ModalBase({ title, children, size = 'md', isOpen, onClose = () => {} }: ModalProps){
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
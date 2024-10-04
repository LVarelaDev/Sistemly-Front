import {
  Button,
  Modal as NextUIModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { ReactNode } from "react";

interface Props {
  size: "2xl" | "xl";
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  action: () => void;
  displayButton: string;
}

const Modal = ({
  isOpen,
  size,
  onClose,
  title,
  children,
  action,
  displayButton,
}: Props) => {
  return (
    <NextUIModal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={action}>
            {displayButton}
          </Button>
        </ModalFooter>
      </ModalContent>
    </NextUIModal>
  );
};

export default Modal;
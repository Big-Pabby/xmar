"use client";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[101] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white  rounded-[12px] w-[550px] max-h-[500px] overflow-y-auto px-[48px] py-[24px]">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

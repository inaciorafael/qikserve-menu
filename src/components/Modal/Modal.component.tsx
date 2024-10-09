import Icon from "../Icon";
import Button from "../Button";
import Checkbox from "../Checkbox";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = (props: ModalProps) => {
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white overflow-y-auto relative shadow-lg h-[85%] max-w-[30%] w-full">
        <div className="relative">
          <img
            className="object-contain"
            src="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png"
          />
          <button
            onClick={props.onClose}
            className="bg-white absolute rounded-full top-5 right-5"
          >
            <Icon.Close className="text-3xl" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-title mb-1">
            Smash Brooks
          </h2>
          <p className="text-subtitle">
            100g pressed hamburger, mozzarella cheese, pickles, red onion,
            grilled bacon and traditional Heinz mayonnaise.
          </p>
        </div>
        <div className="bg-foreground py-3 px-6">
          <h3 className="font-semibold text-subtitle text-md">
            Choose your size
          </h3>
          <p>Select 1 option</p>
        </div>

        <div className="flex flex-col gap-5 p-6">
          <Checkbox />
          <Checkbox />
        </div>

        <div className="flex backdrop-blur-sm p-5 w-full absolute bottom-0 items-center justify-center">
          <Button onClick={() => {}} title={["Add to Order", "$11,75"]} />
        </div>
      </div>
    </div>
  );
};

export default Modal;

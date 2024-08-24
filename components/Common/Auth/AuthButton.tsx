import React from "react";
import SpinnerComponent from "@/components/Common/Reusable/Spinner";

interface Props {
  loading: boolean;
  isButtonDisabled: boolean;
  action: any;
  text: string;
}

const AuthButton: React.FC<Props> = ({ loading, action, text, isButtonDisabled }) => {
  return (
    <div className="w-4/12 md:w-3/12 mt-4">
      <button
        type="submit"
        className="w-44 h-10 font-nunito font-bold bg-shopYellow rounded-full text-black text-sm"
        disabled={isButtonDisabled}
        onClick={action}
      >
        {loading ? <SpinnerComponent /> : `${text}`}
      </button>
    </div>
  );
};

export default AuthButton;

import { APP_VERSION } from "@/utils/constanta/setting";
import { Link } from "react-router-dom";

const BFooter = () => {
  return (
    <div className="py-4 px-4 border-t flex justify-between">
      <Link to="mailto:putubayuguna@gmail.com">
        <span className="text-xs">putubayuguna@gmail.com</span>
      </Link>
      <span className="text-xs">Version {APP_VERSION}</span>
    </div>
  );
};

export default BFooter;

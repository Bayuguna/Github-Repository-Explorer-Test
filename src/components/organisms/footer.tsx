import { APP_VERSION } from "@/utils/constanta/setting";

const BFooter = () => {
  return (
    <div className="py-4 px-4 border-t flex justify-between">
      <span className="text-xs">Created By: putubayuguna@gmail.com</span>
      <span className="text-xs">Version {APP_VERSION}</span>
    </div>
  );
};

export default BFooter;

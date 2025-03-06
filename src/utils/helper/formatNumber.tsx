import { NumericFormat } from "react-number-format";

const formatNumber = (value: number) => {
  return (
    <NumericFormat
      value={value}
      displayType={"text"}
      thousandSeparator={true}
    />
  );
};

export default formatNumber;

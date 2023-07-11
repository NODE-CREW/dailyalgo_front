import { ChangeEvent, useState } from "react";
import Input from "src/components/common/Input/Input";

const Test = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setValue(() => e.target.value);
  };
  return (
    <div>
      this is test page
      <input type="text" value={value} onChange={handleChange} />
      <Input type="text" inputValue={value} setInputValue={setValue} />
    </div>
  );
};

export default Test;

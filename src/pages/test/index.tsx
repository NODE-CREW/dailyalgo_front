import { useState } from "react";
import { Button } from "src/components/atoms/Button";
import { Input } from "src/components/atoms/Input";
// import Input from "src/components/common/Input/Input";

const Test = () => {
  const [value, setValue] = useState("");
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   setValue(() => e.target.value);
  // };
  return (
    <div style={{ marginTop: 150, height: "100vh" }}>
      <Button className="normal">normal</Button>
      <Button className="round">round</Button>
      <Button className="lg">long</Button>

      <Input value={value} setValue={setValue} />
      {/* <input type="text" value={value} onChange={handleChange} /> */}
      {/* <Input type="text" inputValue={value} setInputValue={setValue} /> */}
    </div>
  );
};

export default Test;

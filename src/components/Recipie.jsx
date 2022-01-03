import { TextField } from "@mui/material";
import { useState } from "react";

export const Recipie = () => {
  const [dish, setDish] = useState({
    title: "",
    ingridient: "",
    time: "",
    img: "",
    inst: "",
  });
  return (
    <>
      <form>
        <TextField id="demo-helper-text-misaligned-no-helper" label="Title" />
        <TextField id="demo-helper-text-misaligned-no-helper" label="Title" />
        <TextField id="demo-helper-text-misaligned-no-helper" label="Title" />

        <TextField id="demo-helper-text-misaligned-no-helper" label="Title" />
      </form>
    </>
  );
};

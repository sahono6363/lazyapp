import Category from "./Category";
import { Categories } from "./Category";
import Title from "./Title";
import From from "./From";
import GoButton from "./GoButton";
import HeaderButtonA from "../ButtonA";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ClearIcon from '@mui/icons-material/Clear';

const Input = ({
  input,
  setInput,
  Categories,
  onGoClick,
  onToggleSort,
  isAlignMode,
}) => (
  <form
    style={{ display: "flex", alignItems: "center" }}
    onSubmit={(e) => {
      e.preventDefault();
      onGoClick();
    }}
  >
    <Category
      selected={input.category}
      setSelected={(cat) => setInput({ ...input, category: cat })}
      categories={Categories}
    />
    <Title
      title={input.title}
      setTitle={(title) => setInput({ ...input, title })}
    />
    <From from={input.from} setFrom={(from) => setInput({ ...input, from })} />
    <GoButton onClick={onGoClick} type="submit" />
    <HeaderButtonA onClick={onToggleSort}>
      {isAlignMode ? <SwapVertIcon/> : <ClearIcon/>}
    </HeaderButtonA>
  </form>
);

export default Input;

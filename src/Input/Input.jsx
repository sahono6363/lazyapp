import Category from "./Category";
import { Categories } from "./Category";
import Title from "./Title";
import From from "./From";
import GoButton from "./GoButton";

const Input = ({ input, setInput, Categories, onGoClick }) => (
  <form
    style={{ display: "flex", alignItems: "center" }}
    onSubmit={e => {
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
  </form>
);

export default Input;

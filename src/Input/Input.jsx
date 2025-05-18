import Category from "./Category";
import { Categories } from "./Category";
import Title from "./Title";
import From from "./from";
import GoButton from "./GoButton";

const Input = ({ input, setInput, Categories, onGoClick }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
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
    <GoButton onClick={onGoClick} />
  </div>
);

export default Input;

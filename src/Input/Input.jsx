import Category from "./Category";
import { Categories } from "./Category";
import Title from "./Title";
import From from "./from";

const Input = ({ input, setInput, list,Categories }) => (
  <div>
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
    
        
  </div>
);

export default Input;

import Category from "./Category";
import { Categories } from "./Category";
import Title from "./Title";
import From from "./from";

const Input = ({ input, setInput, list }) => (
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
    {list.map((item, i) => (
      <div key={i}>
        <Category selected={item.category} />
        <Title title={item.title} />
        <From from={item.from} />
        
      </div>
    ))}
        
  </div>
);

export default Input;

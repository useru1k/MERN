function Array({ items }) { 
    return (
      <div>
        <h1>Hello from Message Component</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
}
export default Array;

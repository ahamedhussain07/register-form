const Input = ({ label, type, name, onChange, value }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type ? type : "text"}
        placeholder={label}
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Input;

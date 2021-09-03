const Filter = ({ value, onChange }) => (
     <label>
        <span>Find contact by name</span>
        <input type="text" value={value} onChange={onChange} /></label>
    
)

export default Filter
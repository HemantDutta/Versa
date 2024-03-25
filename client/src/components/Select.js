import '../styles/Select.css';

export const Select = ({name, setState, children}) => {
    return (
        <div className="select-wrapper rounded overflow-hidden">
            <div className="select-border"/>
            <select name={name} id={name} className="bg-black text-white p-3 rounded"
                    onChange={(e) => {
                        name === "fonts" ?
                            setState(JSON.parse(e.target.value))
                            : setState(e.target.value)
                    }}
            >
                {children}
            </select>
        </div>
    )
}
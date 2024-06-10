import Select from 'react-select'

interface DropdownProps {
    list: any[];
    labelName: string | number;
}

const Dropdown = ({list, labelName}: DropdownProps) =>{
    return(
        <div>
            <label htmlFor="name">{labelName}</label>
            <Select options={list} />
        </div>
    )
}

export default Dropdown;
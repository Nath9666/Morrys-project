import React, {useState} from "react";

class CheckedSubTask{
    name
    checked
    // Ajouter un lien vers tache elle-même
    constructor(name, checked){
        this.name = name;
        this.checked = checked;
    }
}

function CheckedItems_name(checkedItems){
    let NamesItems = []
    checkedItems.forEach(item => (NamesItems.push(checkedItems.name)))
    return NamesItems;
}

function Checklist(props){
    // State with list of all checked item
    const [checked, setChecked] = useState([]);
    // const checkList = ["Apple", "Banana", "Tea", "Coffee"];

    const handleChange = () => {
        let newChecklist = [];
        props.checklist.forEach(item => {newChecklist.push(new CheckedSubTask(item, item in checked))
        })
        props.recupCheckList(newChecklist)
    }

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        handleChange()
    };

    // Generate string of checked items
    const checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    // Return classes based on whether item is checked
    var isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";

    return (
        <>
            <div className="checkList">
                <div className="title">Your CheckList:</div>
                <div className="list-container">
                    {props.checklist.map((item, index) => (
                        <div key={index}>
                            <input value={item} type="checkbox" onChange={handleCheck} />
                            <span className={isChecked(item)}>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                {`Items checked are: ${checkedItems}`}
            </div>
        </>
    );

}

export default Checklist;
export {CheckedSubTask, CheckedItems_name};
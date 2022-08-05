import React, {useState} from 'react'


function services() {

    const [selected, setSelected] = useState("");

    const changeSelection =(event) => {
        setSelected(event.target.value)
    }

    const Service = [
        "Web Development", "Digital Marketing", " Network and Security", " Cloud Services ", " Other Services"
    ];
    const Web = [ "1", "2"];
    const Dig = ["3", "4"];


    let type = null;

    let options = null
    if (selected === "Web Development"){
        type = Web
    } else if (selected === "Digital Marketing"){
         type = Dig
    }

    if (type) {
        options = type.map((op, i) => <option key={i}>{op}</option>)
    }
  return (
    <>
        <form action="" className="container">
            <select onChange={changeSelection}>
                <option value="">Choose Option</option>
                <option value="">Web Development</option>
                <option value="">Digital Marketing</option>
            </select>
            <select >
                {
                    options
                }
            </select>
        </form>
    </>
  )
}

export default services
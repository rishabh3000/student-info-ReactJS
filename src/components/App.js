import React from "react";
import Info from "./Info";


function App() {

    const[inputText1, setInputText1] = React.useState("");
    const[inputText2, setInputText2] = React.useState("");
    const[inputText3, setInputText3] = React.useState("");
    const[items1, setItems1] = React.useState([]);
    const[items2, setItems2] = React.useState([]);
    const[items3, setItems3] = React.useState([]);


    


    function handleChange1(event) {
            const newValue = event.target.value;
            setInputText1(newValue);
    }

        function handleChange2(event) {
            const newValue = event.target.value;
            setInputText2(newValue);
    }

    function handleChange3(event) {
        const newValue = event.target.value;
        setInputText3(newValue);
    }

    
    function addInfo1() {
        setItems1((preVal) => {
            return [...preVal, inputText1]
        });

        setInputText1("");

        setItems2((preVal) => {
            return [...preVal, inputText2]
        });

        setInputText2("");

        setItems3((preVal) => {
            return [...preVal, inputText3]
        });
        
        setInputText3("");
    }

    // function addInfo2() {
    //     setItems2((preVal) => {
    //         return [...preVal, inputText2]
    //     });
    //     setInputText2("");
    // }

    // function addInfo3() {
    //     setItems3((preVal) => {
    //         return [...preVal, inputText3]
    //     });
    //     setInputText3("");
    // }
 
    return (
        
        <div>
            <div><h1>Student Info</h1></div>
            <div className="inputInfo">
                <input onChange={handleChange1} type="text" placeholder="Enter Your Name" value={inputText1} />
                <input onChange={handleChange2} type="text" placeholder="Enter Your Branch" value={inputText2} />
                <input onChange={handleChange3} type="number" placeholder="Enter Your Phone Number" value={inputText3} />
                <button onClick={addInfo1}><span>Add</span></button>
            </div>

            <div>
            <table border="4">

                {items1.map((item, index) => (
                <Info 
                    key={index}
                    id={index}
                    name={item} />))};
            

                {items2.map((item, index) => (
                    <Info 
                        key={index}
                        id={index}
                        branch={item} />))};


                {items3.map((item, index) => (
                    <Info 
                        key={index}
                        id={index}
                        phoneNumber={item} />))};


            </table>

            </div>
            
        </div>
        
    );
}



export default App;

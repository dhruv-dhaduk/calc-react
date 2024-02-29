import Button from "./Button";

function ButtonPanel({ expr, setExpr }) {

    return (
        <div className="grid grid-cols-4 gap-4 py-4">
            <Button text="1" onClick={() => console.log("1")} />
            <Button text="2" onClick={() => console.log("2")} />
            <Button text="3" onClick={() => console.log("3")} />
            <Button text="4" onClick={() => console.log("4")} />
            <Button text="5" onClick={() => console.log("5")} />
            <Button text="6" onClick={() => console.log("6")} />
            <Button text="7" onClick={() => console.log("7")} />
            <Button text="8" onClick={() => console.log("8")} />
            <Button text="9" onClick={() => console.log("9")} />
            <Button text="10" onClick={() => console.log("10")} />
            <Button text="11" onClick={() => console.log("11")} />
            <Button text="12" onClick={() => console.log("12")} />
            <Button text="13" onClick={() => console.log("13")} />
            <Button text="14" onClick={() => console.log("14")} />
            <Button text="15" onClick={() => console.log("15")} />
            <Button text="16" onClick={() => console.log("16")} />
            <Button text="17" onClick={() => console.log("17")} />
            <Button text="18" onClick={() => console.log("18")} />
            <Button text="19" onClick={() => console.log("19")} />
            <Button text="20" onClick={() => console.log("20")} />
        </div>
    );
}

export default ButtonPanel;
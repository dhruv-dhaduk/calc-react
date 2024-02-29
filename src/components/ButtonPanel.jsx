import Button from "./Button";

function ButtonPanel({ expr, setExpr }) {

    function appendExpr(value) {
        setExpr(expr + value);
    }

    function evaluateExpr() {
        try {
            const ans = eval(expr);
            setExpr(ans+"");
        }
        catch(err) {
            setExpr("INVALID !");
        }
    }

    return (
        <div className="grid grid-cols-4 gap-4 py-4">
            <Button text="(" onClick={() => appendExpr("(")} />
            <Button text=")" onClick={() => appendExpr(")")} />
            <Button text="AC" onClick={() => setExpr("")} />
            <Button text="<" onClick={() => setExpr(expr.substring(0, expr.length-1))} />
            <Button text="7" onClick={() => appendExpr("7")} />
            <Button text="8" onClick={() => appendExpr("8")} />
            <Button text="9" onClick={() => appendExpr("9")} />
            <Button text="/" onClick={() => appendExpr("/")} />
            <Button text="4" onClick={() => appendExpr("4")} />
            <Button text="5" onClick={() => appendExpr("5")} />
            <Button text="6" onClick={() => appendExpr("6")} />
            <Button text="*" onClick={() => appendExpr("*")} />
            <Button text="1" onClick={() => appendExpr("1")} />
            <Button text="2" onClick={() => appendExpr("2")} />
            <Button text="3" onClick={() => appendExpr("3")} />
            <Button text="-" onClick={() => appendExpr("-")} />
            <Button text="." onClick={() => appendExpr(".")} />
            <Button text="0" onClick={() => appendExpr("0")} />
            <Button text="=" onClick={evaluateExpr} />
            <Button text="+" onClick={() => appendExpr("+")} />
        </div>
    );
}

export default ButtonPanel;
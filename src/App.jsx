import { useState } from "react";

import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";

function App() {
    const [expr, setExpr] = useState('');

    function appendExpr(value) {
        setExpr(expr + value);
    }

    return (
        <>
            <div className="mx-auto p-4 my-4 bg-gray-500 rounded-2xl md:w-1/2 lg:w-1/3">
                <Display expr={expr} />
                <ButtonPanel expr={expr} setExpr={setExpr} />
            </div>
            
        </>
    );
}

export default App;

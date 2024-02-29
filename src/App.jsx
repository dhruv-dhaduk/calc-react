import { useState } from "react";

import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";

function App() {
    const [expr, setExpr] = useState('32 + 88');

    function appendExpr(value) {
        setExpr(expr + value);
    }

    return (
        <>
            <div className="mx-auto my-8 md:w-1/2 lg:w-1/3">
                <Display expr={expr} />
                <ButtonPanel />
            </div>
            
        </>
    );
}

export default App;

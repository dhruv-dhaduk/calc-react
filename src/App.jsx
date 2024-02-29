import { useState } from "react";

import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";

function App() {
    const [expr, setExpr] = useState('');

    return (
        <>
            <div className="inset-y-0 w-full max-h-full md:inset-0 absolute m-auto h-fit p-4 bg-gray-500 rounded-2xl md:w-1/2 lg:w-1/3">
                <Display expr={expr} />
                <ButtonPanel expr={expr} setExpr={setExpr} />
            </div>
            
        </>
    );
}

export default App;

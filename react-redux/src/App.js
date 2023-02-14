import { useState } from 'react'

function App () {
    const [showClock, setShowClock] = useState(true);

    function onShowClockClick () {
        setShowClock(!showClock);
    }

    return (
        <>
            <button onClick={onShowClockClick}>Show / Hide Clock</button>

        </>
    )
}

export default App
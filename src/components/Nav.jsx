import { useState } from "react"

import { BsMoon } from 'react-icons/bs'

export default function Nav() {

    const [mode, setMode] = useState(false)

    function chnageMode() {
        setMode(!mode)
        if (mode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }


    return (
        <div className={`flex justify-between p-5 bg-white text-black dark:bg-[#2B3844] dark:text-white shadow`}>
            <h1 className="text-3xl font-bold">Where in the world?</h1>
            <button className="text-2xl dark:text-white flex gap-3 items-center" onClick={chnageMode}> {mode ? <BsMoon /> : <BsMoon style={{color:'white'}} />}Dark Mode</button>
        </div>
    )
}
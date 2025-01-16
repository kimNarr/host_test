import React, { useState } from 'react'

function Home() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>홈화면 입니다</h1>

            <p>{count}</p>

            <button type='button' onClick={()=> setCount(count+1)}>플러스</button>
            <button type='button' onClick={()=> setCount(count-1)}>마이너스</button>
        </div>
    )
}

export default Home

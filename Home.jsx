import React from 'react'
import './Style.css'
export default function Home(i) {
    let name = "condings"
    console.log("name")
  return (
    

    <div className='main'>
        <h1> hello wellcome </h1>
      <h1 >{i.name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi tempora incidunt, dolore quas nulla consectetur vel ipsum explicabo accusamus inventore reiciendis, dolores, quae maxime distinctio! Id aspernatur deleniti eligendi odio!</p>
    </div>

  )
}

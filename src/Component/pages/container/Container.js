import React from 'react'
import './Container.css'

const Container = () => {
  return (
    <>
     <div 
     className='container'
     >
      <div className='wrapper'>

        <h1>Learn to Code</h1>
        <h3>
            With the world's largest web developer site.
        </h3>
        <div className='search_form'>

        <input
        className='search'
        placeholder='Search our tutorials, e.g.HTML '
        />
            <button>

        <i class="fa-solid fa-magnifying-glass"></i>
            </button>
      
        </div>
        <h3>Not Sure Where To Begin?</h3>
      </div>
     </div>
     <div className='small_container'>

     </div>
    </>
  )
}

export default Container
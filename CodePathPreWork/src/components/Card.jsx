import React from 'react'

const Card = (creators) => {
 console.log(creators)
    return (
      <article>
          <div className='card-container' style={{backgroundImage: `url(${creators[0].Image})`}}>
              <div>
                  <div>
                      
                  </div>
              </div>
          </div>
      </article>
  )
}

export default Card

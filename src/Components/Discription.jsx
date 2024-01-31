import React from 'react'

const Discription = () => {
  return (
    <div className='flex flex-col *:*:p-3 mx-20 mb-10 text-sm discription-header'>
        <div className='flex flex-wrap *:w-[130px] *:flex *:justify-center *:items-center *:border'>
            <div className="discription">Description</div>
            <div className="review bg-gray-50">Reviews <span>(22)</span></div>
        </div>
        <div className="p-8 border description-box">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos accusantium aliquam nam totam fugiat deleniti cumque fugit assumenda necessitatibus, nulla dicta provident facilis et sapiente harum nisi. Qui, consequatur quasi!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit, tempora nostrum aliquid quae, impedit culpa ex repellat unde, ad perferendis. Repellat nobis veritatis sequi suscipit corrupti at blanditiis maiores.</p>
        </div>
        
    </div>
  )
}

export default Discription
import React from 'react'

export const Pagination = ({page, totalPage, onChangePage}) => {

    const pageNumbers = () => {
        const numbers = []
        for(let i = 1; i <= totalPage; i++ ){
            numbers.push(i)
        }
        return numbers
    }

    const handlePrev = () => {
        if(page > 1) {
            onChangePage(page - 1)
        }

    }

    const handleNext = () => {
        if(page <= totalPage) {
            onChangePage(page +1)
        }

    }


  return (
    <div>
        <button onClick={()=> handlePrev()}>Prev</button>
        {pageNumbers().map(item => <button onClick={() => onChangePage(item)}>{item}</button>)}
        <button onClick={() => handleNext()}>Next</button>
    </div>
  )
}

export default Pagination

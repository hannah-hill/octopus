import React from 'react'

const SpecTable = ({
  brand,
  weight,
  height,
  width,
  length,
  modelCode,
  colour,
}) => {
  return (
    <div className='ProductSpec__table'>
      <table>
        <tbody>
          <tr>
            <td className='td-1'>Brand</td>
            <td>{brand}</td>
          </tr>
          <tr>
            <td className='td-1'>Item weight</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td className='td-1'>Dimensions</td>
            <td>
              {height}x{width}x{length}
            </td>
          </tr>
          <tr>
            <td className='td-1'>Item model number</td>
            <td>{modelCode}</td>
          </tr>
          <tr>
            <td className='td-1'>Colour</td>
            <td>{colour}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SpecTable

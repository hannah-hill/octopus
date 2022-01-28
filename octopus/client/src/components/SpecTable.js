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
            <td>Brand</td>
            <td>{brand}</td>
          </tr>
          <tr>
            <td>Item weight</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Dimensions</td>
            <td>
              {height}x{width}x{length}
            </td>
          </tr>
          <tr>
            <td>Item model number</td>
            <td>{modelCode}</td>
          </tr>
          <tr>
            <td>Colour</td>
            <td>{colour}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SpecTable

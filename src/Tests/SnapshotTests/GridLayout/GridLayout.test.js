import React from 'react'
import renderer from 'react-test-renderer'
import GridLayout from '../../../Components/Hero/GridLayout/GridLayout'

it("renders when the item has not loaded yet",()=>{
    const tree = renderer.create(<GridLayout/>).toJSON()
    expect(tree).toMatchSnapshot()
})


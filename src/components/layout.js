import React from 'react'
import Navbar from './Navbar'
import './layout.css'

import styled from 'styled-components'

const layout = ({children}) => {
    return (
        <>
        
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default layout


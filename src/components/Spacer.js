import React from 'react'

export default function Spacer({top, bottom}) {
    return <div style={{marginTop:top || '50px', marginBottom:bottom || '0'}}/>
}
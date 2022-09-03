import React from 'react'
import '../../styles/SideBar.css'
import Filter from '../SideBar/Filter'
const SideBar = ({sideBarHidden}) => {

  console.log(sideBarHidden)
  return (
    <section className={`side__bar ${sideBarHidden ? 'hidden__sidebar' : '' }`} >
      <Filter />
    </section>
  )
}

export default SideBar
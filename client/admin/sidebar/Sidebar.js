import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import kik from '../../assets/images/kik.png'
import navigation from './_nav'
// import kik from './../assets/kik.png'
export default function Sidebar() {
    const dispatch = useDispatch()
    const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
     className='sidebar'
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/admin/">
        <img src={kik} className="c-sidebar-brand-full" height={35} />
        <h2 className="c-sidebar-brand-full">Kiriikou.com</h2>
        <img src={kik} className="c-sidebar-brand-minimized" height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

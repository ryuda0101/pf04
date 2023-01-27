import React from 'react'
import '../css/style.css'
import Container from './Container'
import Footer from './Footer'
import GnbMenu from './GnbMenu'
import Header from './Header'

function Layout() {
  return (
    // div로 감싸지 않고 비어있는 상태로 가도 OK.
    // 이렇게 빈칸으로 넣게 되면 div태그 안에 header가 있는 불필요한 부모 태그가 있는게 아니라
    // 바로 header 태그가 나타난다.
    <>
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </>
  )
}

export default Layout

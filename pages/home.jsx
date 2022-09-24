import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
        <Header title={'HOME'} />
        <Main/>
        <Footer activeNow={'HOME'}/>
    </div>
  )
}

export default Home
import './App.css'


function App() {
  const nameEn = 'Natchaya Phongkuson'
  const nameTh = 'ณัฐชยา ผ่องกุศล'
  const discord = 'ถุงแพร#8978'
  return (
    <>
      <h1>Hello สวัสดีค่ะ</h1>
      <h2>My name: {nameEn}<br></br> ฉันชื่อ: {nameTh}</h2>
      <h2>My discord: {discord}</h2>
      <h4>There are my cats</h4>
      <img src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-6/309446567_431084325804382_6072146401949875507_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFucq4Gp1ttrHPkPxHE2fUBXe7s4CuWlRFd7uzgK5aVESAqDiaCjqrjI7SayO70Y18u4v8v2G0-bdER5lu6hHNr&_nc_ohc=VMF-_HMEiTIAX_wME8v&_nc_zt=23&_nc_ht=scontent.fbkk22-3.fna&oh=00_AfCNrzg_xMjwtwogTA9mIom0jNFw4BAEGy5TJkBrd3s0gA&oe=64AEF076" width={400} alt="My Image" />
    </>
  )
}

export default App

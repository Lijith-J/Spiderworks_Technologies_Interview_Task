import All_Topics_Section_Main from "./Components/All_Topics_secion/All_Topics_Section_Main";
import Avatars_section from "./Components/Discussion_section/Avatars_section";
import Discussion_section from "./Components/Discussion_section/Discussion_section";
import Forum_section from "./Components/Forum_Section/Forum_section";
import Navbar from "./Components/Navbar/Navbar";
import Topic_section from "./Components/Topic_section/Topic_section";


function App() {
  return (
    <>
      <Navbar />
      <Forum_section/>
      <Discussion_section/>
      <Avatars_section/>
      <Topic_section/>
      <All_Topics_Section_Main/>
    </>
  );
}

export default App;

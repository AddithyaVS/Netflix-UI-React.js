import "./App.css";
import Banner from "./Components/Banner";
import instance from "./Components/Instance";
import requests from "./Components/Requests";
import Row from "./Components/Row";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="Trending"fetchUrl={requests.fetchTrending} isLargeRow={true}/>
      <Row title="TopRated"fetchUrl={requests.fetchTopRated}/>
      <Row title="Netflix Originals"fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Documentaries"fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}/>
    

    </div>
  );
}

export default App;
    
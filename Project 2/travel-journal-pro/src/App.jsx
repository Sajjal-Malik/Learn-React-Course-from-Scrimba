import Header from './components/Header';
import Entry from './components/Entry';
import Data from './Data';

function App() {

  const mainElements = Data.map((element) => {
    return (
      <Entry
        key={element.id}
        containerImg={{
          src: element.img.src,
          alt: element.img.alt
        }}
        countryName={element.country}
        googleMapLink={element.googleMapsLink}
        title={element.title}
        infoDate={element.dates}
        infoText={element.text}
      />
    )
  });

  return (
    <>
      < Header />
      <main className="container">
        {mainElements}
      </main>
    </>
  )
}

export default App;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Loader from "./components/common/Loader";
import { getCurrentLocationWeather } from "./services/weatherApis";

import { updateCurrentWeatherData } from "./store/features/weatherSlice";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const currentWeatherData = useSelector(
    (state) => state.weather.currentWeatherData
  );

  const dispatch = useDispatch();

  const handleSearch = async (cityName) => {
    try {
      setIsLoading(true);
      const currentData = await getCurrentLocationWeather(cityName);
      dispatch(updateCurrentWeatherData(currentData));
      localStorage.setItem('currentWeatherData', JSON.stringify(currentData))
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=> {
    const currentWeatherData = localStorage.getItem('currentWeatherData');
    if(currentWeatherData) {
      dispatch(updateCurrentWeatherData(JSON.parse(currentWeatherData)));
    }
  }, [])

  return (
    <div className="App my-4">
      <Container>
        <Row>
          <Col>
            <div className="position-relative">
              <h1 className="my-4 text-center text-info">React Weather App</h1>
              <SearchBar handleSearch={handleSearch} />

              <div className="mt-5 mb-4"></div>
              <div className="position-relative">
                {isLoading && <Loader />}

                <CurrentWeather data={currentWeatherData} />
              </div>
              <div className="my-4"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

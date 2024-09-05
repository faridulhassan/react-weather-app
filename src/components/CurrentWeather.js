import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default function CurrentWeather({data = {}}) {

  const {main, wind, weather} = data;
 
  return (
    <Card className="currentWeather">
      <Card.Header className="fw-bold fs-4 d-flex justify-content-between">
        <span>Weather Info</span>
      </Card.Header>
      <Card.Body>
        <Container fluid>
          <Row>
            <Col xs="12" xl="6">
              <h3 className="city-name">{data?.name}</h3>
              <div className="d-flex gap-3 align-items-center">
                <div className="">
                  <svg width="48" height="48" viewBox="0 0 48 48">
                    <path
                      fill="#BBDEFB"
                      d="M18.5 4A8.5 8.5 0 1 0 18.5 21A8.5 8.5 0 1 0 18.5 4Z"
                    ></path>
                    <path
                      fill="#BBDEFB"
                      d="M19 20A7 7 0 1 0 19 34A7 7 0 1 0 19 20Z"
                    ></path>
                    <path
                      fill="#BBDEFB"
                      d="M11 14A7 7 0 1 0 11 28 7 7 0 1 0 11 14zM38 14A6 6 0 1 0 38 26 6 6 0 1 0 38 14z"
                    ></path>
                    <path
                      fill="#BBDEFB"
                      d="M30 19A6 6 0 1 0 30 31A6 6 0 1 0 30 19Z"
                    ></path>
                    <path
                      fill="#BBDEFB"
                      d="M30.5 7A6.5 6.5 0 1 0 30.5 20A6.5 6.5 0 1 0 30.5 7Z"
                    ></path>
                    <path
                      fill="#BBDEFB"
                      d="M23 12A7 7 0 1 0 23 26A7 7 0 1 0 23 12Z"
                    ></path>
                    <g>
                      <path
                        fill="#D500F9"
                        d="M22 44l2-7h-3l4-8h4l-3.594 6H29L22 44zM32.594 39l2-7h-3l4-8h4L36 30h3.594L32.594 39z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="current-temparature fw-bold fs-5">
                 {main?.temp ?  main.temp : ''}<sup>°</sup>C
                </div>
              </div>
             {weather?.length ?  <div className="status">{weather[0].main}</div> : null}
              <div className="mb-3 d-block d-md-none"></div>
            </Col>
            <Col xs="12" xl="6">
              <h3 className="fs-5">
                Feels like {main?.feels_like}<sup>°</sup>
              </h3>

              <div className="mt-3">
                <div className="currentWeather__details d-flex gap-3 mb-2">
                  <div className="currentWeather__details-heading fw-bold text-secondary">
                    Humidity
                  </div>
                  <div className="currentWeather__details-value">{main?.humidity}%</div>
                </div>
                <div className="currentWeather__details d-flex gap-3 mb-2">
                  <div className="currentWeather__details-heading fw-bold text-secondary">
                    Wind Speed
                  </div>
                  <div className="currentWeather__details-value">{wind?.speed}kph</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

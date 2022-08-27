import React, { useEffect, useState } from "react";
import "./App.css";

import HalfWrapper from "./Components/HalfWrapper/HalfWrapper";
import Loader from "./Components/Loader/Loader";
import MainWrapper from "./Components/MainWrapper/MainWrapper";
import OptionsForm from "./Components/OptionsForm/OptionsForm";

import Title from "./Components/Title/Title";

interface ICountry {
  title: string;
  icon: string;
  value: string;
}

const App = () => {
  const countries: ICountry[] = [
    {
      title: "USA",
      icon: "usa.png",
      value: "usa",
    },
    {
      title: "Brazil",
      icon: "brazil.png",
      value: "brazil",
    },
    {
      title: "Canada",
      icon: "canada.png",
      value: "canada",
    },
  ];

  const [currentScreen, setCurrentScreen] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const startLoading = () => {
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

  useEffect(() => {
    startLoading();
  }, []);

  const handleNextScreenButtonClick = () => {
    setCurrentScreen((currentValue) => currentValue + 1);
  };

  if (!isLoaded) {
    return (
      <MainWrapper center={true}>
        <Loader />
      </MainWrapper>
    );
  }

  return (
    <MainWrapper center={true}>
      <HalfWrapper currentScreen={currentScreen} screenNumber={1}>
        <OptionsForm
          options={countries}
          buttonLabel="Next"
          onClick={() => {
            console.log("hi");
          }}
        >
          Country
        </OptionsForm>
      </HalfWrapper>
      <HalfWrapper
        currentScreen={currentScreen}
        screenNumber={0}
        nextButtonEnabled={true}
        onButtonClick={handleNextScreenButtonClick}
      >
        <Title>Find a State</Title>
        <p>
          Find a State is a website created for users that are looking for a
          good state to live and help them to take the best decision!
        </p>
      </HalfWrapper>
    </MainWrapper>
  );
};

export default App;

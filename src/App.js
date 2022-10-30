import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTravelPage from "./pages/CreateTravelPage";
import { Modal, Text } from "@mantine/core";
import LoginPage from "./pages/LoginPage";

const App = (props) => {
  const dates = useState([new Date(), new Date()]);
  console.log(dates);

  const city = useState("");
  const [openModal, setOpenModal] = useState(false);

  const onHandleFindTravel = () => {
    if (!dates[0][0] || !dates[0][1].getDate() || !city[0]) {
      setOpenModal(true);
    }
  };
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/home"
          element={
            <HomePage
              onHandleFindTravel={onHandleFindTravel}
              city={city}
              dates={dates}
            />
          }
        />
        <Route
          path="/travel"
          element={<CreateTravelPage city={city} dates={dates} />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Modal opened={openModal} onClose={() => setOpenModal(false)}>
        <Text style={{ position: "absolute", top: "20px" }}>
          All inputs should be filled before searching!
        </Text>
      </Modal>
    </React.Fragment>
  );
};

export default App;

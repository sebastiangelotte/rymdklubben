import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { media } from "./utils/style-utils";

import Filter from "./components/Filter";
import Item from "./components/Item";
import CustomScrollbar from "./components/CustomScrollbar";

import logo from "../../assets/logo.svg";
import background from "../../assets/bg.jpg";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://www.rymdklubben.com/api/launches");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Root>
      <Controls>
        <Filter />
        <Masthead></Masthead>
      </Controls>
      <Wrapper>
        <CustomScrollbar>
          {data.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </CustomScrollbar>
      </Wrapper>
    </Root>
  );
};

export default App;

//CSS
const Root = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  // background-image: url('${background}');
  background-color: #110f29;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: row;

  ${media.medium`
		flex-direction: column;
	`}
`;

const Wrapper = styled.div`
	width: 70%;
	max-width: 800px;
	//overflow: initial;
	height: 90%;

  ${media.medium`
		width: 100%;
		max-width: none;
	`}
`;

const Controls = styled.div`
  width: 30%;
  min-width: 390px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  ${media.medium`
		margin-left: 135px;
	`}
  ${media.small`
		margin-left: 0px;
	`}
`;

const Masthead = styled.div`
  background-image: url("${logo}");
  background-size: fit;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 80px;
  left: 10px;
  color: #fff;
  font-family: consolas;
  font-size: 13px;
  height: 200px;
  width: 200px;
  ${media.medium`
		display: none;
	`}
`;

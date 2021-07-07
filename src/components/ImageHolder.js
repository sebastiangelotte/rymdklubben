import React, { useState } from "react";
import styled from "styled-components";

import image1 from "../assets/rymdklubben_neon.svg";
import image2 from "../assets/rymdklubben_isometric.svg";
import image3 from "../assets/kikki_face.svg";

const ImageHolder = () => {
  const [imageURLs] = useState([image1, image2, image3]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function nextImage() {
    const newIndex = (activeImageIndex + 1) % imageURLs.length;
    setActiveImageIndex(newIndex);
  }

  function previousImage() {
    const len = imageURLs.length;
    const newIndex = (activeImageIndex + len - 1) % len;
    setActiveImageIndex(newIndex);
  }

  function selectImage(imageIndex) {
    setActiveImageIndex(imageIndex);
  }

  return (
    <Wrapper>
      <div onClick={nextImage}>
        <MainImage src={imageURLs[activeImageIndex]} alt=""></MainImage>
      </div>
      <ThumbnailPicker style={{ textAlign: "center" }}>
        <ImageButton onClick={previousImage}>&lt;</ImageButton>
        {imageURLs.map((image, imageIndex) => (
          <ThumbnailImage
            key={imageIndex}
            src={image}
            onClick={() => selectImage(imageIndex)}
            alt=""
          ></ThumbnailImage>
        ))}
        <ImageButton onClick={nextImage}>&gt;</ImageButton>
      </ThumbnailPicker>
    </Wrapper>
  );
};

export default ImageHolder;

const Wrapper = styled.div`
  padding: 50px;
  text-align: center;
`;

const MainImage = styled.img`
  height: 400px;
  width: 100%;
  max-width: 600px;
  cursor: pointer;
  padding: 20px;
`;

const ThumbnailPicker = styled.div`
  display: flex;
  justify-content: center;
`;

const ThumbnailImage = styled.img`
  max-height: 100px;
  max-width: 100px;
  padding: 20px;
  background-color: #16142f;
  border: 2px solid #1b1935;
  margin: 2px;
  cursor: pointer;
`;

const ImageButton = styled.div`
  cursor: pointer;
  font-family: monospace;
  color: #fff;
  font-size: 40px;
  align-self: center;
  padding: 0 20px;
`;

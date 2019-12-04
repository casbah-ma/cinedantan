import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import Img from "react-image";
import { idToPoster } from "../helpers";
import AddToFavorites from "./AddToFavorites";
import { Icon, Rate } from "antd";

const Loader = ({ identifier, isDetail }) => {
  return (
    <Img
      src={idToPoster(identifier, false, "xs")}
      decode={false}
      className={"slider-content-img"}
      style={{
        height: isDetail ? "auto" : "45vh",
        objectFit: isDetail ? "" : "contain",
        filter: "blur(2px)"
      }}
    />
  );
};

export default function SliderContent({ data, isDetail }) {
  const { identifier, imdb, rating } = data;
  const hrefLink = isDetail
    ? "/watch/" + window.btoa(imdb)
    : imdb
    ? "/details/" + window.btoa(imdb)
    : "#";

  return (
    <LazyLoad>
      {" "}
      <div className={"dvd-box"}>
        <div
          style={{
            height: isDetail ? "70vh" : "50vh",
            width: "auto",
            textAlign: "center"
          }}
        >
          <Link to={hrefLink}>
            <Img
              src={idToPoster(identifier, true)}
              loader={<Loader identifier={identifier} isDetail={isDetail} />}
              decode={false}
              className={"slider-content-img"}
              style={{
                height: isDetail ? "auto" : "45vh",
                objectFit: isDetail ? "" : "contain"
              }}
            />
            {isDetail && (
              <div className={"play-button"}>
                <Icon
                  type="play-circle"
                  style={{ fontSize: "100px", color: "white" }}
                />
              </div>
            )}

            {/**rating */}
            <div style={{ position: "absolute", left: "10%" }}>
              <Rate
                character={<Icon type="heart" />}
                disabled
                defaultValue={Math.abs(rating / 2)}
              />
            </div>
          </Link>
          <div className={"fav-container"}>
            <AddToFavorites imdb={imdb} />
          </div>
        </div>
      </div>{" "}
    </LazyLoad>
  );
}

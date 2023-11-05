"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import Image from "next/image";
import CustomMarker from "./CustomMarker";

const Map = () => {
  const HotelIcon = L.icon({
    iconUrl: "https://img2.pic.in.th/pic/icons8-hotel-64.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  const position: LatLngTuple = [7.894659789512898, 98.35286031020033];
  const hotel1: LatLngTuple = [7.8977829607003205, 98.3551929242207];
  const hotel2: LatLngTuple = [7.900009325967304, 98.35552551812461];
  return (
    // <div className="">MAp</div>
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "40rem" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}

      <CustomMarker location={hotel1} iconType="Hotel"/>
      <Marker position={hotel2} icon={HotelIcon}>
        <Popup maxWidth={200} minWidth={200}>
          <Image
            src="https://ak-d.tripcdn.com/images/220a0r000000gwne24089_R_960_660_R5_D.jpg"
            width={500}
            height={500}
            alt="Wrong with images"
          />
          <div className="my-2">
            <div className="flex items-center justify-between">
              <div className="font-bold text-sm">The Scene Condo</div>
              <div className="">123</div>
            </div>
            <div className="overflow-x-scroll mt-1">
              <div className="">Booking Now (132)</div>
              <div className="text-xs mt-1">Price: 9000</div>
              <div className="text-xs mt-1">40 THAVEEWONG ROAD, PATONG, KATHU</div>
              <div className="text-xs mt-1">
                RESERVATIONS-BLISSPATONG@HOMMHOTELS.COM
              </div>
              <div className="text-xs mt-1">
                0x05CD35f8D7011b42Ef579cCab9D6982cDd9f24cd
              </div>
            </div>
          </div>
        </Popup>
      </Marker>
      <polyline/>
    </MapContainer>
  );
};

export default Map;

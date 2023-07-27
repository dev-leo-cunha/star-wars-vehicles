import styled from "styled-components";
import background from "./background.jpg";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
`;
export const RGBA = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;
export const TitleVehicle = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const Vehicles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;
export const Loading = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const VehicleUnit = styled.div`
  border: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  margin: 20px;
  width: 280px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
export const VehiclesItem = styled.div`
  margin-bottom: 10px;
`;
export const VehiclesLabel = styled.span`
  font-weight: bold;
  color: #333;
`;
export const VehicleValue = styled.span`
  color: #666;
`;

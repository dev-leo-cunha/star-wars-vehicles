import styled from "styled-components";

export const Form = styled.div`
  height: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Vehicle = styled.div`
  display: flex;
  justify-content: center;
`;
export const VehicleUnit = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  margin: 20px;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media (max-width: 765px) {
    width: 280px;
    padding: 12px;
    margin: 12px;
  }
`;

export const VehiclesItem = styled.div`
  margin-bottom: 10px;
  @media (max-width: 765px) {
    margin-bottom: 5px;
  }
`;

export const VehiclesLabel = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-right: 5px;
  color: #333;
  @media (max-width: 765px) {
    font-size: 16px;
    margin-right: 3px;
  }
`;

export const VehicleValue = styled.span`
  color: #666;
  font-weight: 600;
  font-size: 16px;
  @media (max-width: 765px) {
    font-size: 14px;
  }
`;

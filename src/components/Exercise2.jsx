import { devices } from "../data/data.js";

const Exercise2 = () => {
  const wideDevices = devices.filter((device) => device.width >= 700);

  return (
    <ul>
      {wideDevices.map((device) => (
          <li key={device.id}>
            {device.name} {device.price >= 1000 ? "💰 高級品" : "🛒 お買い得"}
          </li>
      ))}
    </ul>
  );
};

export default Exercise2;

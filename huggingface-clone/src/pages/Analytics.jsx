import StatsCard from "../components/StatsCard";
import { FaRobot, FaChartLine, FaUsers } from "react-icons/fa";

function Analytics() {
  return (
    <div>
      <h2>Analytics Dashboard</h2>

      <div style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
        <StatsCard title="Total Models" value="4" icon={<FaRobot />} />
        <StatsCard title="Total Requests" value="1.2K" icon={<FaChartLine />} />
        <StatsCard title="Active Users" value="328" icon={<FaUsers />} />
      </div>
    </div>
  );
}

export default Analytics;

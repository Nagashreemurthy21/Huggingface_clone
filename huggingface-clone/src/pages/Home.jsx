import StatsCard from "../components/StatsCard";

function Home() {
  return (
    <div className="home-container">

      <div className="hero-section">
        <h1>Welcome to AI Model Hub</h1>
        <p>
          Explore and interact with powerful AI models locally powered by Ollama.
        </p>
      </div>

      <div className="stats-grid">
        <StatsCard title="Total Models" value="12+" />
        <StatsCard title="Active Users" value="1.2K" />
        <StatsCard title="API Requests" value="25K+" />
        <StatsCard title="Uptime" value="99.9%" />
      </div>

    </div>
  );
}

export default Home;

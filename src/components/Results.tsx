import "./Results.css";

const stats = [
  {
    value: "120+",
    label: "transactions across HDB, BTO, private",
  },
  {
    value: "95%+",
    label: "average satisfaction",
  },
  {
    value: "$50K-$100K+",
    label: "saved through strategic timing",
  },
];

export default function Results() {
  return (
    <section className="section" id="results">
      <div className="section__inner">
        <div className="section__heading">
          <h2>What Clients Trust About This Approach</h2>
        </div>
        <div className="results-grid">
          {stats.map((stat) => (
            <div className="result-stat" key={stat.label}>
              <p className="result-stat__value">{stat.value}</p>
              <p className="result-stat__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import "./Section.css";
export default function Section1() {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center my-4">Lini Bisnis</h1>
        <p className="text-center">2012 - 2025</p>
        <hr />
      </div>
      <div class="marquee-container">
        <div class="marquee">
          <div class="card-marquee">
            Kami sangat berkomitmen dengan keyakinan anda
          </div>
          <div class="card-marquee">
            Kami menjaga beton anda tidak di maling
          </div>
          <div class="card-marquee">Di buat dengan bahan berkualitas</div>
          <div class="card-marquee">Dengan tangan tangan ahli</div>
          <div class="card-marquee">Buat proyek anda semakin baik</div>
        </div>
      </div>

      <div className="d-flex flex-row gap-3 justify-content-center">
        {/* Card 1 */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Bisnis A - Penjelasan singkat tentang lini bisnis ini.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Bisnis B - Penjelasan singkat tentang lini bisnis ini.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Bisnis C - Penjelasan singkat tentang lini bisnis ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

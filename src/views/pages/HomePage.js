import React, { useEffect, useState } from "react";
import { getIPAddress, isHostnameValid } from "../../services/addressService";

function HomePage() {
  const [hostname, setHostname] = useState("reddit.com");
  const [ip, setIP] = useState("");
  const [error, setError] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [isLoading, setLoading] = useState(false);

  function getIPAddressAndRender() {
    if (!isHostnameValid) return;

    console.log(hostname)
    getIPAddress(hostname)
      .then((ip) => {
        setIP(ip);
        setError(null);
        setLoading(false);
      })
      .catch(() => {
        setIP("");
        setError("Hostname not found!");
        setLoading(false);
      });
  }

  useEffect(() => {
    getIPAddressAndRender();
  }, []);
  useEffect(() => {
    setIP("");
    setError(null);
    setLoading(true);

    if (!!searchTimeout) clearTimeout(searchTimeout);

    setSearchTimeout(
      setTimeout(() => {
        getIPAddressAndRender();
      }, 1000)
    );

    return () => clearTimeout(searchTimeout);
  }, [hostname]);

  return (
    <div className="section center">
      <div className="container text-center">
        <div>
          <h1 className="font-monospace text-uppercase">Get IP Address</h1>
          <p className="lead">Access your desired website when your ISP doesn't want to.</p>
        </div>

        <div className="container-fluid">
          <input
            className="form-control text-center form-control-lg"
            type="text"
            placeholder="reddit.com"
            aria-label="reddit.com"
            value={hostname}
            onChange={(e) => setHostname(e.target.value)}
          />
          {(!!ip || !!error || isLoading) && (
            <div className="mt-4">
              {!!ip && <h5 className="font-monospace">{ip}</h5>}
              {!!error && <h5 className="font-monospace text-danger">{error}</h5>}
              {!!isLoading && <h5 className="font-monospace">Loading...</h5>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

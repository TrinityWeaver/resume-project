import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.520645502493!2d-0.07389368422946643!3d51.52200977963765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb640ab7f25%3A0xe1078eb9c803248e!2sBrick%20Ln%2C%20London!5e0!3m2!1sen!2suk!4v1659303050297!5m2!1sen!2suk"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;

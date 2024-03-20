import React from "react";
import ImgVendor1 from "../../img/vendor-1.jpg";
import ImgVendor2 from "../../img/vendor-2.jpg";
import ImgVendor3 from "../../img/vendor-3.jpg";
import ImgVendor4 from "../../img/vendor-4.jpg";
import ImgVendor5 from "../../img/vendor-5.jpg";
import ImgVendor6 from "../../img/vendor-6.jpg";
import ImgVendor7 from "../../img/vendor-7.jpg";
import ImgVendor8 from "../../img/vendor-8.jpg";

function Vendor() {
  let div_img_classes = "vendor-item border m-2 vendor-style";
  return (
    <div class='container-fluid py-5'>
      <div class='row px-xl-5'>
        <div class='col'>
          <div class='d-flex'>
            <div class={div_img_classes}>
              <img src={ImgVendor1} alt='' />
            </div>
            <div class={div_img_classes}>
              <img src={ImgVendor2} alt='' />
            </div>
            <div class={div_img_classes}>
              <img src={ImgVendor3} alt='' />
            </div>
            <div class={div_img_classes}>
              <img src={ImgVendor4} alt='' />
            </div>
            <div class={div_img_classes}>
              <img src={ImgVendor5} alt='' />
            </div>
            <div class={div_img_classes}>
              <img src={ImgVendor6} alt='' />
            </div>
            <div class={div_img_classes}>
              <img src={ImgVendor7} alt='' />
            </div>
            <div class={div_img_classes}>
              <img src={ImgVendor8} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vendor;

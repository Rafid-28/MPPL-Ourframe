import React from "react";
import "./Port.css";
import Img1 from "./images/Rectangle91.jpeg";
import Img2 from "./images/Rectangle9.jpeg";
import Img3 from "./images/Rectangle10.jpeg";
import Img4 from "./images/Rectangle11.jpeg";
import Img5 from "./images/Rectangle13.jpeg";
import Img6 from "./images/Rectangle12.jpeg";
import Img7 from "./images/Rectangle14.jpeg";
import Img8 from "./images/Img20240516Wa00161.jpeg";
import Img9 from "./images/Rectangle15.jpeg";
import Img10 from "./images/Rectangle17.jpeg";
import Img11 from "./images/Rectangle18.jpeg";

const Port = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
  ];

  return (
    <div className="wireframe-portofolio">
      <div className="container-9">
        <div className="lorem-ipsum">Lorem Ipsum</div>
        <div className="sorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-etiam-eu-turpis-molestie-dictum-est-amattis-tellus-sed-dignissim-metus-nec-fringilla-accumsan-risus-sem-sollicitudin-lacus-ut-interdum-tellus-elit-sed-risus-maecenas-eget-condimentum-velit-sit-amet-feugiat-lectus-class-aptent-taciti-sociosqu-ad-litora-torquent-per-conubia-nostra-per-inceptos-himenaeos">
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </div>
        <div class="container-1">
          <p class="university">
            <span class="university-sub-56">8+</span>
            <span>University</span>
          </p>
          <p class="surabaya-malang">
            <span class="surabaya-malang-sub-6">Surabaya</span>
            <span class="surabaya-malang-sub-5">&</span>
            <span>Malang</span>
          </p>
          <p class="graduates">
            {" "}
            <span class="graduates-sub-3">100+</span>{" "}
            <span class="graduates-sub-4">Graduates</span>{" "}
          </p>
        </div>

        <div className="gallery">
          {data.map((item, index) => (
            <div key={index} className="pics">
              <img src={item.imgSrc} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Port;

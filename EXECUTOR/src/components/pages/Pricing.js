import React from "react";
import "./Pricing.css";
import OouiNextLtr from "./images/ooui_next-ltr.png";
import Vector from "./images/Vector.png";
import UsersThree from "./images/UsersThree.png";
import UsersFour from "./images/UsersFour.png";
import UsersFours from "./images/UsersFours.png";

export const Pricing = () => {
  return (
    <div className="wireframe-paket-foto">
      <div className="div">
        <div className="group">
          <div className="frame">
            <div className="rectangle" />
            <div className="text-wrapper">Additional</div>
            <div className="rectangle-2" />
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="group-2">
                <div className="text-wrapper-2">Extra Time :</div>
                <div className="group-3">
                  <div className="text-wrapper-3">30 MENIT</div>
                  <div className="text-wrapper-4">IDR 150.000,-</div>
                </div>
                <div className="group-4">
                  <div className="text-wrapper-3">60 MENIT</div>
                  <div className="text-wrapper-5">IDR 250.000,-</div>
                </div>
              </div>
              <p className="p">(hanya dapat dilakukan pada hari H)</p>
            </div>
          </div>
          <div className="group-wrapper">
            <div className="group-5">
              <div className="text-wrapper-6">Extra Cinematic Video :</div>
              <div className="text-wrapper-7">IDR 350.000,-</div>
              <div className="text-wrapper-8">1 Minutes</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="group-6">
              <div className="text-wrapper-9">Extra Edit :</div>
              <div className="text-wrapper-10">IDR 25.000,-</div>
              <div className="text-wrapper-11">5 Photos</div>
            </div>
          </div>
          <div className="group-7">
            <div className="group-8">
              <div className="text-wrapper-12">Extra Video Reels :</div>
              <div className="text-wrapper-13">IDR 250.000,-</div>
              <div className="text-wrapper-14">30 Seconds</div>
            </div>
          </div>
        </div>
        <div className="overlap">
          <div className="group-9">
            <p className="seluruh-informasi">
              Seluruh informasi terkait pricelist, package, dan booking hanya
              melalui nomor admin 0822-1052-7184. <br />
              Untuk keep package, tanggal, dan waktu dapat dilakukan pembayaran
              DP sebesar 50%. <br />
              Pelunasan dilakukan H-1 sebelum sesi foto dilaksanakan atau sesi
              foto tidak dapat dilangsungkan. <br />
              DP akan dinyatakan hangus apabila terjadi pembatalan secara
              sepihak oleh customer. <br />
              Penyerahan soft file paling lambat H+1 setelah sesi foto selesai.{" "}
              <br />
              Proses edit foto dan video maksimal 14 hari setelah list foto
              dikirimkan oleh customer. <br />
              Link google drive hanya bisa diakses dalam waktu 14 hari dihitung
              dari penyerahan soft file, diharapkan customer untuk segera
              mengunduh soft file tersebut. <br />
              Extra time dapat dilakukan dihari H dan tidak berlaku pada saat
              melakukan proses booking.
            </p>
            <div className="frame-2">
              <div className="rectangle-3" />
              <div className="text-wrapper">Terms &amp; Condition</div>
              <div className="rectangle-3" />
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="group-13">
            <div className="text-wrapper-20">Personal Package</div>
            <div className="frame-3">
              <div className="group-14">
                <div className="SIL-VER-wrapper">
                  <div className="SIL-VER">
                    SIL
                    <br />
                    VER
                  </div>
                </div>
              </div>
              <div className="group-14">
                <div className="overlap-5">
                  <div className="text-wrapper-21">GOLD</div>
                </div>
              </div>
              <div className="group-15">
                <div className="PLA-TI-NUM-wrapper">
                  <div className="PLA-TI-NUM">
                    PLA
                    <br />
                    TI
                    <br />
                    NUM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-16">
          <div className="text-wrapper-22">Group/Couple Package</div>
          <div className="group-17">
            <div className="group-18">
              <div className="overlap-group-2">
                <div className="text-wrapper-23">Book Now</div>
                <img
                  className="ooui-next-ltr"
                  alt="Ooui next ltr"
                  src={Vector}
                />
              </div>
            </div>
            <div className="group-19">
              <div className="overlap-6">
                <div className="text-wrapper-24">More Details</div>
                <img
                  className="ooui-next-ltr-2"
                  alt="Ooui next ltr"
                  src={OouiNextLtr}
                />
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-4">
              <img className="group4" alt="group-4" src={UsersFour}></img>
              <div className="text-wrapper-25">4 - 6 People</div>
            </div>
          </div>
          <div className="group-20">
            <div className="frame-5">
              <img className="group3" alt="group-3" src={UsersThree}></img>
              <div className="text-wrapper-26">2 - 3 People</div>
            </div>
          </div>
          <div className="group-21">
            <div className="overlap-7">
              <div className="overlap-group-3">
                <img className="group5" alt="group-5" src={UsersFours} />
                <img className="group6" alt="group-6" src={UsersFours} />
              </div>
              <div className="text-wrapper-27">7 - 10 People</div>
            </div>
          </div>
        </div>
        <div className="group-22">
          <p className="setiap-wisudawan">
            Setiap wisudawan akan mendapatkan sesi photoshoot grup, individu,
            dan&nbsp;&nbsp;bersama keluarga maupun teman. <br />
            Photoshoot grup sudah include dengan multiple spots dengan catatan.
            <br />
            harus satu grup tidak diperkenankan untuk individu. <br />
            Untuk photoshoot grup lebih dari 10 orang harap hubungi admin kami.
          </p>
          <div className="frame-6">
            <div className="rectangle-3" />
            <div className="text-wrapper">Notes</div>
            <div className="rectangle-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

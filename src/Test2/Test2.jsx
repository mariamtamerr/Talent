import * as React from "react";


const Test2 = (props) => {
  return (
    <>
    <div className="div">
      <div className="div-2">
        <div className="column">
          <div className="div-3">
            <div className="div-4">
              <div className="div-5">
                <div className="div-6">
                  <div className="div-7">مي صالح</div>
                  <div className="div-8">maii saleh@gmail.com </div>
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="img"
                />
              </div>
              <div className="div-9">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="img-2"
                />
                <div className="div-10">العام:</div>
              </div>
            </div>
            <div className="div-11">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7de1bfe9b2b290b830e39a15ca32a64757af6d5c70e85eb94e1fcc7e8eea962b?"
                className="img-3"
              />
              <div className="div-12">ارسال للجميع</div>
            </div>
            <div className="div-13">العنوان</div>
            <div className="div-14">محتوي الرسالة</div>
            <div className="div-15">ارسال</div>
          </div>
        </div>
        <div className="column-2">
          <div className="div-16">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/57c2711c47b368938d246056839fb3d0edaf2f59555c277499d58501c2bbc0bf?"
              className="img-4"
            />
            <div className="div-17">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b76445c34aeef8af61a923906658805f83d4f79944111d3a9292ed3866a2d550?"
                className="img-5"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b339f831fab2fe1b08b787f82322fbbeecc07c79b411dd36c5d44a0d91da0ac?"
                className="img-6"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5912e7cd9eb195680ccee1e319a2934944c81d61ae632cf76b46a97c329d570c?"
              className="img-7"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1556585055d864ca7f28dc414da460d429139f5a286975c485fbe0d7f6febee?"
              className="img-8"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d3128a65a95fc0459dbe64024edc970b1cb9de4ee2efd02e1c462de3012a8e8?"
              className="img-9"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3286ca77c516ba7faac658e11f764c598a1084402ef5d673a5d2bda02191b9b?"
              className="img-10"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2aea55951f2c78287fdf40ace8013df8ee63132a7a763816fc64d368699baf28?"
              className="img-11"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e094d3aded480b900b8bef43b3945460280a871b29abb9be445034c594dde23?"
              className="img-12"
            />
            <div className="div-18">
              <div className="div-19">الاشعارات</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b955ea931aefa8633b57efbd32e05f3c61df0c2a0f65bd1bb1396c88088e57?"
                className="img-13"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbaa9d553e73aa8ae1d5e892d5d84d815a88ad92e9a63f708d3e6b7c1a5ee145?"
              className="img-14"
            />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .div {
        background-color: #f8f8f8;
        padding-left: 80px;
      }
      @media (max-width: 991px) {
        .div {
          padding-left: 20px;
        }
      }
      .div-2 {
        gap: 20px;
        display: flex;
      }
      @media (max-width: 991px) {
        .div-2 {
          flex-direction: column;
          align-items: stretch;
          gap: 0px;
        }
      }
      .column {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 78%;
        margin-left: 0px;
      }
      @media (max-width: 991px) {
        .column {
          width: 100%;
        }
      }
      .div-3 {
        display: flex;
        margin-top: 21px;
        flex-direction: column;
      }
      @media (max-width: 991px) {
        .div-3 {
          max-width: 100%;
          margin-top: 40px;
        }
      }
      .div-4 {
        align-self: stretch;
        display: flex;
        width: 100%;
        padding-right: 5px;
        justify-content: space-between;
        gap: 20px;
      }
      @media (max-width: 991px) {
        .div-4 {
          max-width: 100%;
          flex-wrap: wrap;
        }
      }
      .div-5 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .div-6 {
        align-items: end;
        display: flex;
        flex-grow: 1;
        flex-basis: 0%;
        flex-direction: column;
        margin: auto 0;
      }
      .div-7 {
        color: #000;
        text-transform: capitalize;
        white-space: nowrap;
        font: 500 20px Inter, sans-serif;
      }
      @media (max-width: 991px) {
        .div-7 {
          white-space: initial;
        }
      }
      .div-8 {
        color: #c9c9c9;
        text-transform: capitalize;
        align-self: stretch;
        margin-top: 4px;
        white-space: nowrap;
        font: 500 13px Inter, sans-serif;
      }
      @media (max-width: 991px) {
        .div-8 {
          white-space: initial;
        }
      }
      .img {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 56px;
        overflow: hidden;
        border-radius: 50%;
        align-self: stretch;
        max-width: 100%;
      }
      .div-9 {
        align-self: center;
        display: flex;
        gap: 7px;
        margin: auto 0;
      }
      .img-2 {
        aspect-ratio: 4.52;
        object-fit: contain;
        object-position: center;
        width: 140px;
        overflow: hidden;
        max-width: 100%;
      }
      .div-10 {
        color: #000;
        text-transform: capitalize;
        align-self: start;
        margin-top: 5px;
        flex-grow: 1;
        white-space: nowrap;
        font: 500 24px Inter, sans-serif;
      }
      @media (max-width: 991px) {
        .div-10 {
          white-space: initial;
        }
      }
      .div-11 {
        border-radius: 16px;
        border: 2px solid #073e32;
        align-self: end;
        display: flex;
        margin-top: 69px;
        width: 335px;
        max-width: 100%;
        justify-content: space-between;
        gap: 20px;
        padding: 12px 17px;
      }
      @media (max-width: 991px) {
        .div-11 {
          margin-top: 40px;
        }
      }
      .img-3 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 48px;
        overflow: hidden;
        max-width: 100%;
      }
      .div-12 {
        color: #073e32;
        text-transform: capitalize;
        margin: auto 0;
        font: 700 24px Inter, sans-serif;
      }
      .div-13 {
        color: #073e32;
        text-transform: capitalize;
        white-space: nowrap;
        border-radius: 8px;
        background-color: #eee;
        align-self: stretch;
        margin-top: 48px;
        justify-content: center;
        align-items: end;
        padding: 21px 27px 21px 60px;
        font: 500 24px Inter, sans-serif;
      }
      @media (max-width: 991px) {
        .div-13 {
          white-space: initial;
          max-width: 100%;
          margin-top: 40px;
          padding: 0 20px;
        }
      }
      .div-14 {
        color: #073e32;
        text-transform: capitalize;
        white-space: nowrap;
        border-radius: 8px;
        background-color: #eee;
        align-self: stretch;
        margin-top: 16px;
        align-items: end;
        padding: 25px 26px 127px 60px;
        font: 500 24px Inter, sans-serif;
      }
      @media (max-width: 991px) {
        .div-14 {
          white-space: initial;
          max-width: 100%;
          padding: 0 20px 40px;
        }
      }
      .div-15 {
        color: #fff;
        text-transform: capitalize;
        white-space: nowrap;
        border-radius: 8px;
        background-color: #073e32;
        align-self: center;
        margin-top: 48px;
        width: 459px;
        max-width: 100%;
        justify-content: center;
        align-items: center;
        padding: 24px 60px;
        font: 700 24px Inter, sans-serif;
      }
      @media (max-width: 991px) {
        .div-15 {
          white-space: initial;
          margin-top: 40px;
          padding: 0 20px;
        }
      }
      .column-2 {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 22%;
        margin-left: 20px;
      }
      @media (max-width: 991px) {
        .column-2 {
          width: 100%;
        }
      }
      .div-16 {
        disply: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        display: flex;
        aspect-ratio: 0.2734375;
        flex-grow: 1;
        padding: 43px 25px 43px 32px;
      }
      @media (max-width: 991px) {
        .div-16 {
          margin-top: 40px;
          padding: 0 20px;
        }
      }
      .img-4 {
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
      .div-17 {
        position: relative;
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 0 1px;
      }
      .img-5 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 40px;
        overflow: hidden;
        max-width: 100%;
        margin: auto 0;
      }
      .img-6 {
        aspect-ratio: 1.85;
        object-fit: contain;
        object-position: center;
        width: 89px;
        overflow: hidden;
        align-self: stretch;
        max-width: 100%;
      }
      .img-7 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 32px;
        overflow: hidden;
        align-self: end;
        margin-top: 112px;
        max-width: 100%;
      }
      @media (max-width: 991px) {
        .img-7 {
          margin-top: 40px;
        }
      }
      .img-8 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 32px;
        overflow: hidden;
        align-self: end;
        margin-top: 35px;
        max-width: 100%;
      }
      .img-9 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 32px;
        overflow: hidden;
        align-self: end;
        margin-top: 32px;
        max-width: 100%;
      }
      .img-10 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 32px;
        overflow: hidden;
        align-self: end;
        margin-top: 36px;
        max-width: 100%;
      }
      .img-11 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 32px;
        overflow: hidden;
        align-self: end;
        margin-top: 28px;
        max-width: 100%;
      }
      .img-12 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 32px;
        overflow: hidden;
        align-self: end;
        margin-top: 27px;
        max-width: 100%;
      }
      .div-18 {
        position: relative;
        align-self: end;
        display: flex;
        margin-top: 32px;
        align-items: start;
        gap: 8px;
      }
      .div-19 {
        color: #fff;
        text-transform: capitalize;
        margin-top: 7px;
        flex-grow: 1;
        white-space: nowrap;
        font: 700 24px Inter, sans-serif;
      }
      @media (max-width: 991px) {
        .div-19 {
          white-space: initial;
        }
      }
      .img-13 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 32px;
        overflow: hidden;
        align-self: stretch;
        max-width: 100%;
      }
      .img-14 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 32px;
        overflow: hidden;
        align-self: end;
        max-width: 100%;
        margin: 32px 0 230px;
      }
      @media (max-width: 991px) {
        .img-14 {
          margin-bottom: 40px;
        }
      }
    `}</style>
  </>
);
}




export default Test2


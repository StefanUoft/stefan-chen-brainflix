import React from "react";
import "./UploadPage.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import videoThumb from "../../assets/images/Upload-video-preview.jpg";

function UploadPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsModalVisible(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      {isModalVisible && <div className="uploadform__modal">Thank you!</div>}

      <div className="flex-wrapper flex-wrapper--underlined">
        <div className="uploadform__wrapper">
          <h1 className="uploadform__title">Upload Video</h1>

          <form className="uploadform" onSubmit={handleFormSubmit}>
            <div className="uploadform__group-thumb">
              <label className="uploadform__label">Video Thumbnail</label>
              <img
                className="uploadform__thumb"
                src={videoThumb}
                alt="video thumbnail"
              />
            </div>

            <div className="uploadform__group-inputs">
              <label className="uploadform__label" htmlFor="titlefield">
                Title your video
              </label>
              <input
                className="uploadform__titlefield uploadform__input"
                type="text"
                id="titlefield"
                name="titlefield"
                placeholder="Add a title to your video"
              />

              <label className="uploadform__label" htmlFor="descfield">
                Add a video description
              </label>
              <textarea
                className="uploadform__descfield uploadform__input"
                id="descfield"
                name="descfield"
                placeholder="Add a description to your video"
              ></textarea>
            </div>

            <div className="uploadform__group-submit">
              <button type="submit" className="uploadform__button button">
                Publish
              </button>
              <Link to="/" className="uploadform__cancel">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadPage;

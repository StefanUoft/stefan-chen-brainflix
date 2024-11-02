import React from "react";
import "./UploadPage.scss";
import { Link, useNavigate } from "react-router-dom";
import videoThumb from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

function UploadPage() {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Uploaded Successfully");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <div className="upload-page">
        <div className="upload-page__wrapper">
          <h1 className="upload-page__title">Upload Video</h1>

          <form className="upload-page__form" onSubmit={handleFormSubmit}>
            <div className="upload-page__thumbnail-group">
              <label className="upload-page__label">VIDEO THUMBNAIL</label>
              <img
                className="upload-page__thumbnail"
                src={videoThumb}
                alt="video thumbnail"
              />
            </div>

            <div className="upload-page__inputs-group">
              <label className="upload-page__label" htmlFor="titlefield">
                TITLE YOUR VIDEO
              </label>
              <input
                className="upload-page__input--title"
                type="text"
                id="titlefield"
                name="titlefield"
                placeholder="Add a title to your video"
              />

              <label className="upload-page__label" htmlFor="descfield">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="upload-page__input--description"
                id="descfield"
                name="descfield"
                placeholder="Add a description to your video"
              ></textarea>
            </div>

            <div className="upload-page__actions">
            <button type="submit" className="upload-page__publish">
                <img src={publishIcon} alt="Publish Icon" />
                PUBLISH
                <img src={publishIcon} alt="Publish Icon" />
              </button>
              <Link to="/" className="upload-page__cancel">
                CANCEL
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadPage;

import React, { useState } from "react";
import "./UploadPage.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import videoThumb from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

function UploadPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/videos", {
        title,
        description,
        image: "/images/Upload-video-preview.jpg" 
      });

      alert("Uploaded Successfully");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("There was an error uploading the video. Please try again.");
    }
  };

  return (
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label className="upload-page__label" htmlFor="descfield">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload-page__input--description"
              id="descfield"
              name="descfield"
              placeholder="Add a description to your video"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
  );
}

export default UploadPage;

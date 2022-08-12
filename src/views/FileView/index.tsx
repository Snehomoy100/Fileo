import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import axios from "axios";

import CommonLoader from "../../components/CommonLoader/index";
import CantFind from "../CantFind/index";
import "../../components/CommonLoader/commonLoader.css";
import "./fileView.css";

const FileComponent = () => {

  const { query } = useParams();

  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;

  const getPhotos = async () => {
    setError("");
    setLoading(true);
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}&page=${page}&per_page=20&orientation=landscape`
      )
      .then((res) => {
        res.data.results.map((item: any) => {
          setData((prevData: any) => [
            ...new Set([...prevData, item.urls.regular]),
          ]);
        });
        setPage((prevPage) => prevPage + 1);
        if (res.data.results.length < 20) {
          setHasMore(false);
          setLoading(false);
          setError("");
        }
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };
  
  useEffect(() => {
    setData([]);
    setLoading(false);
    setError("");
    getPhotos();
  }, [query]);
  useEffect(() => {
    getPhotos();
  }, []);
  const [modal, setModal] = useState(false);
  const [tempImage, setTempImage] = useState("");

  const getImg = (imgSrc: string) => {
    setTempImage(imgSrc);
    setModal(true);
  };

  if (error.length === 0) {
    return (
      <InfiniteScroll
        dataLength={data.length} 
        next={getPhotos}
        hasMore={hasMore}
        height={"90vh"}
        loader={<CommonLoader />}
        endMessage={<CantFind />}
      >
        <>
          <div className={modal ? "fc267Modal fc781Open" : "fc267Modal"}>
            <img src={tempImage} alt="modal" />
            <i
              className="fa-solid fa-xmark fc891CloseIcon"
              onClick={() => setModal(false)}
            ></i>
          </div>
          <div className="fc901Gallery">
            {data.map((item: any, index: number) => {
              return (
                <div
                  className="fc018Pics"
                  key={index}
                  onClick={() => getImg(item)}
                >
                  <img src={item} alt="" className="fc999Image" />
                </div>
              );
            })}
          </div>
        </>
      </InfiniteScroll>
    );
  } else {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }
};

export default FileComponent;

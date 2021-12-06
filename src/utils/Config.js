export const API_MOVIE="http://localhost:3000/movies";//"http://www.omdbapi.com/";
export const ERROR_MESSAGE="Ocurrió algo inesperado, inténtelo más tarde";
export const TITLE_PAGE="CINE LEÓN";
export const MAX_NUMBER_CARDS=20;

export const styleModal = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 99999999,
      overflow: "hidden",
      perspective: 1300,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    content: {
      position: "relative",
      margin: "3% auto",
      width: "50%",
      border: "1px solid rgba(0, 0, 0, .2)",
      background: "#fff",
      overflow: "auto",
      borderRadius: "4px",
      outline: "none",
      boxShadow: "0 5px 10px rgba(0, 0, 0, .3)",
    },
    transition: {
      // transition for the modal window
      property: "all",
      duration: 200, // millisecond
      timingfunction: "linear",
    },
    begin: {
      //beginning style of transition
      transform: "scale(0.7)",
      opacity: 0,
    },
    end: {
      // end style of transition
      transform: "scale(1)",
      opacity: 1,
    },
  };

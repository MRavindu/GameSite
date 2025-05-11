import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalAPI";
import Banner from "../Components/banner";
import TrendingGames from "../Components/TrendingGames";

function Home() {

  const [allGameList, setAllGameList] = useState();
  // const [error, setError] = useState(null);

  useEffect(()=>{
    getAllGamesList();
  },[])

  const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((resp)=>{
      setAllGameList(resp.data.results);
    })
  }
  return (
    <div className="grid grid-cols-4 px-5">
      <div className="hidden md:block">
        <GenreList />
      </div>

      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList}/>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm';
import newsService from '../../services/newsService';


const initialValues = {
  search: "",
}


const RightSidebar = () => {
  
  const [news,setNews] = useState([])

  const search = (search) => {
    console.log(search)
  }

  const dateToText = (date) => {
    return date
  }

  const openNews = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  }

  useEffect(() => {
    const getHeadlines = async () => {
      const news = await newsService.getHeadlines()
      setNews(news.articles)
    }

    getHeadlines()
    },[])

  return(
    <div className="flex flex-col flex-grow items-start">
      <div className="top-0 bottom-0 flex-col ml-7 mr-3 lg:items-start hidden rightShowLarge:flex rightShowLarge:w-rightLarge ">
        {/* after adding position fixed, the search bar does not follow width properties of its parent. Added those again to make it work  */}
        <div className="fixed h-14 bg-white flex flex-col justify-center hidden rightShowLarge:flex rightShowLarge:w-rightLarge">
          <SearchForm initialValues={initialValues} search={search} />
        </div>
        {/* dummy box to add margin so content does not hide behind search box */}
        <div className="fixed flex flex-col w-rightLarge mt-3 rounded-xl bg-gray-50 w-full top-14">
          <div className="px-4 py-3 text-xl font-semibold ">
            What's happening
          </div>
          {
            news.slice(0,5).map(n => (
            <div key={n.id} className="px-4 py-3 border-t flex flex-row hover:bg-gray-100" onClick={() => openNews(n.url)}>
              <div className="flex flex-col w-4/5 mr-4">
                <div className="text-xs text-gray-500 mb-1">
                  <span>
                    News 
                  </span> 
                  <span className="pl-1">
                    . {dateToText(n.publishedAt)}
                  </span>
                </div>
                <div className="text-sm font-semibold">
                  {n.title}
                </div>
              </div>
              <div className="w-1/5">
                <div className="block bg-primary">
                  <img src={n.urlToImage} className="rounded-lg w-16 h-16 object-cover"/>
                </div>
              </div>
            </div>
            ))
          }
          {/* <div className="px-4 py-3 border-b flex flex-row">
            <div className="flex flex-col">
              <div className="text-xs text-gray-500 mb-1">
                <span>
                  News 
                </span> 
                <span className="pl-1">
                  . time
                </span>
              </div>
              <div className="text-sm font-semibold">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit,  
                labore et dolore magna aliqua.
              </div>
            </div>
            <div className="w-52 rounded-lg bg-primary">
            </div>
          </div>
          <div className="px-4 py-3 border-b flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="text-xs text-gray-500 mb-1">
                Trending in India
              </div>
              <div className="text-sm font-semibold mb-1">
                #Lorem ipsum dolor sit
              </div>
              <div className="text-xs text-gray-500 mb-1">
                Trending with something
              </div>
            </div>
            <div className="">
              button
            </div>
          </div>
          <div className="px-4 py-3 border-b flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="text-xs text-gray-500 mb-1">
                Trending in India
              </div>
              <div className="text-sm font-semibold mb-1">
                #Lorem ipsum dolor sit
              </div>
              <div className="text-xs text-gray-500 mb-1">
                Trending with something
              </div>
            </div>
            <div className="">
              button
            </div>
          </div>
          <div className="px-4 py-3 border-b flex flex-row">
            <div className="flex flex-col">
              <div className="text-xs text-gray-500 mb-1">
                <span>
                  News 
                </span> 
                <span className="pl-1">
                  . time
                </span>
              </div>
              <div className="text-sm font-semibold">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit,  
                labore et dolore magna aliqua.
              </div>
            </div>
            <div className="w-52 rounded-lg bg-primary">
            </div>
          </div>
           */}
          {/* <div className="px-4 py-4 text-sm flex flex-row text-primary">
            Show more
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
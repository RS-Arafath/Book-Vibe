import React, { useContext } from 'react';
import { BookContext } from '../../BookProvider/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Componant/ListedBook/ReadList';
import WishList from '../../Componant/ListedBook/WishList';
const Books = () => {
  

  
   
  return (
    <div className=" w-11/12 mx-auto   mt-20 mb-10 md:mb-15 lg:mb-20 lg:my-25">
      <div className="bg-gray-200 w-full p-3 sm:p-4 md:p-6  mb-10 text-2xl md:text-3xl lg:text-4xl text-center rounded-2xl font-bold font-secondary">
        <h2>Books</h2>
      </div>
      {/* <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div> */}
      <div>
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2><ReadList></ReadList></h2>
          </TabPanel>
          <TabPanel>
            <h2><WishList></WishList></h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
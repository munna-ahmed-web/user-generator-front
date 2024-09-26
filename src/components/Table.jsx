import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const Table = ({ usersList, hasMore, handleScroll }) => {
  return (
    <div>
      <InfiniteScroll
        dataLength={usersList?.length}
        hasMore={hasMore}
        next={handleScroll}
        endMessage={
          <p className="items-center mt-3">
            <b>You have finished the list</b>
          </p>
        }
      >
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Serial
                </th>
                <th scope="col" className="px-6 py-3">
                  Unique ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {usersList?.map((user, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{user._id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.address}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Table;

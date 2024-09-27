import Select from "react-select";
import { TbHandClick } from "react-icons/tb";
import { localeData } from "../data/data";
import Table from "../components/Table";
import useUserFetch from "../hooks/useUserFetch";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import useRegion from "../hooks/useRegion";
import useSeed from "../hooks/useSeed";
import useError from "../hooks/useError";
import useCreate from "../hooks/useCreate";
import toast from "react-hot-toast";
const URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const { usersState, setUsersState, fetchUsers, fetcMoreUsers } =
    useUserFetch();
  const { region, setRegion, handleSelect } = useRegion();
  const { seed, generateSeed, handleSeed } = useSeed();
  const { errorState, handleRange, inputFieldValue, handleInput, erroRange } =
    useError();
  const { createUser } = useCreate();
  const [hasMore, setHasMore] = useState(true);
  const getData = async (url) => {
    const response = await fetchUsers(url);
    setUsersState((prev) => {
      return {
        ...prev,
        users: response?.data,
        page: response?.page,
        total: response?.total,
      };
    });
  };
  useEffect(() => {
    getData(`${URL}/users?region=${region}`);
    setHasMore(true);
  }, [region]);

  const handleCreate = async () => {
    const payload = { region, seed, errors: errorState };
    try {
      const data = await createUser(`${URL}/users/generate`, payload);
      getData(`${URL}/users?region=${region}`);
    } catch (error) {
      toast.error("Something went wrong! Try again");
    }
  };

  const handleScroll = () => {
    if (usersState.users.length < usersState.total) {
      fetcMoreUsers(
        `${URL}/users?region=${region}&page=${usersState.page + 1}&limit=20`
      );
    } else {
      setHasMore(false);
    }
  };

  return (
    <div classNameName="py-3 w-4/5">
      <div class="flex justify-between py-5 w-4/5">
        <div className="flex items-center">
          <p className="pr-2">Region:</p>
          <Select onChange={handleSelect} options={localeData} />
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <p className="pr-2">Errors:</p>
            <input
              type="range"
              className="mr-1"
              min={0}
              max={10}
              value={erroRange}
              onChange={handleRange}
            />
          </div>
          <input
            type="number"
            value={errorState}
            onChange={handleInput}
            min={0}
            max={1000}
            className="w-16 rounded border"
          />
        </div>
        <div className="flex items-center">
          <div className="flex">
            <p className="mr-2">Seed:</p>
            <input
              type="text"
              value={seed}
              onChange={handleSeed}
              className="w-32 bg-white rounded border mr-1"
            />
          </div>
          <button
            className="ml-2 px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
            onClick={generateSeed}
          >
            <TbHandClick />
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="bg-sky-600 px-4 py-1 text-white rounded hover:bg-sky-700"
            onClick={handleCreate}
          >
            Generate
          </button>
        </div>
      </div>

      <div className="p-3 w-4/5">
        <div>
          <PulseLoader loading={usersState.loading} size={12} />
        </div>
        <Table
          usersList={usersState.users}
          handleScroll={handleScroll}
          hasMore={hasMore}
        />
      </div>
    </div>
  );
};

export default Home;

"use client";
import { useFormik } from "formik";

export default function Search() {
  const formik = useFormik({
    initialValues: {
      searchterm: "",
    },
    onSubmit: function () {},
  });

  return (
    <>
      <div className="grid md:grid-cols-6 md:gap-4">
        <div className="col-start-1 col-span-6 lg:col-start-2 lg:col-span-4">
          <h1 className="text-center font-bold text-lg p-6">
            Search Inventory
          </h1>
        </div>
        <div className="col-start-1 col-span-6 md:col-start-1 md:col-span-6 lg:col-start-2 lg:col-span-4">
          <form>
            <div className="grid md:grid-cols-6 md:gap-1">
              <div className="col-start-1 col-span-4">
                <input
                  type="text"
                  id="searchterm"
                  name="searchterm"
                  placeholder="Enter keyword or phrase to search by..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={formik.handleChange}
                  value={formik.values.searchterm}
                />
                <small>Note: separate each word with a space.</small>
              </div>
              <div className="col-start-5 col-span-1">
                <button
                  type="button"
                  className="bg-secondary-100 hover:bg-secondary-200 text-white font-bold py-2 px-4 rounded"
                >
                  SEARCH
                </button>
              </div>
              <div className="col-start-6 col-span-1">
                <div
                  className="py-2 cursor-pointer"
                  title="Advance Search With Filters"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.8 5a3 3 0 0 0-5.6 0H4a1 1 0 1 0 0 2h1.2a3 3 0 0 0 5.6 0H20a1 1 0 1 0 0-2h-9.2ZM4 11h9.2a3 3 0 0 1 5.6 0H20a1 1 0 1 1 0 2h-1.2a3 3 0 0 1-5.6 0H4a1 1 0 1 1 0-2Zm1.2 6H4a1 1 0 1 0 0 2h1.2a3 3 0 0 0 5.6 0H20a1 1 0 1 0 0-2h-9.2a3 3 0 0 0-5.6 0Z" />
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

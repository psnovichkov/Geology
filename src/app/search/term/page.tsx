"use client";
import {
  Field,
  Formik,
  Form,
  FormikProps,
  useFormikContext,
  useField,
} from "formik";
import SampleCard from "@/components/samplecard/samplecard.component";
import Spinner from "@/components/spinner/spinner.component";
import { useState } from "react";
import samplesMock from "../../../mock/results.json";
import { Sample, API, SearchFulltextParams } from "@/services/api";
import Link from "next/link";

export default function SearchTerm() {
  const [samples, setSamples] = useState<Sample[]>([]);
  const [loading, setLoading] = useState(false);
  const [init, setInit] = useState(false);

  return (
    <div>
      <div className="grid md:grid-cols-6 md:gap-4">
        <div className="mb-4 md:mb-0 md:col-start-3 md:col-span-1 lg:col-start-3 lg:col-span-1">
          <div className="text-end">
            <Link href="/search/filters">
              <button className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white fill-current transition ease-out duration-500">
                <div className="">
                  <span className="">Filter Search</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="md:col-start-4 md:col-span-1 lg:col-start-4 lg:col-span-1">
          <div className="text-start">
            <Link href="/search/map">
              <button className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white fill-current transition ease-out duration-500">
                <div className="">
                  <span className="">Map Search</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-start-1 col-span-6 lg:col-start-2 lg:col-span-4">
          <h1 className="text-center font-bold text-lg px-6 pt-4 pb-6">
            Search Inventory
          </h1>
        </div>
        <div className="col-start-1 col-span-6 md:col-start-1 md:col-span-6 lg:col-start-2 lg:col-span-4">
          <Formik
            initialValues={{
              searchterm: "",
            }}
            onSubmit={async (values, actions) => {
              console.log(values);
              actions.setSubmitting(true);
              setLoading(true);
              if (!init) {
                setInit(true);
              }
              API.searchByText(values)
                .then((result) => {
                  setSamples(result);
                  actions.setSubmitting(false);
                  setLoading(false);
                })
                .catch(() => {
                  actions.setSubmitting(false);
                  setLoading(false);
                });
              // setTimeout(() => {
              //   setSamples(samplesMock);
              //   actions.setSubmitting(false);
              // }, 100);
            }}
          >
            {(props: FormikProps<SearchFulltextParams>) => (
              <Form>
                <div className="grid md:grid-cols-6 md:gap-1">
                  <div className="col-start-1 col-span-5">
                    <Field
                      type="text"
                      id="searchterm"
                      name="searchterm"
                      placeholder="Enter keyword or phrase to search by..."
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <small>Note: separate each word with a space.</small>
                  </div>
                  <div className="col-start-6 col-span-1">
                    <button
                      type="submit"
                      className="w-full bg-secondary-100 hover:bg-secondary-200 text-white font-bold py-2 px-4 md:rounded"
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <div className="grid">
            {init && (
              <div className="col-start-1 col-span-12">
                <div className="m-6 text-center">Search Results</div>
              </div>
            )}
            {loading && (
              <div className="col-start-7">
                <Spinner />
              </div>
            )}
            {!loading && (
              <div className="col-start-1 col-span-12">
                {samples.length > 0 &&
                  samples.map((sample) => (
                    <Link key={sample.id} href={`/search/term/${sample.id}`}>
                      <SampleCard {...sample} />
                    </Link>
                  ))}
              </div>
            )}
            {!loading && samples.length === 0 && init && (
              <div className="col-start-7">No Results Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

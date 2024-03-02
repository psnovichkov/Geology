"use client";
import { Field, Formik, Form, FormikProps } from "formik";
import React, { useState } from "react";
import MyGoogleMap from "@/components/googleMap/googleMap.component";
import { API, Sample, SearchLocationParams } from "@/services/api";
import SampleCard from "@/components/samplecard/samplecard.component";
import Link from "next/link";

export default function SearchMap() {
  const [samples, setSamples] = useState<Sample[]>([]);
  return (
    <div>
      <div className="grid md:grid-cols-4 md:gap-4 pb-4">
        <div className="mb-4 md:mb-0 md:col-start-2 md:col-span-1 lg:col-start-2 lg:col-span-1">
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
        <div className="md:col-start-3 md:col-span-1 lg:col-start-3 lg:col-span-1">
          <div className="text-start">
            <Link href="/search/term">
              <button className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white fill-current transition ease-out duration-500">
                <div className="">
                  <span className="">Text Search</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center mb-6 font-semibold text-2xl">Map Search</h2>
      </div>
      <p className="text-center text-sm mb-2">
        Please use map rectangular control to select the area to search and
        click SEARCH button
      </p>

      <Formik
        initialValues={{}}
        onSubmit={async (values, actions) => {
          console.log("=============== form values", values);
          actions.setSubmitting(true);
          API.searchByLocation(values).then(() => {
            actions.setSubmitting(false);
          });
          // setTimeout(() => {
          //   actions.setSubmitting(false);
          // }, 100);
        }}
      >
        {(props: FormikProps<SearchLocationParams>) => (
          <Form>
            <fieldset className="border border-black p-4">
              <legend className="float-none w-auto p-2  text-xl">
                Sample Collection Location
              </legend>
              <MyGoogleMap mode="search" />
            </fieldset>
            <div className="text-center mt-2">
              <button
                type="submit"
                className="bg-secondary-100 hover:bg-secondary-200 text-white font-bold py-2 px-4 rounded"
              >
                SUBMIT
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="grid">
        <div className="col-start-1 col-span-12">
          <div className="m-6 text-center">Search Results</div>
        </div>
        <div className="col-start-1 col-span-12">
          {samples.map((sample) => (
            <div key={sample.sampleId} className="mb-5">
              <SampleCard {...sample} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

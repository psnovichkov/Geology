"use client";
import { Field, Formik, Form, FormikProps } from "formik";
import React, { useState } from "react";
import MyGoogleMap from "@/components/googleMap/googleMap.component";
import { API, Sample, SearchLocationParams } from "@/services/api";
import SampleCard from "@/components/samplecard/samplecard.component";

export default function SearchMap() {
  const [samples, setSamples] = useState<Sample[]>([]);
  return (
    <div>
      <div>
        <h2 className="text-center mb-6 font-semibold text-2xl">
          Search Sample
        </h2>
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

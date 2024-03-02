"use client";
import { Field, Formik, Form, FormikProps } from "formik";
import React, { useState } from "react";
import MyGoogleMap from "@/components/googleMap/googleMap.component";
import Spinner from "@/components/spinner/spinner.component";
import { API, Sample, SearchLocationParams } from "@/services/api";
import SampleCard from "@/components/samplecard/samplecard.component";
import Link from "next/link";

export default function SearchMap() {
  const [samples, setSamples] = useState<Sample[]>([]);
  const [loading, setLoading] = useState(false);
  const [init, setInit] = useState(false);
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
          setLoading(true);
          if (!init) {
            setInit(true);
          }
          API.searchByLocation(values)
            .then((response) => {
              setSamples(response);
              actions.setSubmitting(false);
              setLoading(false);
            })
            .catch(() => {
              actions.setSubmitting(false);
              setLoading(false);
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
                disabled={props.isSubmitting}
              >
                SEARCH
              </button>
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
                <Link key={sample.id} href={`/search/map/${sample.id}`}>
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
  );
}

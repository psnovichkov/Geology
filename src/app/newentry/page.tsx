"use client";
import { Field, Formik, Form, FormikProps } from "formik";
import React from "react";
import MyGoogleMap from "@/components/googleMap/googleMap.component";
import { API, Sample } from "@/services/api";

export default function NewEntry() {
  return (
    <div>
      <div>
        <h2 className="text-center mb-6 font-semibold text-2xl">
          New Sample Form
        </h2>
      </div>
      <p className="text-center text-sm mb-2">
        Please fill out the form to the best of your ability. The fields marked
        with an asterisk (*) are required to be completed.
      </p>

      <Formik
        initialValues={{
          category: "",
          sampleId: "",
          collectorName: "",
          advisorName: "",
          collectionYear: 2024,
          collectionReason: [],
          collectionReasonOther: "",
          collectionLocation: [],
          shortDescription: "",
          longDescription: "",
          sampleForm: [],
          sampleFormOther: "",
          sampleType: [],
          sampleTypeOther: "",
          sampleImg: "",
          storageBuilding: "",
          storageRoom: "",
          storageDetails: "",
          storageDuration: 10,
        }}
        onSubmit={async (values, actions) => {
          console.log("=============== form values", values);
          actions.setSubmitting(true);
          API.addSample(values).then(() => {
            actions.setSubmitting(false);
          });
          // setTimeout(() => {
          //   actions.setSubmitting(false);
          // }, 100);
        }}
      >
        {(props: FormikProps<Sample>) => (
          <Form>
            <fieldset className="border border-black p-4">
              <fieldset className="border border-black p-4">
                <legend className="float-none w-auto text-xl">
                  Sample Identification
                </legend>
                <div>
                  <label className="mb-1 block">
                    Is the sample entry for one or multiple bulk samples? *
                  </label>
                </div>
                <div>
                  <small className="font-thin text-sm block text-muted">
                    Please select one from the following.
                  </small>
                </div>

                <div>
                  <label htmlFor="category">
                    <Field
                      className="mb-2 mr-2"
                      type="radio"
                      name="category"
                      value="singleSpecimen"
                    />
                    Single Specimen
                  </label>
                </div>
                <div className="mb-2">
                  <label htmlFor="category">
                    <Field
                      className="mb-2 mr-2"
                      type="radio"
                      name="category"
                      value="Collection"
                    />
                    Collection
                  </label>
                </div>

                {/* <hr className="h-px my-2" /> */}
                <div>
                  <label className="block" htmlFor="sampleId">
                    Sample ID
                  </label>
                </div>
                <div>
                  <Field
                    className="inline-input"
                    type="text"
                    name="sampleId"
                    placeholder="enter sample id..."
                  />
                </div>
                <div className="">
                  <small className="font-thin text-sm block text-muted">
                    Sample ID may contain letters, numbers, and valid special
                    characters./,:-#_
                  </small>
                </div>
              </fieldset>
              <fieldset className="border border-black p-4">
                <legend className="float-none w-auto p-2  text-xl">
                  Collector Info
                </legend>
                <div className="mb-3">
                  <label className="inline-block" htmlFor="collectorName">
                    Collector Name
                  </label>
                  <Field
                    className="inline-input"
                    type="text"
                    name="collectorName"
                    placeholder="Enter full name here..."
                  />
                  <small className="font-thin text-sm block text-muted">
                    Enter full name as first and last name. ex. John Doe
                  </small>
                </div>
                <div className="mb-3">
                  <label className="inline-block" htmlFor="advisorName">
                    Advisor
                  </label>
                  <Field
                    name="advisorName"
                    as="select"
                    className="inline-input"
                  >
                    <option value="Dave">Dave</option>
                    <option value="Ben">Ben</option>
                    <option value="Other">Other</option>
                  </Field>
                  <small className="font-thin text-sm block text-muted">
                    From the dropdown, select an Advisor.
                  </small>
                </div>
                <div className="mb-3">
                  <label className="inline-block" htmlFor="collectionYear">
                    Year Collected
                  </label>
                  <Field
                    className="inline-input"
                    type="text"
                    name="collectionYear"
                    placeholder="enter the year this sample was collected"
                  />
                  <small className="font-thin text-sm block text-muted">
                    Enter the year of when this sample was collected.
                  </small>
                </div>
                <div className="mb-3">
                  <div>
                    <label className="mb-1 block">
                      Purpose of Sample Collection
                    </label>
                  </div>
                  <div>
                    <small className="font-thin text-sm block text-muted">
                      Select all that apply.
                    </small>
                  </div>
                  <div>
                    <label
                      className="inline-block mr-2"
                      htmlFor="collectionReason"
                    >
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="collectionReason"
                        value="teaching"
                      />
                      Teaching
                    </label>
                    <label
                      className="inline-block mr-2"
                      htmlFor="collectionReason"
                    >
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="collectionReason"
                        value="research"
                      />
                      Research
                    </label>
                    <label
                      className="inline-block mr-2"
                      htmlFor="collectionReason"
                    >
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="collectionReason"
                        value="other"
                      />
                      Other
                    </label>
                    {props.values.collectionReason &&
                      props.values.collectionReason.find(
                        (reason) => reason == "other"
                      ) === "other" && (
                        <Field
                          className="inline-input"
                          type="text"
                          name="collectionReasonOther"
                        />
                      )}
                  </div>
                </div>
              </fieldset>
              <fieldset className="border border-black p-4">
                <legend className="float-none w-auto p-2  text-xl">
                  Sample Collection Location
                </legend>

                <MyGoogleMap />
              </fieldset>
              <fieldset className="border border-black p-4">
                <legend className="float-none w-auto p-2  text-xl">
                  Sample Specs
                </legend>
                <div className="mb-3">
                  <label className="inline-block" htmlFor="shortDescription">
                    Short Description
                  </label>
                  <Field
                    className="inline-input"
                    type="text"
                    name="shortDescription"
                    placeholder="Enter geologic name of sample here.."
                  />
                  <small className="font-thin text-sm block text-muted">
                    Enter a specific geologic name or a reference to the sample.
                    ex. quartz.
                  </small>
                </div>

                <div className="mb-3">
                  <div>
                    <label className="mb-1 block">Sample Form</label>
                  </div>
                  <div>
                    <small className="font-thin text-sm block text-muted">
                      Select all that apply.
                    </small>
                  </div>
                  <div>
                    <label className="inline-block mr-2" htmlFor="sampleForm">
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="sampleForm"
                        value="handSample"
                      />
                      Hand Sample
                    </label>
                    <label className="inline-block mr-2" htmlFor="sampleForm">
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="sampleForm"
                        value="mineralSeparate"
                      />
                      Mineral Separate
                    </label>
                    <label className="inline-block mr-2" htmlFor="sampleForm">
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="sampleForm"
                        value="thinSection"
                      />
                      Thin Section
                    </label>
                    <label className="inline-block mr-2" htmlFor="sampleForm">
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="sampleForm"
                        value="other"
                      />
                      Other
                    </label>
                    {props.values.sampleForm &&
                      props.values.sampleForm.find(
                        (reason) => reason == "other"
                      ) === "other" && (
                        <Field
                          className="inline-input"
                          type="text"
                          name="sampleFormOther"
                        />
                      )}
                  </div>
                </div>

                <div className="mb-3">
                  <div>
                    <label className="mb-1 block">Sample Type</label>
                  </div>
                  <div>
                    <small className="font-thin text-sm block text-muted">
                      Select all that apply.
                    </small>
                  </div>
                  <div>
                    <label className="inline-block mr-2" htmlFor="sampleType">
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="sampleType"
                        value="rock"
                      />
                      Rock
                    </label>
                    <label className="inline-block mr-2" htmlFor="sampleForm">
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="sampleType"
                        value="mineral"
                      />
                      Mineral
                    </label>
                    <label className="inline-block mr-2" htmlFor="sampleForm">
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="sampleType"
                        value="fossil"
                      />
                      Fossil
                    </label>
                    <label className="inline-block mr-2" htmlFor="sampleForm">
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="sampleType"
                        value="soil"
                      />
                      Soil
                    </label>
                    <label className="inline-block mr-2" htmlFor="sampleForm">
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="sampleType"
                        value="water"
                      />
                      Water
                    </label>
                    <label className="inline-block mr-2" htmlFor="sampleForm">
                      <Field
                        className="mb-2 mr-2"
                        type="checkbox"
                        name="sampleType"
                        value="other"
                      />
                      Other
                    </label>
                    {props.values.sampleType &&
                      props.values.sampleType.find(
                        (reason) => reason == "other"
                      ) === "other" && (
                        <Field
                          className="inline-input"
                          type="text"
                          name="sampleTypeOther"
                        />
                      )}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="sampleImg">Sample Image</label>
                  <Field type="file" name="sampleImg" />
                </div>
                <div className="mb-3">
                  <label className="inline-block" htmlFor="longDescription">
                    Detailed Description
                  </label>
                  <Field
                    className="inline-input"
                    type="textarea"
                    name="longDescription"
                    placeholder="Describe the geologic details here..."
                  />
                </div>
              </fieldset>

              <fieldset className="border border-black p-4">
                <legend className="float-none w-auto p-2  text-xl">
                  Storage Details
                </legend>
                <div className="mb-3">
                  <label className="inline-block" htmlFor="storageBuilding">
                    Storage Building
                  </label>
                  <Field
                    name="storageBuilding"
                    as="select"
                    className="inline-input"
                  >
                    <option value="PS">PS (Physical Science)</option>
                    <option value="CH">CH (Colonial Hall)</option>
                    <option value="Other">Other</option>
                  </Field>
                  <small className="font-thin text-sm block text-muted">
                    From the dropdown, select which building this sample will be
                    stored in.
                  </small>
                </div>
                <div className="mb-3">
                  <label className="inline-block" htmlFor="storageRoom">
                    Storage Room
                  </label>
                  <Field
                    name="storageRoom"
                    as="select"
                    className="inline-input"
                  >
                    <option value="1">Room #1</option>
                    <option value="2">Room #2</option>
                    <option value="3">Room #3</option>
                  </Field>
                  <small className="font-thin text-sm block text-muted">
                    From the dropdown, select which room this sample will be
                    stored in.
                  </small>
                </div>

                <div className="mb-3">
                  <label className="inline-block" htmlFor="storageDetails">
                    Additional Storage Details
                  </label>
                  <Field
                    className="inline-input"
                    type="textarea"
                    name="storageDetails"
                    placeholder="Enter any additional storage details here"
                  />
                </div>

                <div className="mb-3">
                  <label className="inline-block" htmlFor="storageDuration">
                    Storage Duration in years
                  </label>
                  <Field
                    className="inline-input"
                    type="text"
                    name="storageDuration"
                    placeholder="Enter number of years this sample should be stored in dataase for."
                  />
                </div>
              </fieldset>
              <div className="text-center mt-2">
                <button
                  type="submit"
                  className="bg-secondary-100 hover:bg-secondary-200 text-white font-bold py-2 px-4 rounded"
                >
                  SUBMIT
                </button>
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
    </div>
  );
}

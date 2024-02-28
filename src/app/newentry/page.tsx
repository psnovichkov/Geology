"use client";
import {
  Field,
  Formik,
  Form,
  FormikProps,
  useFormikContext,
  useField,
} from "formik";
import axios from "axios";
import React from "react";
import Map from "@/components/map/map.component";
import MyGoogleMap from "@/components/googleMap/googleMap.component";

interface InitialValues {
  category: string;
  sampleId: string;
  collectorName: string;
  advisorName: string;
  collectionYear: number;
  collectionReason: [];
  collectionReasonOther: string;
  collectionLocation: [];
  shortDescription: string;
  longDescription: string;
  sampleForm: [];
  sampleFormOther: string;
  sampleType: [];
  sampleTypeOther: string;
  sampleImg: string;
  storageBuilding: string;
  storageRoom: string;
  storageDetails: string;
  storageDuration: number;
}

// const MyField = (props: { name: string }) => {
//   const {
//     values: { collectionReason },
//     touched,
//     setFieldValue,
//   } = useFormikContext<InitialValues>();
//   const [field, meta] = useField(props);

//   React.useEffect(() => {
//     let hasOther = false;
//     collectionReason.map((reason) => {
//       if (reason === "other") {
//         hasOther = true;
//       }
//     });
//   }, [collectionReason, touched.collectionReason, setFieldValue, props.name]);

//   return (
//     <>
//       <input {...props} {...field} />
//       {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
//     </>
//   );
// };

export default function NewEntry() {
  return (
    <div>
      <div>
        <h2></h2>
      </div>
      <p></p>

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
          console.log(values);
          actions.setSubmitting(true);
          const result = await axios
            .post(`http://localhost:5000/samples`, values)
            .then(() => {
              actions.setSubmitting(false);
            });
        }}
      >
        {(props: FormikProps<InitialValues>) => (
          <Form>
            <fieldset>
              <fieldset>
                <legend>Sample Identification</legend>

                <div>
                  <label htmlFor="category">
                    Single Specimen
                    <Field
                      type="radio"
                      name="category"
                      value="Single Specimen"
                    />
                  </label>
                  <label htmlFor="category">
                    Collection
                    <Field type="radio" name="category" value="Collection" />
                  </label>
                </div>
                <hr />
                <label htmlFor="sampleId">Sample ID</label>
                <Field
                  type="text"
                  name="sampleId"
                  placeholder="enter sample id..."
                />
              </fieldset>
              <fieldset>
                <legend>Collector Info</legend>
                <label htmlFor="collectorName">Collector Name</label>
                <Field
                  type="text"
                  name="collectorName"
                  placeholder="enter name of collector..."
                />
                <label htmlFor="advisorName">Advisor</label>
                <Field name="advisorName" as="select">
                  <option value="Dave">Dave</option>
                  <option value="Ben">Ben</option>
                  <option value="Other">Other</option>
                </Field>
                <label htmlFor="collectionYear">Year Collected</label>
                <Field
                  type="text"
                  name="collectionYear"
                  placeholder="enter the year this sample was collected"
                />
                <div>
                  <label htmlFor="collectionReason">
                    Purpose of Sample Collection
                  </label>
                  <label htmlFor="collectionReason">
                    Teaching
                    <Field
                      type="checkbox"
                      name="collectionReason"
                      value="Teaching"
                    />
                  </label>
                  <label htmlFor="collectionReason">
                    Research
                    <Field
                      type="checkbox"
                      name="collectionReason"
                      value="Research"
                    />
                  </label>
                  <label htmlFor="collectionReason">
                    Other
                    <Field
                      type="checkbox"
                      name="collectionReason"
                      value="other"
                    />
                  </label>
                  {props.values.collectionReason.find(
                    (reason) => reason == "other"
                  ) === "other" && (
                    <Field
                      className="form-control"
                      type="text"
                      name="collectionReasonOther"
                    />
                  )}
                </div>
                <fieldset>
                  <legend>Sample Collection Location</legend>
                  <label htmlFor="collectionLocation">
                    Location Coordinates
                  </label>

                  <MyGoogleMap />
                  <Field type="text" name="collectionLocation"></Field>
                </fieldset>
              </fieldset>
              <label htmlFor="shortDescription">Short Description</label>
              <Field
                type="text"
                name="shortDescription"
                placeholder="enter the geologic name of the sample here"
              />
              <div>
                <label htmlFor="sampleForm">Sample Form</label>
                <label htmlFor="sampleForm">
                  Hand Sample
                  <Field type="checkbox" name="sampleForm" value="handSample" />
                </label>
                <label htmlFor="sampleForm">
                  Mineral Separate
                  <Field
                    type="checkbox"
                    name="sampleForm"
                    value="mineralSeparate"
                  />
                </label>
                <label htmlFor="sampleForm">
                  Thin Section
                  <Field
                    type="checkbox"
                    name="sampleForm"
                    value="thinSection"
                  />
                </label>
                Other
                <label htmlFor="sampleForm">
                  <Field type="checkbox" name="sampleForm" value="other" />
                </label>
                {props.values.sampleForm.find((sample) => sample == "other") ===
                  "other" && (
                  <Field
                    className="form-control"
                    type="text"
                    name="sampleFormOther"
                  />
                )}
              </div>
              <div>
                <label htmlFor="sampleType">Sample Type</label>
                <label htmlFor="sampleType">
                  Rock
                  <Field type="checkbox" name="sampleType" value="rock" />
                </label>
                <label htmlFor="sampleType">
                  Mineral
                  <Field type="checkbox" name="sampleType" value="mineral" />
                </label>
                <label htmlFor="sampleType">
                  Fossil
                  <Field type="checkbox" name="sampleType" value="fossil" />
                </label>
                <label htmlFor="sampleType">
                  Soil
                  <Field type="checkbox" name="sampleType" value="soil" />
                </label>
                <label htmlFor="sampleType">
                  Water
                  <Field type="checkbox" name="sampleType" value="water" />
                </label>
                <label htmlFor="sampleType">
                  Other
                  <Field type="checkbox" name="sampleType" value="other" />
                </label>
                {props.values.sampleType.find((type) => type == "other") ===
                  "other" && (
                  <Field
                    className="form-control"
                    type="text"
                    name="sampleTypeOther"
                  />
                )}
              </div>
              <label htmlFor="sampleImg">Sample Image</label>
              <Field type="file" name="sampleImg" />
              <label htmlFor="longDescription">Detailed Description</label>
              <Field
                type="textarea"
                name="longDescription"
                placeholder="Describe the geologic details here..."
              />
              <fieldset>
                <legend>Storage Details</legend>
                <label htmlFor="storageBuilding">Storage Building</label>
                <Field name="storageBuilding" as="select">
                  <option value="PS">PS</option>
                  <option value="CH">CH</option>
                  <option value="Other">Other</option>
                </Field>
                <label htmlFor="storageRoom">Storage Room</label>
                <Field name="storageRoom" as="select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Field>
                <label htmlFor="storageDetails">
                  Additional Storage Details
                </label>
                <Field
                  type="textarea"
                  name="storageDetails"
                  placeholder="enter any additional storage details here"
                />
                <label htmlFor="storageDuration">
                  Storage Duration in years
                  <Field
                    type="text"
                    name="storageDuration"
                    placeholder="enter number of years this sample should be stored in dataase for."
                  />
                </label>
              </fieldset>

              <button type="submit">SUBMIT</button>
            </fieldset>
          </Form>
        )}
      </Formik>
    </div>
  );
}
